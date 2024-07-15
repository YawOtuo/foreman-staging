import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAppStore } from "../store/useAppStore";
import { useToast } from "@/components/ui/use-toast";
import { FetchOrCreateResponse, fetchOrCreateUserByUid } from "../api/users";
import useEmail from "./useEmail";
import { fromEmail, templateIds } from "../utils/emailTemplateIds";
import { User } from "../types/user";

export default function useAuthState(auth: any) {
  const { toast } = useToast();
  const { setDBDetails, setFBaseDetails, error, setError, setIsLoading } =
    useAppStore();
  const { sendEmail } = useEmail();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (userAuth: any) => {
        console.log("userAuth", userAuth.providerData?.[0]?.email);
        try {
          if (userAuth) {
            // Set Firebase details
            setFBaseDetails(userAuth);

            // Fetch or create user by UID
            const userData: FetchOrCreateResponse =
              await fetchOrCreateUserByUid({
                username: userAuth?.displayName || "User",
                email: userAuth?.email || userAuth?.providerData?.[0]?.email,
                uid: userAuth?.uid,
              });

            if (userData?.message == "User already exists") {
              sendEmail({
                to: userAuth?.email,
                from: fromEmail,
                templateId: templateIds["signup"],
                templateData: {
                  username: userAuth?.displayName || "User",
                },
              });
              console.log("emailing...");
            }
            console.log("not emailing...");
            setDBDetails(userData?.user);
          }
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      },
      (error: any) => {
        setError(error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [auth, setFBaseDetails, setDBDetails]);

  // Display authentication error toast
  useEffect(() => {
    if (error) {
      toast({
        title: "Authentication Error",
        description: error.message,
        variant: "destructive",
        duration: 5000,
        // isClosable: true,
      });
    }
  }, [error, toast]);
}

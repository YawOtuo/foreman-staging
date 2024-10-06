import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAppStore } from "../store/useAppStore";
import { useToast } from "@/components/ui/use-toast";
import { FetchOrCreateResponse, fetchOrCreateUserByUid } from "../api/users";
import useEmail from "./useEmail";
import {
  fromEmail,
  generalEmailRecipients,
  templateIds,
} from "../utils/emailTemplateIds";
import { User } from "../types/user";
import useSignUpStore from "@/app/(app)/(auth)/signup/useSignUpStore";

export default function useAuthState(auth: any) {
  const { toast } = useToast();
  const { setDBDetails, setFBaseDetails, error, setError, setIsLoading } =
    useAppStore();
  const { sendEmail } = useEmail();
  // const { username } = useSignUpStore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (userAuth: any) => {
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

            if (userData?.message == "User created successfully") {
              sendEmail({
                to: [
                  ...(generalEmailRecipients["signup"] || []),
                  userAuth?.email,
                ],
                from: fromEmail,
                templateId: templateIds["signup"],
                templateData: {
                  username: userAuth?.displayName || "User",
                },
              });
              // console.log("emailing...");
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

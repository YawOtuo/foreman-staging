"use client";
import { useEffect } from "react";
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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useAuthState(auth: any) {
  const { toast } = useToast();
  const { setDBDetails, setFBaseDetails, error, setError, setIsLoading } =
    useAppStore();
  const { sendEmail } = useEmail();
  const pathname = usePathname(); // Get the current path
  const router = useRouter();
  const params = useSearchParams();
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

            // Send email only if the user is newly created
            if (userData?.message === "User created successfully") {
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
            }

            setDBDetails(userData?.user);

            // Only redirect once when logged in
            if ((pathname === "/login" || pathname === "/signup") && !params.has("redirect-url")) {
              router.push("/dashboard");
            }
          } else {
            // If user is not authenticated, redirect to login from any protected page
            if (pathname.startsWith("/dashboard")) {
              router.push("/login");
            }
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
  }, [auth, setFBaseDetails, setDBDetails, pathname, router, params]);

  // Display authentication error toast
  useEffect(() => {
    if (error) {
      toast({
        title: "Authentication Error",
        description: error.message,
        variant: "destructive",
        duration: 5000,
      });
    }
  }, [error, toast]);
}

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAppStore } from "../store/useAppStore";
import { useToast } from "@/components/ui/use-toast";
import { fetchOrCreateUserByUid } from "../api/users";

export default function useAuthState(auth: any) {
  const { toast } = useToast();
  const { setDBDetails, setFBaseDetails, error, setError, setIsLoading } =
    useAppStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (userAuth: any) => {
        console.log('userAuth', userAuth.providerData?.[0]?.email)
        try {
          if (userAuth) {
            // Set Firebase details
            setFBaseDetails(userAuth);

            // Fetch or create user by UID
            const userData :any = await fetchOrCreateUserByUid({
              username: userAuth?.displayName || "User",
              email: userAuth?.email || userAuth?.providerData?.[0]?.email,
              uid: userAuth?.uid,
            });

            // Set database details
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
        variant: "error",
        duration: 5000,
        // isClosable: true,
      });
    }
  }, [error, toast]);

}

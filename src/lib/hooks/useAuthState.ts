import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


export default function useAuthState() {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            setData({ user });
            setIsLoading(false);
        }, (error: any) => {
            setError(error);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    return { data, error, isLoading };
}
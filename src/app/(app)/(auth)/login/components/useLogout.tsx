import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store/useAppStore";
function useLogout() {
  const { DBDetails, FBaseDetails, setDBDetails, setFBaseDetails } =
    useAppStore();
  const router = useRouter();

  const logout = () => {
    signOut(auth);
    router.push("/login");
    setDBDetails(null);
    setFBaseDetails({});
  };

  return { logout };
}

export default useLogout;

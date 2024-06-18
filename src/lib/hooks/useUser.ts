// import { useToast } from "@/components/ui/use-toast";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { AddUser, fetchOrCreateUserByUid } from "../api/users";
// import useAuthState from "./useAuthState";
// import { auth } from "@/app/firebase";
// import { User } from "../types/user";
// import { useEffect } from "react";
// import { useAppStore } from "../store/useAppStore";

// // interface AddUserAgs {
// //   email: string;
// //   username: string;
// //   uid: string;
// // }

// function useUser() {
//   const { toast } = useToast();
//   const queryClient = useQueryClient();
//   const { setDBDetails, setFBaseDetails } = useAppStore();

//   // const {
//   //   data: authData,
//   //   error: authError,
//   //   isLoading: authLoading,
//   // } = useAuthState(auth);

//   // const {
//   //   data: user,
//   //   isLoading: userLoading,
//   //   error: userError,
//   // } = useQuery<User>({
//   //   queryKey: ["user", authData?.user?.uid],
//   //   queryFn: () =>
//   //     fetchOrCreateUserByUid({
//   //       username: authData?.user?.displayName,
//   //       email: authData?.user?.email,
//   //       uid: authData?.user,
//   //     }),
//   //   enabled: !!authData?.user?.uid,
//   // });

//   // useEffect(() => {
//   //   if (authData) {
//   //     setFBaseDetails(authData);
//   //   }
//   // }, [authData, setFBaseDetails]);
  
//   // useEffect(() => {
//   //   if (user) {
//   //     setDBDetails(user);
//   //   }
//   // }, [user, setDBDetails]);
  


//   if (userError) {
//     toast({
//       title: "User Fetch Error",
//       description: userError.message,
//       variant: "error",
//       duration: 5000,
//       // isClosable: true,
//     });
//   }

//   return {
//     user,
//     userLoading: authLoading || userLoading,
//     userError: authError || userError,
//   };
// }

// export default useUser;

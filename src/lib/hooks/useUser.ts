import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api/users";
import { User } from "../types/user";
import { useAppStore } from "../store/useAppStore";

function useUser() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const updateUserMutation = useMutation({
    mutationFn: (userData: Partial<User>) =>
      updateUser(userData, Number(userData.id)),
    onMutate: () => {
      toast({
        title: "Loading...",
        description: "Updating user...",
        variant: "loading",
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "User updated successfully",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleUpdateUser = async (userData: Partial<User>) => {
    try {
      await updateUserMutation.mutateAsync(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleUpdateUser,
  };
}

export default useUser;

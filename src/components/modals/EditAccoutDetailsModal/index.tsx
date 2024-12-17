import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/ui/CustomDialog";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import useDisclosure from "@/lib/hooks/useDisclosure";
import useUser from "@/lib/hooks/useUser";
import { User } from "@/lib/types/user";
import { useAppStore } from "@/lib/store/useAppStore";

interface EditAccountDetailsModalProps {
  user: User;
}

function EditAccountDetailsModal({ user }: EditAccountDetailsModalProps) {
  const { open, setOpen } = useDisclosure();
  const { handleUpdateUser } = useUser();
  const { register, handleSubmit, reset } = useForm<{ username: string }>({
    defaultValues: {
      username: user.username,
    },
  });
  const { setDBDetails } = useAppStore();

  useEffect(() => {
    reset({ username: user.username });
  }, [user.username, reset]);

  const onSubmit = async (data: { username: string }) => {
    console.log(data);

    await handleUpdateUser({
      username: data.username,
      id: user.id,
      email: user.email,
      //   uid: user.uid,
      //   cart_id: user.cart_id,
    });
    setDBDetails({
      email: user.email,
      username: data.username,
      id: user.id,
      uid: user.uid,
      cart_id: user.cart_id,
    });
    // Handle form submission her
    setOpen(false);
  };

  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button variant={"outline"}>Edit Account Details</Button>}
      body={
        <div className="space-y-4 p-5">
          <h2 className="text-lg font-semibold">Edit Account Details</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1">
                Username
              </label>
              <Input
                id="username"
                {...register("username")}
                placeholder="Enter username"
              />
            </div>
            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </form>
        </div>
      }
      size={"3xl"}
    />
  );
}

export default EditAccountDetailsModal;

"use client";

import ImageUploader from "@/components";
import EditAccountDetailsModal from "@/components/modals/EditAccoutDetailsModal";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useUser from "@/lib/hooks/useUser";
import { useAppStore } from "@/lib/store/useAppStore";
import { PencilIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const { DBDetails, FBaseDetails, setDBDetails } = useAppStore();
  const [isUploading, setIsUploading] = useState(false);
  const { handleUpdateUser } = useUser();

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true);

      // Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "foreman"); // Replace with your Cloudinary upload preset

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/dajli9sqa/image/upload`, // Replace with your cloud name
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();

      // Upload to your backend
      // const response = await fetch('/api/user/update-avatar', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     userId: DBDetails?.id,
      //     imageUrl: cloudinaryData.secure_url,
      //   }),
      // });

      const response = await handleUpdateUser({
        id: DBDetails?.id,
        email: DBDetails?.email,
        username: DBDetails?.username,
        image_url: cloudinaryData.secure_url,
      });

      setDBDetails({
        ...DBDetails,
        image_url: cloudinaryData.secure_url,
        id: Number(DBDetails?.id),
        username: String(DBDetails?.username),
        email: String(DBDetails?.email),
        uid: String(DBDetails?.uid),
        cart_id: Number(DBDetails?.cart_id),
      });

      // if (!response.ok) throw new Error('Failed to update profile image');

      toast({
        title: "Profile image updated successfully",
        variant: "success",
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-start p-5 w-full">
      <h4 className="text-2xl font-semibold border-b-[1px] w-full">
        My Account
      </h4>
      <div className="  aspect-square max-w-[250px] rounded-md overflow-hidden">
        {DBDetails?.image_url || FBaseDetails?.photoURL ? (
          <div className="relative aspect-square max-w-[250px] rounded-md overflow-hidden">
            <Image
              style={{ objectFit: "cover", objectPosition: "center" }}
              src={DBDetails?.image_url || FBaseDetails?.photoURL}
              alt="Profile"
              width={250}
              height={250}
            />

            <div className="absolute bottom-3 right-3 z-[100]">
              <ImageUploader
                handleFileUpload={handleFileUpload}
                variant="small"
                asIcon
                icon={<PencilIcon size={16} />}
                // isLoading={isUploading}
              />
            </div>
          </div>
        ) : (
          <ImageUploader
            handleFileUpload={handleFileUpload}
            variant="small"
            // isLoading={isUploading}
          />
        )}
      </div>{" "}
      <div className="flex flex-col gap-1 items-start">
        <div className="flex gap-1 items-start">
          <p>Username: </p>
          <p>{DBDetails?.username}</p>
        </div>
        <div className="flex gap-1 items-start">
          <p>Email: </p>
          <p>{DBDetails?.email}</p>
        </div>
      </div>
      <div>{DBDetails && <EditAccountDetailsModal user={DBDetails} />}</div>
      <div>
        <Link href="/forgot-password">
          <Button variant={"link"}>Reset Password </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;

// ImageUploader.tsx
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect } from "react";
import Dropzone, { DropEvent, FileRejection } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "./ui/use-toast";

interface Props {
  variant?: "small" | "full";
  handleFileUpload: (file: File) => void;
  asIcon?: boolean;
  multiple?: boolean;
  icon?: React.ReactNode;
}
const ImageUploader = ({
  variant = "full",
  multiple = true,
  handleFileUpload,
  asIcon,
  icon,
}: Props) => {
  const onDropRejected = useCallback(
    (fileRejections: FileRejection[], event: DropEvent) => {
      fileRejections.forEach((file) => {
        const { file: fileObj, errors } = file;
        toast({
          variant: "destructive",
          title: `${errors[0].code.replaceAll("-", " ")} - ${fileObj.name} | ${
            errors[0].code === "file-too-large"
              ? "Maximum file size is 5MB"
              : errors[0].code === "file-too-small"
              ? "Minimum file size is 200KB"
              : null
          }`,
        });
      });
    },
    []
  );

  const onDrop = async (acceptedFiles: File[]) => {
    for (const file of acceptedFiles) {
      try {
        await handleFileUpload(file);

      } catch (error) {
        // console.error("Error uploading file:", error);
        toast({
          variant: "destructive",
          title: "Upload Failed",
          description: "There was an error uploading your file.",
        });
      }
    }
  };

  // useEffect(() => {
  //   return () => {
  //     files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  //   };
  // }, [files]);

  return (
    <Dropzone
    
      // minSize={204800} // 200kb
      maxSize={5242880} // 5 mb
      onDrop={onDrop}
      onDropRejected={onDropRejected}
      multiple={multiple}
      accept={{
        "image/jpeg": [],
        "image/jpg": [],
        "image/png": [],
        "image/webp": [],
      }}
      noDragEventsBubbling>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className="h-full ">
          <input {...getInputProps()} />
          {!asIcon ? (
            <div
              className={cn(
                `h-full w-full rounded-md border border-dashed px-8 py-8`,
                {
                  "border-neutral-400": !isDragActive,
                  "border-neutral-800": isDragActive,
                }
              )}>
              <div className="flex h-full flex-col items-center justify-center">
                <IoCloudUploadOutline />
                <p>Select or drag and drop images here (200KB - 5MB)</p>
                <button
                  type="button"
                  className="mt-4 rounded-lg border px-4 py-2">
                  Select image
                </button>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center bg-white rounded-full p-1 shadow-md cursor-pointer" >
              {icon}
            </div>
          )}
        </div>
      )}
    </Dropzone>
  );
};

export default ImageUploader;

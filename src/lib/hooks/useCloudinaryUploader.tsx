// import { useState } from "react";
// import axios from "axios";

// const useCloudinaryUploader = () => {
//   const [files, setFiles] = useState([]);

//   const uploadToCloudinary = async (file) => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", "gwxgv5ii");

//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/daurieb51/image/upload",
//         formData
//       );

//       return response.data.secure_url;
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       throw error;
//     }
//   };

//   const handleFileDrop = async (file : any) => {
//     try {
//       const secure_url = await uploadToCloudinary(file);
//       setFiles((previousFile : anys) => [
//         //get a better type
//         ...(Array.isArray(previousFiles) ? previousFiles : []), // Ensure previousFiles is an array
//         secure_url,
//       ]);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   const removeImage = () => {
//     setFiles([]);
//   };

//   return { setFiles, files, handleFileDrop, removeImage };
// };

// export default useCloudinaryUploader;

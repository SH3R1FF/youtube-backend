import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadOnCloudinary = async (localFilePath) => {
        try {
            if (!localFilePath) return null
            // Upload the file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto",
            })
            //File uploaded successfully
            fs.unlinkSync(localFilePath)
            return response;

        } catch (error) {
             fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
             return null;
        }
}

// const deleteFileFromCloudinary = async (publicId) => {
//     try {
//       const result = await cloudinary.v2.uploader.destroy(publicId);
//       console.log('File deleted:', result);
//     } catch (error) {
//       console.error('Error deleting file:', error);
//     }
//   };

export { uploadOnCloudinary }
// export { uploadOnCloudinary, deleteFileFromCloudinary }

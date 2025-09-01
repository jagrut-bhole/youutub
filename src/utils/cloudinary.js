import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCLoudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded Successfully, ", response.url);
    try {
      fs.unlinkSync(localFilePath);
    } catch (error) {
      console.error("Failed to delete local file:", unlinkErr);
    }
    return response;
  } catch (error) {
    console.log("Cloudinary upload error", error);
    try {
      fs.unlinkSync(localFilePath);
    } catch (error) {
      console.error("Failed to delete local file:", unlinkErr);
    } // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCLoudinary };

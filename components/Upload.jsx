'use client';
import { UploadButton } from '@uploadthing/react';
import Image from 'next/image';
import { toast } from "react-toastify";

const Upload = ({imageUrl, setImageUrl}) => {
  
  return (
    <main className="flex items-center gap-3">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          toast.success("Upload Completed");
          setImageUrl(res[0].url)
          console.log(imageUrl)
        }}
        onUploadError={(error) => {
          // Do something with the error.
          toast.error(`ERROR! ${error.message}`);
        }}
      />
      <div className='text-transparent'>
      {imageUrl.length && <div className='m-2'>
        <Image src={imageUrl} width={150} alt='image uploaded' className='border-2 border-gray-500' height={150} />
        <p className='text-center'>Uploaded image</p>
        </div>}
      </div>
      
    </main>
  )
}

export default Upload;
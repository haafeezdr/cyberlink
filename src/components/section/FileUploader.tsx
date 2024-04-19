"use client";

import { useState } from 'react';
import Image from 'next/image';


export default function Upload() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const uploadFile = async () => {
        if (!file) {
            setMessage('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setMessage('File uploaded successfully.');
            } else {
                setMessage('Failed to upload file.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while uploading the file.');
        }
    };

    return (
        <div className='text-white flex flex-col justify-center items-center p-4'>
            <Image src="/assets/upload.png" alt="upload" className="m-2" width={20} height={20} />
            <h1>Drop your file here</h1>
            <input type="file" placeholder='Browse' className='p-2 rounded-sm text-white ' onChange={handleFileChange} />
            {/* <button onClick={uploadFile}>Upload</button> */}
            <div>{message}</div>
        </div>
    );
}

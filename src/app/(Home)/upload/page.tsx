"use client";

import {
  IconCloudUpload,
  IconCheck,
  IconAlertTriangle,
} from "@tabler/icons-react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function UploadImage() {
  const [response, setResponse] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.size > 2 * 1024 * 1024) {
      toast.error("❌ File size exceeds 2MB limit");
      return;
    }

    setFile(selected);

    try {
      const uploadPromise = axios.postForm("/api/upload", { image: selected });
      toast.promise(uploadPromise, {
        loading: "Uploading image...",
        success: (res) => {
          setResponse(res.data);
          return "✅ Image uploaded successfully!";
        },
        error: "🚫 Failed to upload image.",
      });
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Unexpected error occurred!");
    }
  };

  return (
    <div className="bg-base-300 min-h-[calc(100vh-5.6rem)] flex flex-col justify-center items-center px-6 md:px-12">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-base-content uppercase tracking-wide">
        Upload a 2D Image
      </h1>

      <div className="w-full max-w-xl">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 p-6 border-2 border-dashed border-base-content/40 rounded-xl cursor-pointer bg-base-100 hover:bg-base-200 transition"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <IconCloudUpload className="mb-3 w-10 h-10 text-primary" />
            <p className="text-lg font-semibold text-base-content">
              Click to upload or drag & drop
            </p>
            <p className="text-sm text-base-content/60">
              Supported: JPG, PNG — Max: 2MB
            </p>
            {file ? (
              <p className="mt-3 text-sm text-base-content">
                Selected: <strong>{file.name}</strong> (
                {(file.size / 1024).toFixed(1)} KB)
              </p>
            ) : (
              <p className="mt-3 text-sm text-base-content/60 italic">
                No file selected
              </p>
            )}
          </div>

          <input
            id="dropzone-file"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {response && (
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
            <IconCheck className="w-5 h-5" />
            <span className="font-medium">
              Image uploaded! You can now preview your 3D model.
            </span>
          </div>
          <Link href="/viewer" className="btn btn-secondary btn-wide">
            View 3D Model
          </Link>
        </div>
      )}
    </div>
  );
}

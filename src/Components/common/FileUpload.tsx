import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("https://your-backend.com/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percent = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0;
          setUploadProgress(percent);
        },
      });

      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center w-full px-2 lg:px-6">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-blue-400 rounded-lg p-6 md:p-8 w-full max-w-xs md:max-w-md lg:max-w-lg text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <div className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7l1.414-1.414A2 2 0 016.828 5h10.344a2 2 0 011.414.586L21 7M5 10v7a2 2 0 002 2h10a2 2 0 002-2v-7M9 15h6"
            />
          </svg>
        </div>
      </div>

      {selectedFile && (
        <div className="mt-4 text-center w-full max-w-xs md:max-w-md lg:max-w-lg">
          <p className="text-gray-700 text-sm break-words">
            {selectedFile.name}
          </p>
          <button
            onClick={handleUpload}
            className="mt-3 px-5 py-2 bg-blue-500 text-white rounded-lg w-full md:w-auto hover:bg-blue-600 transition duration-300"
          >
            Upload
          </button>
        </div>
      )}

      {uploadProgress !== null && (
        <p className="mt-2 text-gray-600 text-sm">
          Upload progress: {uploadProgress}%
        </p>
      )}
    </div>
  );
};

export default FileUpload;

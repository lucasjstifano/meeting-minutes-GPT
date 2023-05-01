import React from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";

const DropZone = ({ onFileLoaded, clearData }) => {
  const handleFileChange = async (file) => {
    await Papa.parse(file, {
      header: true,
      complete: (results) => {
        onFileLoaded(results.data);
      },
    });
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".csv",
    onDrop: (acceptedFiles) => {
      handleFileChange(acceptedFiles[0]);
    },
  });

  const renderFileInfo = () => {
    if (clearData.length === 0) {
      return null;
    }

    return acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  };

  return (
    <div>
      <div {...getRootProps()}>
        <div className="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-green-500">
                <ul>{renderFileInfo()}</ul>
              </p>
            </div>
            <input {...getInputProps()} />
          </label>
        </div>
        <div className="flex items-center justify-center w-full text-gray-500"></div>
      </div>
    </div>
  );
};

export default DropZone;

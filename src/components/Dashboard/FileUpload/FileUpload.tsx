import { useStorageUpload } from "@thirdweb-dev/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactCrop from "react-image-crop";

import { PhotoIcon } from "@heroicons/react/20/solid";

import type { FileUploadProps } from "../../../types/types";

import "react-image-crop/src/ReactCrop.scss";

export default function FileUpload(props: FileUploadProps) {
  const { mutateAsync: upload } = useStorageUpload();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uris = await upload({ data: acceptedFiles });
      props.setPath(uris[0]);
    },
    [upload, props]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", ".jpg"],
    },
    maxFiles: 1,
    maxSize: 2097152,
  });

  return (
    <div {...getRootProps()}>
      <div className="text-center">
        <PhotoIcon
          className="mx-auto h-12 w-12 text-gray-300"
          aria-hidden="true"
        />
        <div className="mt-4 flex text-sm leading-6 text-indigo-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>Upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only "
              {...getInputProps()}
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs leading-5 text-gray-600">
          PNG, JPG, GIF up to 2MB
        </p>
      </div>
    </div>
  );
}

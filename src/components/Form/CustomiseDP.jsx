import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../fireabase/FirebaseConfig";
import { useDropzone } from "react-dropzone";
import { colors } from "./data";
import Radio from "./Radio";
import uploadSvgImage from "../../assets/upload.svg";
import { v4 as uuidv4 } from "uuid";

const DropZone = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [selectColor, setSelectColor] = useState("#34a853");
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }))
      );
    },
  });

  useEffect(() => {
    // Clean up when component unmounts
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const handleColor = (e) => {
    setSelectColor(e.target.value);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      const imageData = files.length > 0 ? files[0] : null;
  
      if (imageData) {
        const reader = new FileReader();
  
        reader.onload = function (event) {
          const imageUrl = event.target.result; // Get the base64 string
  
          const articleRef = collection(db, "users");
          const generatedUserId = uuidv4();
          const userData = {
            userId: generatedUserId,
            name: name,
            image: imageUrl, // Set the image URL here
            color: selectColor,
            createdAt: Timestamp.now().toDate(),
          };
  
          addDoc(articleRef, userData)
            .then(() => {
              navigate(`/dp-card/${generatedUserId}`);
            })
            .catch((error) => {
              console.error("Error publishing:", error);
            });
        };
  
        reader.readAsDataURL(imageData); // Start reading the file
      }
    } catch (error) {
      // Handle errors
      console.error("Error publishing:", error);
    }
  };
  
  

  return (
    <form onSubmit={handlePublish}>
      <div className="mb-12">
        <div className="flex md:text-md text-sm my-3 font-bold text-center text-gray-500 items-center justify-between">
          <div>Name</div>
          <div>Nickname, first name, how you want it</div>
        </div>
        <input
          placeholder="Enter name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border bg-black"
          required
        />
      </div>

      <div className="mb-12">
        <div className="flex md:text-md text-sm my-3 font-bold text-center text-gray-500 items-center justify-between">
          <div>Photo</div>
          <div>Preferrably in a square resolution</div>
        </div>
        <div className="text-center border-dashed border border-secondary-500 rounded-md py-[52px] mx-auto flex flex-col justify-center items-center">
          {files.length === 0 && (
            <div {...getRootProps({ className: "dropzone" })}>
              <input className="hidden" {...getInputProps()} />
              <img src={uploadSvgImage} alt="" className="mx-auto mb-4" />
              {isDragAccept ? (
                <p className="text-sm text-slate-500 dark:text-slate-300 ">
                  Drop the files here ...
                </p>
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-300 f">
                  Drop files here or click to upload.
                </p>
              )}
            </div>
          )}
          <div className="flex space-x-4">
            {files.map((file, i) => (
              <div key={i} className="mb-4 flex-none">
                <div className="h-[300px] w-[300px] mx-auto mt-6 rounded-md">
                  <img
                    src={file.preview}
                    className=" object-contain h-full w-full block rounded-md"
                    onLoad={() => {
                      URL.revokeObjectURL(file.preview);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex md:text-md text-sm my-3 font-bold text-center text-gray-500 items-center justify-between">
          <div>Select preferred color</div>
          <div></div>
        </div>
        <div className="flex flex-wrap space-x-5 items-center justify-between w-full">
          {colors.map((color) => (
            <Radio
              label={color.label}
              // name="color"
              value={color.value}
              checked={selectColor === color.value}
              onChange={handleColor}
              labelClass={`text-[${color.value}]`}
              activeClass={color.activeClass}
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full h-[4em] bg-[#fffceb] hover:bg-[#fff] text-black rounded-full font-bold"
      >
        Generate your dp
      </button>
    </form>
  );
};

export default DropZone;

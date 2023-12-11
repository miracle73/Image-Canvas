import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../fireabase/FirebaseConfig";
import html2canvas from "html2canvas"; // Import html2canvas library
import logo from "../../../assets/dv.png";

const DPCard = () => {
  const { userId } = useParams();
  const [storedImage, setStoredImage] = useState("");
  const [storedColor, setStoredColor] = useState("");
  const [storedName, setStoredName] = useState("");
  const sectionRef = useRef(null); // Reference to the section element
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const feedbackRef = collection(db, "users");
        const q = query(feedbackRef, where("userId", "==", userId));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          setStoredName(userData.name);
          setStoredImage(userData.image);
          setStoredColor(userData.color);
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [userId]);
  
  const downloadSectionAsImage = () => {
    html2canvas(sectionRef.current).then((canvas) => {
      // Convert the section content to canvas

      const imgData = canvas.toDataURL("image/png"); // Get image data URL

      // Create a link element and trigger download
      const downloadLink = document.createElement("a");
      downloadLink.href = imgData;
      downloadLink.download = `${storedName}_dp.png`;
      downloadLink.click();
    });
  };
  
  useEffect(() => {
    const switchToDesktopView = () => {
      const viewportMetaTag = document.querySelector('meta[name="viewport"]');
      if (viewportMetaTag) {
        viewportMetaTag.content = "width=1024"; // Set a suitable width for desktop view
      }
    };

    switchToDesktopView();
  }, []);

  return (
    <>
      <section
        ref={sectionRef} // Attach the ref to the section element
        className={`p-4 md:p-[4em] mx-6 xl:mx-[15em] bg-[${storedColor}] items-center justify-center`}
      >
        <div
          className={`flex flex-col text-lg bg-white p-8 mx-auto mb-3 gap-3 text-center items-center justify-center w-full h-auto`}
        >
          <div className="">
            <img
              className={`relative w-[16em] h-[16em] rounded-full border-l-[12px] border-b-[12px] border-r-[5px] border-t-4 border-[${storedColor}] relative`}
              src={storedImage}
            />
            <div className="rotate-12">
              <p className="bg-[#ffe6cc] mt-[-20px] ml-[-30px] z-50 px-3 pb-4 pt-3 w-[15em] text-center text-[22px] font-bold rounded-full">
                😌 {storedName}
              </p>
            </div>
          </div>
          <div className="mt-6">WILL BE AT</div>
          <img className="w-[14em] h-[8em] my-3 relative" src={logo} />

          <div className="flex text-left border">
            <div className="border p-3">
              <div className="text-[15px]">Get tickets at</div>
              <div className="text-[18px] font-bold">devfestlagos.com</div>
            </div>
            <div className="border p-3">
              <div className="text-[15px]">Date</div>
              <div className="text-[18px] font-bold">24-25th Nov</div>
            </div>
            <div className="border p-3">
              <div className="text-[15px]">Venue</div>
              <div className="text-[18px] font-bold">Landmark Event Center</div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row bg-black p-3 md:py-12 md:px-[15em] w-full items-center justify-between">
      <button
          type="button"
          className="px-6 py-4 border border-[#fff] text-white rounded-full font-bold"
          onClick={downloadSectionAsImage} // Call download function on button click
        >
          Download
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-4 border border-[#fff] text-white rounded-full font-bold"
        >
          Regenerate
        </button>
      </div>
    </>
  );
};

export default DPCard;

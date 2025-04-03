import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Reusablespinz from "../Components/Reusablespinz";
import "../Css/camera.css";

function Camera() {
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef(null);
  let streamRef = null; // To store stream for stopping later

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }, // "user" for front cam, "environment" for back cam
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef = stream;
      setCameraOn(true);
    } catch (error) {
      console.error("Camera access denied!", error);
    }
  };

  const closeCamera = () => {
    if (streamRef) {
      streamRef.getTracks().forEach((track) => track.stop()); // Stop camera stream
    }
    setCameraOn(false);
  };

  return (
    <>
      <Reusablespinz />
      <div className="bg-opacity-60 bg-gray-500 flex justify-center items-center h-screen" id="cam">
        <div className="w-[270px] h-[149px] bg-[#404040] rounded-2xl text-white p-4">
          <h1 className="font-inter font-semibold text-[16px] leading-5">
            “Spinz” Would Like to Access <br /> to the Camera
          </h1>
          <p className="font-inter text-[13px] font-medium mt-1">
            To take pictures and detect the data
          </p>

          {/* Buttons without left-right gap */}
          <div className="w-full mt-2 flex font-inter font-medium">
            <button className="border border-[#787878] w-1/2 h-[44px] text-[#5A91F7] flex items-center justify-center">
              <Link to={"/"} className="w-full h-full flex items-center justify-center">
                Don't Allow
              </Link>
            </button>
            <button
              className="border border-[#787878] w-1/2 h-[44px] text-[#5A91F7] flex items-center justify-center"
              onClick={openCamera}
            >
              OK
            </button>
          </div>
        </div>
      </div>

      {/* Camera Feed */}
      {cameraOn && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80">
          <video ref={videoRef} autoPlay playsInline className="w-full h-auto max-w-[500px] rounded-lg" />
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={closeCamera}
          >
            Close Camera
          </button>
        </div>
      )}
    </>
  );
}

export default Camera;

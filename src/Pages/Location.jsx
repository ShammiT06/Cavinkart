import { Link } from "react-router-dom";
import Reusablespinz from "../Components/Reusablespinz";
import "../Css/location.css";

function Location() {
    const checkPermissionAndGetLocation = async () => {
        try {
            const permission = await navigator.permissions.query({ name: "geolocation" });

            if (permission.state === "granted") {
                // Location permission already granted, fetch location directly
                getLocation();
            } else if (permission.state === "prompt") {
                // Ask for permission if not decided yet
                getLocation();
            } else {
                // Permission denied, inform the user
                console.log("Location access denied. Please enable location manually.");
            }
        } catch (err) {
            console.log("Error checking location permission:", err);
        }
    };


    
  

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Latitude:", position.coords.latitude);
                console.log("Longitude:", position.coords.longitude);
                openCameraApp()
                console.log("Camera opened")
            },
            (error) => {
                console.log("An error occurred:", error);
            }
        );

        const openCameraApp = () => {
            const cameraInput = document.createElement("input");
            cameraInput.type = "file";
            cameraInput.accept = "image/*";
            cameraInput.capture ="environment"
            cameraInput.click();
        };




    
    
    };

    return (
        <div>
            <Reusablespinz />
            <div>
                <div className="bg-opacity-60 flex justify-center items-center bg-slate-700" id="location">
                    <div className="bg-[#1E1E1EBF] w-[270px] h-[440px] text-white rounded-[14px]">
                        <div className="location__header">
                            <h1 className="font-inter font-semibold text-[17px] indent-4">
                                Allow “Diary” to use your <span className="ml-20">location?</span>
                            </h1>
                            <p className="text-[13px] font-medium">
                                Turning on location services allows us <span className="ml-3">to show you when pals are nearby.</span>
                            </p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013467.1025377945!2d73.26350234190727!3d10.78053209201264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1743676861541!5m2!1sen!2sin"
                            width="270"
                            height="180"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="flex flex-col">
                            <button className="w-[270px] h-[44px] border border-[#787878] font-inter text-[#5A91F7]" style={{ padding: "11px 8px" }} onClick={checkPermissionAndGetLocation}>
                                Allow
                            </button>
                            <button className="w-[270px] h-[44px] border border-[#787878] text-[#5A91F7]" style={{ padding: "11px 8px" }} onClick={checkPermissionAndGetLocation}>
                                Allow While Using App
                            </button>
                            <button className="w-[270px] h-[44px] border border-[#787878] text-[#5A91F7] rounded-bl-xl rounded-br-xl" style={{ padding: "11px 8px" }}>
                                <Link to={"/cam"}>Don’t Allow</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;

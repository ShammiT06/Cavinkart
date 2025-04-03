import Reusablespinz from "../Components/Reusablespinz"
import "../Css/camera.css"

function Camera() {
    return (<>
        <Reusablespinz />
        <div className="bg-opacity-60 bg-gray-500 flex justify-center items-center" id="cam">
            <div className="w-[270px] h-[145px] bg-[#404040] text-white" id="container">
                <h1 className="font-inter font-semibold text-[16px]">“Spinz” Would Like to Access <span className="ml-14">to the Camera</span></h1>
                <p className="font-inter text-[13px] p-1 font-medium">To take pictures and detect the data</p>
                <div className="mt-[5px]">
                    <button className="border border-[#787878] w-[135px] h-[44px]">Don't Allow</button>
                    <button>Ok</button>
                </div>

            </div>


        </div>
    </>)

}
export default Camera
import Reusablespinz from "../Components/Reusablespinz"
import "../Css/location.css"

function Location()
{
    return(<div>
        <Reusablespinz/>
        <div>
            <div className="bg-opacity-60 flex justify-center items-center bg-slate-700" id="location">
                <div className="bg-[#1E1E1EBF] w-[270px] h-[432px] text-white">
                    <div className="location__header">
                        <h1 className="font-inter font-semibold text-[17px] indent-4">Allow “Diary” to use your <span className="ml-20">location?</span></h1>
                        <p className="text-[13px] font-medium">Turning on location services allows us <span className="ml-3">to show you when pals are nearby.</span></p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131228785!2d80.04385969043575!3d13.047473316234447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1743676407800!5m2!1sen!2sin" width="270" height="180" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>)


}
export default Location

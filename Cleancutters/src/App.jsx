import Nav from "../Component/Nav"
import Footer from "../Component/Footer"

import Google from "./assets/goge.png"
import Apple from "./assets/apple.png"
import Svg from "../src/assets/check.svg"
import Facebook from './assets/facebook.png'
import Twitter from './assets/twit.png'
import  Youtube  from  "./assets/youtube.png"
import Woman from "../src/assets/imagewoman.png"
function App() {
  return (
    <>
    <Nav/>
    <div   className="mt-5   bg-[#F3F2F2]">

      <div className=" hero  flex flex-row">
      <div>
        <h1 className="text-[40px]">
          Discover   <span className="text-[#4A9EED]"> Highly-Rated</span> Cleaning <br></br>
          Professionals
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-row mt-2">
            <div className="mt-1 mr-3"> <img src={Svg}  />   </div>
            <div>
            Freedom to Change Your Cleaner As Needed
            </div>

          </div>
          <div className="flex flex-row mt-2">
            <div className="mt-1 mr-3"> <img src={Svg}  />   </div>
            <div>
            Insured for Liability Up to £4 Million
            </div>

          </div>
          <div className="flex flex-row mt-2">
            <div className="mt-1 mr-3"> <img src={Svg}  />   </div>
            <div>
            Upfront and Fair Pricing
            </div>

          </div>
          <div className="flex flex-row mt-2">
            <div className="mt-1 mr-3"> <img src={Svg}  />   </div>
            <div>
            Committed Support Team
            </div>

          </div>
        </div>

        <div className="mt-4">
          <button className="bg-white  border border-black   rounded-lg w-[208px] h-[60px]">Ener your adrress</button>
          <button className="bg-[#4A9EED]  text-white  ml-3  rounded-lg   w-[208px] h-[60px]"> Let Go</button>
        </div>
      </div>
      <div>
      <img src={Woman}  />
      </div>
      </div>

    </div>
    <div>
   


      <Footer />


    </div>

    </>
  )
}

export default App

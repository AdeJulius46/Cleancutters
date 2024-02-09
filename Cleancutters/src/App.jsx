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
   

    <div   className='bg-[#444444]  flex flex-col hero '  >
      <div className='flex flex-row  justify-between mt-[30px]   '>
       <div className=' basis-1/2 flex   flex-col w-{300px}  '>
      <p className="text-[#4A9EED]">Get your App</p>
      <div className="flex flew-row mt-[20px]">
        <div className="mt-2">
      <img src={Apple} 
      />
        </div>
      <img src={Google} />
      </div>
    </div>

    <div className=" basis-1/2 ">
      <div className=" flex flex-col w-[507px] justify-between mt-3  ml-5 ">
        <p className="text-white  text-[20px] text-center">Subscribe  to our new letter </p>
        <div className="content-center ml-[30px] m-2" >
         <input  placeholder="Email Adress " className="w-[310px] h-[43px] p-4"  />
           <button className="bg-[#4A9EED]  w-[98px] p-3 text-white text-[14px]">Subscribe</button>
        </div>
        <div className=" p-2">

        <h4 className="text-[12px]  text-center   text-white  pb-8 ">
          I  would like to receive future updates, offers and promotions by email from CleanCrafters .
          If at any time you would like to stop receiving communication from us, you can
            unsubscribe at the end of any promotional mail.
          </h4> 
        </div>
      </div>
      </div>
        <div className=" basis-1/2   ml-[35px] text-[14px]">
        <div><button id='butt'>Register as a cleaner</button> </div>
        </div> 
      </div>
    </div>
    <div className="  flex flex-row border-t-2 border-[#999999]   pt-[30px] bg-[#444444] hero ">
      <div className="mt-4 text-[16px] text-white">
      Follow us on
      </div>
      <div className="flex flex-row mt-4 mb-4">
      <img src={Twitter}  className="ml-1"/>
      <img src={Facebook}   className="ml-1"/>
      <img src={Youtube}   className="ml-1"/>
      </div>
        <div className="flex flex-row mt-4 mb-4">
          <p className="  text-[14px]  ml-2 text-[#4A9EED]"> CleanCrafters</p>
         <ul className="list-disc list-inside flex flex-row text-[12px] text-white  ">
          <li className="ml-1">Home</li>
          <li className="ml-1 ">How it works</li>
          <li className="ml-1 ">About</li>
          <li className="ml-1 ">Happy customers</li>
          <li className="ml-1 ">Pricing</li>
          <li className="ml-1 ">Small office cleaning</li>
          <li className="ml-1 ">Press </li>
          <li className="ml-1 ">Carears</li>
          <li className="ml-1 ">Help</li>
          <li className="ml-1 ">Insurance </li>
          <li className="ml-1 ">Blogs  </li>
          <li className="ml-1 ">Apps  </li>
         </ul>
        </div>

    </div>


    </div>

    </>
  )
}

export default App

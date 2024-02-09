import Google from "../src/assets/goge.png"
import Apple from "../src/assets/apple.png"
const Footer = () => {
  return (
<div   className='Footer  flex flex-col hero '  >
  <div className='flex flex-row  justify-between   border border-black  '>
    <div className=' basis-1/2 flex  flex-col w-{300px} '>
      <p>Get your App</p>
      <div className="flex flew-row ">
        <div className="mt-2">
      <img src={Apple} 
      />
        </div>
      <img src={Google} />
      </div>
    </div>

    <div className="border border-black basis-1/2 ">
      <div className="w-[507px]">
        <p>subscribe</p>
        <div >
         <input />  <button>JUljoh</button>
        </div>
        <div className="basis-1/2 w-64">

        <h4 className="text-[4px]  ">
         I would like to receive future updates, offers and promotions by email from CleanCrafters .
If at any time you would like to stop receiving communication from us, you can
unsubscribe at the end of any promotional mail.
          </h4> 
        </div>
      </div>
      </div>
        <div className=" basis-1/2 border border-black">
           iugyubewjdugduy
        </div> 
      </div>
    </div>
  )
}

export default Footer
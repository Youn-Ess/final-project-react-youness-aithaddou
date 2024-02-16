import { useState } from "react"
import blog_01 from "../../../assets/images/blog-01.jpg"
import blog_02 from "../../../assets/images/blog-02.jpg"
import blog_03 from "../../../assets/images/blog-03.jpg"

export const Section5Home = () => {
    const [imgs, setImgs] = useState([blog_01, blog_02, blog_03])
    return (
        <>
            <div className="py-[4rem] lg:px-[13rem] px-[1rem]">
                <h1 className="font-bold text-[2rem] text-center pb-[3rem]">OUR BLOG</h1>
                <div className="flex lg:flex-row flex-col justify-between">
                    <div className="h-[70vh] lg:w-[32%] w-[100%] flex flex-col gap-4 lg:p-0 py-[1rem]">
                        <div className=" h-[53%] overflow-hidden  ">
                            <div className="myImg transition duration-500 h-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${blog_01})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <p className="text-gray-800 text-[1.1rem] font-medium">Black Friday Guide: Best Sales & Discount Codes</p>
                            <p className="text-gray-600 text-[0.9rem] font-light">by youness Admin on Dec 28,2017</p>
                            <p className="text-gray-600 text-[0.9rem] font-light">danonLorem ipsum dolor sit adipisicing elit. Ipsa ipsum ducimus repudiandae perferendis eos quod suscipit assumenda molestiae cum blanditiis.</p>
                        </div>
                    </div>
                    <div className="h-[70vh] lg:w-[32%] w-[100%] flex flex-col gap-4 lg:p-0 py-[1rem]">
                        <div className=" h-[53%] overflow-hidden  ">
                            <div className="myImg transition duration-500 h-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${blog_02})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <p className="text-gray-800 text-[1.1rem] font-medium">Black Friday Guide: Best Sales & Discount Codes</p>
                            <p className="text-gray-600 text-[0.9rem] font-light">by youness Admin on Dec 28,2017</p>
                            <p className="text-gray-600 text-[0.9rem] font-light">danonLorem ipsum dolor sit adipisicing elit. Ipsa ipsum ducimus repudiandae perferendis eos quod suscipit assumenda molestiae cum blanditiis.</p>
                        </div>
                    </div>
                    <div className="h-[70vh] lg:w-[32%] w-[100%] flex flex-col gap-4 lg:p-0 py-[1rem]">
                        <div className=" h-[53%] overflow-hidden  ">
                            <div className="myImg transition duration-500 h-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${blog_03})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <p className="text-gray-800 text-[1.1rem] font-medium">Black Friday Guide: Best Sales & Discount Codes</p>
                            <p className="text-gray-600 text-[0.9rem] font-light">by youness Admin on Dec 28,2017</p>
                            <p className="text-gray-600 text-[0.9rem] font-light">danonLorem ipsum dolor sit adipisicing elit. Ipsa ipsum ducimus repudiandae perferendis eos quod suscipit assumenda molestiae cum blanditiis.</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
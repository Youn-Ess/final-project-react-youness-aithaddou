import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import "./footer.scss"


export const Footer = () => {
    return (
        <>
            <div className="bg-[#f0f0f0] lg:px-[4rem] px-[1rem] pt-[4rem] pb-[2.5rem] flex flex-col gap-[7rem] footer">
                <div className=" flex lg:flex-row flex-col justify-between lg:gap-0 gap-5">
                    <div className="lg:w-[30%] flex flex-col gap-10 w-[100%]">
                        <h1 className="text-[#111111] font-bold">GET IN TOUCH</h1>
                        <p>Any questions? Let us know in  store at Bth floor 379 Hudson St, New York    NY10018 or call us on 967166879</p>
                        <div className="flex gap-3">
                            <BiLogoFacebook className="text-[1.4rem] text-[#888888] i" />
                            <FaTwitter className="text-[1.4rem] text-[#888888] i" />
                            <FaPinterestSquare className="text-[1.4rem] text-[#888888] i" />
                            <FaGooglePlusG className="text-[1.4rem] text-[#888888] i" />
                            <FaInstagram className="text-[1.4rem] text-[#888888] i" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h1 className="text-[#111111] font-bold">CATEGORIES</h1>
                        <div className="flex flex-col gap-[0.9rem]">
                            <p>Men</p>
                            <p>Women</p>
                            <p>Dresses</p>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <h1 className="text-[#111111] font-bold">LINKS</h1>
                        <div className="flex flex-col gap-[0.9rem]">
                            <p>Search</p>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Returns</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <h1 className="text-[#111111] font-bold">HELP</h1>
                        <div className="flex flex-col gap-[0.9rem]">
                            <p>Track Order</p>
                            <p>Returns</p>
                            <p>Shipping</p>
                            <p>TAQs</p>
                        </div>
                    </div>
                    <div className="lg:w-[27%] flex flex-col gap-10 w-[100%]">
                        <h1 className="text-[#111111] font-bold">NEWSLETTER</h1>
                        <div className="flex flex-col items-start gap-5">
                            <input type="email" placeholder="Email Address" className="bg-[#f0f0f0] inputFooter" />
                            <button className="bg-[#222222] text-white font-thin text-[1rem] rounded-3xl w-fit px-[3.5rem] py-[0.7rem] ">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <p className="text-center">Copyright &copy; 2022 Theme Developed by YounessAithaddou  All rights reserved </p>
            </div>
        </>
    )
}
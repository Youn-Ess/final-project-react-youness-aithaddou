import { useContext } from "react";
import banner_08 from "../../../assets/images/banner-08.jpg"
import { MyContext } from "../../../utils/ContextProvider";
import "./section4Home.scss"

export const Section4Home = () => {
    const { setStoreDataBase, storeDataBase } = useContext(MyContext)

    const randomIndex = Math.floor(Math.random() * storeDataBase.length)
    const element = storeDataBase[randomIndex]
    return (
        <>
            <div className="section4Home bg-[#f2f2f2] py-[4rem] lg:px-[13rem] px-[1rem] flex lg:flex-row gap-[2rem] flex-col ">
                <div className="h-[60vh] lg:w-[50%] w-[100%] overflow-hidden relative">
                    <div className=" myImg transition duration-500 h-[100%] w-[100%]  hover:scale-110 flex justify-center items-center" style={{ backgroundImage: `url(${banner_08})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div>
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className="font-bold text-[2rem] text-center text-white tracking-widest">The Beauty</h1>
                        <h1 className="font-bold text-[3.5rem] text-center text-white tracking-widest">LOOKBOOK</h1>
                        <p className="font-thin text-[1.2rem] text-center text-white tracking-widest">VIEW COLLECTION</p>
                    </div>
                </div>
                <div className="h-[60vh] lg:w-[50%] w-[100%] bg-white flex flex-col items-center justify-evenly">
                    <div className="h-[50%] w-[80%] overflow-hidden">
                        <div className=" myImg transition duration-500 h-[100%] w-[100%]  hover:scale-110 flex justify-center items-center " style={{ backgroundImage: `url(${element.productImage})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}></div>
                    </div>
                    <div>
                        <p className="text-[1.1rem] font-light text-gray-500 text-center pName">{element.productName}</p>
                        <p className="text-[1.1rem] font-light text-gray-500 text-center ">${element.productPrice}</p>
                    </div>
                    <div className=" flex gap-3 ">
                        <h1 className="border p-[1rem]">time</h1>
                        <h1 className="border p-[1rem]">time</h1>
                        <h1 className="border p-[1rem]">time</h1>
                        <h1 className="border p-[1rem]">time</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
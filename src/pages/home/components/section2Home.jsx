import item_01 from "../../../assets/images/item-01.jpg"
import item_02 from "../../../assets/images/item-02.jpg"
import item_03 from "../../../assets/images/item-03.jpg"
import item_04 from "../../../assets/images/item-04.jpg"
import item_05 from "../../../assets/images/item-05.jpg"
import item_06 from "../../../assets/images/item-06.jpg"
import "./section2Home.scss"

export const Section2Home = () => {
    return (
        <>
            <div className="section2Home flex lg:flex-row lg:justify-between flex-col w-[100%] lg:px-[13rem] py-[2rem]  px-[1rem]">
                <div className="h-[110vh] lg:w-[32%]  flex flex-col gap-4 lg:p-0 py-[1rem]">
                    <div className="overflow-hidden h-[60%] relative">
                        <div className="myImg  h-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${item_01})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        <button className="myButton bg-white  w-[50%] py-[0.5rem] text-[1.2rem] font-thin absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2">nameProduct</button>
                    </div>
                    <div className="overflow-hidden h-[40%] relative">
                        <div className="myImg  h-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${item_02})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        <button className="myButton bg-white  w-[50%] py-[0.5rem] text-[1.2rem] font-thin absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2">nameProduct</button>
                    </div>
                </div>
                <div className="h-[110vh] lg:w-[32%] w-[100%] flex flex-col-reverse gap-4">
                    <div className="overflow-hidden h-[60%] w-[100%] relative">
                        <div className="myImg  h-[100%] w-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${item_03})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        <button className="myButton bg-white  w-[50%] py-[0.5rem] text-[1.2rem] font-thin absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2">nameProduct</button>
                    </div>
                    <div className="overflow-hidden h-[40%] w-[100%] relative">
                        <div className="myImg  h-[100%] w-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${item_04})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        <button className="myButton bg-white  w-[50%] py-[0.5rem] text-[1.2rem] font-thin absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2">nameProduct</button>
                    </div>
                </div>
                <div className="h-[110vh] lg:w-[32%] w-[100%] flex flex-col gap-4">
                    <div className="overflow-hidden h-[60%] w-[100%] relative">
                        <div className="myImg  h-[100%] w-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${item_05})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        <button className="myButton bg-white  w-[50%] py-[0.5rem] text-[1.2rem] font-thin absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2">nameProduct</button>
                    </div>
                    <div className="overflow-hidden h-[40%] w-[100%] relative">
                        <div className="myImg  h-[100%] w-[100%]  hover:scale-110  " style={{ backgroundImage: `url(${item_06})`, backgroundPosition: `center`, backgroundSize: `cover` }}> </div>
                        <button className="myButton bg-white  w-[50%] py-[0.5rem] text-[1.2rem] font-thin absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2">nameProduct</button>
                    </div>
                </div>
            </div>
        </>
    )
}
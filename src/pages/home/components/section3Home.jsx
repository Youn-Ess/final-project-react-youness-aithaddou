import { useContext, useState } from "react"
import { MyContext } from "../../../utils/ContextProvider"

import "./section3Home.scss"

export const Section3Home = () => {
    const { setStoreDataBase, storeDataBase } = useContext(MyContext)

    const [newDataBase, setNewDataBase] = useState([...storeDataBase])


    const getDataBase = (e) => {
        if (e == `all`) {
            setNewDataBase([...storeDataBase])
        } else if (e == `sale`) {
            setNewDataBase(storeDataBase.filter(element => element.productState == `sale`))
        } else if (e == `new`) {
            setNewDataBase(storeDataBase.filter(element => element.productState == `new`))
        } else if (e == `old`) {
            setNewDataBase(storeDataBase.filter(element => element.productState == `old`))
        }
    }


    return (
        <>
            <div className="section3Home lg:px-[13rem] py-[2rem] px-[1rem] ">
                <h1 className="text-center text-[2rem] font-bold">FEATURED PRODUCTS</h1>
                <div className="flex justify-center gap-4 py-4">
                    <button onClick={(e) => { getDataBase(e.target.value) }} value={`all`} className="text-white font-light text-[1.1rem] px-[1.2rem] py-[0.3rem] rounded-md bg-slate-800 focus:bg-red-600 ">all</button>
                    <button onClick={(e) => { getDataBase(e.target.value) }} value={`sale`} className="text-white font-light text-[1.1rem] px-[1.2rem] py-[0.3rem] rounded-md bg-slate-800 focus:bg-red-600 ">sale</button>
                    <button onClick={(e) => { getDataBase(e.target.value) }} value={`old`} className="text-white font-light text-[1.1rem] px-[1.2rem] py-[0.3rem] rounded-md bg-slate-800 focus:bg-red-600 ">old</button>
                    <button onClick={(e) => { getDataBase(e.target.value) }} value={`new`} className="text-white font-light text-[1.1rem] px-[1.2rem] py-[0.3rem] rounded-md bg-slate-800 focus:bg-red-600 ">new</button>
                    <label htmlFor=""></label>
                </div>

                <div className=" flex lg:flex-row lg:justify-between flex-col ">

                    {
                        newDataBase.slice(0, 4).map((element, index) => {
                            return (
                                <>
                                    <div key={index} className=" myDiv lg:w-[23%] w-[100%] h-[60vh] flex flex-col  justify-between lg:pb-0 pb-3">
                                        <div className="myImg h-[83%] w-[100%]" style={{ backgroundImage: `url(${element.productImage})`, backgroundPosition: `center`, backgroundSize: `cover` }}><button className="myBtn">ADD TO CART</button></div >
                                        <div className="">
                                            <p className="text-[1.1rem] font-light text-gray-500 pName">{element.productName}</p>
                                            <p className="text-[1.2rem] font-light text-gray-500">${element.productPrice}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
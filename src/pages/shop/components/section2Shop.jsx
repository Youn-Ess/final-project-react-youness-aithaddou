import React, { useContext, useEffect, useState } from "react"
import { MyContext } from "../../../utils/ContextProvider"
import { CiSearch } from "react-icons/ci";
import "./section2Shop.scss"
import { useNavigate } from "react-router-dom";
import "./section2Shop.scss"




export const Section2Shop = () => {


    const { setStoreDataBase, storeDataBase, cartDataBase, setCartDataBase } = useContext(MyContext)
    const [newDataBase, setNewDataBase] = useState([...storeDataBase])

    const [userOption, setUserOption] = useState(newDataBase.length.toString())

    const navigate = useNavigate()


    const handlInputValue = (e) => {
        if (e) {
            setNewDataBase(newDataBase.filter(element => element.productName.includes(e)))
        } else {
            setNewDataBase(storeDataBase)
        }
    }


    const handleSelectedPrice1 = (e) => {
        if (e.target.checked) {
            setNewDataBase(newDataBase.filter(element => (element.productPrice >= 1) && (element.productPrice <= 30)))
        } else if (!e.target.checked) {
            setNewDataBase([...storeDataBase])

        }
    }
    const handleSelectedPrice2 = (e) => {
        if (e.target.checked) {
            setNewDataBase(newDataBase.filter(element => (element.productPrice >= 30) && (element.productPrice <= 80)))
        } else if (!e.target.checked) {
            setNewDataBase([...storeDataBase])
        }
    }
    const handleSelectedPrice3 = (e) => {
        if (e.target.checked) {
            setNewDataBase(newDataBase.filter(element => (element.productPrice >= 80)))
        } else if (!e.target.checked) {
            setNewDataBase([...storeDataBase])
        }
    }


    const handleSelectedCategorie = (e) => {

        if (e != `accessories`) {
            setNewDataBase(storeDataBase.filter(element => element.productCategorie == e))
        } else if (e == `accessories`) {
            console.log(true);
            setNewDataBase(storeDataBase.filter(element => (element.productType == `watch`) || (element.productType == `glasses`) || (element.productType == `back_pack`)))
        } else {
            setNewDataBase(storeDataBase)
        }
    }

    const handlSelectNumberOption = (e) => {
        setUserOption(e)
        if (e == `all`) {
            setUserOption(newDataBase.length.toString())
        } else if (!e) {
            setUserOption(newDataBase.length.toString())
        }
    }


    console.log(cartDataBase);


    return (
        <>
            <div className="section2Shop lg:px-[13rem] py-[4rem] flex justify-between">
                <div className="w-[25%] h-[50vh] flex flex-col justify-between py-[1rem]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[1.2rem] font-black">Categories</h1>
                        <div className="flex flex-col gap-1">
                            <button onClick={(e) => { handleSelectedCategorie(e.target.value) }} value="men" className="font-light text-gray-700">Men</button>
                            <button onClick={(e) => { handleSelectedCategorie(e.target.value) }} value="women" className="font-light text-gray-700">Women</button>
                            <button onClick={(e) => { handleSelectedCategorie(e.target.value) }} value="accessories" className="font-light text-gray-700">Accessories</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[1.1rem] font-black">Price</h1>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                                <input onChange={handleSelectedPrice1} name="A" value={`0-30`} type="checkbox" />
                                <p className="font-light text-gray-700">0-30</p>
                            </div>
                            <div className="flex gap-1">
                                <input onChange={handleSelectedPrice2} name="A" value={`30-80`} type="checkbox" />
                                <p className="font-light text-gray-700">30-80</p>
                            </div>
                            <div className="flex gap-1">
                                <input onChange={handleSelectedPrice3} name="A" value={`80-^`} type="checkbox" />
                                <p className="font-light text-gray-700">80-^</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="relative  flex items-center justify-end" >
                            <CiSearch className="absolute right-2 text-[1.5rem] text-gray-400 " />
                            <input type="text" placeholder="Search..." className=" w-[100%]  border pl-[1rem]  pr-[2.4rem] py-[0.9rem]  active::outline outline-none" onChange={(e) => { handlInputValue(e.target.value) }} />
                        </label>
                    </div>
                </div>
                <div className="flex w-[75%] flex-col p-[1rem] gap-3">
                    <div className="w-[20%] border">
                        <select onChange={(e) => { handlSelectNumberOption(e.target.value) }} className="w-[100%] focus:outline-none py-2" name="" id="">
                            <option value=""></option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="all">all</option>
                        </select>
                    </div>
                    <div className="flex flex-wrap justify-between row-gap-3">
                        {
                            newDataBase.slice(0, userOption).map((element, index) => {
                                return (
                                    <>
                                        <div key={index} className="myDiv lg:w-[31%]  w-[100%] h-[60vh] flex flex-col  justify-between lg:pb-0">
                                            <div onClick={() => { navigate(`/shop/${element.id}`) }} className=" myImg h-[83%] w-[100%]" style={{ backgroundImage: `url(${element.productImage})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                                                <button className="myBtn">ADD TO CART</button>
                                            </div >
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
            </div>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}



        </>
    )
}
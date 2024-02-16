import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../../utils/ContextProvider"
import { useNavigate, useParams } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoBagCheckOutline } from "react-icons/io5";



export const Section1ProductDetails = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    const { cartDataBase, setStoreDataBase, storeDataBase, setCartDataBase } = useContext(MyContext)

    const { id } = useParams()
    const item = storeDataBase.find(element => element.id == id)

    const relatedItems = storeDataBase.filter(element => element.productType == item.productType)



    const addToCart = (element) => {
        if (quantitySelected == 0) {
            return alert(`must select the quantity`)
        }
        const isInCart = cartDataBase.find(isInCartElement => isInCartElement.id == element.id)
        if (!isInCart) {
            element.sizeSelected = sizeSelected
            element.quantitySelected = quantitySelected
            setCartDataBase([...cartDataBase, element])
            setNameProduct(element.productName)
            handleShow()
        } else if (isInCart) {
            isInCart.sizeSelected = sizeSelected
            isInCart.quantitySelected = quantitySelected + 1

            setNameProduct(isInCart.productName)
            handleShow()

        }
    }



    const [sizeSelected, setSizeSelected] = useState(``)
    const handlSizeSelected = (e) => {
        setSizeSelected(e)
    }

    const [quantitySelected, setQuantitySelected] = useState(0)
    const handlQuantitySelected = (e) => {
        setQuantitySelected(parseInt(e))
    }



    const [nameProduct, setNameProduct] = useState(``)
    return (
        <>
            <div className='lg:pt-[4.4rem] '>
                <div className="lg:px-[12rem] py-[5rem] flex lg:flex-row flex-col ">
                    <div className=" lg:w-[55%] flex gap-4 w-[100%]">
                        <div className="h-[20vh] w-[17%]">
                            <div className="h-[100%] flex items-center justify-center" style={{ backgroundImage: `url(${item.productImage})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                            </div >
                        </div>
                        <div className="lg:h-[90vh] lg:w-[80%] h-[60vh] w-[100%]">
                            <div className="h-[100%] flex items-center justify-center" style={{ backgroundImage: `url(${item.productImage})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                            </div >
                        </div>
                    </div>


                    <div className=" w-[45%] lg:px-[4rem] py-[1rem] flex flex-col gap-[4rem]">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[2rem]">{item.productName}</h1>
                            <p className="text-[2.2rem]">${item.productPrice}</p>
                            <p className="text-[1.2rem] font-thin"><span className="font-normal">Categorie</span> : {item.productCategorie}</p>
                        </div>
                        <div className="flex gap-2">
                            {
                                item.size.map(element =>
                                    <>
                                        <button onClick={(e) => { handlSizeSelected(e.target.value) }} className="border-1  border-[#e7654c] px-[1.4rem] py-[0.3rem] rounded-sm text-[0.9rem] focus:bg-[#e7654c] focus:text-white" value={element}>{element}</button>
                                    </>
                                )
                            }
                        </div>
                        <div className="flex gap-5">
                            <input onChange={(e) => { handlQuantitySelected(e.target.value) }} type="number" min="1" max="20" placeholder="quantity" className="border px-2 rounded-sm text-[1rem]" />
                            <button className="bg-[#222222] text-white font-thin text-[1rem] rounded-3xl w-fit px-[3rem] py-[0.7rem] " onClick={() => addToCart(item)} >ADD TO CART</button>
                        </div>
                        <div className="flex flex-col gap-2 border-t-2 ">
                            <h1 className="text-[1.3rem] pt-7">Description</h1>
                            <p className="text[0.8rem] text-gray-500">{item.productDescription}</p>
                        </div>
                    </div>
                </div>


                <div className="section3Home lg:px-[12rem] py-[5rem] px-[1rem] ">
                    <h1 className="text-center text-[2rem] font-bold">RELATED PRODUCTS</h1>

                    <div className=" flex lg:flex-row lg:justify-between flex-col pt-[4rem] ">

                        {
                            relatedItems.slice(0, 4).map((element, index) => {
                                return (
                                    <>
                                        <div key={index} className=" myDiv lg:w-[23%] w-[100%] h-[60vh] flex flex-col  justify-between lg:pb-0 pb-3">
                                            <div onClick={() => { navigate(`/shop/${element.id}`) }} className="myImg h-[83%] w-[100%]" style={{ backgroundImage: `url(${element.productImage})`, backgroundPosition: `center`, backgroundSize: `cover` }}><button className="myBtn">ADD TO CART</button></div >
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="flex flex-col items-center gap-2">
                    <IoBagCheckOutline className="text-[8rem] text-green-800" />
                    <h1 className="text-[1.5rem] font-bold">{nameProduct}</h1>
                    <p className="font-thin">is added to cart !</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="bg-[#e7654c] px-[1.2rem] py-[0.4rem] rounded-xl text-white " onClick={handleClose}>
                        ok
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
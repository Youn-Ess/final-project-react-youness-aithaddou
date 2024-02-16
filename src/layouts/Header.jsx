import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import iconeHeader1 from "../assets/images/icon-header-01.png"
import iconeHeader2 from "../assets/images/icon-header-02.png"
import "./header.scss"
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../utils/ContextProvider';
import { useContext, useEffect, useState } from 'react';

import img from "../assets/images/banner-02.jpg"

import { HiMiniXMark } from "react-icons/hi2";

export function Header() {
    const { cartDataBase } = useContext(MyContext)

    const navigate = useNavigate()

    const myToggleFunction = () => {
        const element = document.getElementById("myDIV");
        element.classList.toggle(`d-none`)
    }

    const calcSum = () => {
        let sum = 0
        let sumArray = []
        cartDataBase.forEach(element => {
            let sumEachProduct = element.quantitySelected * element.productPrice
            sumArray.push(sumEachProduct)
        });
        console.log(sumArray);
        sum = sumArray.reduce((a, b) => a + b, 0)
        return sum.toFixed(2)
    }
    useEffect(() => {
        calcSum()
    }, [cartDataBase])



    return (
        <Navbar expand="lg" className="myHeader z-50 shadow-md flex justify-between px-lg-5 px-3 py-[0.7rem] bg-white lg:fixed right-0 left-0" >
            {/* desktop */}
            <h1 className='d-lg-block d-none text-[2.5rem] font-black'>Fashe<span className='text-[#e7654c]'>.</span></h1>
            <Container className=' m-0 p-0   lg:w-[60%] '>
                {/* phone */}
                <Navbar.Brand href="#home" className='d-lg-none d-block text-[2.5rem] font-black'>Fashe<span className='text-[#e7654c]'>.</span></Navbar.Brand>
                {/* phone */}
                <div className='lg:hidden flex gap-2'>
                    <img className='w-[1.5rem] h-[1.5rem]' src={iconeHeader1} alt="" />
                    <div className='relative '>
                        <img className='w-[1.2rem] h-[1.5rem]' src={iconeHeader2} alt="" />
                        <p className='absolute top-[-0.4rem] right-[-0.4rem] bg-black text-white rounded-full text-[0.7rem] w-4 text-center'>{cartDataBase.length}</p>
                    </div>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <div className='lg:flex gap-3 links'>
                            <Nav.Link href="#home" className='link text-[#e7654c] px-0'><Link to={`/`}>Home</Link></Nav.Link>
                            <Nav.Link href="#link" className='link px-0'><Link to={`/shop`}>Shop</Link></Nav.Link>
                            <Nav.Link href="#link" className='link px-0'><Link to={`/about`}>About</Link></Nav.Link>
                            <Nav.Link className='link px-0'><Link to={`/contact`}>Contact</Link></Nav.Link>
                        </div>
                    </Nav>
                    {/* desktop */}
                    <div className=' lg:flex items-center hidden gap-3'>
                        <img onClick={() => { navigate(`/login`) }} className='w-[1.5rem] h-[1.5rem]' src={iconeHeader1} alt="" />
                        <div className='border-[0.01rem] h-[1.3rem]'></div>
                        <div className='relative '>
                            <img className={`shopImg  w-[1.2rem] h-[1.5rem]`} onClick={myToggleFunction} src={iconeHeader2} alt="" />
                            <div className='miniCart d-none' id='myDIV'>
                                <div className='w-[100%] max-h-[30vh] overflow-y-scroll '>
                                    {/* <div className='h-[18vh]  p-[1rem]'>
                                        <div className='w-[100%] h-[100%] flex gap-4'>
                                            <div className="w-[30%] h-[100%] flex items-center justify-center" style={{ backgroundImage: `url(${img})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                                            </div >
                                            <div className='flex flex-col gap-[0.8rem]'>
                                                <h1 className='text-[1.3rem] cursor-pointer transition duration-300 hover:text-[#e7654c]'>product title</h1>
                                                <p className='text-[0.9rem] text-gray-500'>100 * 12</p>
                                                <HiMiniXMark className='text-[1.3rem] ml-[1rem] cursor-pointer' />
                                            </div>
                                        </div>
                                    </div> */}
                                    {
                                        cartDataBase.map(element =>
                                            <>
                                                <div className='h-[18vh]  p-[1rem]' onClick={() => { navigate(`/shop/${element.id}`) }}>
                                                    <div className='w-[100%] h-[100%] flex gap-4'>
                                                        <div className="w-[30%] h-[100%] flex items-center justify-center" style={{ backgroundImage: `url(${element.productImage})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                                                        </div >
                                                        <div className='flex flex-col gap-[0.8rem]'>
                                                            <h1 className='text-[1.3rem] cursor-pointer transition duration-300 hover:text-[#e7654c]'>{element.productName}</h1>
                                                            <p className='text-[0.9rem] text-gray-500'>{element.productPrice} x {element.quantitySelected}</p>
                                                            <HiMiniXMark className='text-[1.3rem] ml-[1rem] cursor-pointer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                <div className='w-[100%] h-[15vh] border-t  flex flex-col items-end justify-between py-[0.7rem] px-[0.4rem]'>
                                    <h1 className='font-light text-[1.2rem]'>Subtotal: {calcSum()}</h1>
                                    <div className='w-[100%] flex justify-between'>
                                        <button className="bg-[#222222] text-white font-thin text-[1rem] rounded-3xl w-fit px-[2rem] py-[0.7rem] " onClick={() => { navigate(`/cart`) }}>VIEW CART</button>
                                        <button className="bg-[#222222] text-white font-thin text-[1rem] rounded-3xl w-fit px-[2rem] py-[0.7rem] ">CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                            <p className='absolute top-[-0.4rem] right-[-0.4rem] bg-black text-white rounded-full text-[0.7rem] w-4 text-center'>{cartDataBase.length}</p>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>


        </Navbar>

    );
}


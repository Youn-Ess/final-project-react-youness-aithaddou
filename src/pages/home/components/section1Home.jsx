import './section1Home.scss'
import Carousel from 'react-bootstrap/Carousel';

import slied1 from "../../../assets/images/master-slide-01.jpg"
import slied2 from "../../../assets/images/master-slide-02.jpg"
import slied3 from "../../../assets/images/master-slide-03.jpg"

import { useState } from 'react';


export const Section1Home = () => {
    const [carouselImages, setCarouelImages] = useState([slied1, slied2, slied3])
    return (
        <>
            <div className='lg:pt-[4.4rem]'>
                <Carousel fade  >
                    {
                        carouselImages.map((element, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <div className="w-[100vw] lg:h-[80vh] h-[60vh] flex items-center justify-center" style={{ backgroundImage: `url(${element})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                                        <div className='flex flex-col items-center gap-2'>
                                            <p className='text-white m-0 tracking-wide'>Women Collection 2018</p>
                                            <h1 className='font-black text-[3rem] text-white'>NEW ARRIVALS</h1>
                                            <button className='bg-white text-black font-thin py-[0.5rem] px-[1.8rem] rounded-3xl text-[0.8rem] my-2'>SHOP NOW</button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

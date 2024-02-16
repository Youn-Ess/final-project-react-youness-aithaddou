import heading_pages_01 from "../../../assets/images/heading-pages-01.jpg"

export const Section1Cart = () => {
    return (
        <>
            <div className="lg:pt-[4.4rem]">
                <div className="h-[33vh] flex items-center justify-center" style={{ backgroundImage: `url(${heading_pages_01})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                    <h1 className='font-bold text-[2.6rem] text-white'>YOUR SHOPPING CART</h1>
                </div >
            </div>
        </>
    )
}
import heading_pages_02 from "../../../assets/images/heading-pages-02.jpg"

export const Section1Shop = () => {
    return (
        <>
            <div className="lg:pt-[4.4rem]">
                <div className="h-[33vh] flex items-center justify-center" style={{ backgroundImage: `url(${heading_pages_02})`, backgroundPosition: `center`, backgroundSize: `cover` }}>
                    <h1 className='font-bold text-[2.6rem] text-white'>PRODUCTS</h1>
                </div >
            </div>
        </>
    )
}
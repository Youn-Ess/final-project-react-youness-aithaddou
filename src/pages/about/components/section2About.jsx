import "./section2About.scss"
import heading_pages_06 from "../../../assets/images/heading-pages-06.jpg"
import banner_14 from "../../../assets/images/banner-14.jpg"
export const Section2About = () => {
    return (
        <>
            <div className="flex lg:flex-row flex-col py-[4rem] lg:px-[13rem] px-[1rem] section2About">
                <div className="lg:h-[60vh] lg:w-[32%] h-[70vh] w-[100%]  overflow-hidden">
                    <div className="myImg  h-[100%] w-[100%]  hover:scale-110 " style={{ backgroundImage: `url(${banner_14})`, backgroundPosition: `center`, backgroundSize: `cover` }}></div>
                </div>
                <div className="lg:w-[68%] w-[100%] flex flex-col justify-between">
                    <div className="lg:px-[2rem] py-[1rem] flex flex-col gap-2">
                        <h1 className="text-[1.7rem] font-medium">Our story</h1>
                        <p>adipisicing elit. Nulla vel culpa non necessitatibus ipsum aliquid facere praesentium sint temporibus quibusdam officia, quod ullam recusandae minima quidem at eos cumque nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo voluptatem at voluptas mollitia itaque, debitis, tenetur fuga dolorem consectetur illo aliquid expedita? Similique, placeat nesciunt dolor perspiciatis quos deserunt. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam voluptates eius, rem magni odio aspernatur? Magni, totam cumque eveniet debitis in amet illum nihil quis tenetur tempora accusamus quos impedit hic quo dignissimos sed! Est perspiciatis reiciendis quaerat repellendus voluptatem ipsum dolorum aut! Voluptates nostrum ad vero at similique.</p>
                    </div>
                    <div className="lg:px-[2rem] pb-2">
                        <div className="border-l-2 lg:px-[2rem] px-[1rem] flex flex-col gap-3 ">
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque cumque laboriosam veritatis quas corrupti non consequatur et repellendus soluta! Illum ullam dolores similique itaque modi corporis ipsam sapiente, perferendis voluptates!</p>
                            <p className="">- Steve Job's</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
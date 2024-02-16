import "./section2Contact.scss"
export const Section2Contact = () => {
    return (
        <>

            <div className={`flex lg:flex-row flex-col items-center gap-10 lg:px-[11rem] px-[1.5rem] py-[3rem] `}>
                <div className="lg:w-[50%] w-[100%]">
                    <iframe
                        className="w-[100%]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0582663025316!2d-7.5364266245874605!3d33.60379264127718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cc85bd0a58ff%3A0x1daa406025ec5cb5!2s130%20All.%20des%20Mimosas%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1707925816376!5m2!1sen!2sma"
                        height="400"
                        // style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <form className={`flex flex-col gap-3 lg:w-[50%] w-[100%] myForm`} >
                    <h1 className="text-[1.6rem] font-light">Send us your message</h1>
                    <input type="text" placeholder="Name" className="placeholder:font-light" />
                    <input type="email" placeholder="Email" className="placeholder:font-light" />
                    <input type="text" placeholder="Phone" className="placeholder:font-light" />
                    <textarea name="" id="" cols="10" rows="5" className="placeholder:font-light" placeholder="Message"></textarea>
                    <button className="bg-[#222222] text-white font-thin text-[1rem] rounded-3xl w-fit px-[3.5rem] py-[0.7rem] ">SEND</button>
                </form>

            </div>
        </>
    )
}
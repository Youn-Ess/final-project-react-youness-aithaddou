import { Footer } from "../../layouts/Footer"
import { Header } from "../../layouts/Header"
import { Section1Contact } from "./components/section1Contact"
import { Section2Contact } from "./components/section2Contact"


export const Contact = () => {
    return (
        <>
            <Header />
            <Section1Contact />
            <Section2Contact />
            <Footer/>
        </>
    )
}

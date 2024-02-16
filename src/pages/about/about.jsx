import { Footer } from "../../layouts/Footer"
import { Header } from "../../layouts/Header"
import { Section1About } from "./components/section1About"
import { Section2About } from "./components/section2About"


export const About = () => {
    return (
        <>
            <Header />
            <Section1About />
            <Section2About />
            <Footer />
        </>
    )
}

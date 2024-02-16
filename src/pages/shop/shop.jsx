import { Footer } from "../../layouts/Footer"
import { Header } from "../../layouts/Header"
import { Section1Shop } from "./components/section1Shop"
import { Section2Shop } from "./components/section2Shop"

export const Shop = () => {
    return (
        <>
            <Header />
            <Section1Shop />
            <Section2Shop/>
            <Footer />
        </>
    )
}
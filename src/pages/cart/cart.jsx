import { Footer } from "../../layouts/Footer"
import { Header } from "../../layouts/Header"
import { Section1Cart } from "./components/section1Cart"
import { Section2Cart } from "./components/section2Cart"

export const Cart = () => {
    return (
        <>
            <Header />
            <Section1Cart />
            <Section2Cart />
            <Footer />
        </>
    )
}
import { Footer } from '../../layouts/Footer.jsx'
import { Header } from '../../layouts/Header.jsx'
import { Section1Home } from './components/section1Home.jsx'
import { Section2Home } from './components/section2Home.jsx'
import { Section3Home } from './components/section3Home.jsx'
import { Section4Home } from './components/section4Home.jsx'
import { Section5Home } from './components/section5Home.jsx'
import { Section6Home } from './components/section6Home.jsx'

export const Home = () => {
    return (
        <>
            <Header />
            <Section1Home />
            <Section2Home />
            <Section3Home />
            <Section4Home />
            <Section5Home />
            <Section6Home />
            <Footer />
        </>
    )
}

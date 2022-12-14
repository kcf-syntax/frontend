
import styles from '../styles/pages/home/home.module.css'
import Header from "../components/header";
import Scan from "../components/scan";
import Title from "../components/title";
import Container from "../components/container";
import Recently from "../components/recently";

export default function Home() {
    return (
        <>
            <Container>
                <Header />
                <Title title={'μμνκΈ° π'} description={'λ°μ½λλ₯Ό μ΄¬μνκ±°λ μλ ₯νμ¬ μνμ μ‘°νν΄λ³΄μΈμ!'} />
                <Scan />
                <Title title={'μ΅κ·Ό μ‘°ν β³'} description={'μμ μ΄ μ΅κ·Όμ μ‘°νν λ°μ½λλ₯Ό κ°νΈνκ² νμΈν΄λ³΄μΈμ!'} />
                <Recently />
            </Container>
        </>
    )
}

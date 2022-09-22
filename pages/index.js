
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
                <Title title={'시작하기 🎉'} description={'바코드를 촬영하거나 입력하여 상품을 조회해보세요!'} />
                <Scan />
                <Title title={'최근 조회 ⏳'} description={'자신이 최근에 조회한 바코드를 간편하게 확인해보세요!'} />
                <Recently />
            </Container>
        </>
    )
}

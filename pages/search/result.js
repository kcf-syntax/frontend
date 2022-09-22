import styles from '../../styles/pages/result/result.module.css'
import Header from "../../components/header";
import Title from "../../components/title";
import Container from "../../components/container";

const Result = () => {
    return (
        <>
            <Container>
                <Header />
                <Title title={'검색 결과 🔍'} description={'인식된 상품의 정보를 보여드립니다.'}/>
            </Container>
        </>
    )
}

export default Result
import styles from '../../styles/pages/result/result.module.css'
import Header from "../../components/header";
import Title from "../../components/title";
import Container from "../../components/container";
import {useEffect, useState} from "react";
import{ useRouter} from "next/router";
import axios from "axios";

const Result = () => {

    const router = useRouter()
    const [data, setData] = useState({
        now_price: '4000원',
        history_price: '데이터가 없습니다.',
        image: 'https://s3.ap-northeast-2.amazonaws.com/gred/vendor/452/images/29_1588828308.jpg',
        maker: '오뚜기',
        news: '뉴스가 없습니다!',
        name: '오뚜기 맛있는 오뚜기밥',
    })

    useEffect(()=>{
        if (!router.isReady) return
        axios({
            method: 'post',
            url: 'http://localhost:2000/search',
            crossorigin: true,
            params: {
                barcode: router.query.barcode
            }
        })
            .then(r=>{
                if (r.data.code == '-1') {
                    return
                }
                setData(r.data)
            })

}, [router.isReady])

    return (
        <>
            <Container>
                <Header />
                <Title title={'검색 결과 🔍'} description={'인식된 상품의 정보를 보여드립니다.'}/>
                <div className={styles.title}>1. 제품 사진</div>
                <img className={styles.img} src={data.image} />
                <div className={styles.title}>2. 제품 이름</div>
                <div className={styles.text}>{data.name}</div>
                <div className={styles.title}>3. 제품 제조회사</div>
                <div className={styles.text}>{data.maker}</div>
                <div className={styles.title}>4. 가격 동향</div>
                <div className={styles.text}>현재가격: {data.now_price}</div>
                <div className={styles.text}>가격 동향: {data.history_price}</div>
                <div className={styles.title}>5. 관련 뉴스</div>
                <div className={styles.text}>{data.news}</div>
            </Container>
        </>
    )
}

export default Result
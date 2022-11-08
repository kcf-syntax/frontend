import styles from '../../styles/pages/barcode/barcode.module.css'
import Header from "../../components/header";
import {useState} from "react";
import Container from "../../components/container";
import Title from "../../components/title";
import {IoBarcodeSharp} from "react-icons/io5";
import {IoMdArrowDropright} from "react-icons/io";
import {useRouter} from "next/router";

const Barcode = () => {

    const [code, setCode] = useState('')
    const [img, setImg] = useState()
    const [view, setView] = useState(true)
    const router = useRouter()

    const onChangeImg = (e) => {
        e.preventDefault();
        if(e.target.files){
            const uploadFile = e.target.files[0]
            const formData = new FormData()
            formData.append('image',uploadFile)

            axios({
                method: 'post',
                url: 'http://localhost:2000/barcode/img',
                data: formData,
            })
                .then(r=>{
                    if (r.data.barcode != undefined) {
                        setCode(r.data.barcode)
                    } else {
                        return
                    }
                    router.push('/search/result?barcode='+code)
                })
        }
    }

    return (
        <>
            <Container>
                <Header />
                <Title title={'바코드 인식 📸'} description={'바코드를 조회할 수 있도록 진행해주세요'} />
                {view?(
                        <>
                            <div className={styles.camera}>
                                <div className={styles.code_info}>
                                    직접 입력말고, <strong style={{color:'black'}}>바코드가 있는 상품의 사진</strong> 촬영할래요 😀
                                </div>
                                <div className={styles.camera_button}>
                                    <label className={styles.label} htmlFor={'upload_barcode'}>사진 촬영하기&nbsp;<IoBarcodeSharp size={40} /></label>
                                    <input id={'upload_barcode'} type={'file'} accept={"image/*"} multiple onChange={onChangeImg} onInput={()=>{
                                        setView(false)
                                    }}/>
                                </div>
                                <div className={styles.code_warn}>
                                    사진에 원하는 상품의 <strong>바코드가 잘 보이고, 가운데에 위치</strong>하는지 확인해주세요!
                                    <br/><p style={{marginTop:'0.3rem'}}>PC로 진행하신다면 촬영한 파일을 선택해주세요.</p>
                                </div>
                            </div>
                            <div className={styles.bar} />
                            <div className={styles.code}>
                                <div className={styles.code_info}>
                                    바코드 인식대신, <strong style={{color:'black'}}>바코드 아래 숫자</strong> 입력할래요 🤩
                                </div>
                                <input type={'text'} className={styles.code_input} value={code} onChange={(e)=>setCode(e.target.value)} />
                                <div className={styles.code_warn}>
                                    정확하게 입력했는지 <strong>한번 더 확인</strong>해주세요!
                                </div>
                                <div className={styles.button} onClick={()=>{
                                    router.push('/search/result?barcode='+code)
                                }}>
                                    바코드 입력완료 <IoMdArrowDropright size={20}/>
                                </div>
                            </div>
                        </>
                ):(
                    <>
                        <div className={styles.a}>
                            처리 중 입니다. 잠시만 기다려주세요...
                        </div>
                    </>
                )}
            </Container>
        </>
    )
}

export default Barcode
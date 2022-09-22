import styles from '../styles/components/scan/scan.module.css'
import {IoScanSharp} from "react-icons/io5";
import {BsUpcScan} from "react-icons/bs";
import {useRouter} from "next/router";

const Scan = () => {
    const router=useRouter()
    return (
        <>
            <div className={styles.box}>
                <div className={styles.scan}>
                    <div className={styles.scan_start} onClick={()=>router.push('/search/barcode')}>
                        <div className={styles.scan_text}>
                            바코드 찍기
                            <span style={{margin: '0.5rem'}} />
                            {/*<IoScanSharp size={40} />*/}
                            <BsUpcScan size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scan
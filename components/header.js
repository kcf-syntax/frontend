import styles from '../styles/components/header/header.module.css'
import {IoBarcode} from "react-icons/io5";
import {useRouter} from "next/router";

const Header = () => {
    const router=useRouter()
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo} onClick={()=>router.push('/')}>
                    <div className={styles.logo_text}>
                        <div className={styles.icon}>
                            바코딩&nbsp;<IoBarcode size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
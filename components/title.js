import styles from '../styles/components/title/title.module.css'

const Title = (props) => {
    return (
        <>
            <div className={styles.box}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.description}>
                    {props.description}
                </div>
            </div>
        </>
    )
}

export default Title
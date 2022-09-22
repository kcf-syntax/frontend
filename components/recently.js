import styles from '../styles/components/recently/recently.module.css'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Recently = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                // spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className={styles.swiper}
            >
                <SwiperSlide className={styles.item}>

                </SwiperSlide>
                <SwiperSlide className={styles.item}>

                </SwiperSlide>
                <SwiperSlide className={styles.item}>

                </SwiperSlide>
                <SwiperSlide className={styles.item}>

                </SwiperSlide>
                <SwiperSlide className={styles.item}>

                </SwiperSlide>
                <SwiperSlide className={styles.item}>

                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Recently
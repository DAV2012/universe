import styles from "@/app/ui/ring/ring.module.css"


export default function Ring(){
    return(
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={`${styles.ring} ${styles["ring-1"]}`}></div>
                <div className={`${styles.ring} ${styles["ring-2"]}`}></div>
    

            </div>
        </div>
    )
}
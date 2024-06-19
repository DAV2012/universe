import styles from "@/app/ui/ring/ring.module.css"
import { meteoras } from "@/app/lib/data"
import Image from "next/image"



export default function Ring(){
    let distance = 200;
    return(
        <div className={styles.container}>
            <div className={styles.center}>
                {meteoras.map((meteora, index)=>{
                    const size = distance + (index * 200)
                    let rotate = Math.random()*360
                    return(
                        <div 
                        className={`${styles.ring}`} 
                        key={meteora.id}
                        style={{
                            height: `${size}px`,
                            width: `${size}px`,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: `translate(-50%, -50%) rotate(${Math.random()*360*2}deg)`
                            
                        }}
                    >
                        <Image
                            src={meteora.src}
                            alt="Celular iPhone-13"
                            width={0}
                            height={0}
                            sizes="cover"
                            style={{
                                zIndex: 1,
                                width: "auto",
                                height: "75px",
                                position:"absolute",
                                left:"50%",
                                transform: `translate(-50%, -50%)`
                            }} // opcional, puede no ser necesario
                        />
                    </div>
                    )
                })}
                
                
    

            </div>
        </div>
    )
}
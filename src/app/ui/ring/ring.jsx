'use client'

import React, { useEffect, useState } from "react";
import styles from "@/app/ui/ring/ring.module.css";
import { meteoras } from "@/app/lib/data";
import Image from "next/image";

export default function Ring() {
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        const container = document.getElementById('Conteiner');
        if (container) {
            const calculatedDistance = (container.clientHeight / meteoras.length);
            setDistance(calculatedDistance);
        }
    }, []);

    return (
        <div className={styles.container} id="Conteiner">
            <div className={styles.center}>
                {distance > 0 && meteoras.map((meteora, index) => {
                    const size = distance + (index * distance);
                    let rotate = Math.random() * 360;
                    return (
                        <div
                            className={`${styles.ring}`}
                            key={meteora.id}
                            style={{
                                height: `${size}px`,
                                width: `${size}px`,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: `translate(-50%, -50%) rotate(${rotate}deg)`
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
                                    position: "absolute",
                                    left: "50%",
                                    transform: `translate(-50%, -50%)`,
                                    height: `${Math.random() * distance * 0.5 + 30}px`
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

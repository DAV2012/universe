import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import Link from "next/link";
import Ring from "../ui/ring/ring";
import CardInfo from "../ui/meteora/card";

export default function Page() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
            <CardInfo/>
            <Ring></Ring>
    </div>
  );
}

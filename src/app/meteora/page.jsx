import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import Link from "next/link";
import Ring from "../ui/ring/ring";

export default function Page() {
  return (
    <div className="flex h-screen flex-row -mt-32 overflow-hidden">
            <Ring></Ring>
    </div>
  );
}

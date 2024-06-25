import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen lg:flex-row flex-col lg:p-24 lg:overflow-hidden overflow-x-hidden">
      <div className="w-full h-full p-16 self-center">
        <h1 className={"font-extrabold  text-6xl leading-tight tracking-tight"}>
          UX/UI Design Mastery Course
        </h1>
        <p className={"font-medium text-xl"}>
          Master UX/UI Design with our comprehensive course by learning
          practical skills, working on real-life projects and assignments and
          creating impactful user experiences.
        </p>
        <p className="my-20 font-semibold text-xl tracking-wide">
        More info at 
        <Link
         key={"meteora"}
         href={"/meteora"}
         className="underline text-rosa-400"

        > uxpeac</Link> 
      </p>
      </div>
      <div className="w-full h-full relative">
        <Image
          src="/iPhone-13.png"
          alt="Celular iPhone-13"
          width={0}
          height={0}
          sizes="cover"
          style={{
            zIndex: 1,
            width: "auto",
            height: "650px",
            position: "absolute",
          }} // opcional, puede no ser necesario
        />
        <Image
          src="/iPhone-13.png"
          alt="Celular iPhone-12"
          width={0}
          height={0}
          sizes="fill"
          style={{
            zIndex: 1,
            width: "auto",
            height: "650px",
            position: "absolute",
            left: "50%",
            top: "200px",
          }} // opcional, puede no ser necesario
        />
        <Image
          src="/heart-icon-1.png"
          alt="Favorite"
          width={0}
          height={0}
          sizes="fill"
          style={{
            zIndex:1,
            width: "auto",
            height: "200px",
            position: "absolute",
            left: "60%",
            top: "60px",
          }} // opcional, puede no ser necesario
        />
        <Image
          src="/heart-icon-1.png"
          alt="Favorite"
          width={0}
          height={0}
          sizes="fill"
          style={{
            zIndex:1,
            width: "auto",
            height: "150px",
            position: "absolute",
            left: "80%",
            top: "0px",
          }} // opcional, puede no ser necesario
        />
        <Image
          src="/heart-icon-1.png"
          alt="Favorite"
          width={0}
          height={0}
          sizes="fill"
          priority={true}
          style={{
            zIndex:1,
            width: "auto",
            height: "80px",
            position: "absolute",
            left: "80%",
            top: "150px",
          }} // opcional, puede no ser necesario
        />
        <div className={styles["bg-hero"]}></div>
      </div>
    </main>
  );
}

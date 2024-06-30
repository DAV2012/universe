import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="m-auto w-1/3">
      <h1
        className={
          "font-extrabold text-white text-6xl leading-tight tracking-tight"
        }
      >
        About Us
      </h1>
      <p>
        Nuestra página es una muestra de diseño creada a partir de una maqueta
        en Figma. La maqueta original fue diseñada por
      </p>
      <Link
        key={"meteora"}
        href={"https://www.figma.com/@designrip"}
        className="underline text-rosa-400"
      >
        
        UXUI <strong>@designrip</strong>
      </Link>
      <p>
        y puedes verla en <br />
        <Link
          key={"meteora"}
          href={"https://www.figma.com/community/file/1280962126314947027"}
          className="underline text-rosa-400"
        >
          {" "}
          3D Interactive Planet Animation
        </Link>
      </p>
    </section>
  );
}

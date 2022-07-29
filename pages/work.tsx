import Image from "next/image";

export default function Work() {
  return (
    <div className="text-center">
      <Image
        width={600}
        height={400}
        style={{ borderRadius: 20 }}
        src={"/images/alvaro-reyes.jpeg"}
      ></Image>
      <p>This page is dedicated to my working experience that lead me here.</p>
    </div>
  );
}

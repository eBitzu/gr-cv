import Image from "next/image";

export default function Learn() {
  return (
    <div className="text-center">
      <Image
        width={600}
        height={400}
        style={{ borderRadius: 20 }}
        src={"/images/priscilla-du-preez.jpeg"}
      ></Image>
      <p className="text-center">This page is dedicated to my learning activities</p>
    </div>
  );
}

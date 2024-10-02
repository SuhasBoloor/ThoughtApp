import Image from "next/image";
import CardHolder from "./components/CardContainer";

export default function Home() {
  return (
    <section className="w-full flex flex-center flex-col">
      <h1 className="">Discover and Share your prompts and ideas</h1>
      <br />
      <p>TOODOD add some text here</p>
      <CardHolder />
    </section>
  );
}

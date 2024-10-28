import { LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <section className="flexCenter h-screen w-[calc(100vw-10px)]">
      <LoaderIcon className="w-10 h-10 animate-spin" />
    </section>
  );
}
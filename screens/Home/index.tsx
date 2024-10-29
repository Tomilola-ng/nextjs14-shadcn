import ResponsiveGrid from "@/components/Reusables/ResponsiveGrid";
import { Image } from "lucide-react";


export default function HomeScreen() {
  return (
   <ResponsiveGrid className="bg-blue-100 p-8" >
      <div className="flexCenter">
        <h1 className="font-bold text-3xl">Home</h1>
      </div>

      <Image size={48} className="text-blue-700" />

      <p className="col-span-full">
        Edit <code className="text-blue-700">screens/Home/index.tsx</code> and save to reload.
      </p>
   </ResponsiveGrid>
  );
}

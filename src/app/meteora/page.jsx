import Ring from "@/app/ui/ring/ring";
import CardInfo from "@/app/ui/meteora/card";
import Stars from "@/app/ui/stars/stars";
import StarCanvas from "@/app/ui/stars/stars";

export default function Page() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
            
            <CardInfo/>
         
            <Ring></Ring>
    </div>
  );
}

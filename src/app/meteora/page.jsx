import Orbits from "@/app/ui/orbits/orbits"
import { meteoras } from "../lib/data";


export default function Page() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
            
          <Orbits data={meteoras}/>

    </div>
  );
}

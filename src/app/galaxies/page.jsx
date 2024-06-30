
import { galaxy } from "../lib/data";
import OrbitsGalaxys from "../ui/orbitsGalaxys/orbitsGalaxys";



export default function Page() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
            
          <OrbitsGalaxys data={galaxy}/>

    </div>
  );
}

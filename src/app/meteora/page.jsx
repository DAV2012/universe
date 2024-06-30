
import { meteoras } from "../lib/data";
import OrbitsMeteoras from "../ui/orbitsMeteora/orbitsMeteora";


export default function Page() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
            
          <OrbitsMeteoras data={meteoras}/>

    </div>
  );
}

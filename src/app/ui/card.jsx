export default function CardInfo ({data}) {
    return(
        <div className="flex flex-col items-center md:py-6 z-10 drop-shadow-2xl z-1">
            <h2 className="uppercase text-white/90 font-medium md:text-6xl text-3xl tracking-widest pb-6">{data.name}</h2>
            <ul className="flex md:gap-32 gap-y-8 md:p-16 p-8 flex-wrap">
                <li className="md:w-auto w-2/4">
                    <h3 className="uppercase font-light md:text-lg text-xs  tracking-widest">GALAXY</h3>
                    <p className="text-white/90 font-light md:text-lg text-xs ">{data.galaxy}</p>
                </li>
                <li className="md:w-auto w-2/4">
                    <h3 className="uppercase font-light md:text-lg text-xs tracking-widest">DIAMETER</h3>
                    <p className="text-white/90 font-light md:text-lg text-xs">{data.diameter}</p>
                </li>
                <li className="md:w-auto w-2/4"> 
                    <h3 className="uppercase font-light md:text-lg text-xs tracking-widest">DAY LENGTH</h3>
                    <p className="text-white/90 font-light md:text-lg text-xs">{data.dayLength}</p>
                </li>
                <li className="md:w-auto w-2/4">
                    <h3 className="uppercase font-light md:text-lg text-xs tracking-widest">AVG TEMPERATURE</h3>
                    <p className="text-white/90 font-light md:text-lg text-xs">{data.avgTemperature}</p>
                </li>
                <li className="md:w-auto w-2/4">
                    <h3 className="uppercase font-light md:text-lg text-xs tracking-widest">CLIMATE</h3>
                    <p className="text-white/90 font-light md:text-lg text-xs">{data.climate}</p>
                </li>


            </ul>
        </div>
    )
}
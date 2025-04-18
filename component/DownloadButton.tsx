import Image from "next/image";
import downloadButtonData from '../constants/downloadButtonData'
const DownloadButton = () => {
   return (
     <div className="flex gap-10  ">
       {downloadButtonData.map((btn, idx) => (
         <div
           key={idx}
           className="flex justify-start   max-lg:w-44  py-4 px-2 lg:px-10 rounded-lg bg-black gap-3 mt-10"
         >
           <Image
             src={btn.image}
             alt="Dynamic Image"
             width={100}
             height={20}
             className="w-5"
           />
           <div className="flex flex-col items-start justify-center text-white gap-0">
             <p className="text-[10px]">{btn.p1}</p>
             <p className="text-xs font-bold">{btn.p2}</p>
           </div>
         </div>
       ))}
     </div>
   );
};

export default DownloadButton;

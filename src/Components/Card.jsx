 
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";
import {motion} from "framer-motion"
export const Card = ({data , nobound }) => {
  return (
    <div>
        <motion.div  drag dragConstraints = {nobound} whileDrag={{scale:1.2}}  className=" relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaFileAlt/>
        <p className="mt-5 text-sm font-semibold leading-tight font-sans">{data.desc}</p>
         <div className="   footer absolute bottom-0  w-full  left-0 overflow-hidden">
            <div className="flex items-center justify-between mb-3 py-3 px-8 "> 
                <h5>{data.filesize}</h5>
               <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                {data.close ? <FaRegWindowClose/> :  <FaDownload color="#fff" size = ".7em" />} 
              
               </span>
            </div>

            {data.tag.isopen && (
 <div className={`tag w-full py-4  ${data.tag.tagColor === 'blue' ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
 <h3 className="text-sm font-sans font-semibold"> {data.tag.tagTitle}</h3>
</div> 
            )}

           
         </div>
        </motion.div>
    </div>
  )
}

import { useRef } from "react";
import { Card } from "./Card"
 



 

export const Ground = () => {

    const ref = useRef(null);
    
    const data = [
        {
            desc:"This is something that i dont even know and i am loving it as much as i can and i will repeat the statement again and again",
            filesize: "0.9mb",
            close:true,
            tag:{isopen:true,tagTitle:"Download Now" , tagColor :"green"},
        },
        {
            desc:"this is blue card",
            filesize: "0.9mb",
            close:true,
            tag:{isopen:true,tagTitle:"Download Now" , tagColor :"blue"},
        },
        {
            desc:"This is something else",
            filesize: "0.9mb",
            close:true,
            tag:{isopen:false,tagTitle:"Download Now" , tagColor :"green"},
        },
        {
            desc:"This is something else",
            filesize: "0.9mb",
            close:true,
            tag:{isopen:false,tagTitle:"Download Now" , tagColor :"green"},
        },
        {
            desc:"Yeah, that's, you know, I find that's very interesting and the way you have framed the answer is like very, you know, logical and very exceptional and I think for today I'll be leaving things here ",
            filesize: "0.9mb",
            close:true,
            tag:{isopen:false,tagTitle:"Download Now" , tagColor :"green"},
        },
        {
            desc:"This is something else",
            filesize: "0.9mb",
            close:true,
            tag:{isopen:true,tagTitle:"Download Now" , tagColor :"green"},
        }

       
    ];
    return (
      <div>
          <div  ref = {ref} className=" flex shrink-0 fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5  ">
           {data.map((item , index)=>(
            <Card data={item} nobound= {ref} />
           ))}
             
          </div>
      </div>
    )
  }
  
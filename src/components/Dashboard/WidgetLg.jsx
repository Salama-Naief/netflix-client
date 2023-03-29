import {Link} from "react-router-dom";
import {MdRemoveRedEye} from "react-icons/md";
export default function WidgetLg({movie}) {
  return (
  <div className="md:p-4">
     <div className="p-4 box">
     <div className="capitalize pb-2 text-lg font-semibold "> Latest Movies</div>
         <table className="w-full " style={{borderSpacing:"20px"}}>
            <thead>
             <tr className="text-left ">
                    <th className="py-2 ">Movie</th>
                    <th className=" ">Genre</th>
                    <th className=" ">year</th>
                    
             </tr>
             </thead>
             <tbody>
          {movie?.map(m=> ( <tr className="text-left text-base font-normal">
               <th className="font-normal p-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                    <img className="w-full h-full object-cover" src={m.img} alt="na" />
                    </div>
                    <div className="">
                        <div className="capitalize text-normal">{m.title}</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal p-2 text-gray-400">
                 <div>{m.genre}</div>
               </th>
               <th  className="font-normal text-gray-400 p-2">
                 <div>{m.year}</div>
               </th>
               <th  className="font-normal  p-2">
                  <Link to={{pathname:`/dashbord/movieupdate/${m._id}`,movie:movie}} className="flex items-center cursor-pointer bg-gray-200 py-1 px-2 rounded-lg">
                    <MdRemoveRedEye/>
                    <div className="text-gray-500 text-sm ml-1.5">Display</div>
                 </Link>  
               </th>
               </tr>
           ))}
            </tbody>
         </table>
     </div>
  </div>
  );
}

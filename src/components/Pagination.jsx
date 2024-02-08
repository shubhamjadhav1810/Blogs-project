import React, { useContext } from "react";
import { AppContext } from "../context/appContext";

const Pagination = ()=>{

   const {page,handlePageChange,totalpages}=useContext(AppContext);

 return(
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white ">
      <div className="flex justify-between w-11/12 max-w-[650px] py-2">
        <div className="flex gap-x-2">
        { page > 1 && (
            <button
            className="rounded-md border-2 px-4 py-1  "
            onClick={()=>handlePageChange(page-1)}>
               previous
            </button>
         )
         }

         { page < totalpages && (
            <button
            className="rounded-md border-2 px-4 py-1  "
            onClick={()=>handlePageChange(page+1)}>
               next
            </button>
         )
         }
        </div>

         <p className="font-bold text-sm mt-[6px] ">Page {page} of {totalpages}</p>
      </div>
    </div>
 )
}

export default Pagination;
import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import Spinner from "./Spinner";

const Blogs = ()=>{
   //consume step 3
   const {posts,loading}=useContext(AppContext);


 return(
    <div className="w-11/12 max-w-[650px]  py-8 flex flex-col gap-y-8 mt-[65px] mb-[40px] items-center justify-center">
     {
      loading ? (<Spinner/>):
      (
         posts.length===0 ? (
            <div>
               <p>posts not found</p>
            </div>
         ) :
         (
            posts.map((post)=>(
               <div>
                  <p className="font-bold text-lg">{post.title}</p>
                  <p className="mt-[4px] text-sm ">
                     By <span className="italic ">{post.author}</span> on <span className="underline font-bold"> {post.category}</span>
                  </p>

                  <p className="mt-[4px] text-sm ">
                     posted on <span>{post.date}</span>
                  </p>
                  <p className="mt-[14px] text-md ">{post.content}</p>

                 <div className="flex gap-x-3">
                  {
                     post.tags.map((tag)=>{
                        return <span className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
                     })
                  }
                 </div>
               </div>
            ))
         )
      )
     }

    </div>
 )
}

export default Blogs;
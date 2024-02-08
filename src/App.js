import Header from "./components/Header.jsx";
import Blogs from "./components/Blogs.jsx";
import Pagination from "./components/Pagination.jsx";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/appContext.js";
import "./App.css";

export default function App() {

  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
     fetchBlogPosts();
  },[])
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  );
}

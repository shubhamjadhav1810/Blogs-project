import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl.js";

//step1 creation
export const AppContext= createContext();

export default function AppContextProvider({children}){

    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [posts,setPosts] = useState([]);
    const [totalpages,setTotalPages] = useState(null);

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try {
            const res=await fetch(url);
            const data = await res.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            
            console.log("ERROR occured during fetching ");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }

    function handlePageChange(page){
       setPage(page);
       fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalpages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    //step2 provider
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
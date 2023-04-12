import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import Card from '../Components/Card';
import Header from '../Components/Header';
import { AppContext } from '../context/AppContext';

const BlogPage = () => {
    const  newUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelateBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1).replaceAll("%20  ", " ");

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelateBlogs(data.relatedBlogs);

        }
        catch (error) {
            console.log("Error Found 400!")
            setBlog(null);
            setRelateBlogs([]);

        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs()
        }
    }, [location.pathname])
    return (
        <div>
            <Header />
            <div className="w-11/12 max-w-[760px] mx-auto">
            <div className="relative flex gap-4 top-[4.5rem] mb-[6rem] ">
                <button     
                    onClick={() => navigate(-1)} 
                    className='bg-purple-500 hover:bg-purple-600 py-1 px-4 border-2 
                    border-purple-700 transition-all duration-200 font-semibold text-lg cursor-pointer'>Back
                </button>
            </div>  

            {
                loading ?
                    <div  > Loading</div> :
                    blog ?
                        (<div className="pb-10">
                            <div>
                                <Card post={blog}/>
                            </div>
                            <h2  className=" mt-10 mb-5 font-bold text-4xl text-red-900">Related Blogs-</h2>
                            <div>
                                {relatedBlogs.map((relatedBlog, index) => (
                                <Card key={index} post={relatedBlog} />
                                ))}
                            </div>
                        </div>
                        ) :
                        (<div>
                            No Blog Found
                        
                         </div>
                        )

        }

        </div>


        </div>
    )
}

export default BlogPage
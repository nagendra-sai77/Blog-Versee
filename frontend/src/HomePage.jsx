import NavBar from "./NavBar";
const HomePage = () => {
    const posts = [
        {
            id: 1,
            title: "Getting Started with React and Tailwind CSS",
            description: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from set",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "sai"


        },
        {
            id: 2,
            title: "The Future of Web Development",
            description: "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new framewor",
            time: "5 min read",
            profile: "vite.svg",
            pic: "./image.png",
            author: "surya"

        },
        {
            id: 3,
            title: "Mindful Living in a Digital Age",
            description: "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental well-being while staying productive6",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "Pavan"

        },
        {
            id: 4,
            title: "Building Scalable Node.js Applications",
            description: "Learn the best practices for building robust and scalable Node.js applications. This guide covers architecture patterns, performance optimizatio",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "Mohith"
        }
        ,
        {
            id: 5,
            title: "Design Systems: A Complete Guide",
            description: "Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "Thohid"

        }
        ,
        {
            id: 6,
            title: "Introduction to Machine Learning",
            description: "Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "Sampi"
        }
    ]
    return (
        <div>
            <NavBar/>
        <div className=" min-h-screen  items-center mt-5">
            <div className=" items-center">
                <h1 className="font-extrabold text-3xl text-center" >Welcome to blog Verse</h1>
                <p className="text-gray-500 text-xl text-center">Discover amazing stories, insights, and ideas from our community of writers.<br /><span className="text-blue-400 hover:cursor-pointer hover:text-blue-600">SignIn</span> to create your own posts and save your favorites.</p>
                <div className="grid grid-cols-3 gap-10 p-10 ">
                    {
                        posts.map((post) => (
                            <div key={post.id} className="border-1 rounded-2xl  ">
                                <div>
                                    {<img src= {post.pic} alt="" className="border-0 rounded-2xl"></img>}

                                </div>
                                <div className="flex font-semibold gap-5 rounded-full px-5 mt-5">
                                { <img src={post.profile} alt=""></img>}
                                {post.author}
                                </div>

                                
                               <div className="font-extrabold text-2xl hover:text-blue-400 cursor-pointer p-5">
                                {post.title}
                               </div> 
                               <div className="text-xl text-neutral-600 p-5">
                                {post.description}
                               </div>
                               <div className="p-5">
                                    {
                                        post.time
                                    }

                                </div>
                            </div>
                            
                           

                        ))
                    }
                </div>

            </div>
        </div>
        </div>

    )
}
export default HomePage;
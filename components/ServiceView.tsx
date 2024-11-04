"use client"
import { Post } from "@/sanity.types"
import { AnimatePresence ,motion} from "framer-motion";

interface PostTyep{
    posts:Post[];
}

const ServiceView = ({ posts }: PostTyep) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
            {posts.map((post,index) => {
                return (
                    <AnimatePresence key={index}>
                        <motion.div layout initial={{opacity:0.2}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className="flex justify-center"
                        >

                <PostCard  post={post}/>
                        </motion.div>
                </AnimatePresence>
                )
            })}
            
        </div>
    )
}

export default ServiceView

const PostCard = ({ post }: { post: Post }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-4">
            <h1 className="text-lg font-bold">{post.title}</h1>
        </div>
    )
}
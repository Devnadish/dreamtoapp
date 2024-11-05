import { AnimatePresence, motion } from "framer-motion";
import PostCard from "./PostCard"; // Import the PostCard component
import { Post } from "@/sanity.types";

type PostListProps = {
  posts: Post[];
  isExpanded: boolean;
  gallery?: boolean;
};

const PostList = ({ posts, isExpanded, gallery }: PostListProps) => {
  const displayedPosts = isExpanded ? posts : posts.slice(0, 3); // Show only 2 posts by default

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mt-4 gap-6 justify-items-center w-full  ">
      <AnimatePresence>
        {displayedPosts.map((post) => (
          <motion.div
            key={post._id}
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center w-full   "
          >
            <PostCard post={post} gallery={gallery} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PostList;

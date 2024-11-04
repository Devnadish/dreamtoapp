"use client";
import { imageUrl } from "@/lib/imageUrl";
import { Post } from "@/sanity.types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TypeDefine = {
  posts: Post[];
};

const ServiceView = ({ posts }: TypeDefine) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-4 gap-10">
      <AnimatePresence>
        {posts.map((post, index) => (
          <motion.div
            key={post._id} // Use a unique identifier for the key
            layout
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ServiceView;

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="w-full sm:w-[350px] flex flex-col min-w-[300px] h-full">
      <div className="h-48 relative">
        <Image
          src={
            post.mainImage
              ? imageUrl(post.mainImage).url()
              : "/fallback-image.jpg"
          }
          alt="Fallback image"
          fill
          className="object-contain transition-transform duration-200 group-hover:scale-105 rounded-t-lg "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold font-outfit ">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground font-outfit">{post.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

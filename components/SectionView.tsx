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
import SectionTitle from "./post/SectionTitle";
import { IcRoundTouchApp } from "./icons/OurService";
import React from "react"; // Import React for memoization
import { useState } from "react"; // Import useState for managing expanded state

type TypeDefine = {
  posts: Post[];
  title: string;
  icon: React.ReactNode;
  gallery?: boolean;
};

("use client");
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";
import PostList from "./post/PostList"; // Import the PostList component
import { Post } from "@/sanity.types";

type TypeDefine = {
  posts: Post[];
  title: string;
  icon: React.ReactNode;
};

const SectionView = ({ posts, title, icon }: TypeDefine) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <SectionTitle title={title} icon={icon} />
      <PostList posts={posts} isExpanded={isExpanded} />{" "}
      {/* Use PostList here */}
      <Button onClick={() => setIsExpanded(!isExpanded)} className="mt-4">
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default SectionView;
const PostCard = React.memo(
  ({ post, gallery }: { post: Post; gallery?: boolean }) => {
    // Memoize PostCard for performance
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false); // State for description expansion

    return (
      <Card className="w-full sm:w-[350px] flex flex-col min-w-[300px] h-full mx-auto">
        {" "}
        {/* Center the card */}
        <div className="relative w-full h-0 pb-[50%]">
          <Image
            src={
              post.mainImage
                ? imageUrl(post.mainImage).url()
                : "/fallback-image.jpg"
            }
            alt={post.title || "Fallback image"} // Dynamic alt text for SEO
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105 rounded-t-lg "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority // Load critical images first
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold font-outfit ">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p
            className={`text-muted-foreground font-outfit ${isDescriptionExpanded ? "" : "line-clamp-2"}`}
          >
            {post.description}
          </p>
          {post.description &&
            post.description.length > 100 && ( // Check if description exists and is longer than 100 characters
              <Button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="text-blue-500 mt-2"
              >
                {isDescriptionExpanded ? "Show Less" : "Read More"}
              </Button>
            )}
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          {" "}
          {/* Center the buttons */}
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200 mb-2">
            Read More About the Service
          </Button>
          {gallery && ( // Check if gallery is true
            <Button className="w-full bg-gray-300 text-black hover:bg-gray-400 transition duration-200">
              View Gallery
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  }
); // End of PostCard

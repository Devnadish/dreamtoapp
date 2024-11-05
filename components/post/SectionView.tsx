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
import SectionTitle from "./SectionTitle";
import React from "react"; // Import React for memoization
import { useState } from "react"; // Import useState for managing expanded state
import PostList from "./PostList";
import { ChevronDown, ChevronUp } from "lucide-react";

type TypeDefine = {
  posts: Post[];
  title: string;
  icon: React.ReactNode;
  gallery?: boolean;
};

const SectionView = ({ posts, title, icon, gallery }: TypeDefine) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion
  const displayedPosts = isExpanded ? posts : posts.slice(0, 3); // Show 3 posts by default

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <SectionTitle title={title} icon={icon} />
        <Button
          variant={"outline"}
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="ml-2" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown className="ml-2" />
            </>
          )}
        </Button>
      </div>

      <PostList posts={posts} isExpanded={isExpanded} gallery={gallery} />
    </div>
  );
};

export default SectionView;

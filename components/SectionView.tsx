"use client";
import { Post } from "@/sanity.types";
import React from "react"; // Import React for memoization
import { useState } from "react"; // Import useState for managing expanded state
import PostList from "./post/PostList";
import ExpandButton from "./ExpandButton";
import SectionTitle from "./post/SectionTitle";

type TypeDefine = {
  posts: Post[];
  title: string;
  icon: React.ReactNode;
  gallery?: boolean;
};
 

 

const SectionView = ({ posts, title, icon }: TypeDefine) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <div className="flex flex-col">
      <SectionTitle title={title} icon={icon} />
      <PostList posts={posts} isExpanded={isExpanded} />{" "}
      {/* Use PostList here */}
       <ExpandButton isExpanded={isExpanded} onClick={()=>setIsExpanded(!isExpanded)} />
    </div>
  );
};

export default SectionView;
// End of PostCard

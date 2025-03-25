import { use, useEffect, useState } from "react";
import { fetchAllPost } from "../../../utilities/fetchers";
import PostItem from "./PostItem";

const promise = fetchAllPost();
const Posts = () => {
  const posts = use(promise) || [];
  const [limit, setLimit] = useState(4);
  const [currentPosts, setCurrentPosts] = useState([]);

  const handleShowMore = () => {
    setLimit(limit + 4);
    //   setCurrentPosts(posts.slice(0, limit));
  };

  useEffect(() => {
    setCurrentPosts(posts.slice(0, limit));
  }, [limit, posts]);
  console.log(posts);
  return (
    <div>
      <h2 className="text-2xl py-10 font-bold">
        Total Post {posts.length} || Showing first {limit}
      </h2>
      {currentPosts.map((post) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
      <button className="btn btn-primary" onClick={handleShowMore}>
        Show More
      </button>
    </div>
  );
};

export default Posts;

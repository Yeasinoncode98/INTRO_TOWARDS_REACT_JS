import { use } from "react";
import Singlepost from "./Singlepost";

export default function Posts({ postsPromise }) {
  const posts = use(postsPromise);

  return (
    <div className="card">
      <h2>All Posts are here: {posts.length} </h2>
      {
        posts.map(post=> <Singlepost key={post.id} post={post}></Singlepost>)
      }
    </div>
  );
}

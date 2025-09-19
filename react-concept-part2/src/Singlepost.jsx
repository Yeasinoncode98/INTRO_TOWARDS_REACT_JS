export default function Singlepost({ post }) {
  return (
    <div className="card">
      <h5>{post.title} </h5>
      <p>{post.body}</p>
    </div>
  );
}

const PostItem = ({ post }) => {
  return (
    <div className="border-2 rounded-xl my-10 p-3">
      <h2 className="bg-gray-400 p-1">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;

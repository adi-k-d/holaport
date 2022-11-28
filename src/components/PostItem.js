function PostItem({ post }) {
  return (
    <div className="post">
      <div>{new Date(post.createdAt).toLocaleString("en-US")}</div>
      <h2>{post.text}</h2>
      <button className="close">X</button>
    </div>
  )
}

export default PostItem

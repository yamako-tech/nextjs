const Post = ({ post }) => {
    return <div>
        <span>{post.id}</span>
        {" : "}
        <span className="cursor-pointer text-green-700 border-b border-yellow-200 hover:bg-gray-200">
            {post.title}
        </span>
    </div>
};

export default Post;
import Link from "next/Link";

const Post = ({ post }) => {
    return <div>
        <span>{post.id}</span>
        {" : "}
        <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-green-700 border-b border-yellow-200 hover:bg-gray-200">
            {post.title}
        </span>
        </Link>
    </div>
};

export default Post;
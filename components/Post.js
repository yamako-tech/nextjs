import Link from "next/link";

export default function Post({ post }) {
    return <div>
        <span>{post.id}</span>
        {" : "}
        <Link href={`/posts/${post.id}`} passHref>
        <span className="cursor-pointer text-green-700 border-b border-yellow-200 hover:bg-gray-200">
            {post.title}
        </span>
        </Link>
    </div>
};

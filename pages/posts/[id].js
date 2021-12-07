import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData  } from "../../lib/posts";
import Image from "next/image";

export default function Post({ post}) {
    if (!post) {
        return <div>Loading...</div>
    }

    return <Layout title={post.title}>
            <div className="bg-yellow-50 text-center p-8 w-100 rounded">
                <p className="m-4">
                    {"ID : "}
                    {post.id}
                </p>
                <p className="mb-8 text-xl font-bold">{post.title}</p>
                <p className="px-10">{post.body}</p>
            </div>
            <Link href="/blog-page">
                <div className="flex cursor-pointer p-2">
                <Image src="/arrow.svg" alt="arrow icon" width={20} height={20} />
                <span className="pl-2">Back to Blog List</span>
                </div>
            </Link>
    </Layout>;
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { post: post } = await getPostData(params.id);
    return {
        props: {
            post,
        },
    };
}
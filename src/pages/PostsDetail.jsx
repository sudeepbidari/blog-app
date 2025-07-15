import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PostsDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setPost(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (!post) return <div className="text-center">Post not found.</div>;

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <Link to="/posts" className="text-sm text-blue-500 hover:underline mb-4 inline-block">
                ← Back to Posts
            </Link>
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-800">{post.body}</p>
        </div>
    );
}
export default PostsDetail;
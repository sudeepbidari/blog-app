import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">📚 Blog Posts</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {posts.map((post) => (
                <Link
                    to={`/posts/${post.id}`}
                    key={post.id}
                    className="block bg-white p-5 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition"
                >
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
                </Link>
                ))}
            </div>
            </div>
    );
}
export default Posts;
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import PostsDetail from './pages/PostsDetail';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 flex justify-end bg-white shadow sticky top-0 z-10">
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/posts" className="text-blue-600 hover:underline">Posts</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        </nav>      
      </header>

      <main className="max-w-4xl mx-auto p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/posts/:id' element={<PostsDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
        
    </div>
  )
}

export default App;

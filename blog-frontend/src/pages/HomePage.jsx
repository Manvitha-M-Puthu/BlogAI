import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  HeartIcon, 
  ChatBubbleLeftIcon,
  EyeIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

const HomePage = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Mock data - replace with API calls
  useEffect(() => {
    setFeaturedPosts([
      {
        id: 1,
        title: "The Future of AI in Content Creation",
        excerpt: "Explore how artificial intelligence is revolutionizing the way we create and consume content...",
        author: "Sarah Johnson",
        authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
        publishedAt: "2 hours ago",
        likes: 234,
        comments: 45,
        views: 1200,
        tags: ["AI", "Technology", "Future"]
      },
      {
        id: 2,
        title: "Building Better Communities Online",
        excerpt: "How to foster meaningful connections and create safe spaces for authentic conversations...",
        author: "Mike Chen",
        authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
        publishedAt: "5 hours ago",
        likes: 189,
        comments: 32,
        views: 892,
        tags: ["Community", "Social", "Connection"]
      },
      {
        id: 3,
        title: "The Art of Minimalist Design",
        excerpt: "Less is more: discovering the power of simplicity in modern design principles...",
        author: "Emma Davis",
        authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600",
        publishedAt: "1 day ago",
        likes: 156,
        comments: 28,
        views: 743,
        tags: ["Design", "Minimalism", "Art"]
      }
    ]);

    setReviews([
      {
        id: 1,
        name: "Alex Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        rating: 5,
        review: "BlogAI has completely transformed how I write. The AI assistance is incredible!",
        role: "Content Creator"
      },
      {
        id: 2,
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        rating: 5,
        review: "The community features make blogging so much more engaging. Love it!",
        role: "Marketing Manager"
      },
      {
        id: 3,
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        rating: 4,
        review: "Great platform with innovative features. The AI enhancements are game-changing.",
        role: "Tech Blogger"
      }
    ]);
  }, []);

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Write with <span className="text-yellow-400">AI Power</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Create, enhance, and share your stories with cutting-edge AI assistance. 
              Join a community of passionate writers and readers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <SparklesIcon className="w-5 h-5 inline mr-2" />
                Start Writing
              </Link>
              <Link to="/community" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-4 text-lg">
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the most engaging and thought-provoking content from our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/post/${post.id}`} className="block group">
                  <div className="card hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <div className="relative mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-3 left-3">
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/90 text-xs font-medium text-gray-700 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.publishedAt}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <HeartIcon className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <ChatBubbleLeftIcon className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <EyeIcon className="w-4 h-4" />
                          <span>{post.views}</span>
                        </span>
                      </div>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Writers Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied writers who love BlogAI
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="card max-w-2xl mx-auto">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: reviews[currentReview]?.rating || 0 }).map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6">
                    "{reviews[currentReview]?.review}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-3">
                    <img
                      src={reviews[currentReview]?.avatar}
                      alt={reviews[currentReview]?.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {reviews[currentReview]?.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {reviews[currentReview]?.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Review indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentReview ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join BlogAI today and experience the future of content creation
          </p>
          <Link to="/register" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
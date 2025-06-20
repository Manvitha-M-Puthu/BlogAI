import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  HeartIcon, 
  ChatBubbleLeftIcon,
  EyeIcon,
  StarIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckIcon,
  UserGroupIcon,
  BookOpenIcon,
  LightBulbIcon
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
        tags: ["AI", "Technology", "Future"],
        readTime: "5 min read"
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
        tags: ["Community", "Social", "Connection"],
        readTime: "3 min read"
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
        tags: ["Design", "Minimalism", "Art"],
        readTime: "4 min read"
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

  const features = [
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "AI-Powered Writing",
      description: "Get intelligent suggestions, grammar corrections, and content enhancement with our advanced AI."
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Community Driven",
      description: "Connect with like-minded writers, share your stories, and build meaningful relationships."
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Smart Insights",
      description: "Track your writing progress with detailed analytics and personalized recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with enhanced gradient and animations */}
      <section className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-8"
            >
              <SparklesIcon className="w-4 h-4 mr-2 text-yellow-400" />
              AI-Powered Blog Platform
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Write with{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI Power
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Create, enhance, and share your stories with cutting-edge AI assistance. 
              Join a community of passionate writers and readers who are shaping the future of content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/blog" 
                className="group relative inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <SparklesIcon className="w-6 h-6 mr-3 text-purple-600" />
                Start Writing Free
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <PlayIcon className="w-6 h-6 mr-3" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm opacity-80">Active Writers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Stories Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm opacity-80">User Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose BlogAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of blogging with powerful AI tools and community features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts with enhanced styling */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most engaging and thought-provoking content from our community of writers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/post/${post.id}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Tags overlay */}
                      <div className="absolute top-4 left-4">
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Read time badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      {/* Author info */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="w-10 h-10 rounded-full border-2 border-gray-100"
                          />
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                            <div className="text-xs text-gray-500">{post.publishedAt}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Engagement stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-6">
                          <span className="flex items-center space-x-2 text-sm text-gray-500 hover:text-red-500 transition-colors">
                            <HeartIcon className="w-4 h-4" />
                            <span className="font-medium">{post.likes}</span>
                          </span>
                          <span className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                            <ChatBubbleLeftIcon className="w-4 h-4" />
                            <span className="font-medium">{post.comments}</span>
                          </span>
                          <span className="flex items-center space-x-2 text-sm text-gray-500">
                            <EyeIcon className="w-4 h-4" />
                            <span className="font-medium">{post.views}</span>
                          </span>
                        </div>
                        <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <BookOpenIcon className="w-5 h-5 mr-2" />
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Reviews Carousel */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Writers Say
            </h2>
            <p className="text-xl text-gray-600">
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
                <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-3xl mx-auto relative">
                  {/* Quote marks */}
                  <div className="absolute top-6 left-8 text-6xl text-purple-200 font-serif">"</div>
                  
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: reviews[currentReview]?.rating || 0 }).map((_, i) => (
                      <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 mb-8 font-medium leading-relaxed relative z-10">
                    {reviews[currentReview]?.review}
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={reviews[currentReview]?.avatar}
                      alt={reviews[currentReview]?.name}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-lg">
                        {reviews[currentReview]?.name}
                      </div>
                      <div className="text-purple-600 font-medium">
                        {reviews[currentReview]?.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced review indicators */}
            <div className="flex justify-center mt-10 space-x-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? 'bg-purple-600 transform scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Writing?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join BlogAI today and experience the future of content creation with our AI-powered platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/register" 
                className="group inline-flex items-center px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
              >
                <CheckIcon className="w-6 h-6 mr-3 text-green-600" />
                Get Started Free
                <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-lg"
              >
                View Pricing
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80 mb-4">Trusted by writers worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-sm">✨ AI-Powered</div>
                <div className="text-sm">🔒 Secure</div>
                <div className="text-sm">⚡ Fast</div>
                <div className="text-sm">👥 Community</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
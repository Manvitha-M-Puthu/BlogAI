import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  BookmarkIcon,
  EyeIcon,
  SparklesIcon,
  UserPlusIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  FireIcon,
  ChartBarIcon,
  PhotoIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import {
  HeartIcon as HeartSolid,
  BookmarkIcon as BookmarkSolid,
  ChatBubbleLeftIcon as ChatSolid
} from '@heroicons/react/24/solid';

const CommunityPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  // Mock data - replace with API calls
  useEffect(() => {
    const mockPosts = [
      {
        id: 1,
        author: {
          name: "Sarah Mitchell",
          username: "sarahwrites",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
          isVerified: true,
          isFollowing: true,
          subscribers: 1250
        },
        title: "The Future of AI-Assisted Writing: A Personal Journey",
        content: "After using AI writing tools for 6 months, I've discovered patterns that completely changed how I approach content creation. The key isn't to replace creativity, but to amplify it...",
        fullContent: "The complete article continues with detailed insights about AI integration in creative workflows, personal anecdotes, and practical tips for writers.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        tags: ["AI", "Writing", "Technology", "Creativity"],
        publishedAt: "2 hours ago",
        readTime: "8 min read",
        aiEnhanced: true,
        hasAIImages: true,
        hasQuotes: true,
        engagement: {
          likes: 342,
          comments: 56,
          shares: 23,
          views: 1847
        },
        type: "article",
        group: null
      },
      {
        id: 2,
        author: {
          name: "Marcus Chen",
          username: "marcustechwrites",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
          isVerified: false,
          isFollowing: true,
          subscribers: 890
        },
        title: "Building Community in the Digital Age",
        content: "What I learned from growing a tech community from 0 to 10,000 members in 18 months. It's not about the numbers, it's about genuine connections...",
        fullContent: "Detailed strategies, case studies, and personal reflections on community building in today's interconnected world.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        tags: ["Community", "Growth", "Social Media", "Leadership"],
        publishedAt: "5 hours ago",
        readTime: "6 min read",
        aiEnhanced: false,
        hasAIImages: false,
        hasQuotes: true,
        engagement: {
          likes: 178,
          comments: 34,
          shares: 12,
          views: 923
        },
        type: "article",
        group: {
          name: "Tech Community Builders",
          members: 2340
        }
      },
      {
        id: 3,
        author: {
          name: "Elena Rodriguez",
          username: "elenadesigns",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
          isVerified: true,
          isFollowing: true,
          subscribers: 3420
        },
        title: "Minimalist Design Principles That Actually Work",
        content: "After 5 years of design evolution, these are the 7 principles that transformed my work and client satisfaction. Less really can be more when done right...",
        fullContent: "Comprehensive guide with visual examples, before/after comparisons, and actionable advice for designers at any level.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
        tags: ["Design", "Minimalism", "UX", "Visual"],
        publishedAt: "1 day ago",
        readTime: "10 min read",
        aiEnhanced: true,
        hasAIImages: true,
        hasQuotes: false,
        engagement: {
          likes: 567,
          comments: 89,
          shares: 45,
          views: 2341
        },
        type: "tutorial",
        group: null
      },
      {
        id: 4,
        author: {
          name: "David Kim",
          username: "davidcodes",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
          isVerified: false,
          isFollowing: true,
          subscribers: 1680
        },
        title: "My Experience Building a SaaS from Scratch",
        content: "From idea to $10k MRR in 14 months. Here's everything I wish I knew before starting, including the mistakes that cost me months of progress...",
        fullContent: "Detailed breakdown of the journey, technical challenges, marketing strategies, and financial insights from a solo founder's perspective.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
        tags: ["SaaS", "Startup", "Business", "Programming"],
        publishedAt: "2 days ago",
        readTime: "12 min read",
        aiEnhanced: false,
        hasAIImages: false,
        hasQuotes: true,
        engagement: {
          likes: 234,
          comments: 67,
          shares: 34,
          views: 1456
        },
        type: "story",
        group: {
          name: "Indie Hackers Hub",
          members: 5670
        }
      }
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter functions
  const filters = [
    { id: 'all', label: 'All Posts', icon: null },
    { id: 'trending', label: 'Trending', icon: <ChartBarIcon className="w-4 h-4" /> },
    { id: 'recent', label: 'Recent', icon: <ClockIcon className="w-4 h-4" /> },
    { id: 'ai-enhanced', label: 'AI Enhanced', icon: <SparklesIcon className="w-4 h-4" /> },
    { id: 'groups', label: 'Groups', icon: <UserPlusIcon className="w-4 h-4" /> }
  ];

  useEffect(() => {
    let filtered = [...posts];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    switch (activeFilter) {
      case 'trending':
        filtered = filtered.sort((a, b) => b.engagement.likes - a.engagement.likes);
        break;
      case 'recent':
        filtered = filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        break;
      case 'ai-enhanced':
        filtered = filtered.filter(post => post.aiEnhanced);
        break;
      case 'groups':
        filtered = filtered.filter(post => post.group);
        break;
      default:
        break;
    }

    setFilteredPosts(filtered);
  }, [posts, activeFilter, searchQuery]);

  const handleLike = (postId) => {
    const newLikedPosts = new Set(likedPosts);
    if (likedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);

    // Update post engagement
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              engagement: {
                ...post.engagement,
                likes: likedPosts.has(postId)
                  ? post.engagement.likes - 1
                  : post.engagement.likes + 1
              }
            }
          : post
      )
    );
  };

  const handleBookmark = (postId) => {
    const newBookmarkedPosts = new Set(bookmarkedPosts);
    if (bookmarkedPosts.has(postId)) {
      newBookmarkedPosts.delete(postId);
    } else {
      newBookmarkedPosts.add(postId);
    }
    setBookmarkedPosts(newBookmarkedPosts);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/6"></div>
                  </div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-48 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Community Feed</h1>
              <p className="text-gray-600 mt-1">Latest posts from writers you follow</p>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts, authors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <AnimatePresence>
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 mb-6 overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-100"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                        {post.author.isVerified && (
                          <CheckBadgeIcon className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>@{post.author.username}</span>
                        <span>•</span>
                        <span>{post.publishedAt}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <EllipsisHorizontalIcon className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Group Info */}
                {post.group && (
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      📱 {post.group.name}
                    </div>
                    <span className="text-xs text-gray-500">{post.group.members.toLocaleString()} members</span>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="px-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.content}
                </p>

                {/* AI Enhancement Badges */}
                {(post.aiEnhanced || post.hasAIImages || post.hasQuotes) && (
                  <div className="flex items-center space-x-2 mb-4">
                    {post.aiEnhanced && (
                      <span className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium rounded-full">
                        <SparklesIcon className="w-3 h-3" />
                        <span>AI Enhanced</span>
                      </span>
                    )}
                    {post.hasAIImages && (
                      <span className="flex items-center space-x-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        <PhotoIcon className="w-3 h-3" />
                        <span>AI Images</span>
                      </span>
                    )}
                    {post.hasQuotes && (
                      <span className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        <ChatBubbleOvalLeftEllipsisIcon className="w-3 h-3" />
                        <span>Smart Quotes</span>
                      </span>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="px-6 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                  />
                </div>
              )}

              {/* Engagement Bar */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition-colors ${
                        likedPosts.has(post.id)
                          ? 'text-red-500'
                          : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      {likedPosts.has(post.id) ? (
                        <HeartSolid className="w-5 h-5" />
                      ) : (
                        <HeartIcon className="w-5 h-5" />
                      )}
                      <span className="font-medium">{post.engagement.likes}</span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <ChatBubbleLeftIcon className="w-5 h-5" />
                      <span className="font-medium">{post.engagement.comments}</span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                      <ShareIcon className="w-5 h-5" />
                      <span className="font-medium">{post.engagement.shares}</span>
                    </button>

                    <div className="flex items-center space-x-2 text-gray-500">
                      <EyeIcon className="w-5 h-5" />
                      <span className="font-medium">{post.engagement.views}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookmark(post.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      bookmarkedPosts.has(post.id)
                        ? 'text-yellow-500 bg-yellow-50'
                        : 'text-gray-500 hover:text-yellow-500 hover:bg-yellow-50'
                    }`}
                  >
                    {bookmarkedPosts.has(post.id) ? (
                      <BookmarkSolid className="w-5 h-5" />
                    ) : (
                      <BookmarkIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {filteredPosts.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <ChatBubbleLeftIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">
              {searchQuery
                ? `No posts match your search for "${searchQuery}"`
                : "Start following writers to see their posts in your feed!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityPosts;
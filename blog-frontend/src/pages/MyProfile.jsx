import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon,
  CameraIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  StarIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  EyeIcon,
  CalendarIcon,
  MapPinIcon,
  LinkIcon,
  SparklesIcon,
  BookOpenIcon,
  TrashIcon,
  ShareIcon,
  PlusIcon,
  TagIcon,
  GlobeAltIcon,
  UsersIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid, StarIcon as StarSolid } from '@heroicons/react/24/solid';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isEditing, setIsEditing] = useState(false);
  const [editingInterests, setEditingInterests] = useState(false);
  const [newInterest, setNewInterest] = useState('');

  // Mock user data - replace with API calls
  const [user, setUser] = useState({
    id: 1,
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    email: "sarah.johnson@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200",
    bio: "Passionate writer exploring the intersection of technology and human creativity. AI enthusiast and content strategist.",
    location: "San Francisco, CA",
    website: "https://sarahjohnson.blog",
    joinedDate: "January 2023",
    isSubscriber: true,
    subscriptionPlan: "Pro",
    stats: {
      posts: 24,
      followers: 1200,
      following: 450,
      likes: 3400
    }
  });

  const [interests, setInterests] = useState([
    "Artificial Intelligence",
    "Technology",
    "Creative Writing",
    "Digital Marketing",
    "Future Trends",
    "Content Strategy",
    "Machine Learning",
    "Innovation"
  ]);

  const [userPosts, setUserPosts] = useState([
    {
      id: 1,
      title: "The Future of AI in Content Creation",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we create and consume content in the digital age...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      publishedAt: "2 days ago",
      status: "published",
      likes: 234,
      comments: 45,
      views: 1200,
      readTime: "5 min read",
      tags: ["AI", "Technology", "Future"],
      visibility: "public"
    },
    {
      id: 2,
      title: "Building Better Communities Online",
      excerpt: "How to foster meaningful connections and create safe spaces for authentic conversations in digital communities...",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
      publishedAt: "5 days ago",
      status: "published",
      likes: 189,
      comments: 32,
      views: 892,
      readTime: "3 min read",
      tags: ["Community", "Social", "Connection"],
      visibility: "friends"
    },
    {
      id: 3,
      title: "The Art of Minimalist Design",
      excerpt: "Less is more: discovering the power of simplicity in modern design principles and user experience...",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
      publishedAt: "1 week ago",
      status: "draft",
      likes: 0,
      comments: 0,
      views: 0,
      readTime: "4 min read",
      tags: ["Design", "Minimalism", "Art"],
      visibility: "draft"
    }
  ]);

  const [editForm, setEditForm] = useState({
    name: user.name,
    bio: user.bio,
    location: user.location,
    website: user.website
  });

  const handleEditSubmit = () => {
    setUser({ ...user, ...editForm });
    setIsEditing(false);
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const removeInterest = (interest) => {
    setInterests(interests.filter(i => i !== interest));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getVisibilityIcon = (visibility) => {
    switch (visibility) {
      case 'public': return <GlobeAltIcon className="w-4 h-4" />;
      case 'friends': return <UsersIcon className="w-4 h-4" />;
      case 'group': return <UserGroupIcon className="w-4 h-4" />;
      default: return <GlobeAltIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image & Profile Header */}
      <div className="relative">
        {/* Cover Image */}
        <div 
          className="h-80 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden"
          style={{
            backgroundImage: `url(${user.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-indigo-900/60"></div>
          
          {/* Edit cover button */}
          <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-all">
            <CameraIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Info Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-32 pb-8">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
                {/* Profile Picture & Basic Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg object-cover"
                    />
                    <button className="absolute -bottom-2 -right-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors shadow-lg">
                      <CameraIcon className="w-4 h-4" />
                    </button>
                    {user.isSubscriber && (
                      <div className="absolute -top-2 -left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-1.5 rounded-full shadow-lg">
                        <SparklesIcon className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start space-x-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                      {user.isSubscriber && (
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {user.subscriptionPlan}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{user.username}</p>
                    <p className="text-gray-700 max-w-md leading-relaxed">{user.bio}</p>
                    
                    {/* Location & Website */}
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
                      <div className="flex items-center text-gray-600">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm">{user.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <LinkIcon className="w-4 h-4 mr-2" />
                        <a href={user.website} className="text-sm text-purple-600 hover:text-purple-700 transition-colors">
                          {user.website}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span className="text-sm">Joined {user.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-6 lg:mt-0">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all"
                  >
                    <PencilIcon className="w-5 h-5 mr-2" />
                    Edit Profile
                  </button>
                  <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all">
                    <ShareIcon className="w-5 h-5 mr-2" />
                    Share Profile
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.posts}</div>
                  <div className="text-sm text-gray-600 font-medium">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.followers.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 font-medium">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.following}</div>
                  <div className="text-sm text-gray-600 font-medium">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.likes.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 font-medium">Total Likes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                  <input
                    type="url"
                    value={editForm.website}
                    onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <button
                onClick={handleEditSubmit}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Interests */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Interests</h3>
                <button
                  onClick={() => setEditingInterests(!editingInterests)}
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <PencilIcon className="w-5 h-5" />
                </button>
              </div>

              {editingInterests && (
                <div className="mb-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                      placeholder="Add new interest..."
                      className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      onClick={addInterest}
                      className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="relative group bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-2 rounded-full text-sm font-medium"
                  >
                    <span>{interest}</span>
                    {editingInterests && (
                      <button
                        onClick={() => removeInterest(interest)}
                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <XMarkIcon className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Status */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <SparklesIcon className="w-8 h-8 text-yellow-400 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Pro Member</h3>
                  <p className="text-purple-100">Unlimited AI features</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-400" />
                  <span>AI-powered writing enhancement</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-400" />
                  <span>Unlimited image generation</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-400" />
                  <span>Advanced analytics</span>
                </div>
              </div>

              <button className="w-full bg-white/20 backdrop-blur-sm text-white font-semibold py-3 rounded-xl mt-4 hover:bg-white/30 transition-all">
                Manage Subscription
              </button>
            </div>
          </div>

          {/* Right Content - Posts */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
              {['posts', 'drafts', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            {activeTab === 'posts' && (
              <div className="space-y-6">
                {userPosts.filter(post => post.status === 'published').map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(post.status)}`}>
                              {post.status}
                            </span>
                            <div className="flex items-center text-gray-500">
                              {getVisibilityIcon(post.visibility)}
                              <span className="ml-1 text-xs capitalize">{post.visibility}</span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-purple-600 transition-colors">
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button className="text-gray-400 hover:text-red-600 transition-colors">
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
                            >
                              <TagIcon className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.publishedAt} • {post.readTime}</span>
                          
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <HeartIcon className="w-4 h-4 mr-1" />
                              {post.likes}
                            </span>
                            <span className="flex items-center">
                              <ChatBubbleLeftIcon className="w-4 h-4 mr-1" />
                              {post.comments}
                            </span>
                            <span className="flex items-center">
                              <EyeIcon className="w-4 h-4 mr-1" />
                              {post.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Drafts */}
            {activeTab === 'drafts' && (
              <div className="space-y-6">
                {userPosts.filter(post => post.status === 'draft').map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                        Draft
                      </span>
                      <div className="flex space-x-2">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                          Continue Writing
                        </button>
                        <button className="text-gray-400 hover:text-red-600 transition-colors">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Analytics */}
            {activeTab === 'analytics' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Total Views</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">2,892</div>
                  <div className="text-sm text-green-600">+12% from last month</div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Engagement Rate</h3>
                  <div className="text-3xl font-bold text-pink-600 mb-2">8.4%</div>
                  <div className="text-sm text-green-600">+2.1% from last month</div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Total Likes</h3>
                  <div className="text-3xl font-bold text-red-500 mb-2">423</div>
                  <div className="text-sm text-green-600">+18% from last month</div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Comments</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">77</div>
                  <div className="text-sm text-green-600">+5% from last month</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
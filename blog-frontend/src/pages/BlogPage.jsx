import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SparklesIcon,
  PhotoIcon,
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  TagIcon,
  BookOpenIcon,
  CameraIcon,
  StarIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

const BlogPage = () => {
  // Mock user data - replace with useAuth hook
  const [user] = useState({ 
    isSubscriber: true, // Change to false to test non-subscriber view
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  });

  const [blogContent, setBlogContent] = useState({
    title: '',
    content: '',
    tags: '',
    category: 'Technology'
  });
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [enhancementOptions, setEnhancementOptions] = useState({
    grammar: true,
    photos: true,
    quotes: true
  });

  const categories = [
    'Technology', 'Lifestyle', 'Travel', 'Food', 'Health', 
    'Business', 'Entertainment', 'Sports', 'Education', 'Other'
  ];

  const handleInputChange = (field, value) => {
    setBlogContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEnhanceWithAI = async () => {
    if (!user?.isSubscriber) {
      alert('AI Enhancement is only available for subscribers!');
      return;
    }

    if (!blogContent.content.trim()) {
      alert('Please write some content first!');
      return;
    }

    setIsEnhancing(true);
    
    try {
      // Simulate AI enhancement
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      let enhancedContent = blogContent.content;
      
      if (enhancementOptions.grammar) {
        // Mock grammar correction
        enhancedContent = enhancedContent
          .replace(/\bi\b/g, 'I')
          .replace(/\bwont\b/g, "won't")
          .replace(/\bdont\b/g, "don't")
          .replace(/\bcant\b/g, "can't");
      }

      if (enhancementOptions.photos) {
        // Mock adding photo suggestions
        const photoSuggestions = [
          '\n\n![AI Generated Image](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop)\n*AI-suggested image related to your content*\n',
          '\n\n![Relevant Photo](https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=300&fit=crop)\n*Auto-generated visual enhancement*\n'
        ];
        enhancedContent += photoSuggestions[Math.floor(Math.random() * photoSuggestions.length)];
      }

      if (enhancementOptions.quotes) {
        // Mock adding inspirational quotes
        const quotes = [
          '\n\n> "Innovation distinguishes between a leader and a follower." - Steve Jobs\n',
          '\n\n> "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt\n',
          '\n\n> "Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill\n'
        ];
        enhancedContent += quotes[Math.floor(Math.random() * quotes.length)];
      }

      setBlogContent(prev => ({
        ...prev,
        content: enhancedContent
      }));

      alert('Content enhanced with AI! ✨');
    } catch (error) {
      alert('Failed to enhance content. Please try again.');
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!blogContent.title.trim() || !blogContent.content.trim()) {
      alert('Please fill in both title and content!');
      return;
    }

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Blog post published successfully! 🎉');
      
      // Reset form
      setBlogContent({
        title: '',
        content: '',
        tags: '',
        category: 'Technology'
      });
    } catch (error) {
      alert('Failed to publish blog post.');
    }
  };

  const wordCount = blogContent.content.split(/\s+/).filter(word => word.length > 0).length;
  const estimatedReadTime = Math.max(1, Math.ceil(wordCount / 200));

  // For non-subscribers, only show first 10 lines
  const displayContent = user?.isSubscriber 
    ? blogContent.content 
    : blogContent.content.split('\n').slice(0, 10).join('\n');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Create Your Masterpiece
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Transform your ideas into compelling stories with AI-powered assistance
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2">
            <motion.form 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit} 
              className="space-y-8"
            >
              {/* Title Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                    <BookOpenIcon className="w-5 h-5 text-white" />
                  </div>
                  <label className="text-lg font-semibold text-gray-800">
                    Blog Title
                  </label>
                </div>
                <input
                  type="text"
                  value={blogContent.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter an engaging title that captures your reader's attention..."
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-200 text-lg font-medium placeholder:text-gray-400"
                />
              </div>

              {/* Content Editor */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                      <DocumentTextIcon className="w-5 h-5 text-white" />
                    </div>
                    <label className="text-lg font-semibold text-gray-800">
                      Content
                    </label>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-full">
                      <ClockIcon className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-gray-600">{wordCount} words</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-indigo-50 px-3 py-2 rounded-full">
                      <EyeIcon className="w-4 h-4 text-indigo-500" />
                      <span className="font-medium text-indigo-600">{estimatedReadTime} min read</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <textarea
                    value={blogContent.content}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    placeholder="Start crafting your amazing story here... Let your creativity flow!"
                    rows={18}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-200 resize-none placeholder:text-gray-400 leading-relaxed"
                  />
                  
                  {/* Blur overlay for non-subscribers */}
                  {!user?.isSubscriber && blogContent.content && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/95 backdrop-blur-sm rounded-xl flex items-end justify-center pb-8">
                      <div className="text-center bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <LockClosedIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Premium Feature</h3>
                        <p className="text-gray-600 mb-4">Upgrade to access full content editing</p>
                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-200">
                          Upgrade Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Meta Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                      <TagIcon className="w-5 h-5 text-white" />
                    </div>
                    <label className="text-lg font-semibold text-gray-800">
                      Category
                    </label>
                  </div>
                  <select
                    value={blogContent.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-200 bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                      <TagIcon className="w-5 h-5 text-white" />
                    </div>
                    <label className="text-lg font-semibold text-gray-800">
                      Tags
                    </label>
                  </div>
                  <input
                    type="text"
                    value={blogContent.tags}
                    onChange={(e) => handleInputChange('tags', e.target.value)}
                    placeholder="e.g., AI, Technology, Future, Innovation"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-200 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center justify-center space-x-3 px-6 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  <EyeIcon className="w-5 h-5" />
                  <span>{showPreview ? 'Hide Preview' : 'Preview Article'}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex-1"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  <span>Publish Blog Post</span>
                </motion.button>
              </div>
            </motion.form>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-8">
            {/* AI Enhancement Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                <div className="flex items-center space-x-3">
                  <SparklesIcon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">AI Enhancement</h3>
                  {!user?.isSubscriber && (
                    <span className="px-3 py-1 text-xs bg-yellow-400 text-yellow-900 rounded-full font-bold">
                      PRO ONLY
                    </span>
                  )}
                </div>
                <p className="text-indigo-100 mt-2">
                  Transform your writing with intelligent AI assistance
                </p>
              </div>

              <div className="p-6">
                {user?.isSubscriber ? (
                  <div className="space-y-6">
                    {/* Enhancement Options */}
                    <div className="space-y-4">
                      <motion.label 
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 cursor-pointer hover:from-green-100 hover:to-emerald-100 transition-all duration-200"
                      >
                        <input
                          type="checkbox"
                          checked={enhancementOptions.grammar}
                          onChange={(e) => setEnhancementOptions(prev => ({
                            ...prev,
                            grammar: e.target.checked
                          }))}
                          className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                        />
                        <div className="flex items-center space-x-3 flex-1">
                          <CheckCircleIcon className="w-6 h-6 text-green-500" />
                          <div>
                            <span className="font-medium text-gray-800">Grammar & Style</span>
                            <p className="text-sm text-gray-600">Fix errors and improve flow</p>
                          </div>
                        </div>
                      </motion.label>

                      <motion.label 
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 cursor-pointer hover:from-blue-100 hover:to-cyan-100 transition-all duration-200"
                      >
                        <input
                          type="checkbox"
                          checked={enhancementOptions.photos}
                          onChange={(e) => setEnhancementOptions(prev => ({
                            ...prev,
                            photos: e.target.checked
                          }))}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <div className="flex items-center space-x-3 flex-1">
                          <CameraIcon className="w-6 h-6 text-blue-500" />
                          <div>
                            <span className="font-medium text-gray-800">Smart Images</span>
                            <p className="text-sm text-gray-600">Add relevant visuals</p>
                          </div>
                        </div>
                      </motion.label>

                      <motion.label 
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 cursor-pointer hover:from-purple-100 hover:to-pink-100 transition-all duration-200"
                      >
                        <input
                          type="checkbox"
                          checked={enhancementOptions.quotes}
                          onChange={(e) => setEnhancementOptions(prev => ({
                            ...prev,
                            quotes: e.target.checked
                          }))}
                          className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <div className="flex items-center space-x-3 flex-1">
                          {/* <QuoteIcon className="w-6 h-6 text-purple-500" /> */}
                          <div>
                            <span className="font-medium text-gray-800">Inspiring Quotes</span>
                            <p className="text-sm text-gray-600">Add motivational content</p>
                          </div>
                        </div>
                      </motion.label>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleEnhanceWithAI}
                      disabled={isEnhancing}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isEnhancing ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enhancing Magic...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-3">
                          <SparklesIcon className="w-5 h-5" />
                          <span>Enhance with AI</span>
                        </div>
                      )}
                    </motion.button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <LockClosedIcon className="w-8 h-8 text-gray-500" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Premium Feature</h4>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      Unlock AI-powered enhancements to transform your writing with intelligent grammar correction, smart image suggestions, and inspiring quotes.
                    </p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <StarIcon className="w-4 h-4" />
                        <span>Upgrade to Pro</span>
                      </div>
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Enhanced Writing Tips */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg">
                  <BookOpenIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Writing Tips</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: SparklesIcon,
                    tip: "Start with a compelling hook to grab readers' attention immediately",
                    color: "from-blue-500 to-indigo-600"
                  },
                  {
                    icon: DocumentTextIcon,
                    tip: "Use subheadings and short paragraphs for better readability",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: ChatBubbleBottomCenterTextIcon,
                    tip: "Include personal experiences and relatable examples",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    icon: CheckCircleIcon,
                    tip: "End with a clear call-to-action or thought-provoking conclusion",
                    color: "from-orange-500 to-red-600"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className={`p-2 bg-gradient-to-r ${item.color} rounded-lg flex-shrink-0`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.tip}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Preview Modal */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setShowPreview(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Article Preview</h2>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowPreview(false)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <XCircleIcon className="w-6 h-6 text-white" />
                    </motion.button>
                  </div>
                </div>
                <div className="p-8 overflow-auto max-h-[calc(85vh-120px)]">
                  <article className="prose prose-lg max-w-none">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                      {blogContent.title || 'Untitled Blog Post'}
                    </h1>
                    <div className="prose-content whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {displayContent || 'No content yet...'}
                    </div>
                  </article>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogPage;
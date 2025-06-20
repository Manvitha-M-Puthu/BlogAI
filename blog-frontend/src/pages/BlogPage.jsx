import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  SparklesIcon,
  PhotoIcon,
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const BlogPage = () => {
  const { user } = useAuth();
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
      toast.error('AI Enhancement is only available for subscribers!');
      return;
    }

    if (!blogContent.content.trim()) {
      toast.error('Please write some content first!');
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

      toast.success('Content enhanced with AI! ✨');
    } catch (error) {
      toast.error('Failed to enhance content. Please try again.');
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!blogContent.title.trim() || !blogContent.content.trim()) {
      toast.error('Please fill in both title and content!');
      return;
    }

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Blog post published successfully! 🎉');
      
      // Reset form
      setBlogContent({
        title: '',
        content: '',
        tags: '',
        category: 'Technology'
      });
    } catch (error) {
      toast.error('Failed to publish blog post.');
    }
  };

  const wordCount = blogContent.content.split(/\s+/).filter(word => word.length > 0).length;
  const estimatedReadTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Blog Post</h1>
          <p className="text-gray-600">Share your thoughts with the world</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="card">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  value={blogContent.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter an engaging title for your blog post..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Content Editor */}
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{wordCount} words</span>
                    <span>{estimatedReadTime} min read</span>
                  </div>
                </div>
                <textarea
                  value={blogContent.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  placeholder="Start writing your amazing blog post here..."
                  rows={15}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Meta Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={blogContent.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="card">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={blogContent.tags}
                    onChange={(e) => handleInputChange('tags', e.target.value)}
                    placeholder="e.g., AI, Technology, Future"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <EyeIcon className="w-5 h-5" />
                  <span>{showPreview ? 'Hide Preview' : 'Preview'}</span>
                </button>

                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center space-x-2 flex-1"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  <span>Publish Blog Post</span>
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Enhancement Panel */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">AI Enhancement</h3>
                {!user?.isSubscriber && (
                  <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                    PRO Only
                  </span>
                )}
              </div>

              {user?.isSubscriber ? (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Enhance your blog with AI-powered improvements
                  </p>

                  {/* Enhancement Options */}
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={enhancementOptions.grammar}
                        onChange={(e) => setEnhancementOptions(prev => ({
                          ...prev,
                          grammar: e.target.checked
                        }))}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 flex items-center space-x-2">
                        <CheckCircleIcon className="w-4 h-4 text-green-500" />
                        <span>Grammar & Style Corrections</span>
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={enhancementOptions.photos}
                        onChange={(e) => setEnhancementOptions(prev => ({
                          ...prev,
                          photos: e.target.checked
                        }))}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 flex items-center space-x-2">
                        <PhotoIcon className="w-4 h-4 text-blue-500" />
                        <span>Add Relevant Images</span>
                      </span>
                    </label>

                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={enhancementOptions.quotes}
                        onChange={(e) => setEnhancementOptions(prev => ({
                          ...prev,
                          quotes: e.target.checked
                        }))}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 flex items-center space-x-2">
                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-purple-500" />
                        <span>Inspirational Quotes</span>
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={handleEnhanceWithAI}
                    disabled={isEnhancing}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isEnhancing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enhancing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <SparklesIcon className="w-5 h-5" />
                        <span>Enhance with AI</span>
                      </div>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <XCircleIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-4">
                    AI Enhancement features are available for subscribers only
                  </p>
                  <button className="btn-primary">
                    Upgrade to Pro
                  </button>
                </div>
              )}
            </div>

            {/* Writing Tips */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Writing Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Start with a compelling hook to grab readers' attention
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Use subheadings to break up long content
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Include relevant examples and personal experiences
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    End with a clear call-to-action or conclusion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Modal */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Preview</h2>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XCircleIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <article className="prose prose-lg max-w-none">
                  <h1>{blogContent.title || 'Untitled Blog Post'}</h1>
                  <div className="whitespace-pre-wrap">
                    {blogContent.content || 'No content yet...'}
                  </div>
                </article>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
import React, { useState, useEffect } from 'react';
import { HeartIcon, Flag } from 'lucide-react';

const Comments = ({ postId, postTitle }) => {
    const [comments, setComments] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [likedComments, setLikedComments] = useState(new Set());
    const [filterSpam, setFilterSpam] = useState(true);

    // Load comments from localStorage
    useEffect(() => {
        const storageKey = `comments_post_${postId}`;
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            try {
                setComments(JSON.parse(stored));
            } catch (error) {
                console.error('Error loading comments:', error);
            }
        }
    }, [postId]);

    // Save comments to localStorage
    const saveComments = (newComments) => {
        const storageKey = `comments_post_${postId}`;
        localStorage.setItem(storageKey, JSON.stringify(newComments));
        setComments(newComments);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name.trim() || !formData.content.trim()) {
            alert('Please fill in name and comment');
            return;
        }

        setIsSubmitting(true);

        // Simulate submission delay
        setTimeout(() => {
            const newComment = {
                id: Date.now(),
                postId,
                name: formData.name.trim(),
                email: formData.email.trim(),
                content: formData.content.trim(),
                timestamp: new Date().toISOString(),
                approved: true, // Auto-approve for demo (set to false for moderation)
                likes: 0,
                replies: []
            };

            const updated = [newComment, ...comments];
            saveComments(updated);
            
            setFormData({ name: '', email: '', content: '' });
            setShowForm(false);
            setIsSubmitting(false);
        }, 500);
    };

    const handleLike = (commentId) => {
        const updated = likedComments.has(commentId)
            ? new Set([...likedComments].filter(id => id !== commentId))
            : new Set([...likedComments, commentId]);
        setLikedComments(updated);
    };

    const handleDeleteComment = (commentId) => {
        if (window.confirm('Delete this comment? This action cannot be undone.')) {
            const updated = comments.filter(c => c.id !== commentId);
            saveComments(updated);
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        });
    };

    const approvedComments = comments.filter(c => c.approved !== false);

    return (
        <section className="mt-16 pt-12 border-t border-slate-200">
            <div className="space-y-8">
                {/* Comments Header */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Community Comments
                    </h3>
                    <p className="text-slate-600">
                        {approvedComments.length} {approvedComments.length === 1 ? 'comment' : 'comments'}
                    </p>
                </div>

                {/* Filter Spam Notice */}
                {comments.length > approvedComments.length && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
                        ℹ️ {comments.length - approvedComments.length} comment(s) awaiting moderation
                    </div>
                )}

                {/* Comment Form */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    {!showForm ? (
                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full px-4 py-3 text-left bg-white border border-slate-300 rounded-lg text-slate-600 hover:border-indigo-400 hover:text-slate-900 transition-colors"
                        >
                            Leave a comment...
                        </button>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm"
                                    disabled={isSubmitting}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email (optional)"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <textarea
                                placeholder="Add your comment... *"
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                rows="4"
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm resize-none"
                                disabled={isSubmitting}
                                required
                            />
                            <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
                                ℹ️ Comments are moderated. Please keep discussions respectful and on-topic.
                            </div>
                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
                                >
                                    {isSubmitting ? 'Posting...' : 'Post Comment'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-6 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                    {approvedComments.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-slate-600 text-sm">
                                No comments yet. Be the first to share your thoughts!
                            </p>
                        </div>
                    ) : (
                        approvedComments.map((comment) => (
                            <article
                                key={comment.id}
                                className="bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Avatar */}
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                            {comment.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                                        </div>
                                    </div>

                                    {/* Comment Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-baseline justify-between gap-2 mb-1">
                                            <h4 className="font-semibold text-slate-900 text-sm">
                                                {comment.name}
                                            </h4>
                                            <time className="text-xs text-slate-500 flex-shrink-0">
                                                {formatDate(comment.timestamp)}
                                            </time>
                                        </div>
                                        <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap break-words">
                                            {comment.content}
                                        </p>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() => handleLike(comment.id)}
                                                className={`inline-flex items-center gap-1 text-xs font-medium p-1 rounded transition-colors ${
                                                    likedComments.has(comment.id)
                                                        ? 'text-rose-600 bg-rose-50'
                                                        : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50'
                                                }`}
                                                title="Helpful"
                                            >
                                                <HeartIcon className="w-3.5 h-3.5" />
                                                <span>Helpful</span>
                                            </button>
                                            <button
                                                onClick={() => alert('Content reported. Thank you for helping keep our community safe.')}
                                                className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-amber-600 hover:bg-amber-50 p-1 rounded transition-colors"
                                                title="Report inappropriate content"
                                            >
                                                <Flag className="w-3.5 h-3.5" />
                                                <span>Report</span>
                                            </button>
                                            {/* Only show delete on demo - in production, use backend auth */}
                                            {comment.email && (
                                                <button
                                                    onClick={() => handleDeleteComment(comment.id)}
                                                    className="ml-auto text-xs text-slate-400 hover:text-red-600 transition-colors"
                                                    title="Delete (demo only)"
                                                >
                                                    ✕
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    )}
                </div>

                {/* Service Integration Notice */}
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-sm text-indigo-900">
                    <p className="font-medium mb-2">💬 Community Powered</p>
                    <p>
                        This comment system can be enhanced with third-party services like Disqus, Commento, or Giscus for advanced spam filtering, analytics, and moderation tools. Contact us to learn more.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Comments;

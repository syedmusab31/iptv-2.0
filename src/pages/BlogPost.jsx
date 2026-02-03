import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const BlogPost = () => {
    const { slug } = useParams();

    const post = useMemo(() => {
        return blogPosts.find(p => p.slug === slug);
    }, [slug]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Helper to process content (headings, bold, lists) similar to the original Blog.jsx logic
    const renderContent = (content) => {
        return content.split('\n\n').map((paragraph, idx) => {
            // Heading logic
            if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                const headingText = paragraph.replace(/\*\*/g, '').trim();
                return (
                    <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                        {headingText}
                    </h2>
                );
            }
            // List logic
            else if (paragraph.trim().startsWith('-') || paragraph.trim().match(/^\d+\./)) {
                const items = paragraph.split('\n').filter(item => item.trim());
                return (
                    <ul key={idx} className="list-disc ml-6 space-y-2 my-4 text-slate-700 leading-relaxed">
                        {items.map((item, itemIdx) => {
                            const cleanItem = item.replace(/^[-\d.]\s*/, '').trim();
                            const parts = cleanItem.split(/(\*\*.*?\*\*)/g);
                            return (
                                <li key={itemIdx}>
                                    {parts.map((part, partIdx) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={partIdx}>{part.replace(/\*\*/g, '')}</strong>;
                                        }
                                        return part;
                                    })}
                                </li>
                            );
                        })}
                    </ul>
                );
            }
            // Paragraph logic
            else {
                const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                return (
                    <p key={idx} className="text-slate-700 leading-relaxed mb-4 text-lg">
                        {parts.map((part, partIdx) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={partIdx}>{part.replace(/\*\*/g, '')}</strong>;
                            }
                            return part;
                        })}
                    </p>
                );
            }
        });
    };

    const Icon = post.icon;

    return (
        <>
            <Helmet>
                <title>{post.title} | IPTV Factory Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://iptv-factory.com/blog/${post.slug}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://iptv-factory.com/blog/${post.slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt,
                        "author": {
                            "@type": "Organization",
                            "name": "IPTV Factory"
                        },
                        "datePublished": post.date,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://iptv-factory.com/blog/${post.slug}`
                        }
                    })}
                </script>
            </Helmet>

            <div className="bg-gray-50 min-h-screen py-10 lg:py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">

                    <Link to="/blog" className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back to Blog
                    </Link>

                    <article className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12">
                        <header className="mb-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center`}>
                                    {Icon && <Icon className="w-6 h-6 text-indigo-600" />}
                                </div>
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                                    {post.category}
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                                {post.title}
                            </h1>
                            <div className="flex items-center text-slate-500 text-sm sm:text-base space-x-4">
                                <span>{post.readTime}</span>
                                <span>&bull;</span>
                                <span>{post.date}</span>
                            </div>
                        </header>

                        <div className="prose prose-lg prose-indigo max-w-none">
                            {renderContent(post.content)}
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <div className="bg-indigo-50 rounded-2xl p-6 sm:p-8 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to setup your IPTV?</h3>
                                <p className="text-slate-700 mb-6">Use our free tools to format your configuration.</p>
                                <Link to="/" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg">
                                    Go to Config Tools
                                </Link>
                            </div>
                        </div>

                    </article>
                </div>
            </div>
        </>
    );
};

export default BlogPost;

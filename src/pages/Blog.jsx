import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>IPTV Knowledge Center | Guides, Tutorials & News</title>
                <meta name="description" content="Expert guides, technical insights, and comprehensive resources to help you understand and optimize your IPTV experience." />
                <link rel="canonical" href="https://iptv-factory.com/blog" />
            </Helmet>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-20 text-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tighter">
                        IPTV Knowledge Center
                    </h1>
                    <p className="text-xl sm:text-xl text-gray-300 ">
                        Expert guides, technical insights, and comprehensive resources to help you understand and optimize your IPTV experience.
                    </p>
                </div>
            </div>


            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid gap-12 lg:grid-cols-2">
                    {blogPosts.map((post) => {
                        const Icon = post.icon;
                        return (
                            <article
                                key={post.id}
                                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                            {Icon && <Icon className="w-6 h-6 text-indigo-600" />}
                                        </div>
                                        <div className="flex-1">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight hover:text-indigo-600 transition-colors">
                                        <Link to={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-slate-500 mt-auto pt-6 border-t border-gray-100">
                                        <span>{post.readTime}</span>
                                        <span>{post.date}</span>
                                    </div>

                                    <div className="mt-6">
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                        >
                                            Read Full Article
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Use our free code generators to set up your legitimate IPTV service in minutes.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Try Our Generators
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;

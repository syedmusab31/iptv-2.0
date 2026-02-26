import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const Breadcrumb = ({ items = [] }) => {
    const location = useLocation();

    // Generate breadcrumb items based on URL path if not provided
    const generateBreadcrumbs = () => {
        if (items.length > 0) {
            return items;
        }

        const paths = location.pathname.split('/').filter(Boolean);
        const breadcrumbs = [{ label: 'Home', path: '/' }];

        let currentPath = '';
        paths.forEach((path, index) => {
            currentPath += `/${path}`;
            const labelMap = {
                'blog': 'Blog',
                'about': 'About',
                'contact': 'Contact',
                'faq': 'FAQ',
                'how-to-use': 'How to Use',
                'legal': 'Legal',
                'privacy': 'Privacy Policy',
                'terms': 'Terms & Conditions',
                'service': 'Terms of Service',
                'security': 'Data Security',
            };

            if (labelMap[path]) {
                if (isNaN(path)) {
                    breadcrumbs.push({
                        label: labelMap[path],
                        path: currentPath
                    });
                }
            } else if (!isNaN(path)) {
                // For numeric paths like /blog/1, use the label from items if available
                if (items.length > 0) {
                    breadcrumbs.push({
                        label: items.find(item => item.path === currentPath)?.label || path,
                        path: currentPath
                    });
                }
            }
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    // Generate BreadcrumbList schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://iptv-factory.com${item.path}`
        }))
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
            <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
                    <ol className="flex items-center gap-2 text-sm">
                        {breadcrumbs.map((item, index) => (
                            <li key={item.path} className="flex items-center gap-2">
                                {index === 0 ? (
                                    <Link
                                        to={item.path}
                                        className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 transition-colors"
                                        aria-current={location.pathname === item.path ? 'page' : undefined}
                                    >
                                        <HomeIcon className="w-4 h-4" />
                                        <span>{item.label}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <ChevronRightIcon className="w-4 h-4 text-slate-400" aria-hidden="true" />
                                        <Link
                                            to={item.path}
                                            className={`transition-colors ${
                                                location.pathname === item.path
                                                    ? 'text-slate-900 font-semibold'
                                                    : 'text-slate-600 hover:text-indigo-600'
                                            }`}
                                            aria-current={location.pathname === item.path ? 'page' : undefined}
                                        >
                                            {item.label}
                                        </Link>
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>
        </>
    );
};

export default Breadcrumb;

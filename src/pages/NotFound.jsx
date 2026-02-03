import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8 bg-slate-50">
            <div className="text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-indigo-50 rounded-full">
                        <ExclamationTriangleIcon className="h-16 w-16 text-indigo-600" aria-hidden="true" />
                    </div>
                </div>

                <p className="text-base font-semibold text-indigo-600">404 Error</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-slate-600 max-w-md mx-auto">
                    Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or doesn't exist.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 flex items-center gap-2"
                    >
                        <HomeIcon className="h-5 w-5" />
                        Go back home
                    </Link>
                    <Link
                        to="/contact"
                        className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

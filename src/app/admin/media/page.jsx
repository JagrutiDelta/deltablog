"use client";

import React from "react";
import { Image as ImageIcon } from "lucide-react";

export default function MediaPage() {
    return (
        <div className="flex-1 p-8 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ImageIcon className="text-teal-500" />
                Media Library
            </h1>
            <div className="mt-8 p-24 bg-white dark:bg-neutral-900 rounded-3xl border border-dashed border-gray-300 dark:border-neutral-700 flex flex-col items-center justify-center text-center">
                <ImageIcon size={48} className="text-gray-300 mb-4" />
                <p className="text-gray-400 font-medium">Your media library is empty.</p>
                <p className="text-gray-500 text-sm mt-1">Upload images to use them in your blog posts.</p>
                <button className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all">
                    Upload New Media
                </button>
            </div>
        </div>
    );
}

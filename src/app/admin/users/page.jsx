"use client";

import React from "react";
import { Users } from "lucide-react";

export default function UsersPage() {
    return (
        <div className="flex-1 p-8 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="text-teal-500" />
                User Management
            </h1>
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-neutral-800/50 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100 dark:border-neutral-800">
                        <tr>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Posts</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-3">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">DA</div>
                                Delta Admin
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">Administrator</td>
                            <td className="px-6 py-4 text-sm text-gray-500">12</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-teal-500 hover:underline text-xs font-bold">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

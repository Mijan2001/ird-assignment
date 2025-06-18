'use client';
import { Search } from 'lucide-react';

export default function Header() {
    return (
        <header className="w-full px-4 sm:px-10  py-4 mb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            {/* Title */}
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Dua Page
            </h1>

            {/* Search Bar */}
            <div className="relative w-full sm:w-auto sm:max-w-xs">
                <input
                    type="text"
                    placeholder="Search by Dua Name"
                    className="w-full pl-10 pr-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>
        </header>
    );
}

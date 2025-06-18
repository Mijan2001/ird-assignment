'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const categoriesData = [
    {
        id: 1,
        name: 'Introduction to Dua',
        subcategoryCount: 11,
        duaCount: 15,
        subcategories: [
            'What is Dua',
            'Conditions for Dua to be successful',
            'The Methode Of Dua',
            'Before Dua',
            'During Dua',
            'Prerequisites of writing Dua and drinking it’s water',
            'The correct way to perform Dua for a small child'
        ]
    },
    {
        id: 2,
        name: 'Basics of Worship',
        subcategoryCount: 8,
        duaCount: 10,
        subcategories: []
    },
    {
        id: 3,
        name: 'Daily Life Duas',
        subcategoryCount: 5,
        duaCount: 7,
        subcategories: []
    }
];

export default function Categories() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategoryId, setActiveCategoryId] = useState(1);

    const filteredCategories = categoriesData.filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full md:max-w-xs max-h-[700px] bg-white rounded-lg shadow overflow-y-auto">
            <h2 className="text-lg font-semibold text-center text-white bg-green-600 p-3  rounded-t-md">
                Categories
            </h2>

            <div className=" p-4 mb-6 md:mb-0 ">
                {/* Search */}
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search by Categories"
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-md pl-10 focus:outline-none focus:ring focus:border-green-400"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
                </div>

                {/* Category List */}
                <div className="space-y-2">
                    {filteredCategories.map(category => (
                        <div key={category.id}>
                            <div
                                className={`flex flex-col sm:flex-row justify-between sm:items-center gap-3 p-2 rounded-md cursor-pointer transition duration-150 ${
                                    activeCategoryId === category.id
                                        ? 'bg-green-100 text-green-700 font-semibold'
                                        : 'hover:bg-gray-100'
                                }`}
                                onClick={() => setActiveCategoryId(category.id)}
                            >
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/icons/category-image.png"
                                        width={48}
                                        height={48}
                                        alt="icon"
                                        className="w-10 h-10 rounded-md"
                                    />
                                    <div>
                                        <div className="text-gray-700">
                                            {category.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Subcategory:{' '}
                                            {category.subcategoryCount}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500 sm:text-right">
                                    {category.duaCount} Duas
                                </div>
                            </div>

                            {/* Subcategories */}
                            {activeCategoryId === category.id &&
                                category.subcategories.length > 0 && (
                                    <div className="border-l-2 border-dotted border-green-400 ml-5 pl-4 py-2 space-y-2 text-sm">
                                        {category.subcategories.map(
                                            (sub, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`${
                                                        idx === 0
                                                            ? 'text-green-600 font-medium'
                                                            : 'text-gray-700'
                                                    } hover:underline cursor-pointer`}
                                                >
                                                    {sub}
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

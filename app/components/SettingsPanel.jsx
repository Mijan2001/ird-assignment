'use client';

import Image from 'next/image';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const SettingsPanel = () => {
    return (
        <aside className="w-full h-[700px] mt-5 md:mr-6 space-y-4 px-4 md:px-0">
            {/* User Avatar and Dropdown */}
            <div className="flex justify-end items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <img
                        src="/icons/profile-picture.png"
                        alt="User Avatar"
                        className="w-7 h-7 rounded-full object-cover"
                    />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>

            {/* Settings Card */}
            <div className="w-full rounded-2xl shadow h-full bg-white space-y-4 py-4 mt-10 px-3 sm:px-4">
                <h2 className="text-lg text-center font-semibold text-gray-800">
                    Settings
                </h2>

                {/* Settings Buttons */}
                <div className="space-y-2">
                    <button className="w-full flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
                        <Image
                            src="/icons/setting-1.png"
                            alt="setting-image"
                            width={24}
                            height={24}
                            className="w-8 h-8 mr-3 bg-gray-200 p-1 rounded-full"
                        />
                        Language Settings
                    </button>

                    <button className="w-full flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
                        <Image
                            src="/icons/setting-2.png"
                            alt="setting-image"
                            width={24}
                            height={24}
                            className="w-8 h-8 mr-3 bg-gray-200 p-1 rounded-full"
                        />
                        General Settings
                    </button>

                    <button className="w-full flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed">
                        <Image
                            src="/icons/setting-3.png"
                            alt="setting-image"
                            width={24}
                            height={24}
                            className="w-8 h-8 mr-3 bg-gray-200 p-1 rounded-full"
                        />
                        Font Settings
                    </button>

                    <button className="w-full flex items-center px-4 py-2 rounded-lg bg-green-50 text-green-600 border-l-4 border-green-500 text-sm">
                        <Image
                            src="/icons/setting-4.png"
                            alt="setting-image"
                            width={24}
                            height={24}
                            className="w-8 h-8 mr-3 bg-gray-200 p-1 rounded-full"
                        />
                        Appearance Settings
                    </button>
                </div>

                {/* Night Mode Toggle */}
                <div className="mt-4 px-2 sm:px-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Night Mode</span>
                        <label className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-9 h-4 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
                            <div className="absolute w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform duration-300"></div>
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SettingsPanel;

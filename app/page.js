'use client';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SettingsPanel from './components/SettingsPanel';
import Categories from './components/Categories';
import Header from './components/Header';

export default function HomePage() {
    return (
        <div className="min-h-screen  bg-gray-50 flex flex-col lg:flex-row">
            {/* Sidebar (visible only on large screens) */}
            <aside className="hidden lg:block w-22 ">
                <Sidebar />
            </aside>

            {/* Main content area */}
            <main className="flex-1 flex flex-col">
                {/* Header always on top */}
                <div className="sticky top-0 z-20 ">
                    <Header />
                </div>

                {/* Main page content */}
                <div className="flex flex-col xl:flex-row gap-2 px-4 sm:px-10 py-4">
                    {/* Left Section: Categories */}
                    <div className="w-full xl:w-1/4">
                        <Categories />
                    </div>

                    {/* Center Section: MainContent */}
                    <div className="w-full xl:w-3/4">
                        <MainContent />
                    </div>
                </div>
            </main>
            {/* Right Section: Settings Panel (only on xl) */}
            <aside className="hidden xl:block w-full xl:w-1/6">
                <SettingsPanel />
            </aside>
        </div>
    );
}


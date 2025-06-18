'use client';
import {
    Search,
    Play,
    Copy,
    Bookmark,
    Lightbulb,
    Share2,
    AlertCircle
} from 'lucide-react';
import Image from 'next/image';

export default function MainContent() {
    return (
        <main className="flex-1 w-full mb-10 space-y-6">
            {/* Section Header */}
            <div className="bg-white w-full rounded-xl shadow p-4 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <div className="text-green-600 font-medium">Section:</div>
                    <h3 className="text-gray-600 text-base">
                        The servant is dependent on his Lord
                    </h3>
                </div>
            </div>

            {/* Dua Card 1 */}
            <div className="bg-white w-full rounded-xl shadow p-4 border border-gray-100 space-y-4">
                <div className="flex items-center gap-3">
                    <Image
                        src="/icons/picture.png"
                        width={48}
                        height={48}
                        alt="icon"
                        className="w-8 h-8"
                    />
                    <h3 className="text-green-600 font-semibold text-base">
                        1. The servant is dependent on his Lord #1
                    </h3>
                </div>

                <p className="text-gray-700">
                    All human beings depend on Allah for their welfare and
                    prevention of evil in various matters of their religion and
                    world. Allah says (interpretation of the meaning): O
                    mankind, you are those in need of Allah, while Allah is the
                    Free of need, the Praiseworthy.
                </p>

                <p className="text-green-600 font-semibold">
                    Reference: <br />
                    <span className="text-gray-800 font-normal">
                        Surah Al-Fatir 35:15
                    </span>
                </p>

                <div className="flex flex-wrap justify-end gap-8 text-gray-500">
                    <button>
                        <Copy className="w-5 h-5" />
                    </button>
                    <button>
                        <Bookmark className="w-5 h-5" />
                    </button>
                    <button>
                        <Lightbulb className="w-5 h-5" />
                    </button>
                    <button>
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button>
                        <AlertCircle className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Dua Card 2 */}
            <div className="bg-white w-full rounded-xl shadow p-4 border border-gray-100 space-y-4">
                <div className="flex items-center gap-3">
                    <Image
                        src="/icons/picture.png"
                        width={48}
                        height={48}
                        alt="icon"
                        className="w-8 h-8"
                    />
                    <h3 className="text-green-600 font-semibold text-base">
                        2. Conditions for Dua to be successful
                    </h3>
                </div>

                <p className="text-gray-700">
                    Prophet (ﷺ) used to say after every compulsory prayer, "The
                    servant will ask his Lord for all of his religiously and
                    worldly needs, because the treasure of all things is in the
                    hands of Allah."
                </p>

                <p className="text-gray-700">
                    Arabic: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ،
                    لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ
                    قَدِيرٌ
                </p>

                <p className="text-gray-700">
                    Translation: There is none worthy of worship except Allah
                    alone with no partner or associate. He is the Dominion and
                    to Him be all praise, and He is able to do all things.
                </p>

                <p className="text-green-600 font-semibold">
                    Reference: <br />
                    <span className="text-gray-800 font-normal">
                        Reference: Bukhari: 844
                    </span>
                </p>

                <div className="flex sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className=" flex justify-start text-green-600 hover:text-green-800">
                        {/* <Play size={18} /> Listen */}
                        <Image src="/icons/play.png" width={36} height={36} />
                    </div>

                    <div className="flex justify-end gap-8 text-gray-500">
                        <button>
                            <Copy className="w-5 h-5" />
                        </button>
                        <button>
                            <Bookmark className="w-5 h-5" />
                        </button>
                        <button>
                            <Lightbulb className="w-5 h-5" />
                        </button>
                        <button>
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button>
                            <AlertCircle className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

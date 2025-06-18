import Image from 'next/image';

export default function Sidebar() {
    const iconClasses = 'w-6 h-6 sm:w-8 sm:h-8 text-gray-400';
    const buttonClasses =
        'w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100';

    return (
        <div className="w-full sm:w-20 lg:w-20 xl:w-20 h-[700px] bg-white py-4 px-2 sm:px-0 flex flex-col justify-between items-center rounded-2xl shadow">
            <div className="space-y-6 flex flex-col items-center">
                {/* Top Logo Icon */}
                <Image
                    src="/icons/side-top.png"
                    alt="Top Active Icon"
                    width={100}
                    height={100}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-md object-contain"
                />

                {/* Menu Icons */}
                <div className="space-y-3 sm:space-y-4">
                    {[1, 2, 3, 4, 5, 6, 7].map(i => (
                        <button key={i} className={buttonClasses}>
                            <Image
                                src={`/icons/side-${i}.png`}
                                alt={`Sidebar icon ${i}`}
                                width={40}
                                height={40}
                                className={iconClasses}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Bottom Icon */}
            <Image
                src="/icons/side-bottom.png"
                alt="Bottom Icon"
                width={100}
                height={100}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
        </div>
    );
}

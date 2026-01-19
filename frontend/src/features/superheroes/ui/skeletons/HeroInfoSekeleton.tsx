
function HeroInfoSkeleton() {
    return (
        <div className="grid gap-8 md:grid-cols-[320px_1fr] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg p-6 md:p-8">
            <div className="aspect-square rounded-2xl skeleton-wrapper">
               <div
                   className='min-h-[320px] w-full skeleton-shimmer'></div>
            </div>


            <div className="space-y-6">

                <div className="space-y-3 pb-4 border-b border-gray-200">
                    <h1 className="w-5/6 h-10 skeleton-wrapper">
                         <div className=" skeleton-shimmer"></div>
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            Real Name:
                        </span>
                        <span className="w-1/3 h-7 skeleton-wrapper">
                            <div className=" skeleton-shimmer"></div>
                        </span>
                    </div>
                </div>


                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
                        Description
                    </h2>
                    <div className="h-30 skeleton-wrapper">
                        <div className="skeleton-shimmer"></div>
                    </div>
                </div>


                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
                        Super Power
                    </h2>
                    <div className="h-15 skeleton-wrapper pl-3">
                               <div className="skeleton-shimmer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroInfoSkeleton;
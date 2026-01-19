
export function HeroCardSkeleton() {
    return (
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
                <div className="aspect-[4/3] w-full skeleton-wrapper">
                    <div 
                        className="skeleton-shimmer"
                    ></div>
                </div>

                <figcaption className="p-4">
                    <div className="mx-auto w-5/6 h-5 skeleton-wrapper">
                        <div 
                            className="skeleton-shimmer"
                        ></div>
                    </div>
                </figcaption>
            </figure>
    )

}

export default HeroCardSkeleton;
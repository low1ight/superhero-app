
export function HeroCardSkeleton() {
    return (
            <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 relative overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                        style={{
                            animation: 'shimmer 2s infinite',
                            transform: 'translateX(-100%)'
                        }}
                    ></div>
                </div>

                <figcaption className="p-4">
                    <div className="mx-auto w-5/6 h-5 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 relative overflow-hidden">
                        <div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            style={{
                                animation: 'shimmer 2s infinite',
                                transform: 'translateX(-100%)'
                            }}
                        ></div>
                    </div>
                </figcaption>
            </figure>
    )

}

export default HeroCardSkeleton;
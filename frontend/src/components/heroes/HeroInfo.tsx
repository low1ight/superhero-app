import type {SuperheroFullInfoType} from "../../shared/types/superhero-full-info.type.ts";


function HeroInfo({imageUrl,nickname,originDescription,superPower,catchPhrase,realName}:SuperheroFullInfoType) {
    return (
        <div className="grid gap-8 md:grid-cols-[320px_1fr] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg p-6 md:p-8">
            <div className="self-start  h-[320px] overflow-hidden rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                <img
                    src={imageUrl}
                    alt={nickname}
                    className="w-full h-full object-cover block"
                />
            </div>


            <div className="space-y-6">

                <div className="space-y-3 pb-4 border-b border-gray-200">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        {nickname}
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            Real Name:
                        </span>
                        <span className="text-lg font-medium text-gray-800">
                            {realName}
                        </span>
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
                        Catch phrase:
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base pl-3">
                        {catchPhrase}
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
                        Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base pl-3">
                        {originDescription}
                    </p>
                </div>




                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
                        Super Power
                    </h2>
                    <div className="pl-3">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl text-purple-900 font-semibold text-base shadow-sm">
                            {superPower}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroInfo;
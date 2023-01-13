import React from 'react';
import TrendWidget from './TrendWidget';
function Search() {
    return (
        <div className="hidden h-screen w-[380px] flex-col space-y-4 overflow-y-scroll px-4 py-2 lg:flex">
            <input
                className="sticky rounded-full border-2 border-transparent bg-twittergreylight px-5 py-2 text-sm outline-none focus:border-twitterpurple focus:bg-twitterblack"
                type="text"
                placeholder="Search Twitter"
            />
            <div className="rounded-2xl bg-twittergrey ">
                <div className="px-5 py-2 text-xl font-bold ">
                    What's happening
                </div>

                <TrendWidget
                    category="Entertainment"
                    title="#RowanAtkinson"
                    description="Trending with #MrBeans"
                />
                <TrendWidget
                    category="Entertainment"
                    title="#RowanAtkinson"
                    description="Trending with #MrBeans"
                />
                <TrendWidget
                    category="Entertainment"
                    title="#RowanAtkinson"
                    description="Trending with #MrBeans"
                />
                <TrendWidget
                    category="Entertainment"
                    title="#RowanAtkinson"
                    description="Trending with #MrBeans"
                />
            </div>
            <div className="text-lg font-bold ">Who to follow</div>
        </div>
    );
}

export default Search;

import React from 'react';
import TrendWidget from './TrendWidget';
function Search() {
    return (
        <div className="hidden w-[330px] flex-col space-y-4 px-5 py-2 lg:flex">
            <input
                className="rounded-full border-2 border-transparent bg-twittergrey px-5 py-3 text-sm outline-none focus:border-twitterpurple focus:bg-twitterblack"
                type="text"
                placeholder="Search Twitter"
            />
            <div className="space-y-6 rounded-2xl bg-twittergrey py-3 px-5">
                <div className="text-xl font-bold ">What's happening</div>

                <TrendWidget
                    category="Entertainment"
                    title="#RowanAtkinson"
                    description="Trending with #MrBean"
                />
                <TrendWidget
                    category="Entertainment"
                    title="#RowanAtkinson"
                    description="Trending with #MrBean"
                />
                <TrendWidget
                    category="Entertainment"
                    title="#RowanAtkinson"
                    description="Trending with #MrBean"
                />
                <TrendWidget
                    category="Entertainment"
                    title="#RowanAtkinson"
                    description="Trending with #MrBean"
                />
            </div>
            <div className="text-lg font-bold ">Who to follow</div>
        </div>
    );
}

export default Search;

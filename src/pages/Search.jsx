import React from 'react';
import TrendWidget from './TrendWidget';
import WhoToFollow from './WhoToFollow.';
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
                    description="#MrBeans"
                />
                <TrendWidget
                    category="Sports"
                    title="#ManUnited"
                    description="Manchester Derby"
                />
                <TrendWidget
                    category="Sports"
                    title="#Goat"
                    description="Messi"
                />
                <TrendWidget
                    category="News"
                    title="#JoeBiden"
                    description="#POTUS"
                />
                <div className="cursor-pointer rounded-b-2xl px-5 py-4 text-sm text-twitterPurpleLight hover:bg-twittergreylight">
                    Show more
                </div>
            </div>
            <div className="rounded-2xl bg-twittergrey ">
                <div className="px-5 py-2 text-xl font-bold ">
                    Who to follow
                </div>
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <div className="cursor-pointer rounded-b-2xl px-5 py-4 text-sm text-twitterPurpleLight hover:bg-twittergreylight">
                    Show more
                </div>
            </div>
        </div>
    );
}

export default Search;

function undefined({}) {
    return (
        <div className="rounded-2xl bg-twittergrey ">
            <div className="px-5 py-2 text-xl font-bold ">What's happening</div>

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
    );
}

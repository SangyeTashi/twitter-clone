import React from 'react';
import TrendWidget from './TrendWidget';
import WhoToFollow from './WhoToFollow.';
function Search({ users, usersLoading }) {
    console.log(users);
    return (
        <div className="hidden w-[380px] flex-col space-y-4 px-4 py-2 lg:flex">
            <input
                className="rounded-full border-2 border-transparent bg-twittergreylight px-5 py-2 text-sm outline-none focus:border-twitterpurple focus:bg-twitterblack"
                type="text"
                placeholder="Search Twitter"
            />
            <div className="sticky top-3">
                <div className=" rounded-2xl bg-twittergrey ">
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
                <div className="mt-3 rounded-2xl bg-twittergrey ">
                    <div className="px-5 py-2 text-xl font-bold ">
                        Who to follow
                    </div>
                    {!usersLoading && (
                        <>
                            <WhoToFollow key={1234} user={users[2]} />
                            <WhoToFollow key={123} user={users[3]} />
                            <WhoToFollow key={1235} user={users[4]} />
                            <WhoToFollow key={1236} user={users[5]} />
                        </>
                    )}
                    <div className="cursor-pointer rounded-b-2xl px-5 py-4 text-sm text-twitterPurpleLight hover:bg-twittergreylight">
                        Show more
                    </div>
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

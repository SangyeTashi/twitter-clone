import React from 'react';
import useFetch from '../hooks/useFetch';
import Error from '../components/Error';

function WhoToFollow({ user }) {
    const { first_name, last_name, username, avatar } = user;
    return (
        <>
            <div className="flex cursor-pointer items-center justify-between py-3 px-5 last:rounded-b-2xl hover:bg-twittergreylight">
                <img
                    className="h-10 w-10 rounded-full bg-twitterpurple"
                    src={avatar}
                    alt={`${username}'s profile picture`}
                />
                <div className="mr-auto ml-3">
                    <div className="">{`${first_name} ${last_name}`}</div>
                    <div className="text-sm font-light text-gray-400">
                        @{username}
                    </div>
                </div>

                <button className="rounded-full bg-twitterwhite px-3 py-1 text-sm text-black hover:bg-gray-300">
                    Follow
                </button>
            </div>
        </>
    );
}

export default WhoToFollow;

import React from 'react';
import Tweet from './Tweet';
import { SparklesIcon } from '@heroicons/react/24/outline';

function Feed({ posts }) {
    return (
        <div className=" w-[600px] overflow-y-scroll border-x-[0.3px] border-twittergrey ">
            <div className="TopBar sticky top-0 flex  justify-between bg-black/40 px-4 py-3 backdrop-blur-md">
                <h1 className="text-xl font-bold">Home</h1>
                <SparklesIcon className="h-5" />
            </div>

            {posts.map(
                ({ first_name, last_name, username, subscription, avatar }) => {
                    return (
                        <Tweet
                            userName={`${first_name} ${last_name}`}
                            userId={`@${username}`}
                            avatar={`https://imagecdn.app/v2/image/${avatar}?width=100&height=100`}
                            isVerified={
                                subscription.status === 'Active' ? true : false
                            }
                        />
                    );
                }
            )}
        </div>
    );
}

export default Feed;

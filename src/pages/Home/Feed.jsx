import React from 'react';
import Tweet from './Tweet';
import { SparklesIcon } from '@heroicons/react/24/outline';
import TweetForm from './TweetForm';
function Feed({ posts }) {
    return (
        <div className=" w-[600px] overflow-y-scroll border-x-[0.3px] border-twittergrey ">
            <div className="TopBar sticky top-0 flex  justify-between bg-black/40 px-4 py-3 backdrop-blur-md">
                <h1 className="text-xl font-bold">Home</h1>
                <SparklesIcon className="h-5" />
            </div>

            <TweetForm />

            {posts.map(
                ({
                    quote: { author, content, authorSlug, length },
                    avatar,
                    isVerified,
                }) => {
                    return (
                        <Tweet
                            userName={author}
                            userId={`@${authorSlug}`}
                            content={content}
                            avatar={avatar}
                            isVerified={isVerified}
                        />
                    );
                }
            )}
        </div>
    );
}

export default Feed;

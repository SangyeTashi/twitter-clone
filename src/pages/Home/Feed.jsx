import React from 'react';
import Tweet from './Tweet';

import TweetForm from './TwitterForm/TweetForm';
function Feed({ posts }) {
    return (
        <>
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
        </>
    );
}

export default Feed;

import React, { useState } from 'react';
import Tweet from './Tweet';

function Feed({ users, quotes }) {
    console.log('quotes', quotes.results);
    console.log('users', users);

    return (
        <>
            {quotes.results.map((quote, index) => {
                const { author, authorSlug, content } = quote;
                return (
                    <Tweet
                        key={index}
                        userName={author}
                        userId={`@${authorSlug}`}
                        content={content}
                        isVerified={Math.random() > 0.5 ? true : false}
                        avatar={users[index + 1].avatar}
                    />
                );
            })}
        </>
    );
}

export default Feed;

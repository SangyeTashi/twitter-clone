import React from 'react';

export function InteractionIcon({ Icon }) {
    return (
        <div className=" rounded-full p-2 hover:bg-twitterblue/20 hover:text-twitterblue">
            <Icon />
        </div>
    );
}

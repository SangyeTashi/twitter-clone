import { InteractionIcon } from './InteractionIcon';
import React from 'react';
import {
    FaRegHeart,
    FaRetweet,
    FaRegComment,
    FaRegShareSquare,
} from 'react-icons/fa';

function Interactions({ retweets, comments, likes }) {
    return (
        <div className="flex justify-around text-sm text-gray-500 md:text-base">
            <InteractionIcon Icon={FaRegHeart} />
            <InteractionIcon Icon={FaRegComment} />
            <InteractionIcon Icon={FaRetweet} />
            <InteractionIcon Icon={FaRegShareSquare} />
        </div>
    );
}

export default Interactions;

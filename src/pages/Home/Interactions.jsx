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
        <div className="flex justify-around text-base text-gray-500">
            <InteractionIcon Icon={FaRegHeart} />
            <InteractionIcon Icon={FaRegComment} />
            <InteractionIcon Icon={FaRetweet} />
            <InteractionIcon Icon={FaRegShareSquare} />
        </div>
    );
}

export default Interactions;

import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
function FeedLoading() {
    return (
        <div className=" p-5">
            <div className="w-8 animate-spin ">
                <ArrowPathIcon />
            </div>
            <div className="animate-pulse">Loading...</div>
        </div>
    );
}

export default FeedLoading;

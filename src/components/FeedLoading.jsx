import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
function FeedLoading() {
    return (
        <div className="flex items-center justify-center p-4">
            <div>
                <div className="w-8 animate-spin ">
                    <ArrowPathIcon />
                </div>
                <div className="animate-pulse">Loading...</div>
            </div>
        </div>
    );
}

export default FeedLoading;

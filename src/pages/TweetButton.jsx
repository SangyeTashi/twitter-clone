import React from 'react';
import { HistoryEdu } from '@mui/icons-material';

export default function TweetButton() {
    return (
        <div className=" cursor-pointer rounded-full bg-violet-500 p-2 text-center hover:bg-violet-600 ">
            <div className="xl:hidden">
                <HistoryEdu sx={{ fontSize: 25 }} />
            </div>
            <h2
                className="
                    hidden xl:inline-flex"
            >
                Tweet
            </h2>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { useContext } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import {
    Public,
    ExpandMore,
    ImageOutlined,
    SentimentSatisfiedAltOutlined,
    FmdGoodOutlined,
    FormatListBulletedOutlined,
    GifBoxOutlined,
    CalendarMonthOutlined,
} from '@mui/icons-material';
function TweetForm() {
    const {
        data: { avatar },
    } = useContext(UserContext);
    const [isPublic, setIsPublic] = useState(true);

    useEffect(() => {}, [isPublic]);
    return (
        <>
            <div className="TopBar sticky top-0 flex  justify-between bg-black/40 px-4 py-3 backdrop-blur-md">
                <h1 className="text-xl font-bold">Home</h1>
                <SparklesIcon className="h-5" />
            </div>

            <div className="flex p-3 text-twitterPurpleLight">
                <img
                    className="h-12 w-12 rounded-full bg-fuchsia-500"
                    src={avatar}
                    alt=""
                />
                <div className="flex flex-grow flex-col px-4">
                    <div>
                        <div className="inline rounded-full border border-twitterPurpleLight p-2 text-sm">
                            {isPublic ? 'Everyone' : 'Twitter Circle'}
                            <ExpandMore />
                        </div>
                    </div>
                    <input
                        className=" border-none bg-transparent px-5 py-3 focus:outline-none"
                        type="text"
                        placeholder="What's hapening?!"
                    />
                    <div className="mb-2">
                        {isPublic && (
                            <>
                                <Public />
                                Everyone can reply
                            </>
                        )}
                    </div>
                    <div className="flex ">
                        <div className="flex space-x-3 ">
                            <ImageOutlined />
                            <GifBoxOutlined />
                            <FormatListBulletedOutlined />
                            <SentimentSatisfiedAltOutlined />
                            <CalendarMonthOutlined />
                            <FmdGoodOutlined />
                        </div>

                        <div className="ml-auto cursor-pointer rounded-full bg-twitterPurpleLight px-3 py-1 text-white">
                            Tweet
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TweetForm;

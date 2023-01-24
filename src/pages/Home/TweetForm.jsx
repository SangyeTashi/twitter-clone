import React from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';
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
        error,
        isLoading,
    } = useContext(UserContext);

    return (
        <div className="flex p-3 text-twitterPurpleLight">
            <img
                className="h-12 rounded-full bg-fuchsia-500"
                src={avatar}
                alt=""
            />
            <div className="flex flex-col">
                <div className="rounded-full border border-twitterPurpleLight p-1">
                    Everyone <ExpandMore />
                </div>
                <input type="text" placeholder="What's hapening?" />
                <div>
                    <Public />
                    Everyone can replay
                </div>
                <div className="flex ">
                    <ImageOutlined />
                    <GifBoxOutlined />
                    <FormatListBulletedOutlined />
                    <SentimentSatisfiedAltOutlined />
                    <CalendarMonthOutlined />
                    <FmdGoodOutlined />

                    <div className="ml-auto cursor-pointer rounded-full bg-twitterPurpleLight">
                        Tweet
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetForm;

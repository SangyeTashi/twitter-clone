import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegHeart } from 'react-icons/fa';
import { SparklesIcon, CheckIcon } from '@heroicons/react/24/outline';

function Tweet({ userName, userId, isVerified, avatar }) {
    const [img, setImg] = useState(null);
    const [quote, setQuote] = useState('');

    //to fetch image
    useEffect(() => {
        const fetchImage = async () => {
            await axios
                .get(
                    'https://random.imagecdn.app/v1/image?width=570&height=360&category=nature&format=json'
                )
                .then((data) => {
                    setImg(data.data.url);
                });
        };

        //getting quotes
        const fetchQuote = async () => {
            await axios.get('https://api.quotable.io/random').then((data) => {
                setQuote(data.data.content);
            });
        };

        fetchQuote();
        if (isVerified) {
            fetchImage();
        }
    }, [isVerified]);

    return (
        <div className="flex space-x-1 border-b border-twittergrey p-3 ">
            <div className=" h-12 w-12 shrink-0  overflow-hidden rounded-full bg-slate-700">
                <img className=" object-cover " src={avatar} alt="" />
            </div>
            <div className="space-y-2 p-2">
                <div className="flex items-center space-x-1">
                    <h1 className="font-bold">{userName}</h1>
                    {isVerified ? (
                        <CheckIcon
                            className="rounded-full bg-twitterblue p-1"
                            height={20}
                        ></CheckIcon>
                    ) : null}
                    <h2 className="text-sm font-extralight">{userId}</h2>
                </div>
                <h2>{quote}</h2>
                {isVerified ? (
                    <img
                        className="rounded-2xl border border-twittergrey"
                        src={img}
                        alt=""
                    />
                ) : null}
                <FaRegHeart />
            </div>
        </div>
    );
}

export default Tweet;

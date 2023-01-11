import axios from 'axios';
import { FaRegHeart } from 'react-icons/fa';
import { CheckIcon } from '@heroicons/react/24/outline';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFetch from './useFetch';

function Tweet({ userName, userId, isVerified, avatar }) {
    //to fetch image

    const {
        data: image,
        error: imageError,
        isLoading: imageIsLoading,
    } = useFetch(
        'https://random.imagecdn.app/v1/image?width=490&height=300&category=nature&format=json',
        {}
    );

    const {
        data: quote,
        error: quoteError,
        isLoading: quoteIsLoading,
    } = useFetch('https://api.quotable.io/random', {});

    return (
        <div className="flex space-x-1 border-b border-twittergrey p-3 ">
            <div className=" h-12 w-12 shrink-0  overflow-hidden rounded-full bg-slate-700">
                <LazyLoadImage src={avatar} />
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

                <h2>{quote.content}</h2>

                {isVerified ? (
                    <LazyLoadImage
                        className="rounded-2xl border border-twittergrey"
                        src={image.url}
                    />
                ) : null}
                <FaRegHeart />
            </div>
        </div>
    );
}

export default Tweet;

import { TweetImage } from './TweetImage';
import { CheckIcon } from '@heroicons/react/24/outline';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFetch from '../../hooks/useFetch';
import Interactions from './Interactions';
import Error from '../../components/Error';

function Tweet({ userName, userId, isVerified, avatar, content }) {
    return (
        <div className="flex cursor-pointer space-x-1  border-b border-twittergrey p-2 text-sm hover:bg-twittergrey/40 md:p-3 md:text-base ">
            {/* Avatar */}
            <div className="h-8 w-8  shrink-0 overflow-hidden rounded-full bg-slate-700 md:h-10 md:w-10">
                <LazyLoadImage src={avatar} />
            </div>

            <div className="grow space-y-2 p-2">
                {/* User Name , VerifiedIcon, userId */}
                <div className="flex items-center space-x-1">
                    <h1 className="font-bold">{userName}</h1>

                    {isVerified && (
                        <CheckIcon
                            className="rounded-full bg-twitterblue p-1"
                            height={20}
                        />
                    )}
                    <h2 className="text-sm font-extralight">{userId}</h2>
                </div>

                <h2>{content}</h2>

                {isVerified && <TweetImage />}
                <Interactions />
            </div>
        </div>
    );
}

export default Tweet;

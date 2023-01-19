import { TweetImage } from './TweetImage';
import { CheckIcon } from '@heroicons/react/24/outline';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFetch from '../../hooks/useFetch';
import Interactions from './Interactions';
import Error from '../../components/Error';

function Tweet({ userName, userId, isVerified, avatar }) {
    //to fetch image

    const {
        data: quote,
        error: quoteError,
        isLoading: quoteIsLoading,
    } = useFetch('https://api.quotable.io/random', {});

    return (
        <div className="flex cursor-pointer space-x-1 border-b border-twittergrey p-3 hover:bg-twittergrey/40 ">
            {/* Avatar */}
            <div className=" h-12 w-12 shrink-0  overflow-hidden rounded-full bg-slate-700">
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

                {/* Tweet Text */}
                {quoteError && <Error message={quoteError} />}
                {quoteIsLoading && null}
                {!quoteError && !quoteIsLoading && <h2>{quote.content}</h2>}

                {isVerified && <TweetImage />}
                <Interactions />
            </div>
        </div>
    );
}

export default Tweet;

import useFetch from '../../hooks/useFetch';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FeedLoading from '../../components/FeedLoading';

export function TweetImage() {
    const { data, error, isLoading } = useFetch(
        'https://random.imagecdn.app/v1/image?width=490&height=300&category=nature&format=json',
        {}
    );
    return (
        <>
            {isLoading && <FeedLoading />}
            {error && <Error message={error} />}
            {!error && !isLoading && (
                <LazyLoadImage
                    className="rounded-2xl border border-twittergrey"
                    src={data.url}
                />
            )}
        </>
    );
}

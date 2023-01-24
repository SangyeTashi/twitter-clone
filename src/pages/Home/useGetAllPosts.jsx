import useFetch from '../../hooks/useFetch';
import { useState, useEffect } from 'react';

function useGetAllPosts() {
    const [posts, setPosts] = useState([]);
    const [postsIsLoading, setPostsIsLoading] = useState(false);
    const [postsError, setPostsError] = useState(null);

    const {
        data: randomUsers,
        error: randomUsersError,
        isLoading: randomUsersIsLoading,
    } = useFetch('https://random-data-api.com/api/v2/users?size=20', []);

    const {
        data: { results: quotes = [] },
        error: quotesError,
        isLoading: quotesIsLoading,
    } = useFetch('https://quotable.io/quotes?page=1', {});

    // Merge the avatar image and the quotes
    useEffect(() => {
        // check that both datas are loaded
        if (quotesError || randomUsersError) {
            setPostsError(quotes.error + randomUsersError);
            return;
        }
        if (quotesIsLoading || randomUsersIsLoading) {
            setPostsIsLoading(true);
            return;
        }

        quotes.forEach((result, index) => {
            // push to post with quote data and the avatar

            setPosts((posts) => [
                ...posts,
                {
                    quote: result,
                    avatar: randomUsers[index].avatar,
                    isVerified: result.length % 3 ? true : false,
                },
            ]);
        });
        setPostsIsLoading(false);
    }, [quotes, randomUsers]);

    return { posts, postsIsLoading, postsError };
}

export default useGetAllPosts;

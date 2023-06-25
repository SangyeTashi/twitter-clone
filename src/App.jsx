import { createContext } from 'react';
import Sidebar from './pages/Sidebar';
import useGetAllPosts from './pages/Home/useGetAllPosts';
import './App.css';
import Feed from './pages/Home/Feed';
import Search from './pages/Search';
import useFetch from './hooks/useFetch';
import FeedLoading from './components/FeedLoading';

export const UserContext = createContext({});

function App() {
    const { posts = [], postsIsLoading, postsError } = useGetAllPosts();
    const user = useFetch(
        'https://random-data-api.com/api/v2/users?size=1',
        {}
    );

    return (
        <UserContext.Provider value={user}>
            <div className="flex h-screen items-stretch overflow-y-scroll text-gray-200 xl:space-x-6 ">
                <header className="flex h-screen grow flex-col items-end py-2">
                    <Sidebar />
                </header>
                <div className=" w-[600px] overflow-y-scroll border-x-[0.3px] border-twittergrey ">
                    {postsIsLoading && <FeedLoading />}
                    {postsError && <h1>{postsError}</h1>}
                    {!postsError &&
                        !postsIsLoading &&
                        (posts.length ? (
                            <Feed posts={posts} />
                        ) : (
                            <h2>No Posts</h2>
                        ))}
                </div>
                <div className="flex grow items-start">
                    <Search />
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;

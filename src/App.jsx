import { createContext, useEffect } from 'react';
import Sidebar from './pages/Sidebar';
import './App.css';
import Feed from './pages/Home/Feed';
import Search from './pages/Search';
import useFetch from './hooks/useFetch';
import TweetForm from './pages/Home/TwitterForm/TweetForm';
import FeedLoading from './components/FeedLoading';
import Error from './components/Error';

export const UserContext = createContext({});

function App() {
    const {
        data: users,
        isLoading: usersLoading,
        error: usersError,
    } = useFetch('https://random-data-api.com/api/v2/users?size=21');
    const {
        data: quotes,
        isLoading: quoteIsLoading,
        error: quotesError,
    } = useFetch('https://quotable.io/quotes?page=1');

    useEffect(() => {
        console.log(users);
    }, [usersLoading]);
    return (
        <div className="flex items-stretch text-gray-200 xl:space-x-6 ">
            <header className="sticky top-0 flex h-screen grow flex-col items-end py-2">
                <Sidebar />
            </header>
            <div className="w-[600px] border-x-[0.3px] border-twittergrey ">
                <TweetForm />
                {usersLoading && <FeedLoading />}
                {usersError && <Error message={usersError} />}
                {!usersLoading && !quoteIsLoading && (
                    <Feed users={users} quotes={quotes} />
                )}
            </div>
            <div className="sticky top-0 flex grow ">
                <Search users={users} usersLoading={usersLoading} />
            </div>
        </div>
    );
}

export default App;

import Sidebar from './pages/Home/Sidebar';
import './App.css';
import Feed from './pages/Home/Feed/Feed';
import Search from './pages/Home/Search';
import useFetch from './hooks/useFetch';
import FeedLoading from './components/FeedLoading';

function App() {
    const { data, error, isLoading } = useFetch(
        'https://random-data-api.com/api/v2/users?size=45',
        []
    );

    return (
        <div className="flex h-screen items-stretch overflow-y-scroll text-gray-200 xl:space-x-6 ">
            <header className="flex h-screen grow flex-col items-end justify-between p-2 text-lg">
                <Sidebar />
            </header>

            {isLoading && <FeedLoading />}
            {error && <h1>{error}</h1>}
            {!error &&
                !isLoading &&
                (data.length ? <Feed posts={data} /> : <h2>No Posts</h2>)}

            <div className="flex grow items-start">
                <Search />
            </div>
        </div>
    );
}

export default App;

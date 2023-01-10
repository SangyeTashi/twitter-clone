import Sidebar from './components/Home/Sidebar';
import './App.css';
import Feed from './components/Home/Feed';
import Search from './components/Home/Search';
import useFetch from './components/Home/useFetch';

function App() {
    const { data, error, isLoading } = useFetch(
        'https://random-data-api.com/api/v2/users?size=22'
    );

    return (
        <div className="flex h-screen items-stretch overflow-y-scroll text-gray-200 xl:space-x-6 ">
            <header className="flex h-screen grow flex-col items-end justify-between p-2 text-lg">
                <Sidebar />
            </header>

            {isLoading && <h1>loading</h1>}
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

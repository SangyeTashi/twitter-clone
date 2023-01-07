import Sidebar from './components/Home/Sidebar';
import './App.css';
import Feed from './components/Home/Feed';
import Search from './components/Home/Search';

function App() {
    return (
        <div className="flex h-screen items-stretch overflow-y-scroll text-gray-200 ">
            <header className="flex h-screen grow flex-col items-end justify-between p-2 text-lg">
                <Sidebar />
            </header>
            <Feed />
            <div className="flex grow items-start">
                <Search />
            </div>
        </div>
    );
}

export default App;

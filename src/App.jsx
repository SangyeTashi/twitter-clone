import Sidebar from './components/Home/Sidebar';
import './App.css';
import Feed from './components/Home/Feed';
import Search from './components/Home/Search';

function App() {
    return (
        <div className="flex h-screen items-stretch overflow-y-scroll text-gray-200 ">
            <Sidebar />
            <Feed />
            <div className="flex grow items-start">
                <Search />
            </div>
        </div>
    );
}

export default App;

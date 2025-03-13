import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from './Home';

function HomePage() {
    return (
        <>
            <div className="flex bg-gray-100">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <Home />
                </div>
            </div>
        </>
    )
}

export default HomePage
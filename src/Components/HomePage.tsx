import Header from "./Header";
import Sidebar from "./Sidebar";


function HomePage() {
    return (
        <div className='flex bg-gray-100'>
            <Sidebar />
            <Header />
        </div>
    )
}

export default HomePage
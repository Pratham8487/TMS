import Img1 from '../assets/Cases.png';

export default function Home() {
    return (
        <>
            <div>
                <div className="w-[12.125rem] h-[13.375rem] mt-[2rem] ml-[2rem] rounded-[0.625rem] bg-[#141522] flex flex-col justify-evenly py-2 px-3">
                    <h1 className="text-white text-xl">Running Task</h1>
                    <p className="text-white text-xl">65</p>
                    <div className="flex items-center gap-10">
                        <img src={Img1} alt='img1' className='w-14 h-14'/>
                        <h1 className='text-white'>100<br/>Task</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

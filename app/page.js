import Image from "next/image";


export default function Home() {
    return (
        <div
            className="font-sans flex flex-col items-center justify-items-center bg-[url('/images/Blend2.png')] bg-center bg-cover aspect-[1]">
            <main className="flex flex-col grow">
                <div
                    className="flex flex-col items-center justify-center mt-[90px] min-h-screen w-full text-white font-[CatchyMager]">
                    <p className="text-4xl">Welcome to</p>
                    <h1 className="text-8xl py-8"><span className="text-9xl">Ferndale</span> Alliance Church</h1>
                    <p className="text-3xl">A community where you belong</p>
                </div>
            </main>
            <footer className="">Footer</footer>
        </div>
    );
}

export default function Home() {

    //--Styles
    const tileStyle = "bg-black/25 rounded-sm h-[60px] w-[175px] p-4 flex items-center justify-center cursor-pointer border-4 border-blue-300\n " +
        "                        shadow-[inset_0_0_20px_rgba(59,130,246,0.2),_0_0_40px_rgba(59,130,246,.2)] \n" +
        "                        hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.6),_0_0_40px_rgba(59,130,246,.75)]\n" +
        "                        hover:scale-107 duration-500 hover:bg-black/75"

    return (
        <div
            className="text-white font-sans flex flex-col items-center justify-items-center bg-[url('/images/Blend2.png')] bg-center bg-cover aspect-[1]">
            <main className="flex flex-col grow items-center">
                <div
                    className="flex flex-col items-center mt-[90px] pt-[calc(100vh*0.2)] min-h-[72vh] w-full text-white font-[CatchyMager]">
                    <h1 className="text-8xl py-8 text-white [text-shadow:0_0_1px_white]"><span
                        className="text-9xl">Ferndale</span> Alliance Church</h1>
                    <p className="text-3xl text-blue-100">A community where you belong</p>
                </div>
                <div className="flex flex-col items-center w-full">
                    <p className="text-5xl">What to Expect</p>
                    <div className="flex flex-row gap-12 my-10 text-blue-100 text-[1.75rem]">
                        <div className={tileStyle}>
                            Preaching
                        </div>
                        <div className={tileStyle}>
                            Worship
                        </div>
                        <div className={tileStyle}>
                            Children
                        </div>
                    </div>
                </div>
                <div className="pt-[20vh] px-[20vw] flex flex-col gap-10 items-center w-full">
                        <p className="text-5xl relative inline-block after:block after:mt-[8px] after:h-[4px] after:bg-blue-300 after:w-[115%] after:ml-[-7.5%]">
                            Hear From Our Community
                        </p>
                    <p className="text-xl text-center text-center">A Christ-centered and loving church family! Inviting,
                        open, warm, and friendly—focused on
                        teaching Scripture and kindly including everyone who enters. Very family-friendly and welcoming
                        to children while providing a place for all ages and abilities. A church that follows Jesus and
                        lives life together.</p>
                    <p className="text-xl text-center text-center">Truly wonderful church! I’ve grown up in this church
                        and its members are my family. There is a thriving youth group, children ministry, women’s and
                        men’s bible studies. If you don’t have a church family of your own you’re more than welcome to
                        join mine.</p>
                </div>
                <div className="pt-[20vh] flex flex-row w-[60%] justify-center text-xl">
                    <div className="w-full flex flex-col items-center gap-6">
                        <p className="text-4xl relative inline-block after:block after:mt-[8px] after:h-[4px] after:bg-blue-300 after:w-[130%] after:ml-[-15%]">
                            Location
                        </p>
                        <p className="text-center">6100 Church Rd, <br/> Ferndale, WA 98248</p>
                        <button
                            className="cursor-pointer bg-black/10 py-2 px-4 rounded-sm border-3 border-blue-300/75
             transition-transform transition-shadow duration-500 transform-gpu
             hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.4),_0_0_20px_rgba(59,130,246,0.55)]
             hover:scale-105 hover:bg-black/75">
                            Open in Google Maps
                        </button>

                    </div>
                    <div className="w-full flex flex-col items-center gap-6">
                        <p className="text-4xl relative inline-block after:block after:mt-[8px] after:h-[4px] after:bg-blue-300 after:w-[120%] after:ml-[-10%]">
                           Service Times
                        </p>
                        <p className="text-center">Every Sunday <br /> 8:15AM | 10:30AM | 12:30PM</p>
                        <button
                            className="cursor-pointer bg-black/10 py-2 px-4 rounded-sm border-3 border-blue-300/75
             transition-transform transition-shadow duration-500 transform-gpu
             hover:shadow-[inset_0_0_10px_rgba(59,130,246,0.4),_0_0_20px_rgba(59,130,246,0.55)]
             hover:scale-105 hover:bg-black/75">
                            Watch Online
                        </button>

                    </div>
                </div>
            </main>
            <footer className="">Footer</footer>
        </div>
    );
}

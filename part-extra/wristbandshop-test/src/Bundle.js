import BackgroundColorPicker from "./components/BackgroundColorPicker"
import CodeColorPicker from './components/CodeColorPicker'
import HeroCard from "./components/HeroCard"
import MainHeader from "./components/MainHeader"

const Bundle = ({bandSrc, onURISubmit, spotifyURI, setSpotifyURI, backgroundColor, setBackgroundColor, codeColor, setCodeColor}) => {

 return (
    <div>
        <section className="w-full px-6 pb-12 mx-auto max-w-7xl file:antialiased bg-white">
            <MainHeader></MainHeader>

            <HeroCard></HeroCard>
        </section>

        <section className="w-full px-8 py-16 bg-gray-100 xl:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center md:flex-row-reverse">

                    <div className="w-full mt-16 md:mt-0 md:w-2/5">
                        <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                            <form onSubmit={onURISubmit}>
                                <h3 className="mb-6 text-2xl font-medium text-center">Choose your song</h3>
                                <input type="text" name="code" value={spotifyURI} onChange={(e) => setSpotifyURI(e.target.value)} className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none shadow-inner shadow-gray-400" placeholder="Spotify Song URI" />
                                <h3 className="mb-6 text-2xl font-medium text-center">Choose a line color</h3>
                                <CodeColorPicker selectedOption={codeColor} setSelectedOption={setCodeColor}></CodeColorPicker>
                                <h3 className="mb-6 text-2xl font-medium text-center">Choose a background color</h3>
                                <BackgroundColorPicker colorSelected={backgroundColor} setColorSelected={setBackgroundColor}></BackgroundColorPicker>
                                <div className="block">
                                    <button type="submit" className="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Generate</button>
                                </div>
                                <p className="w-full mt-4 text-sm text-center text-gray-500">Don't know where you can find a song URI? <a href="#_" className="text-blue-500 underline">More info</a></p>
                            </form>
                        </div>
                    </div>

                    <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                        <p className="font-medium text-blue-500 hidden md:block">Result</p>
                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <div className="relative top-0 left-0">
                                    <img src={bandSrc} alt="WristBand" className="" />
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="relative py-16 bg-white min-w-screen animation-fade animation-delay" id="faq">
            <div className="container mx-auto sm:px-12 xl:px-5 text-justify">
                <p className="text-xs font-bold text-left text-pink-500 uppercase mx-6 sm:text-center sm:text-normal sm:font-bold ">
                    Got a Question? We’ve got answers.
                </p>
                <h3 className="mt-1 text-2xl font-bold text-left text-gray-800 mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                    Frequently Asked Questions
                </h3>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">How does it work?</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        The customized code of this wristband is a QR-like “scannable” tag that can be used to quickly share or access a piece of content within Spotify.
                    </p>
                </div>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Can I link my wristband to a playlist I made?</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Yes, it's totally fine to have a wristband with a playlist link, as long as you enter its corresponding Spotify URI
                    </p>
                </div>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"> How do you find a Spotify URI?</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        It depends on the device you are using, that's why we have more info <a href="#_" className="underline text-blue-500"> here </a>
                    </p>
                </div>
            </div>
        </section>

<section className="bg-white">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Team
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Pricing
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Terms
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
            </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            This is a sample shop application
        </p>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            2022, David Barroso
        </p>
    </div>
</section>
 </div>)
}

export default Bundle
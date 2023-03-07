import Social from "@components/Social";
import social from "@config/social.json";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="section bg-dark pb-0">
            <div className="ml-12">
                <div className="ml-12">
                    <div className="flex">
                        <div className="mr-8">
                            <img src="/images/logo.png" alt="" width="150px" className="mb-5" />
                            <Social source={social} className="social-icons mb-8" />
                        </div>
                        <div className="ml-12 mr-8 text-white">
                            <p className="mb-5 hover:underline hover:underline-offset-4">About Us</p>
                            <Link href="/bechef">
                                <p className="mb-5 hover:underline hover:underline-offset-4">Become Our Chef</p>
                            </Link>
                            <Link href="/beEntertainer">
                                <p className="mb-5 hover:underline hover:underline-offset-4">Become Entertainer</p>
                            </Link>
                            <Link href="/room">
                                <p className="mb-5 hover:underline hover:underline-offset-4">List Your Room</p>
                            </Link>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Book Entertainer</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Book a Room</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Book a Cook</p>
                        </div>
                        <div className="ml-12 mr-8 text-white">
                            <p className="mb-5 hover:underline hover:underline-offset-4">Health Test</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Blogs/News</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Investors Relations</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Carrers</p>
                        </div>
                        <div className="ml-12 mr-8 text-white">
                            <p className="mb-5 hover:underline hover:underline-offset-4">Terms and Conditions</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Privacy Policy</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">FAQ</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Support</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Contact Us</p>
                            <p className="mb-5 hover:underline hover:underline-offset-4">Sitemap</p>
                        </div>
                        <div className="ml-12 mr-8 text-white">
                            <p className="text-base font-semibold">JOIN OUR NEWSLETTER</p>
                            <p className="mt-4 text-sm">
                                Sign up to receive updates on promotions, <br /> early access to
                                new products, and more
                            </p>
                            <div
                                className="mt-3 inline-flex rounded-md shadow-sm"
                                role="group"
                            >
                                <input
                                    type="text"
                                    id="large-input"
                                    placeholder="Enter your Email"
                                    className="sm:text-md block w-full rounded-l-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                />
                                <button
                                    type="button"
                                    className="items-center rounded-r-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <div className="mt-6 flex">
                                <img
                                    className="mr-3 w-36 cursor-pointer"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                    alt=""
                                />
                                <img
                                    className="w-36  cursor-pointer"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white mt-12 font-bold">
                    <span>&#169;</span> 2021 obakiapp.com
                </div>
            </div>
        </footer>
    );
};

export default Footer;

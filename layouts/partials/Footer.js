import Social from "@components/Social";
import social from "@config/social.json";
import Link from "next/link";
import { useRouter } from "next/router";
import footers from "../../public/assets/footers.json";

const Footer = () => {
  const { locale, locales, asPath } = useRouter();
  const footer = footers.data.filter((p) => p.locale === locale);

  return (
    <footer className="section bg-dark pb-0">
      <div className="ml-12 max-sm:ml-0">
        <div className="ml-12 max-sm:ml-0">
          <div className="flex max-sm:block">
            <div className="mr-8 w-64 max-sm:mr-0 max-sm:ml-12">
              <img src="/images/logo.png" alt="" className="mb-5" />
              <div className="ml-7 max-sm:ml-12 max-sm:pl-6">
                <Social source={social} className="social-icons mb-8" />
              </div>
            </div>
            <div className="ml-8 mr-8 w-64 text-white max-sm:ml-12 max-sm:pl-8 max-sm:mr-0 max-sm:text-center">
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].about}
              </p>
              <Link href="/bechef">
                <p className="mb-5 hover:underline hover:underline-offset-4">
                  {footer[0].chef}
                </p>
              </Link>
              <Link href="/beEntertainer">
                <p className="mb-5 hover:underline hover:underline-offset-4">
                  {footer[0].entertainer}
                </p>
              </Link>
              <Link href="/room">
                <p className="mb-5 hover:underline hover:underline-offset-4">
                  {footer[0].room}
                </p>
              </Link>
              <Link href="/bookaentertainer">
                <p className="mb-5 hover:underline hover:underline-offset-4">
                  {footer[0].bookentertainer}
                </p>
              </Link>
              <Link href="/bookaroom">
                <p className="mb-5 hover:underline hover:underline-offset-4">
                  {footer[0].bookroom}
                </p>
              </Link>
              <Link href="/bookachef">
                <p className="mb-5 hover:underline hover:underline-offset-4">
                  {footer[0].bookcook}
                </p>
              </Link>
            </div>
            <div className="ml-12 mr-8 text-white max-sm:text-center">
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].health}
              </p>
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].blog}
              </p>
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].investor}
              </p>
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].career}
              </p>
            </div>
            <div className="ml-12 mr-8 text-white max-sm:text-center">
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].terms}
              </p>
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].privacy}
              </p>
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].faq}
              </p>
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].support}
              </p>
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].contact}
              </p>
              <p className="mb-5 hover:underline hover:underline-offset-4">
                {footer[0].sitemap}
              </p>
            </div>
            <div className="ml-12 mr-8 text-white max-sm:text-center">
              <p className="text-base font-semibold max-sm:text-center">{footer[0].join}</p>
              <p className="mt-4 text-sm">{footer[0].sign}</p>
              <div
                className="mt-3 inline-flex rounded-md shadow-sm"
                role="group"
              >
                <input
                  type="text"
                  id="large-input"
                  placeholder={footer[0].email}
                  className="sm:text-md block w-full rounded-l-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="items-center rounded-r-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600"
                >
                  {footer[0].subscibe}
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
        <div className="mt-12 text-center font-bold text-white">
          <span>&#169;</span> 2021 obakiapp.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;

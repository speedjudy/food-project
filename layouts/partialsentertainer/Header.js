import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import headers from "../../public/assets/headersuser.json";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  //router
  const router = useRouter();
  const { locale, locales, asPath } = useRouter();
  const header = headers.data.filter((p) => p.locale === locale);

  function handleChange(e) {
    router.push(router.pathname, e.target.value);
  }

  // states declaration
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="header">
      <nav className="navbar container">
        {/* logo */}
        <div className="flex">
          {/* navbar toggler */}
          <button
            id="show-button"
            className="z-[1] flex cursor-pointer items-center md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            ) : (
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            )}
          </button>

          <img
            src="/images/logo.png"
            alt="this is image for logo"
            width="150px"
          />
          {/* Menu */}
        </div>

        <div>
          <div className="ml-2 mt-7 max-sm:ml-0">
            <ul className="navbar-nav w-full md:flex md:w-auto lg:space-x-2">
              <li className="nav-item nav-dropdown group relative text-dark">
                <span className="font-bold underline underline-offset-4">
                  Country / City:
                </span>{" "}
                Thailand-Bangkok
              </li>
            </ul>
          </div>
          {navOpen ? (
            <>
              <div
                className={
                  navOpen
                    ? "z-3 w-100 absolute left-0 ml-[-22px] mt-[-142px] h-[100vh] bg-slate-700/[.5] pt-24 pl-5"
                    : "max-sm:hidden"
                }
              >
                <ul className="navbar-nav w-full md:flex md:w-auto lg:space-x-2">
                  <React.Fragment>
                    <li className="nav-item text-white">
                      <Link
                        href="/entertainerdashboard"
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === "/entertainerdashboard"
                            ? "nav-link-active"
                            : "text-white"
                        }`}
                      >
                        {header[0].home}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/aboutus"
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === "/aboutus"
                            ? "nav-link-active"
                            : "text-white"
                        }`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/manageproperty"
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === "/manageproperty"
                            ? "nav-link-active"
                            : "text-white"
                        }`}
                      >
                        Manage Property
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/manageorders"
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === "/manageorders"
                            ? "nav-link-active"
                            : "text-white"
                        }`}
                      >
                        Manage Order
                      </Link>
                    </li>
                  </React.Fragment>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="max-sm:hidden">
                <ul className="navbar-nav w-full md:flex md:w-auto lg:space-x-2">
                  <React.Fragment>
                    <li className="nav-item">
                      <Link
                        href="/entertainerdashboard"
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === "/entertainerdashboard" ? "nav-link-active" : ""
                        }`}
                      >
                        {header[0].home}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/aboutus"
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === "/aboutus"
                            ? "nav-link-active"
                            : ""
                        }`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/manageproperty"
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === "/manageproperty"
                            ? "nav-link-active"
                            : ""
                        }`}
                      >
                        Manage Property
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/manageorders"
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === "/manageorders"
                            ? "nav-link-active"
                            : ""
                        }`}
                      >
                        Manage Order
                      </Link>
                    </li>
                  </React.Fragment>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="mt-7 flex max-sm:ml-64 max-sm:mt-[-35px]">
          {" "}
          <div className="d-flex order-1  mr-4 ml-auto min-w-[50px] items-center justify-end md:ml-0 md:flex md:order-2">
            <select
              className="w-[70px] rounded-md border-dark bg-transparent p-2.5 text-dark outline-none focus:border focus:border-dark max-sm:text-sm"
              onChange={handleChange}
              value={locale}
            >
              <option className="bg-transparent text-dark" hidden>
                Language
              </option>
              {locales.map((l, i) => {
                return (
                  <option
                    key={i}
                    className="bg-transparent text-dark"
                    value={l}
                  >
                    {l}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="max-sm:mt-[-200px] max-sm:ml-[180px]">
          {status !== "authenticated" ? (
            <div className="mt-7 flex h-11 rounded-md border border-orange-500 shadow-sm ">
              <Link href="/signup">
                <button className="h-full items-center rounded-l-md bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600">
                  {header[0].register}
                </button>
              </Link>
              <Link href="/login">
                <button className="h-full items-center rounded-r-md bg-transparent px-4 py-2 text-sm font-bold text-dark hover:bg-orange-600 hover:text-white">
                  {header[0].login}
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex pt-3">
              <img src={session.user.image} alt="" className="rounded-full" />

              <button onClick={signOut}>Sign Out</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

import Link from "next/link";

function Header() {
  return (
    <header className="dark:bg-slate-700 h-12 sm:h-16 md:h-20 lg:h-24 shadow sm:shadow-sm lg:shadow-lg xl:shadow-2xl xl:text-2xl fixed z-10 left-0 top-0 right-0 ">
      <nav className=" px-2 sm:px-3 md:px-5 lg:px-6  grid grid-col-2 items-center h-full lg:mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
        <div className="logo ">
          <div className="col-start-1">
            <Link href="/">Hyperstream</Link>
          </div>
        </div>
        <div className="links col-start-2">
          <ul className="flex items-center justify-end md:justify-evenly lg:justify-around gap-3 xl:justify-end xl:gap-8">
            <li>
              <Link href="/dashboard">Admin Dashboard</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/api/auth/v1/logout">Logout</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

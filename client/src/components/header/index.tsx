import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white" data-testid="header-container">
      <nav className="flex items-center justify-between p-6 shadow">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="text-2xl font-bold"
            data-testid="header-logo"
          >
            Nick<span className="font-normal">Morgan</span>
          </Link>
        </div>
        <div className="flex gap-x-6 md:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
            data-testid="header-home-link"
          >
            Home
          </Link>
          <Link
            href="/employees"
            className="text-sm font-semibold leading-6 text-gray-900"
            data-testid="header-employees-link"
          >
            Employees
          </Link>
        </div>
        <div className="flex lg:flex-1 justify-end">
          <Link
            href="https://github.com/GhostCrawl3r"
            className="text-sm font-semibold leading-6 text-gray-900"
            data-testid="header-about-me-link"
          >
            About Me <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

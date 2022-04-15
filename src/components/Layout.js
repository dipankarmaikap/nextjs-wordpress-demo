import React from "react";
import Link from "next/link";
export default function Layout({ isHome = false, children }) {
  return (
    <div className="px-4 md:px-8 bg-gray-50">
      <header>
        <Link href="/">
          <a className="hover:text-indigo-600">
            {isHome ? (
              <h1 className="text-4xl md:text-5xl text-center font-bold my-6 md:my-10 hover:underline">
                Nextjs Wordpress
              </h1>
            ) : (
              <p className="text-4xl md:text-5xl text-center font-bold my-6 md:my-10 hover:underline">
                Nextjs Wordpress
              </p>
            )}
          </a>
        </Link>
      </header>
      <main>{children}</main>
      <footer className="my-4">
        © {new Date().getFullYear()}, Created by{" "}
        <a
          className="underline hover:text-indigo-600"
          target="_blank"
          rel="noreferrer"
          href="https://dipankarmaikap.com/"
        >
          Dipankar Maikap
        </a>
      </footer>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

export default function Layout({ children, title = "HP by Nextjs"}) {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <head>
                <title>{title}</title>
            </head>
            <header>
                <nav className="bg-green-800 w-screen">
                    <div flex items-center pl-8 h-14>
                        <div className="flex space-x-4">
                            <Link href="/">
                                <a className="text-yellow-100 hover:bg-green-500 px-3 py-2 rounded">
                                    Home
                                </a>
                            </Link>
                            <Link href="/blog-page">
                                <a className="text-yellow-100 hover:bg-green-500 px-3 py-2 rounded">
                                    Blog
                                </a>
                            </Link>
                            <Link href="/contact-page">
                                <a className="text-yellow-100 hover:bg-green-500 px-3 py-2 rounded">
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
            <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className="h-5 ml-2">
            <Image src="/asktech.svg" alt="asktech Logo" width={180} height={0} />
          </span>
        </a>
      </footer>
        </div>
    )
}
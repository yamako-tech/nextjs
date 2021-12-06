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
                <nav className="bg-green-800 w-screen"></nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
        </div>
    )
}
import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Head>

            </Head>
            <nav>
                <Navbar/>
            </nav>
            <main>
                { children }
            </main>
        
        </>
    )
}

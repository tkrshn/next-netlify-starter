import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="👋 Hey there!" />
        <p className="description">
          Thanks for visiting. This site is WIP. Feel free to check back later if you'd like to know me.
        </p>
      </main>

      <Footer />
    </div>
  )
}

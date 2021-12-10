import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Meet tkrshn!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="👋 Hey there!" />
        <p className="description">
          Thanks for visiting. This site is WIP. Feel free to check back later if you'd like to know about me.
          
          Meanwhile here are a couple of technical blogs about Splunk I wrote for my org:
          <ul>
            <li><a href="https://discoveredintelligence.ca/moving-bits-around-deploying-splunk-apps-with-github-actions/" target="_blank">Moving bits around: Deploying Splunk Apps with Github Actions</a></li>
            <li><a href="https://discoveredintelligence.ca/harnessing-ingest-time-eval-fields/" target="_blank">Harnessing Ingest-Time Eval Fields</a></li>
          </ul>
        </p>
      </main>

      <Footer />
    </div>
  )
}

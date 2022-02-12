import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/hello.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />   
        <title>tkrshn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="👋 Hey there!" />
        <p className="description">
          Thanks for visiting. This site is WIP. Feel free to check back later if you'd like to know about me.
        </p>
        <p>           
          Meanwhile here are a couple of technical blogs about Splunk I wrote on my employer's website:
          <ul>
            <li><a href="https://discoveredintelligence.ca/moving-bits-around-deploying-splunk-apps-with-github-actions/" target="_blank">Moving bits around: Deploying Splunk Apps with Github Actions</a></li>
            <li><a href="https://discoveredintelligence.ca/harnessing-ingest-time-eval-fields/" target="_blank">Harnessing Ingest-Time Eval Fields</a></li>
          </ul>
        </p>
        <div class="styles.stickyicon-list">
          <a href="https://twitter.com/tkrshn" class="twitter">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/tkrshn/" class="linkedin">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react'
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>👋 from tkrshn</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=optional" rel="stylesheet"/>
      </Head>

      <main>
        <Header title="👋 Hey there!" />
        <p className="description">
          My name's Thulasi Krishnan. I am a software engineer by profession. I live in Canada. This site is where I write my thoughts on random stuff. This site is also where I write some tech content as I learn and try new stuff. Nothing fancy. Just plain simple facts, observations, musings, and learnings. Something I can go back to and read myself, like a papertrail for my thought/learning process.

          Thanks for visiting!
          
          Feel free to check out a couple of technical blogs about Splunk I wrote on my company portal.
          <ul>
            <li><a href="https://discoveredintelligence.ca/moving-bits-around-deploying-splunk-apps-with-github-actions/" target="_blank">Moving bits around: Deploying Splunk Apps with Github Actions</a></li>
            <li><a href="https://discoveredintelligence.ca/harnessing-ingest-time-eval-fields/" target="_blank">Harnessing Ingest-Time Eval Fields</a></li>
          </ul>
        </p>
        <div>
        <TwitterShareButton url={'https://www.linkedin.com/in/tkrshn/'} >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={'https://www.linkedin.com/in/tkrshn/'} >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
    </div>
      </main>
      <Footer />
    </div>
  )
}
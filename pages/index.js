import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />   
        <title>About - tkrshn</title>
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          /* Style the Sticky icons on web page */   
          .stickyicon-list {   
            position: fixed;   
            top: 200px;   
            transform: translateY(-50%);             
          }         
          .stickyicon-list a {   
            display: block;   
            text-align: center;   
            padding: 8px;   
            transition: all 0.5s ease;   
            color: white;   
            font-size: 20px;   
          }         
          /* HOver affect on sticky social media icons */   
          .stickyicon-list a:hover {   
            color: #000;   
            width:10px;   
          }
          .fa {
            padding: 20px;  
            text-align: center;  
            margin: 5px 2px;  
            font-size: 30px;  
            width: 50px;  
          }
          .fa-twitter {  
            background: #55ACEE;  
            color: white;  
          }
          .fa-linkedin {  
            background: #007bb5;  
            color: white;  
          }
          .fa:hover {  
            opacity: 0.9;  
          }  
        `}</style>
      </Head>
      <main>
        <Header title="👋 Hey there!" />
        <p className="description">
          Thanks for visiting. This site is WIP. Feel free to check back later if you'd like to know about me.
        </p>
        <p>           
          Meanwhile here are a couple of technical blogs about Splunk I wrote for my org:
          <ul>
            <li><a href="https://discoveredintelligence.ca/moving-bits-around-deploying-splunk-apps-with-github-actions/" target="_blank">Moving bits around: Deploying Splunk Apps with Github Actions</a></li>
            <li><a href="https://discoveredintelligence.ca/harnessing-ingest-time-eval-fields/" target="_blank">Harnessing Ingest-Time Eval Fields</a></li>
          </ul>
        </p>
      </main>
      <div class="stickyicon-list">
        <a href="https://twitter.com/tkrshn" class="twitter">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/tkrshn/" class="linkedin">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
      <Footer />
    </div>
  )
}

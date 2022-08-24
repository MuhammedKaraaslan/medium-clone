import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../containers/Header/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium - Where good ideas find you.</title>
        <link rel="icon" href="/medium-clone/assets/logo.png" />
      </Head>

      <Header />
      
    </div>
  )
}

export default Home

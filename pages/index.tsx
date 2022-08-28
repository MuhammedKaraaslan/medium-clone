import type { GetServerSideProps } from 'next'
import Head from 'next/head'

import { Header, TrendPostsSection } from '../containers/index'

import { Post } from '../types/typings'
import { fetchPosts } from '../utils/fetchPosts'

interface Props {
  posts: Post[]
}

const Home = ({ posts }: Props) => {
  return (
    <div>
      <Head>
        <title>Medium - Where good ideas find you.</title>
        <link rel="icon" href="" />
      </Head>

      <Header />

      <TrendPostsSection posts={posts} />

    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    }
  }
}
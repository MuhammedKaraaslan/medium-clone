import React from 'react'
import { TrendLogo } from '../../assets'
import Post from '../../components/Post/Post'
import { Post as PostType } from '../../types/typings'


interface Props {
  posts: PostType[]
}

const TrendPostsSection = ({ posts }: Props) => {

  const trendPosts = posts.filter(post => post.categories.some((category) => new Set(['trend']).has(category.title))).slice(0, 6);
  return (
    <section className='border-b border-gray-300'>
      <div className='p-5 mx-auto mt-5 max-w-7xl'>
        <div className='flex items-center space-x-3'>
          <img className='w-6 h-6' src={TrendLogo.src} alt="Trending on Medium" />
          <h3 className='text-xs font-bold uppercase'>TRENDING ON MEDIUM</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {trendPosts?.map((post, index) => (
            <div key={post._id} className='flex mt-5 space-x-5' >
              <p className='text-3xl font-bold text-gray-200'>{`0${index + 1}`}</p>
              < Post post={post} isTrend={true} />
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default TrendPostsSection
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
    <div className='max-w-7xl mx-auto p-5 mt-5'>
      <div className='flex items-center space-x-3'>
        <img className='w-6 h-6' src={TrendLogo.src} alt="Trending on Medium" />
        <h3 className='text-xs font-bold uppercase'>TRENDING ON MEDIUM</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {trendPosts?.map((post, index) => (
          <div key={post._id} className='flex space-x-5 mt-5' >
            <p className='text-3xl text-gray-200 font-bold'>{`0${index + 1}`}</p>
            < Post post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendPostsSection
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity/client'
import { Post as PostType } from '../../types/typings'

interface Props {
  post: PostType
  isTrend: boolean
}

const Post = ({ post, isTrend }: Props) => {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <div className={`flex justify-between w-full space-x-5 space-y-7 cursor-pointer ${!isTrend && "items-center"}`}>
        <div className='mt-3 space-y-2'>
          {/* Author */}
          <div className='flex items-center space-x-3'>
            <img className='w-5 h-5 rounded-full' src={urlFor(post.author.image).url()} alt={post.author.name} />
            <p className='text-sm font-medium'>{post.author.name}</p>
          </div>

          {/* Title */}
          <h3 className='font-bold'>{post.title}</h3>

          {/* Descriptiopn */}
          {!isTrend &&
            <p className='text-gray-400'>{post.description}</p>
          }

          {/* Details */}
          <div className='flex space-x-3 text-sm text-gray-400'>
            <p >{new Date(post._createdAt).toLocaleDateString()}</p>
            <p >{`${post.readTime} read`}</p>
          </div>
        </div>

        {
          !isTrend &&
          <div>
            <img src={urlFor(post.mainImage).url()} alt={post.title} className='object-cover h-32 w-52 max-w-none' />
          </div>
        }
      </div>
    </ Link>
  )
}

export default Post
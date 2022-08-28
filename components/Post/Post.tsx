import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity/client'
import { Post as PostType } from '../../types/typings'

interface Props {
  post: PostType
}

const Post = ({ post }: Props) => {
  const isTrendPost = post.categories.some((category) => new Set(['trend']).has(category.title));
  return (
    <Link href={`/post/${post.slug.current}`}>
      <div className='mt-3 space-y-2 cursor-pointer'>
        {/* Author */}
        <div className='flex space-x-3 items-center'>
          <img className='w-5 h-5 rounded-full' src={urlFor(post.author.image).url()} alt={post.author.name} />
          <p className='text-sm font-medium'>{post.author.name}</p>
        </div>

        {/* Title */}
        <h3 className='font-bold'>{post.title}</h3>

        {/* Descriptiopn */}
        {!isTrendPost &&
          <p className='text-gray-400'>{post.description}</p>
        }

        {/* Details */}
        <div className='flex text-gray-400 text-sm space-x-3'>
          <p >{new Date(post._createdAt).toLocaleDateString()}</p>
          <p >{`${post.readTime} read`}</p>
        </div>
      </div>
    </ Link>
  )
}

export default Post
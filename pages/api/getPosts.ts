// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { sanityClient } from '../../sanity/client'

import { groq } from 'next-sanity';

import { Post } from '../../types/typings';


const postQuery = groq`*[_type == 'post']{
    _id,
    _createdAt,
    title,
    slug,
    readTime,
    description,
    mainImage,
    publishedAt,
    categories[] -> {
      title
    },
    author -> {
    name,
    image,
    }
  } | order(_createdAt desc)`;



type Data = {
    posts: Post[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts: Post[] = await sanityClient.fetch(postQuery)
    console.log(posts)
    res.status(200).json({ posts })
}

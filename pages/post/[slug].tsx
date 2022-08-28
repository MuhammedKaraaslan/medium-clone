import { GetStaticProps } from 'next'
import React from 'react'
import { sanityClient } from '../../sanity/client'
import { Post } from '../../types/typings'

interface Props {
    post: Post
}

function Post({ post }: Props) {
    return (
        <div className='grid grid-cols-12'>
            <div>
                {/* left side bar */}
            </div>
            <div>
                {/* post */}
            </div>
            <div>
                {/* right side bar */}
            </div>
        </div>
    )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type == 'post']{
        _id,
        slug {
      current
    }
      }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        }
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const query = `*[_type == 'post' &&
    slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author -> {
     name,
     image
    },
    description,
    mainImage,
    slug,
    body    
  }`;

    const post = await sanityClient.fetch(query, { slug: params?.slug });

    if (!post) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post,
        },
        revalidate: 60, //Update the cache every 60 seconds
    }

}
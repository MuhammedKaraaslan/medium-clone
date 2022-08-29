import React, { useState } from 'react'

import Link from 'next/link'

import { GetStaticProps } from 'next'

import PortableText from 'react-portable-text'

import { InnerPageLogo } from '../../assets'

import { sanityClient, urlFor } from '../../sanity/client'

import { Post } from '../../types/typings'

import { BsHouse, BsBookmarks, BsBell, BsCardText, BsPencilSquare, BsFacebook, BsTwitter, BsLinkedin, BsSearch, BsEnvelopeOpen, BsHeart, BsChat } from "react-icons/bs"

import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
    _id: string,
    name: string,
    email: string,   //email?: string  means email is not required
    comment: string
}

interface Props {
    post: Post
}

function Post({ post }: Props) {

    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(() => {
            setSubmitted(true);
        }).catch((err) => {
            setSubmitted(false);
        })
    };

    return (
        <main className='mb-32'>
            {/* left side bar */}
            <div className='fixed flex flex-col items-end h-screen pt-6 pl-24 pr-6 border-r border-gray-300'>
                <Link href="/">
                    <img src={InnerPageLogo.src} alt="logo" className='object-cover w-12 h-16 cursor-pointer' />
                </Link>
                <div className='my-auto space-y-10'>
                    <BsHouse className='w-6 h-6 transition-all duration-150 ease-out opacity-50 cursor-pointer hover:opacity-100 ' />
                    <BsBell className='w-6 h-6 transition-all duration-150 ease-out opacity-50 cursor-pointer hover:opacity-100 ' />
                    <BsBookmarks className='w-6 h-6 transition-all duration-150 ease-out opacity-50 cursor-pointer hover:opacity-100 ' />
                    <BsCardText className='w-6 h-6 transition-all duration-150 ease-out opacity-50 cursor-pointer hover:opacity-100 ' />
                    <BsPencilSquare className='w-6 h-6 transition-all duration-150 ease-out opacity-50 cursor-pointer hover:opacity-100 ' />
                </div>
            </div>

            {/* post */}
            <div className='relative pt-16 mr-64 space-y-8 px-96'>
                {/* Author */}
                <div className='flex items-center w-full space-x-6'>
                    <img src={urlFor(post.author.image).url()} alt={post.author.name} className='object-cover w-12 h-12 rounded-full' />
                    <div>
                        <h3>{post.author.name}</h3>
                        <div className='flex space-x-3 text-sm text-gray-400'>
                            <p >{new Date(post._createdAt).toLocaleDateString()}</p>
                            <p >{`${post.readTime} read`}</p>
                        </div>
                    </div>
                    <div className='flex justify-end flex-1 space-x-5'>
                        <BsTwitter className='w-6 h-6 transition-all duration-150 ease-out cursor-pointer opacity-30 hover:opacity-100' />
                        <BsFacebook className='w-6 h-6 transition-all duration-150 ease-out cursor-pointer opacity-30 hover:opacity-100' />
                        <BsLinkedin className='w-6 h-6 transition-all duration-150 ease-out cursor-pointer opacity-30 hover:opacity-100' />
                    </div>
                </div>

                <article className='space-y-8'>
                    {/* Title */}
                    <h2 className='text-3xl font-bold'>{post.title}</h2>

                    {/* Main Image */}
                    <img src={urlFor(post.mainImage).url()!} alt={post.title} className='object-cover w-full h-60' />

                    {/* Body */}
                    <div>
                        <PortableText
                            className=''
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                            content={post.body}
                            serializers={{
                                h1: (props: any) => (
                                    <h1 className='my-5 text-2xl font-bold' {...props} />
                                ),

                                h2: (props: any) => (
                                    <h1 className='my-5 text-xl font-bold' {...props}></h1>
                                ),
                                li: ({ children }: any) => (
                                    <li className='ml-4 list-disc'>{children}</li>
                                ),
                                link: ({ href, children }: any) => (
                                    <a href={href} className='text-blue-500 hover:underline'>
                                        {children}
                                    </a>
                                )
                            }
                            }
                        />
                    </div>
                </article>

                <hr className='max-w-lg mx-auto my-5 border border-yellow' />

                {submitted ? (
                    <div className='flex flex-col max-w-2xl p-10 mx-auto my-10 text-white bg-yellow'>
                        <h3 className='text-3xl font-bold'>Thank you for submitting your comment</h3>
                        <p>Once it has been approved, it will appear below!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-2xl p-5 mx-auto mb-10'>
                        <h3 className='text-sm text-yellow'>Enjoyed this article?</h3>
                        <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
                        <hr className='py-3 mt-2' />

                        <input
                            {...register("_id")}
                            type='hidden'
                            name='_id'
                            value={post._id}
                        />

                        <label htmlFor="" className='block mb-5'>
                            <span className='text-gray-700'>Name</span>
                            <input type="text" placeholder={'Your Name'} {...register("name", { required: true })}
                                className='block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-yellow focus:ring' />
                        </label>

                        <label htmlFor="" className='block mb-5'>
                            <span className='text-gray-700'>Email</span>
                            <input type="email" placeholder={'Your Email'} {...register("email", { required: true })}
                                className='block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-yellow focus:ring' />
                        </label>

                        <label htmlFor="" className='block mb-5'>
                            <span className='text-gray-700'>Comment</span>
                            <textarea placeholder={'Your Comment'} rows={8} {...register("comment", { required: true })}
                                className='block w-full px-3 py-2 mt-1 border rounded shadow outline-none resize-none form-textarea ring-yellow focus:ring' />
                        </label>

                        <div className='flex flex-col p-5'>
                            {errors.name && (
                                <span className='text-red-500'>The name field is reuired</span>
                            )}
                            {errors.email && (
                                <span className='text-red-500'>The email field is reuired</span>
                            )}
                            {errors.comment && (
                                <span className='text-red-500'>The comment field is reuired</span>
                            )}
                        </div>

                        <input type="submit" value={'Submit'}
                            className='px-4 py-2 font-bold text-white rounded shadow cursor-pointer bg-yellow hover:bg-opacity-90 focus:shadow-outline focus:outline-none' />
                    </form>
                )}

                {/* Comments */}
                <div id='comments' className='flex flex-col max-w-2xl p-10 mx-auto my-10 space-y-2 shadow shadow-yellow'>
                    <h3 className='text-4xl'>Comments</h3>
                    <hr className='pb-2' />

                    {post.comments.map((comment) => (
                        <div key={comment._id}>
                            <div className='flex p-5 space-x-2 border shadow'>
                                <p className='text-yellow'>{comment.name}:</p>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comments and Claps */}
                <div className='fixed flex items-center px-5 py-3 space-x-5 text-gray-400 bg-gray-100 rounded-full right-1/2 bottom-5'>
                    <a className='flex items-center space-x-2 transition-all duration-100 ease-out hover:text-black '>
                        <BsHeart className='w-4 h-4' />
                        <p className='text-sm'>1K</p>
                    </a>
                    <hr className='h-3 border-l-2 ' />
                    <a href='#comments' className='flex items-center space-x-2 transition-all duration-100 ease-out hover:text-black'>
                        <BsChat className='w-4 h-4' />
                        <p className='text-sm'>{post.comments.length}</p>
                    </a>
                </div>
            </div>

            {/* right side bar */}
            <div className='fixed top-0 right-0 flex flex-col h-screen pt-16 pl-6 pr-32 border-l stop-0 border-x-gray-300'>
                <div className='relative'>
                    <div className='space-x-5'>
                        <button className='px-24 py-2 text-sm text-white bg-black rounded-full'>Get Started</button>
                        <button className='text-sm text-green-600'>Sign In</button>
                    </div>
                    <div className='flex items-center px-5 py-2 mt-12 border border-gray-300 rounded-full'>
                        <BsSearch className='mr-2' />
                        <input type="text" placeholder='Search' className='w-full outline-0 ' />
                    </div>
                    <div>
                        <img src={urlFor(post.author.image).url()} alt={post.author.name} className='w-20 h-20 mt-8 rounded-full' />
                        <p className='mt-4 mb-2 font-bold'>{post.author.name}</p>
                        <p className='text-sm opacity-40'>{post.author.bio}</p>
                    </div>
                    <div className='flex items-center mt-8 space-x-3'>
                        <button className='px-5 py-3 text-sm text-white bg-green-600 rounded-full'>Follow</button>
                        <button className='flex items-center p-3 text-white bg-green-600 rounded-full'>
                            <BsEnvelopeOpen />
                        </button>
                    </div>
                </div>
            </div>
        </main>
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
    readTime,
    author -> {
     name,
     image,
     bio
    },
    'comments': *[
        _type == 'comment' &&
        post._ref == ^._id &&
        approved == true],
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
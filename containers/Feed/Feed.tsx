import React from 'react'
import Post from '../../components/Post/Post'
import { Post as PostType } from '../../types/typings'

interface Props {
    posts: PostType[]
}

const Feed = ({ posts }: Props) => {
    const tips = ['Self', 'Realationships', 'Data Science', 'Programming', 'Productivity', 'Javascript',
        'Machine Learning', 'Politics', 'Health'];

    const navList = ['Help', 'Status', 'Writers', 'Blog', 'Careers', 'Privacy', 'Terms', 'About', 'Knowable'];

    return (
        <div className='grid max-w-6xl grid-cols-12 p-5 mx-auto mt-5 '>
            <div className='col-span-12 xl:col-span-7'>
                {/* Post */}
                {posts?.map((post) => (
                    <div key={post._id} className='flex mt-5 space-x-5' >
                        < Post post={post} isTrend={false} />
                    </div>
                ))}
            </div>

            {/* Side Bar */}
            <div className='col-span-5 mt-5 ml-28'>
                <h3 className='text-sm font-bold'>DISCOVER MORE OF WHAT MATTERS TO YOU</h3>

                <div className='mt-3 '>
                    {
                        tips.map((tip, index) => (
                            <div key={tip} className='inline' >
                                <a href={tip} className='inline-flex px-4 py-2 mb-3 mr-3 text-sm border opacity-70' >{tip}</a>
                                {(index + 1) % 3 === 0 && <br />}
                            </div>
                        ))
                    }
                </div>

                <hr className='my-5' />

                <div className='flex flex-wrap mt-3'>
                    {
                        navList.map((item) => (
                            <a key={item} href={item} className='mb-3 mr-5 text-sm opacity-70' >{item}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Feed
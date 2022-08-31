import React from 'react'
import Post from '../../components/Post/Post'
import { Post as PostType } from '../../types/typings'

interface Props {
    posts: PostType[]
}

const Feed = ({ posts }: Props) => {
    return (
        <div className='grid grid-cols-12 p-5 mx-auto mt-5 max-w-7xl '>
            <div className='col-span-12 lg:col-span-7'>
                {/* Post */}
                {posts?.map((post) => (
                    <div key={post._id} className='flex mt-5 space-x-5' >
                        < Post post={post} isTrend={false} />
                    </div>
                ))}
            </div>
            <div className='col-span-5'>
                {/* Side Bar */}
            </div>
        </div>
    )
}

export default Feed
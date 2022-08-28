import { Post } from './../types/typings.d';

export const fetchPosts = async () => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPosts`)

    const data = await result.json();
    const tweets: Post[] = data.posts;

    return tweets;
}
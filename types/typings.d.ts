export type Category = {
    title: string
}

export type PostBody = {
    title: string
    slug: {
        current: string
    }
    readTime: string
    description: string
    categories: Category[]
    mainImage: {
        asset: {
            url: string
        }
    }
    author: {
        name: string
        image: string
    }
    body: [object]
}

export interface Post extends PostBody {
    _id: string
    _createdAt: string
}

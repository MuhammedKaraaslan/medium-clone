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
        bio: string
    }
    comments: Comment[]
    body: [object]
}

export interface Post extends PostBody {
    _id: string
    _createdAt: string
}

export interface Comment {
    approved: boolean
    comment: string
    email: string
    name: string
    post: {
        _ref: string
        _type: string
    }
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
}
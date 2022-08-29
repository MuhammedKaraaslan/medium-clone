// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { sanityClient } from '../../sanity/client'


const client = sanityClient;

export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { _id, name, email, comment } = JSON.parse(req.body);

    try {
        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            comment,
        })
    } catch (error) {
        return res.status(500).json({ message: 'Could not submit the comment', error })
    }
    res.status(200).json({ message: 'Comment submitted' })
}

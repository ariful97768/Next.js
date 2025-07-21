import { type NextRequest } from 'next/server';
import { comments } from '../data';

export function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query')
    const filteredComments = query ? comments.filter(comment => comment.text.includes(query)) : comments
    return Response.json(filteredComments)
};

export async function POST(request: Request) {
    const comment = await request.json()
    const newComment = {
        id: (comments.length + 1).toString(),
        text: comment.text,
        age: 20
    }
    comments.push(newComment)

    return new Response(JSON.stringify(newComment), {
        headers: { 'Content-type': 'application/json' },
        status: 201
    })
}
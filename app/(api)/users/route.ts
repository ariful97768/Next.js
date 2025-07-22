import { type NextRequest } from 'next/server';
import { comments } from '../data';
// import { headers, cookies } from 'next/headers';

export async function GET(req: NextRequest) {
    // const requestHeaders = new Headers(req.headers).get('HeadersName')
    // const headersList = (await headers()).get('HeadersName')

    // const theme = req.cookies.get('theme')
    // const cookieStore = (await cookies()).get('CookieName')

    const query = req.nextUrl.searchParams.get('query')
    const filteredComments = query ? comments.filter(comment => comment.text.includes(query)) : comments

    return Response.json(filteredComments, {
        headers: {
            'Content-Type': /** 'application/json'*/ 'text/html',
            'Set-Cookie': 'theme=dark'
        }
    })
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
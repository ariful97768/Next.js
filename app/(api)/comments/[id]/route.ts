import { comments } from "../../data"
export const dynamic = 'force-static'
export const revalidate = 10

export const GET = async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const comment = comments.find(comment => comment.id === (id))
    console.log(comment);
    if (!comment) return Response.json({ message: 'Not found' })
    return Response.json(comment)
}

export const PATCH = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const body = await req.json()
    const index = comments.findIndex((comment) => comment.id === id)
    comments[index] = { ...comments[index], ...body }

    console.log(id, body, comments);
    return Response.json(comments)
}

export const DELETE = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const index = comments.findIndex(comment => comment.id === id)
    const deletedComment = comments[index]
    comments.splice(index, 1)
    return Response.json(deletedComment)
}

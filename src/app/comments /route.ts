import { NextRequest, NextResponse } from 'next/server';
import { comments } from './data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const filteredComments = query  ?
  comments.filter(comment => comment.text.includes(query)) :
  comments;
  return NextResponse.json(filteredComments);
}

export async function POST(request: NextRequest) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return NextResponse.json(newComment, { status: 201 });
}

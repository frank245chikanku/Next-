
import { comments } from './data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(comments);
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

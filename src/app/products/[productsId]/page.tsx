"use client";

import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const { productId } = useParams();

  return <h1>Details about product {productId}</h1>;
}

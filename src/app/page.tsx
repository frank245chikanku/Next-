
import Layout from './layout';
import Link from 'next/link';
export default function Home() {
  return (
  
    <Layout>
      <h1>Chuck! is here!</h1>
      <Link href="/blog">Blog</Link>
      <Link  href="/products">productDetailsLayout</Link>
    </Layout>
  );
}

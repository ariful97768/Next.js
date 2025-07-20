import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main>
        home
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/register'}>register</Link></li>
        <li><Link href={'/counter'}>counter</Link></li>
        <li><Link href={'/docs/something'}>docs</Link></li>
        <li><Link href={'/product'}>product</Link></li>
        <li><Link href={'/product/1'}>product/1</Link></li>
        <li><Link href={'/product/1/reviews/10'}>reviews</Link></li>
        <li><Link href={'/order-product'}>order</Link></li>
        </main>
    </>
  );
}

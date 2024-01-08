import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">유저페이지</Link>
      <ProductCard />
    </main>
  );
}

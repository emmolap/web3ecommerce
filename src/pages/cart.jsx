import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query; // Get product ID from URL

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Product {id}</h1>
      {/* Show product details dynamically */}
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-center text-4xl font-bold">
        Welcome to AfriStyle
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="card">
          <h2 className="text-2xl">Featured Collections</h2>
          <Link href="/products">
            <a className="text-blue-500">Browse Products</a>
          </Link>
        </div>
        {/* Add more sections */}
      </div>
    </div>
  );
}

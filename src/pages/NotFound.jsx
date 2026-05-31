import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 py-10">
      <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm ring-1 ring-zinc-100">
        <p className="text-6xl font-black text-plm-green">404</p>
        <h1 className="mt-3 text-3xl font-black">Page not found</h1>
        <p className="mt-3 text-zinc-600">The page you are looking for does not exist in this prototype.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-plm-green px-6 py-3 font-black text-white">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

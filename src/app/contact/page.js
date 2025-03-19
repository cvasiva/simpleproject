import Link from 'next/link';

export default function Contact() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Contact Page</h1>
      <p className="text-gray-600 mt-2">This is the Contact Page.</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Go to Home
      </Link>
    </div>
  );
}

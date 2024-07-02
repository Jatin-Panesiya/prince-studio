import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex gap-y-3 justify-center flex-col items-center h-96 px-5 text-center">
     <p className="text-6xl font-poppins-bold">404</p>
     <p className="uppercase">OPPS! Page not found</p>
     <p>Sorry, the page you are looking for doesn't exists.</p>
      <Link href="/" className="bg-primary px-5 py-2 rounded font-semibold my-5">Return Home</Link>
    </div>
  );
}

"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl">Something went wrong! 😞</h2>
        <div className="flex justify-center gap-x-5">
          <Link
            href="/"
            className="px-3 py-1 font-semibold border rounded-md border-rose-400 text-rose-400"
          >
            Back to home
          </Link>
          <button
            className="px-3 py-1 font-semibold text-white rounded-md bg-rose-400 w-fit"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

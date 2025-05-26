import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <h2 className="text-xl text-gray-700 dark:text-gray-300 mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-6 py-3 rounded-md hover:bg-gray-600 dark:hover:bg-gray-300 hover:scale-105 hover:shadow-lg transition-all duration-200"
      >
        Return Home
      </Link>
    </div>
  )
} 
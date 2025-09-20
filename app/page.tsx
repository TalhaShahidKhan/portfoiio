import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6">

      {/* Alert / Hero Section */}
      <div className="flex flex-col items-center text-center gap-6 max-w-xl p-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-2xl shadow-lg animate-pulse">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-900 dark:text-yellow-300">
          Portfolio Update in Progress
        </h1>
        <p className="text-yellow-800 dark:text-yellow-200 text-lg sm:text-xl">
          I'm working on some exciting updates! Please check back in a few days.
        </p>
        <span className="inline-block w-16 h-1 bg-yellow-500 rounded-full animate-pulse"></span>
      </div>

      {/* Social Links / Navigation */}
      <nav className="mt-12 flex flex-wrap justify-center gap-6">
        <Link href="https://github.com/yourusername" target="_blank" className="social-link" aria-label="GitHub">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/yourusername" target="_blank" className="social-link" aria-label="LinkedIn">
          LinkedIn
        </Link>
        <Link href="https://x.com/yourusername" target="_blank" className="social-link" aria-label="Twitter / X">
          X
        </Link>
        <Link href="https://youtube.com/@yourchannel" target="_blank" className="social-link" aria-label="YouTube">
          YouTube
        </Link>
        <Link href="https://facebook.com/yourusername" target="_blank" className="social-link" aria-label="Facebook">
          Facebook
        </Link>
        <Link href="https://instagram.com/yourusername" target="_blank" className="social-link" aria-label="Instagram">
          Instagram
        </Link>
      </nav>

      <style jsx>{`
        .social-link {
          display: inline-block;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          background-color: #facc15; /* yellow-400 */
          color: #1f2937; /* gray-800 */
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background-color: #eab308; /* yellow-500 */
          color: white;
          transform: translateY(-2px);
        }
      `}</style>

    </div>
  );
}

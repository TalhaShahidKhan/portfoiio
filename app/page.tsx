import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="mt-6 p-4 text-center rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-800 shadow-md animate-pulse">
      Portfolio Update in Progress. Please wait for some days.
    </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <nav className="flex items-center justify-center gap-6 p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-md">

      {/* Section 2 */}
      <div className="flex gap-4 border-r pr-4 border-gray-300 dark:border-gray-700">
        <Link href="https://github.com/yourusername" target="_blank" className="nav-icon" aria-label="GitHub">
          {/* GitHub Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6 2.1 3.6 1.5v-2.2c-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 016.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9v2.2c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </Link>
        <Link href="https://linkedin.com/in/yourusername" target="_blank" className="nav-icon" aria-label="LinkedIn">
          {/* LinkedIn Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24h-4V8z"/>
          </svg>
        </Link>
        <Link href="https://x.com/yourusername" target="_blank" className="nav-icon" aria-label="Twitter / X">
          {/* X Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.9 1.5h3.6l-7.9 9.1 9.3 12.4h-7.3l-5.7-7.5-6.5 7.5H1.8l8.4-9.7L1.2 1.5h7.5l5.1 6.8 5.1-6.8z"/>
          </svg>
        </Link>
        <Link href="https://youtube.com/@yourchannel" target="_blank" className="nav-icon" aria-label="YouTube">
          {/* YouTube Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.6 2.5 12 2.5 12 2.5h-.1s-5.6 0-8.6.4c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.1.4 8.6.4s6.9-.1 8.6-.4c.4-.1 1.6-.1 2.4-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.6 14.6V7.9l6.4 3.3-6.4 3.4z"/>
          </svg>
        </Link>
        <Link
        href="https://facebook.com/yourusername"
        target="_blank"
        aria-label="Facebook"
        className="nav-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 
          24h11.495v-9.294H9.691V11.01h3.129V8.414c0-3.1 1.894-4.788 
          4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.505 
          0-1.796.716-1.796 1.765v2.316h3.587l-.467 3.696h-3.12V24h6.116C23.407 
          24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
        </svg>
      </Link>
        <Link
        href="https://instagram.com/yourusername"
        target="_blank"
        aria-label="Instagram"
        className="nav-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 
          1.366.062 2.633.35 3.608 1.325.975.975 
          1.263 2.242 1.325 3.608.058 1.266.07 
          1.646.07 4.85s-.012 3.584-.07 4.85c-.062 
          1.366-.35 2.633-1.325 3.608-.975.975-2.242 
          1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 
          15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 
          1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 
          2.175 8.796 2.163 12 2.163zm0 1.687c-3.17 
          0-3.548.012-4.795.07-1.042.048-1.61.218-1.985.363-.5.194-.86.426-1.237.803-.377.377-.609.737-.803 
          1.237-.145.375-.315.943-.363 1.985-.058 1.247-.07 
          1.625-.07 4.795s.012 3.548.07 4.795c.048 1.042.218 
          1.61.363 1.985.194.5.426.86.803 1.237.377.377.737.609 
          1.237.803.375.145.943.315 1.985.363 1.247.058 1.625.07 
          4.795.07s3.548-.012 4.795-.07c1.042-.048 1.61-.218 
          1.985-.363.5-.194.86-.426 1.237-.803.377-.377.609-.737.803-1.237.145-.375.315-.943.363-1.985.058-1.247.07-1.625.07-4.795s-.012-3.548-.07-4.795c-.048-1.042-.218-1.61-.363-1.985-.194-.5-.426-.86-.803-1.237-.377-.377-.737-.609-1.237-.803-.375-.145-.943-.315-1.985-.363-1.247-.058-1.625-.07-4.795-.07zm0 
          3.905a5.932 5.932 0 110 11.864 5.932 5.932 0 010-11.864zm0 
          9.79a3.858 3.858 0 100-7.716 3.858 3.858 0 000 7.716zm6.406-10.845a1.386 
          1.386 0 11-2.772 0 1.386 1.386 0 012.772 0z" />
        </svg>
      </Link>
      </div>

     
    </nav>
      </main>
      
    </div>
  );
}

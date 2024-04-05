import { inter, lusitana } from "@/fonts/fonts";
import Image from 'next/image';

export default function Beatles() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image
        src="/images/abbey-road-beatles.jpg"
        width="500"
        height="250"
        alt="The Beatles"
      />
      <div className="max-w-xs mx-auto">
        <h1 className={`${inter.className} text-center text-3xl font-bold tracking-tight mb-2`}>
          The Fab Four</h1>
        <h2 className={`${lusitana.className} text-center text-5xl font-bold mb-6`}>
          The Beatles</h2>
        <p className={`${inter.className} text-center text-lg mb-8`}>
          The Beatles, commonly known as The Beatles, were an English rock band
          formed in Liverpool in 1960. With a long and influential career,
          the band comprised four musicians: John Lennon, Paul McCartney, George
          Harrison, and Ringo Starr. They are widely regarded as one of the most
          influential and successful bands in the history of popular music.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="https://en.wikipedia.org/wiki/The_Beatles"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 transition-colors duration-200 hover:text-blue-800"
          >
            Read more on Wikipedia
          </a>
          <a
            href="https://www.youtube.com/watch?v=kxPCFlLnJws"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 transition-colors duration-200 hover:text-blue-800"
          >
            Watch the magic happening on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

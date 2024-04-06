import { inter, lusitana } from "@/fonts/fonts";
import Image from 'next/image';
import Link from 'next/link';

export default function Beatles() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className='flex flex-row space-x-3'>
      <div className="space-y-8">
        <Image
          src="/images/abbey-road-beatles.jpg"
          width="550"
          height="250"
          alt="The Beatles"
        />
      </div>
      <div className="w-1/2">
        <h2 className={`${lusitana.className} text-5xl font-bold mb-6`}>
          The Beatles
        </h2>
        <p className={`${inter.className} text-justify text-lg mb-8`}>
          The Beatles were an English rock band
          formed in Liverpool in 1960. With a long and influential career,
          the band comprised four musicians: John Lennon, Paul McCartney, George
          Harrison, and Ringo Starr. They are widely regarded as one of the most
          influential and successful bands in the history of popular music.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            href="https://en.wikipedia.org/wiki/The_Beatles"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 transition-colors duration-200 hover:text-blue-800"
          >
            Read more on Wikipedia ↗
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=cADFS0NU6As"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 transition-colors duration-200 hover:text-blue-800"
          >
            Watch the magic happening on YouTube ↗
          </Link>
        </div>
      </div>
    </div>
  );
}

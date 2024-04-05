export default function Cake() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex items-center justify-center'>
        <p className='text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-green-300'>
          Cake{' '}
          <span aria-label='cake emoji' role='img'>
            🎂
          </span>
        </p>
      </div>
      <div className='mt-10 mx-0 grid gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:mt-16'>
        <div className='flex flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-8 shadow-lg'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Customize your cake
          </h2>
          <p className='text-lg text-gray-600'>
            Choose your favorite flavors, decorations, and toppings to create
            your perfect cake.
          </p>
          <a
            href='#'
            className='inline-flex items-center text-lg text-blue-500'
          >
            Learn more{' '}
            <svg
              aria-hidden='true'
              className='w-3 h-3 ml-2 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M16.59 8.59 12 13.17 7.41 8.59 6 10.59 10.59 6 16 7.41 13.41 12 18 16.59 14.41 18 19.59 13.59 12 18 7.41 16.59 8.59z'
              />
            </svg>
          </a>
        </div>
        <div className='flex flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-8 shadow-lg'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Order online
          </h2>
          <p className='text-lg text-gray-600'>
            Place your order in a breeze with our online ordering system.
          </p>
          <a
            href='#'
            className='inline-flex items-center text-lg text-blue-500'
          >
            Order now{' '}
            <svg
              aria-hidden='true'
              className='w-3 h-3 ml-2 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M16.59 8.59 12 13.17 7.41 8.59 6 10.59 10.59 6 16 7.41 13.41 12 18 16.59 14.41 18 19.59 13.59 12 18 7.41 16.59 8.59z'
              />
            </svg>
          </a>
        </div>
        <div className='flex flex-col space-y-4 rounded-lg border border-gray-200 bg-white p-8 shadow-lg'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Enjoy your cake
          </h2>
          <p className='text-lg text-gray-600'>
            Delivered fresh, your cake will arrive at your doorstep in no time.
          </p>
        </div>
      </div>
    </div>

  );
}

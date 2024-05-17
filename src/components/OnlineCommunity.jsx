import React from 'react'

const OnlineCommunity = () => {
  return (
    <div>
      <div className="bg-gray-900 text-center text-white font-mono ">
        <p className="text-2xl pb-3 font-semibold">
          Our Flourishing Online Community
        </p>
        <p className="pb-14 font-semibold">
          Join a network of like-minded individuals, <br />
          unlock new possibilities, and experience growth on your journey to
          success.
        </p>
      </div>
      <div className="grid grid-cols-4 pb-20 bg-gray-900 pr-10 pl-40 ">
        <div>
          <p className='text-5xl font-semibold text-green-400'>200k+</p>
          <p className='text-white pt-3 text-sm '> LinkedIn community</p>
        </div>
        <div>
          <p className='text-5xl font-semibold text-green-400'>100k+</p>
          <p className='text-white pt-3 text-sm '> YouTube community</p>
        </div>
        <div>
          <p className='text-5xl font-semibold text-green-400'>100k+</p>
          <p className='text-white pt-3 text-sm '> Telegram community</p>
        </div>
        <div>
          <p className='text-5xl pl-10 font-semibold text-green-400'>1M+</p>
          <p className='text-white pt-3 text-sm '> Website Traffic Per Month</p>
        </div>
      </div>
    </div>
  );
}

export default OnlineCommunity
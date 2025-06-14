import React from 'react'
import { Link } from 'react-router-dom';
import Bus1 from '../../assets/bus1.png';
import Bus2 from '../../assets/bus2.png';
import Bus3 from '../../assets/bus3.png';
// import Bus4 from '../../assets/bus4.png';
// import Bus5 from '../../assets/bus5.png';
// import Bus6 from '../../assets/bus6.png';
// import Bus7 from '../../assets/bus7.png';
// import Bus8 from '../../assets/bus8.png';
// import Bus9 from '../../assets/bus9.png';

const Category = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 px-4 mb-[8ch]">
      <div className="w-full items-center flex justify-between">
        <h1 className='text-2xl font-medium mb-6'>Category</h1>
        <Link to={'/bus'} className='text-violet-600'>View All</Link>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        <Link to={'/bus'} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden'>
        <img src={Bus1} alt="" className='w-full aspect-video object-contain' />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-ne-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">Private Bus</h2>
        </div>
        </Link>

        <Link to={'/bus'} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden'>
        <img src={Bus2} alt="" className='w-full aspect-video object-contain' />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-ne-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">Government Bus</h2>
        </div>
        </Link>

         <Link to={'/bus'} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group ease-in-out duration-300 overflow-hidden'>
        <img src={Bus3} alt="" className='w-full aspect-video object-contain' />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-ne-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex hidden items-center justify-center ease-in-out duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">Public Bus</h2>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Category

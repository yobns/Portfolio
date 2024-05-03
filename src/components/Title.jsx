import Image from 'next/image'
import React from 'react'

const Title = () => {
  return (<>
    <div className="flex justify-center items-center">
      <div className="mr-5 md:mr-10 flex flex-col">
        <h2 className="text-xl font-bold whitespace-nowrap">Yoni Bensoussan</h2>
        <h3 className="text-lg font-light whitespace-nowrap">Full Stack developer</h3>
      </div>
      <div className="flex-shrink-0 w-full max-w-[150px]">
        <Image
          src="/IMG.PNG"
          alt="Yoni Bensoussan"
          width={150}
          height={150}
          layout="responsive"
          priority
        />
      </div>
    </div>
    <p className='text-center p-5 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sapiente.</p>
  </>
  )
}

export default Title
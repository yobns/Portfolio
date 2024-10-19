import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge';
import ReactIcon from '../../public/logo/ReactIcon.jsx';
import NextIcon from '../../public/logo/NextIcon.jsx';
import FranceIcon from '../../public/logo/FranceIcon.jsx';
import IsraelIcon from '../../public/logo/IsraelIcon.jsx';
import Logo42 from '../../public/logo/Logo42.jsx';
import ContactLinks from './ContactLinks';

const Title = () => {
  return (
    <>
      <div className='-mt-[5rem]'>
        <div className="flex justify-center items-center min-h-screen flex-col">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center mr-1 md:mr-5">
              <h2 className="text-xl font-bold whitespace-nowrap">Yoni Bensoussan</h2>
              <h3 className="text-lg font-light whitespace-nowrap">Full Stack Developer</h3>
            <ContactLinks/>
            </div>
            <div className="flex-shrink-0 relative">
              <Image src="/IMG.PNG" alt="Yoni Bensoussan" width={150} height={150} className="object-cover" priority />
            </div>
          </div>
          <div className='text-center mt-20 fontTech text-sm leading-[2] mr-3'>
            My frameworks are <Badge variant="outline" className="-rotate-6 md:hover:-rotate-0"><ReactIcon width={13} height={13} className='mr-2' />React</Badge>
            {" and"} <Badge variant="outline"><NextIcon width={13} height={13} className='mr-2' />NextJS</Badge>
            <br />
            {/* from <Badge variant="outline"><FranceIcon width={13} height={13} className='mr-2' /></Badge>
            {" currently in"} <Badge variant="outline"><IsraelIcon width={13} height={13} className='mr-2' /></Badge> */}
            Currently at <Badge variant="outline" className="align-middle"><Logo42 width={13} height={13} className='mr-2' /></Badge>
          </div>
        </div>
      </div>
    </>
  )
}

export default Title
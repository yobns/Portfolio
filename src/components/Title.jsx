import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react';
import { Badge } from './ui/badge';
import ReactIcon from '../../public/logo/ReactIcon.jsx';
import NextIcon from '../../public/logo/NextIcon.jsx';
import FranceIcon from '../../public/logo/FranceIcon.jsx';
import IsraelIcon from '../../public/logo/IsraelIcon.jsx';


const Title = () => {
  const menuClasses = "hover:text-muted-foreground transition-colors duration-300";

  return (
    <>
      <div className='-mt-[5rem]'>
        <div className="flex justify-center items-center min-h-screen flex-col">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center mr-5 md:mr-10">
              <h2 className="text-xl font-bold whitespace-nowrap">Yoni Bensoussan</h2>
              <h3 className="text-lg font-light whitespace-nowrap">Full Stack developer</h3>
              <div className="inline-flex p-1 items-center space-x-3 mt-2 justify-center rounded-lg border bg-card text-card-foreground shadow-sm">
                <Link href="mailto:contact@yonibns.com" target='blank' className={menuClasses}><Mail size={17} /></Link>
                <Link href="https://www.linkedin.com/in/yonibns" target='blank' className={menuClasses}><Linkedin size={17} /></Link>
                <Link href="https://github.com/yobns" target='blank' className={menuClasses}><Github size={17} /></Link>
              </div>
            </div>
            <div className="flex-shrink-0 relative">
              <Image src="/IMG.PNG" alt="Yoni Bensoussan" width={150} height={150} className="object-cover" priority />
            </div>
          </div>
          <div className='text-center mt-20 fontTech'>
            My frameworks are <Badge variant="outline"><ReactIcon width={15} height={15} className='mr-2' />React</Badge>
            {" and"} <Badge variant="outline"><NextIcon width={15} height={15} className='mr-2' />NextJS</Badge>
            <br />
            From <Badge variant="outline"><FranceIcon width={15} height={15} className='mr-2' /></Badge>
            {" currently in"} <Badge variant="outline"><IsraelIcon width={15} height={15} className='mr-2' /></Badge>
          </div>
        </div>
      </div>
    </>
  )
}

export default Title
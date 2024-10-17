import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Work = ({ image, title, role, date, url, city }) => {
    return (
        <Link href={url} target='blank' className='inline-flex items-center gap-4 hover:bg-zinc-400/50 transition-colors p-1 rounded'>
            <span className='bg-zinc-400 text-white p-3 rounded-sm' style={{ width: 40, height: 40, position: 'relative', borderRadius: '0.375rem' }}>
                <Image src={image} alt={title} layout="fill" objectFit="cover" style={{ borderRadius: '0.375rem' }} />
            </span>
            <div>
                <p className='text-sm font-semibold'>{title}</p>
                <p className='text-xs text-muted-foreground'>{city}</p>
                <p className='text-xs text-muted-foreground'>{role}</p>
            </div>
            <div className='ml-auto'>
                <p className='text-xs text-muted-foreground'>{date}</p>
            </div>
        </Link>
    );
};

export default Work;
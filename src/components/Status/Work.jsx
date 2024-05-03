import React from 'react';
import Link from 'next/link';

const Work = ({ image, title, role, date, url }) => {
    return (
        <Link href={url} target='blank' className='inline-flex items-center gap-4 hover:bg-zinc-400/50 transition-colors p-1 rounded'>
            <img src={image} alt={title} className='w-10 h-10 object-contain rounded-md' />
            <div>
                <p className='text-sm font-semibold'>{title}</p>
                <p className='text-xs text-muted-foreground'>{role}</p>
            </div>
            <div className='ml-auto'>
                <p className='text-xs text-muted-foreground'>{date}</p>
            </div>
        </Link>
    );
};

export default Work;

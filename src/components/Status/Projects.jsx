import React from 'react';
import Link from 'next/link';

const Project = ({ Logo, title, description, url }) => {
    return (
        <Link href={url} target='blank' className='inline-flex items-center gap-4 hover:bg-zinc-400/50 transition-colors p-1 rounded'>
            <span className='bg-zinc-400 text-white p-3 rounded-sm'>
                <Logo size={15} />
            </span>
            <div>
                <p className='text-sm font-semibold'>{title}</p>
                <p className='text-xs text-muted-foreground'>{description}</p>
            </div>
        </Link>
    );
};

export default Project;
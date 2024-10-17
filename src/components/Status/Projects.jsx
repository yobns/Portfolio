import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Project = ({ Logo, title, description, url, imageUrl }) => {
    const imageStyle = imageUrl ? { width: 40, height: 40, position: 'relative', borderRadius: '0.375rem' } : {};

    return (
        <Link href={url} target='blank' className='flex items-center gap-4 hover:bg-zinc-400/50 transition-colors p-1 rounded'>
            <span className='bg-zinc-400 text-white p-3 rounded-md' style={imageStyle}>
                {imageUrl ? (
                    <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-md"/>
                ) : (
                    <Logo size={16} />
                )}
            </span>
            <div className='flex-1'>
                <p className='text-sm font-semibold'>{title}</p>
                <p className='text-xs text-muted-foreground'>{description}</p>
            </div>
        </Link>
    );
};

export default Project;
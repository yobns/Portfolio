import React from 'react';
import { Card } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Contact = ({ image, mediumImage, name, description, url }) => {
    return (
        <Link href={url} target='blank'>
            <Card className="p-2 flex items-center gap-4 hover:bg-zinc-400/50 group mb-3">
                <div className='relative w-10 h-10'>
                    <img src={image} alt={name} className='w-full h-full rounded-full object-cover' />
                    <div className='absolute w-4 h-4 right-0 bottom-0'>
                        <img src={mediumImage} alt={name} className='w-full h-full rounded-full object-cover' />
                    </div>
                </div>
                <div className='mr-auto'>
                    <div className='flex items-center'>
                        <p className='text-sm font-semibold'>{name}</p>
                    </div>
                    <p className='text-xs text-muted-foreground'>{description}</p>
                </div>
                <ArrowUpRight size={15} className='hidden md:inline-flex group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform' />
            </Card>
        </Link>
    );
};

export default Contact;
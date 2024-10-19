import React from 'react';
import { Card } from '../ui/card';
import Project from './Projects';
import Work from './Work';
import Contact from './Contact';
import Education from './Education';
import { PROJECTS, WORK, EDUCATION } from './Data';
import { ArrowUpRight } from 'lucide-react';

const Status = () => {
    return (
        <div className='flex max-pmd:flex-col items-start gap-4 xl:px-[15%] overflow-hidden'>
            <div className='flex-[3] w-full flex flex-col gap-4 md:gap-2'>
                <Card className='p-4'>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg text-muted-foreground py-2' id="projects-section">Projects</p>
                        <a href="https://github.com/yobns?tab=repositories" target="blank" rel="noopener noreferrer">
                            <span className='text-foreground hover:text-foreground flex items-center gap-1 text-2xs'>
                                View All
                                <ArrowUpRight size={12} />
                            </span>
                        </a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {PROJECTS.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </div>
                </Card>
                <Card className='p-4'>
                    <p className='text-lg text-muted-foreground py-2' id="contact-section">Contact</p>
                    <Contact name="contact@yonibns.com" image="./me3.jpg" mediumImage="./logo/email.jpg" description="Email" url="mailto:contact@yonibns.com" />
                    <div className='flex flex-row gap-1 md:gap-3'>
                        <div className='flex-1'>
                            <Contact name="@yonibns" image="./me.jpg" mediumImage="./logo/linkedin.png" description="Linkedin" url="https://www.linkedin.com/in/yonibns" />
                        </div>
                        <div className='flex-1'>
                            <Contact name="@yobns" image="./me3.jpg" mediumImage="./logo/github.webp" description="Github" url="https://github.com/yobns" />
                        </div>
                    </div>
                </Card>
            </div>
            <div className='flex-[2] w-full flex flex-col gap-4 md:gap-6'>
                <Card className='p-4 w-full flex-1'>
                    <p className='text-lg text-muted-foreground py-2' id="work-section">Work</p>
                    <div className='flex flex-col gap-4'>
                        {WORK.map((work, index) => (
                            <Work key={index} {...work} />
                        ))}
                    </div>
                </Card>
                <Card className='p-4 w-full flex-1'>
                    <p className='text-lg text-muted-foreground py-2' id="edu-section">Education</p>
                    <div className='flex flex-col gap-4'>
                        {EDUCATION.map((education, index) => (
                            <Education key={index} {...education} /> 
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Status;
import React from 'react';
import { Card } from '../ui/card';

import { AreaChart, CatIcon, Gamepad2, MessageCircleMore, SignalIcon } from 'lucide-react';
import Project from './Projects';
import Work from './Work';
import Contact from './Contact';
import Education from './Education';

const PROJECTS = [
    { Logo: AreaChart, title: "Dashboard", description: "Excel file manager", url: "https://github.com/yobns/Dashboard" },
    { Logo: Gamepad2, title: "FrenchyBird", description: "Flappy Bird style game", url: "https://github.com/yobns/FrenchyBird" },
    { Logo: CatIcon, title: "Pet Adoption", description: "ITC Full Stack App", url: "https://github.com/yobns/Pet-Adoption" },
    { Logo: MessageCircleMore, title: "ChitChat", description: "ITC Hackathon Feb24", url: "https://github.com/yobns/ChitChat" },
];

const WORK = [
    { image: "./logo/abilisense.jpg", title: "Abilisense", role: "Full stack developer", date: "2024 - 2024", url: "http://www.abilisense.com/" },
    { image: "./logo/axecibles.jpg", title: "Axecibles", role: "Sales Representative", date: "2023 - 2024", url: "https://www.axecibles.com" }
];

const EDUCATION = [
    { image: "./logo/ITC.jpg", title: "ITC", role: "Full Stack program", date: "2023 - 2024", url: "https://www.itc.tech" },
    { image: "./logo/42.jpg", title: "42", role: "IT School", date: "2022 - 2023", url: "http://www.42.fr" },
    { image: "./logo/epitech.jpg", title: "Epitech", role: "IT School", date: "2021 - 2022", url: "http://www.epitech.eu" },
    { image: "./logo/ibs.png", title: "IBS", role: "High School", date: "2019 - 2020", url: "https://www.linkedin.com/company/15215918/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bhsw%2BnEUcRxma4fT2raxI2w%3D%3D" },
];

const Status = () => {
    return (
        <div className='flex max-pmd:flex-col items-start gap-4 xl:px-[15%] overflow-hidden'>
            <div className='flex-[3] w-full flex flex-col gap-4 md:gap-2'>
                <Card className='p-4'>
                    <p className='text-lg text-muted-foreground py-2' id="projects-section">Projects</p>
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
            <div className='flex-[2] w-full flex flex-col gap-4 md:gap-5'>
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
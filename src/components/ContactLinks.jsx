"use client"
import { Github, Linkedin, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

const handleConfetti = (event) => {
    event.preventDefault();
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    const redirectUrl = event.currentTarget.getAttribute("data-url");

    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 1000);
};

const ContactLinks = ({ className }) => {
    return (
        <div className={`inline-flex p-1 items-center space-x-3 mt-2 justify-center rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
            <button className="hover:text-muted-foreground transition-colors duration-300" onClick={handleConfetti} data-url="mailto:contact@yonibns.com">
                <Mail size={17} />
            </button>
            <button className="hover:text-muted-foreground transition-colors duration-300" onClick={handleConfetti} data-url="https://www.linkedin.com/in/yonibns">
                <Linkedin size={17} />
            </button>
            <button className="hover:text-muted-foreground transition-colors duration-300" onClick={handleConfetti} data-url="https://github.com/yobns">
                <Github size={17} />
            </button>
        </div>
    );
};

export default ContactLinks;
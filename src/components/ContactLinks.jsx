"use client"
import { Github, Linkedin, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

const handleConfettiAndRedirect = (event, redirectUrl) => {
    event.preventDefault();
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => { window.open(redirectUrl, '_blank'); }, 1500);
};

const ContactLinks = ({ className }) => {
    return (
        <div className={`inline-flex p-1 items-center space-x-3 mt-2 justify-center rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
            <button className="hover:text-muted-foreground transition-colors duration-300" onClick={(e) => handleConfettiAndRedirect(e, "mailto:contact@yonibns.com")}>
                <Mail size={17} />
            </button>
            <button className="hover:text-muted-foreground transition-colors duration-300" onClick={(e) => handleConfettiAndRedirect(e, "https://www.linkedin.com/in/yonibns")}>
                <Linkedin size={17} />
            </button>
            <button className="hover:text-muted-foreground transition-colors duration-300" onClick={(e) => handleConfettiAndRedirect(e, "https://github.com/yobns")}>
                <Github size={17} />
            </button>
        </div>
    );
};

export default ContactLinks;
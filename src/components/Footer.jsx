import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-background text-foreground text-center">
            <hr className={`my-4 border-t mx-auto hr-border w-[70%] sm:w-[50%]`} />
            <p className="text-sm text-muted-foreground font">© Yoni Bensoussan</p>
        </footer>
    );
};

export default Footer;
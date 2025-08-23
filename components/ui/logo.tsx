import React from "react";

interface LogoProps {
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({color}) => {
    return <svg 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full group" 
        role="img"
        aria-label="Logo"
        >

        <defs>
            <rect id="square" x="0" y="0" width="7" height="7" rx="0.5" ry="0.5" />
            <path id="arc-tl" d="M6.5 0 A6.5 6.5 0 0 0 0 6.5 L0 6.5 A0.5 0.5 0 0 0 0.5 7 L6.5 7 A0.5 0.5 0 0 0 7 6.5 L7 0.5 A0.5 0.5 0 0 0 6.5 0 L6.5 0 z" />
            <path id="arc-tr" d="M0.5 0 A0.5 0.5 0 0 0 0 0.5 L0 6.5 A0.5 0.5 0 0 0 0.5 7 L6.5 7 A0.5 0.5 0 0 0 7 6.5 L7 6.5 A6.5 6.5 0 0 0 0.5 0 L0.5 0 z" />
            <path id="arc-br" d="M0.5 0 A0.5 0.5 0 0 0 0 0.5 L0 6.5 A0.5 0.5 0 0 0 0.5 7 L0.5 7 A6.5 6.5 0 0 0 7 0.5 L7 0.5 A0.5 0.5 0 0 0 6.5 0 L0.5 0 z" />
        </defs>
        <style>
            {`.fixed {
                fill: ${color ? color : 'var(--accent, #FF9933)'};
            }
            .filler {
                fill: color-mix(in srgb, ${color ? color : 'var(--accent, #FF9933)'} 50%, transparent);
            }`}
        </style>
        <use href="#arc-tr" className="fixed" transform="translate(1,1)" />
        <use href="#arc-tl" className="fixed" transform="translate(8.5,1)" />
        <rect className="filler" x="16" y="1" width="7" height="7" rx="0.5" ry="0.5" />
        <use href="#square" className="fixed" transform="translate(1,8.5)" />
        <use href="#square" className="fixed" transform="translate(8.5,8.5)" />
        <use href="#arc-br" className="fixed" transform="translate(16,8.5)" />
        <rect className="filler" x="1" y="16" width="7" height="7" rx="0.5" ry="0.5" />
        <use href="#square" className="fixed" transform="translate(8.5,16)" />
        <use href="#arc-tr" className="fixed" transform="translate(16,16)" />
    </svg>
};

Logo.displayName = "Logo";
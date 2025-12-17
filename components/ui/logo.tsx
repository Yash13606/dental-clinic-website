import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M25 35C25 25 35 15 50 15C65 15 75 25 75 35C75 45 70 50 65 55L50 75L35 55C30 50 25 45 25 35Z"
                fill="url(#toothGradient)"
                stroke="white"
                strokeWidth="4"
                strokeLinejoin="round"
            />
            <path
                d="M38 40C38 40 45 45 50 45C55 45 62 40 62 40"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient id="toothGradient" x1="25" y1="15" x2="75" y2="75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#0284C7" />
                </linearGradient>
            </defs>
        </svg>
    );
};

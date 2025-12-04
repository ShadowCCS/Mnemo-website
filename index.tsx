import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import showcaseLight from './assets/showcase-light.svg';
import showcaseDark from './assets/showcase-dark.svg';
import logo_filled from './assets/logo_filled.svg';
import logo_plain from './assets/logo_plain.svg';

// --- Icons Components ---

const IconDownload = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
);

const IconGithub = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const IconChevronRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m9 18 6-6-6-6" />
    </svg>
)

const IconApple = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.04.05-2.29.69-3.02 1.6-.65.81-1.23 2.13-1.08 3.11 1.16.09 2.32-.77 3.03-1.6z" />
    </svg>
);

const IconWindows = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
);

const IconLinux = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.32 0c-1.64.11-3.33.27-5.15 1.03-2.46 1.03-4.06 2.9-4.54 5.77-.2 1.18.11 2.62.78 3.69.69 1.11 1.79 1.99 2.98 2.23.02.09.03.18.06.27-.72.2-1.5.36-2.25.67-.78.31-1.48.83-1.99 1.51-.83 1.1-1.11 2.49-1.03 3.86.03.6.14 1.19.32 1.77.46 1.5 1.63 2.57 3.13 3.03 2.09.64 4.34.67 6.5.64 1.54-.02 3.07-.16 4.53-.61 1.23-.38 2.33-1.16 2.97-2.29.51-.91.72-1.94.71-2.98-.02-1.58-.57-3.05-1.62-4.18-.52-.56-1.23-1-1.99-1.24l-.13-.48c1.66-.44 3.06-1.5 3.67-3.12.4-1.05.44-2.2.28-3.31-.24-1.7-.97-3.18-2.25-4.42-1.46-1.4-3.38-1.73-5.34-1.84z" />
    </svg>
);

const IconCode = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const IconShield = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const IconCloudOff = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
);

const IconDatabase = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
);

// --- Helpers ---

const RevealOnScroll = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const delayClass = delay === 100 ? 'reveal-delay-100' : delay === 200 ? 'reveal-delay-200' : delay === 300 ? 'reveal-delay-300' : '';

    return (
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}>
            {children}
        </div>
    );
};

const WindowFrame = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
    <div className={`bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden ${className}`}>
        <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
        </div>
        <div className="relative bg-slate-50">
            {children}
        </div>
    </div>
)

const ThemeCompareSlider = () => {
    const [position, setPosition] = useState(50);

    return (
        <div className="relative w-full group select-none cursor-col-resize">
            <img
                src={showcaseLight}
                alt="Light Mode Interface"
                className="w-full h-auto block pointer-events-none"
            />
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <img
                    src={showcaseDark}
                    alt="Dark Mode Interface"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0 w-0.5 bg-white z-10"
                style={{ left: `${position}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-brand-600 transition-colors ring-4 ring-black/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                        <path d="m15 18-6-6 6-6" transform="rotate(180 12 12)" />
                    </svg>
                </div>
            </div>

            {/* Range Input Overlay */}
            <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => setPosition(parseFloat(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
                aria-label="Compare Light and Dark themes"
            />

            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                Dark
            </div>
            <div className="absolute bottom-4 right-4 bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                Light
            </div>
        </div>
    );
};

// --- Visual Mockups ---

const DashboardMockup = () => (
    <div className="flex h-full min-h-[450px]">
        {/* Sidebar */}
        <div className="w-16 md:w-56 bg-slate-50 border-r border-slate-200 p-4 flex flex-col gap-4">
            <div className="h-8 w-8 md:w-full bg-slate-200/50 rounded-lg animate-pulse mb-4"></div>
            <div className="space-y-1">
                <div className="h-9 w-full bg-white border border-slate-200 shadow-sm rounded-lg flex items-center px-3">
                    <div className="w-4 h-4 bg-brand-500 rounded mr-3"></div>
                    <div className="hidden md:block w-20 h-2 bg-slate-700 rounded-full opacity-80"></div>
                </div>
                <div className="h-9 w-full hover:bg-slate-100 rounded-lg flex items-center px-3 transition-colors">
                    <div className="w-4 h-4 bg-slate-300 rounded mr-3"></div>
                    <div className="hidden md:block w-16 h-2 bg-slate-300 rounded-full"></div>
                </div>
                <div className="h-9 w-full hover:bg-slate-100 rounded-lg flex items-center px-3 transition-colors">
                    <div className="w-4 h-4 bg-slate-300 rounded mr-3"></div>
                    <div className="hidden md:block w-24 h-2 bg-slate-300 rounded-full"></div>
                </div>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-200">
                <div className="h-9 w-full hover:bg-slate-100 rounded-lg flex items-center px-3">
                    <div className="w-4 h-4 bg-slate-300 rounded mr-3"></div>
                    <div className="hidden md:block w-12 h-2 bg-slate-300 rounded-full"></div>
                </div>
            </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 p-8 bg-white overflow-hidden">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <div className="h-8 w-48 bg-slate-800 rounded-lg mb-3"></div>
                    <div className="h-4 w-32 bg-slate-300 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                    <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200"></div>
                    <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {['Learning Path', 'Recent Decks', 'Analysis'].map((label, i) => (
                    <div key={i} className="h-32 border border-slate-100 rounded-xl bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform"></div>
                        <div className="space-y-2">
                            <div className="h-3 w-2/3 bg-slate-300 rounded-full"></div>
                            <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="h-5 w-32 bg-slate-200 rounded-full"></div>
                    <div className="h-8 w-24 bg-slate-50 border border-slate-200 rounded-lg"></div>
                </div>
                <div className="flex items-end gap-1 h-32 justify-between px-2">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-full mx-0.5 bg-brand-100 hover:bg-brand-200 rounded-t-sm transition-colors" style={{ height: `${Math.random() * 100}%` }}></div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

const PrivacyMockup = () => (
    <div className="h-full min-h-[350px] bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden group">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        {/* Central Safe/Vault */}
        <div className="relative z-10">
            {/* Shield/Glow Effect */}
            <div className="absolute -inset-8 bg-brand-100/50 rounded-full blur-2xl animate-pulse"></div>

            <div className="w-48 h-48 bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center justify-center relative z-20 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                {/* Lock Icon */}
                <div className="text-brand-600 relative z-10">
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>

                {/* Data Particles Floating Inside */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute bottom-6 right-6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75 delay-300"></div>
                    <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-75 delay-700"></div>
                </div>
            </div>

            {/* Connection Lines (Disconnected from Cloud) */}
            <div className="absolute top-1/2 -right-24 w-20 h-0.5 bg-slate-200 -translate-y-1/2"></div>
            <div className="absolute top-1/2 -right-32 -translate-y-1/2 text-slate-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    <line x1="2" y1="2" x2="22" y2="22" />
                </svg>
            </div>
        </div>

        {/* "Local Only" Badge */}
        <div className="mt-8 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-sm font-medium text-slate-600 z-10">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Stored Locally
        </div>
    </div>
)

const FlashcardMockup = () => (
    <div className="h-full min-h-[350px] bg-slate-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="w-full max-w-sm aspect-[4/3] bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center justify-center p-8 text-center relative z-10 transition-all hover:-translate-y-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Japanese • JLPT N5</div>
            <div className="text-4xl mb-4">猫</div>
            <div className="text-xl md:text-2xl font-medium text-slate-800 leading-tight mb-2">
                Neko
            </div>
            <div className="text-sm text-slate-400">(Noun)</div>

            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100 rounded-b-2xl overflow-hidden">
                <div className="w-[85%] h-full bg-brand-500"></div>
            </div>
        </div>

        <div className="flex gap-3 mt-8 w-full max-w-sm">
            <div className="h-12 flex-1 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-sm font-medium shadow-sm hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all cursor-pointer">Again</div>
            <div className="h-12 flex-1 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-sm font-medium shadow-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all cursor-pointer">Hard</div>
            <div className="h-12 flex-1 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-sm font-medium shadow-sm hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all cursor-pointer">Good</div>
        </div>
    </div>
)

const MindmapMockup = () => (
    <div className="h-full min-h-[350px] bg-slate-50 relative overflow-hidden flex items-center justify-center group select-none">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

        {/* Interactive Elements */}
        <div className="absolute top-4 right-4 flex gap-2 z-30">
            <div className="w-8 h-8 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-200 transition-colors cursor-pointer active:scale-95">+</div>
            <div className="w-8 h-8 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-200 transition-colors cursor-pointer active:scale-95">-</div>
        </div>

        {/* Nodes Container */}
        <div className="relative w-full h-full max-w-[500px] max-h-[300px] transition-transform duration-700 group-hover:scale-[1.02]">

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                {/* Center to Top Left */}
                <path d="M 250 150 C 250 100, 150 100, 120 80" fill="none" stroke="#cbd5e1" strokeWidth="2" className="group-hover:stroke-brand-300 transition-colors duration-500" />
                {/* Center to Top Right */}
                <path d="M 250 150 C 250 100, 350 100, 380 80" fill="none" stroke="#cbd5e1" strokeWidth="2" className="group-hover:stroke-brand-300 transition-colors duration-500" />
                {/* Center to Bottom Left */}
                <path d="M 250 150 C 250 200, 150 200, 120 220" fill="none" stroke="#cbd5e1" strokeWidth="2" className="group-hover:stroke-brand-300 transition-colors duration-500" />
                {/* Center to Bottom Right */}
                <path d="M 250 150 C 250 200, 350 200, 380 220" fill="none" stroke="#cbd5e1" strokeWidth="2" className="group-hover:stroke-brand-300 transition-colors duration-500" />
            </svg>

            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                    <div className="absolute -inset-4 bg-brand-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="w-32 h-12 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full shadow-lg shadow-brand-500/30 flex items-center justify-center text-white font-bold text-sm border border-brand-400 relative z-10">
                        Knowledge
                    </div>
                </div>
            </div>

            {/* Top Left Node */}
            <div className="absolute top-[60px] left-[60px] z-20 animate-float-slow">
                <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-md flex items-center gap-2 hover:border-brand-300 hover:shadow-lg transition-all cursor-pointer group/node">
                    <div className="w-2 h-2 rounded-full bg-blue-400 group-hover/node:scale-125 transition-transform"></div>
                    <span className="text-xs font-medium text-slate-600 group-hover/node:text-brand-600">Concepts</span>
                </div>
            </div>

            {/* Top Right Node */}
            <div className="absolute top-[60px] right-[60px] z-20 animate-float-delayed">
                <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-md flex items-center gap-2 hover:border-brand-300 hover:shadow-lg transition-all cursor-pointer group/node">
                    <div className="w-2 h-2 rounded-full bg-purple-400 group-hover/node:scale-125 transition-transform"></div>
                    <span className="text-xs font-medium text-slate-600 group-hover/node:text-brand-600">Memory</span>
                </div>
            </div>

            {/* Bottom Left Node */}
            <div className="absolute bottom-[60px] left-[60px] z-20 animate-float-slower">
                <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-md flex items-center gap-2 hover:border-brand-300 hover:shadow-lg transition-all cursor-pointer group/node">
                    <div className="w-2 h-2 rounded-full bg-green-400 group-hover/node:scale-125 transition-transform"></div>
                    <span className="text-xs font-medium text-slate-600 group-hover/node:text-brand-600">Sources</span>
                </div>
            </div>

            {/* Bottom Right Node */}
            <div className="absolute bottom-[60px] right-[60px] z-20 animate-float-delayed-more">
                <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-md flex items-center gap-2 hover:border-brand-300 hover:shadow-lg transition-all cursor-pointer group/node">
                    <div className="w-2 h-2 rounded-full bg-amber-400 group-hover/node:scale-125 transition-transform"></div>
                    <span className="text-xs font-medium text-slate-600 group-hover/node:text-brand-600">Images</span>
                </div>
            </div>

            {/* Extra Floating Elements for Depth */}
            <div className="absolute top-1/2 left-[20%] w-1.5 h-1.5 bg-slate-300 rounded-full opacity-50"></div>
            <div className="absolute bottom-[30%] right-[25%] w-2 h-2 bg-slate-200 rounded-full opacity-50"></div>

        </div>
    </div>
)

const GameMockup = () => (
    <div className="h-full min-h-[400px] bg-slate-50 flex flex-col font-mono relative overflow-hidden group">
        {/* Game Scene Layer */}
        <div className="flex-1 bg-slate-100 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#94a3b8 2px, transparent 2px), linear-gradient(90deg, #94a3b8 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

            {/* Hero */}
            <div className="absolute bottom-12 left-20 w-16 h-16 transition-transform duration-200 group-hover:-translate-y-2">
                <div className="w-10 h-10 bg-blue-500 shadow-[4px_0_0_0_#1e3a8a,0_4px_0_0_#1e3a8a,-4px_0_0_0_#1e3a8a,0_-4px_0_0_#1e3a8a] relative animate-bounce">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-white"></div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/10 rounded-full blur-sm"></div>
            </div>

            {/* Monster */}
            <div className="absolute bottom-16 right-20 w-24 h-24">
                <div className="w-16 h-16 bg-red-500 shadow-[4px_0_0_0_#991b1b,0_4px_0_0_#991b1b,-4px_0_0_0_#991b1b,0_-4px_0_0_#991b1b] relative animate-pulse">
                    <div className="absolute top-4 left-3 w-3 h-3 bg-black"></div>
                    <div className="absolute top-4 right-3 w-3 h-3 bg-black"></div>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-2 bg-black"></div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-2 bg-black/10 rounded-full blur-sm"></div>

                {/* HP Bar */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-200 border border-slate-300">
                    <div className="w-1/3 h-full bg-red-500"></div>
                </div>
            </div>

            {/* Damage Number */}
            <div className="absolute top-1/3 right-24 text-red-600 font-bold text-2xl animate-ping opacity-0 group-hover:opacity-100">
                -150 HP
            </div>
        </div>

        {/* UI Overlay */}
        <div className="bg-white border-t-4 border-slate-200 p-4 shadow-2xl z-10">
            <div className="flex justify-between items-center mb-3">
                <div className="text-amber-600 text-xs uppercase tracking-wider font-bold">Question: Vocabulary</div>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
            </div>

            <div className="text-slate-800 text-lg font-bold text-center mb-4 bg-slate-50 py-2 rounded border border-slate-200">
                Translate: "Future"
            </div>

            <div className="grid grid-cols-2 gap-2">
                <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 py-2 rounded text-sm font-bold border-b-4 border-slate-300 active:border-b-0 active:translate-y-1 transition-all">
                    Kako (Past)
                </button>
                <button className="bg-brand-600 text-white hover:bg-brand-500 py-2 rounded text-sm font-bold border-b-4 border-brand-800 active:border-b-0 active:translate-y-1 transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                    Mirai (Future)
                </button>
                <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 py-2 rounded text-sm font-bold border-b-4 border-slate-300 active:border-b-0 active:translate-y-1 transition-all">
                    Ima (Now)
                </button>
                <button className="bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 py-2 rounded text-sm font-bold border-b-4 border-slate-300 active:border-b-0 active:translate-y-1 transition-all">
                    Kinou (Yesterday)
                </button>
            </div>
        </div>
    </div>
)

const CodeMockup = () => (
    <div className="h-full min-h-[350px] bg-slate-50 flex flex-col font-mono text-xs md:text-sm">
        {/* Tab Bar */}
        <div className="flex bg-slate-100 border-b border-slate-200 text-slate-500">
            <div className="px-4 py-2 bg-slate-50 border-t-2 border-brand-500 text-slate-900 flex items-center gap-2 font-medium">
                <span className="text-amber-500">{ }</span> theme.json
            </div>
            <div className="px-4 py-2 flex items-center gap-2 hover:bg-slate-200/50 cursor-pointer transition-colors">
                <span className="text-blue-500">#</span> my-plugin.cs
            </div>
        </div>
        {/* Code Content */}
        <div className="flex-1 p-4 overflow-hidden text-slate-800 leading-relaxed bg-slate-50">
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">1</span>
                <span>{'{'}</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">2</span>
                <span className="pl-4"><span className="text-purple-600">"Name"</span>: <span className="text-green-600">"Dawn"</span>,</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">3</span>
                <span className="pl-4"><span className="text-purple-600">"Author"</span>: <span className="text-green-600">"Mnemo"</span>,</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">4</span>
                <span className="pl-4"><span className="text-purple-600">"Version"</span>: <span className="text-green-600">"1.0.0"</span>,</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">5</span>
                <span className="pl-4"><span className="text-purple-600">"Id"</span>: <span className="text-green-600">"dawn-theme"</span>,</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">6</span>
                <span className="pl-4"><span className="text-purple-600">"LastUsed"</span>: <span className="text-green-600">"2025-08-12T12:00:00Z"</span>,</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">7</span>
                <span className="pl-4"><span className="text-purple-600">"Description"</span>: <span className="text-green-600">"Mnemo's default light theme"</span>,</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">8</span>
                <span className="pl-4"><span className="text-purple-600">"PreviewColors"</span>: {'['}</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">9</span>
                <span className="pl-8"><span className="text-green-600">"#d9d9d9"</span>,</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">10</span>
                <span className="pl-8"><span className="text-green-600">"#b6b6b6"</span>,</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">11</span>
                <span className="pl-8"><span className="text-green-600">"#c8c8c8"</span></span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">12</span>
                <span className="pl-4">{']'}</span>
            </div>
            <div className="flex">
                <span className="text-slate-400 mr-4 select-none w-4 text-right">13</span>
                <span>{'}'}</span>
            </div>
        </div>
    </div>
)

// --- Main Components ---

const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: 'home' | 'features' | 'roadmap') => void, currentView: 'home' | 'features' | 'roadmap' }) => (
    <nav className="sticky top-4 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-sm shadow-slate-200/50 px-4 h-14 flex items-center justify-between transition-all hover:shadow-md hover:shadow-slate-200/60">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="p-1.5 bg-gray-100 rounded-lg shadow-sm shadow-gray-200/50">
                    <img src={logo_plain} alt="App Logo" className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900">Mnemo</span>
            </div>

            <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-lg border border-slate-200/50">
                <button onClick={() => onNavigate('home')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${currentView === 'home' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}>Home</button>
                <button onClick={() => onNavigate('features')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${currentView === 'features' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}>Features</button>
                <button onClick={() => onNavigate('roadmap')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${currentView === 'roadmap' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}`}>Roadmap</button>
            </div>

            <div className="flex items-center gap-3">
                <a href="https://github.com/ShadowCCS/mnemoapp" className="hidden sm:flex text-slate-500 hover:text-slate-900 transition-colors" target="_blank" rel="noreferrer">
                    <IconGithub className="w-5 h-5" />
                </a>
                <button className="bg-gradient-to-r from-brand-600 to-brand-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:from-brand-500 hover:to-brand-400 hover:shadow-lg hover:shadow-brand-500/30 active:scale-95 transition-all">
                    Download
                </button>
            </div>
        </div>
    </nav>
);

const HeroVisual = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000 pointer-events-none select-none mt-10 lg:mt-0">
            {/* The 3D Stack Container */}
            <div className="relative w-[80%] md:w-[600px] h-[350px] hero-float">

                {/* Layer 1: The "Graph" (Background Layer) */}
                <div className="absolute top-4 -left-4 w-full h-full bg-white border border-slate-200 rounded-2xl shadow-lg opacity-90 translate-z-[-50px] overflow-hidden p-6 flex flex-col transform rotate-[-2deg]">
                    <div className="flex justify-between items-center mb-4 opacity-50">
                        <div className="h-3 w-24 bg-slate-300 rounded-full"></div>
                        <div className="h-8 w-8 rounded-full bg-slate-100"></div>
                    </div>
                    {/* Abstract Graph Nodes */}
                    <div className="flex-1 relative opacity-30">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-500 rounded-full"></div>
                        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-slate-400 rounded-full"></div>
                        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-slate-400 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-slate-300 -rotate-45 origin-left"></div>
                        <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-slate-300 rotate-12 origin-left"></div>
                    </div>
                </div>

                {/* Layer 2: The "Editor" (Middle Layer) */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-2xl p-8 flex flex-col gap-4 transform rotate-[1deg]">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400/60"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                        <div className="ml-4 h-2 w-32 bg-slate-200 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-8 w-3/4 bg-slate-100 rounded-lg"></div>
                        <div className="h-4 w-full bg-slate-50 rounded"></div>
                        <div className="h-4 w-5/6 bg-slate-50 rounded"></div>
                        <div className="h-4 w-4/6 bg-slate-50 rounded"></div>
                    </div>
                    <div className="mt-auto flex gap-2">
                        <div className="h-20 w-32 bg-slate-50 border border-slate-100 rounded-lg"></div>
                        <div className="h-20 w-32 bg-slate-50 border border-slate-100 rounded-lg"></div>
                    </div>
                </div>

                {/* Layer 3: The "Flashcard" (Top Floating Layer) */}
                <div className="absolute -bottom-8 -right-8 w-64 h-40 bg-brand-600 rounded-xl shadow-glow shadow-brand-500/30 p-6 text-white flex flex-col justify-between transform translate-z-12 hover:scale-105 transition-transform duration-500 rotate-[-3deg]">
                    <div className="flex justify-between items-start">
                        <div className="text-brand-200 text-xs font-mono uppercase">Reviewing</div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-lg font-medium leading-tight">
                        Mitochondria is the powerhouse of the cell.
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Hero = () => (
    <section className="relative pt-32 pb-20 lg:pt-44 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-100/30 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-accent-100/40 rounded-full blur-[80px] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm hover:shadow-md transition-all cursor-default">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <b>Alpha</b> &bull; coming soon!
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Your Second Brain. <br />
                        <span className="relative inline-block">
                            <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-brand-600 to-brand-400 opacity-20 animate-pulse"></span>
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 animate-gradient-x font-black">
                                Unleashed.
                            </span>
                        </span>
                    </h1>

                    <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                        Mnemo is a privacy-first, offline-capable learning platform. Flashcards, mindmaps, and notes in one modular application.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-brand-500/30 active:scale-95">
                            <IconDownload className="w-5 h-5" />
                            <span>Download for Free</span>
                        </button>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold transition-all hover:border-slate-300 shadow-sm active:scale-95">
                            <IconGithub className="w-5 h-5" />
                            <span>View Source</span>
                        </button>
                    </div>

                    <div className="mt-10 flex items-center lg:justify-start justify-center gap-8 text-slate-400">
                        <div className="flex items-center gap-2 hover:text-slate-600 transition-colors cursor-default">
                            <IconWindows className="h-5 w-5" /> <span className="text-sm">Windows</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-slate-600 transition-colors cursor-default">
                            <IconApple className="h-5 w-5" /> <span className="text-sm">macOS</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-slate-600 transition-colors cursor-default">
                            <IconLinux className="h-5 w-5" /> <span className="text-sm">Linux</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visual */}
                <HeroVisual />

            </div>
        </div>
    </section>
);

const FeatureBlock = ({
    title,
    desc,
    children,
    reversed = false
}: {
    title: string,
    desc: string,
    children?: React.ReactNode,
    reversed?: boolean
}) => (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-20`}>
        <div className="flex-1 text-center lg:text-left">

            <h3 className="text-3xl font-bold text-slate-900 mb-4">{title}</h3>
            <p className="text-lg text-slate-500 leading-relaxed">{desc}</p>
        </div>
        <div className="flex-1 w-full">
            <WindowFrame className="transform hover:scale-[1.02] transition-transform duration-500 shadow-soft">
                {children}
            </WindowFrame>
        </div>
    </div>
)

const FeaturesIntro = () => (
    <section id="features" className="pt-20 pb-10 relative">
        <div className="max-w-7xl mx-auto px-6">

            {/* Section Header */}
            <RevealOnScroll>
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        One tool. Infinite possibilities.
                    </h2>
                    <p className="text-slate-500 text-xl leading-relaxed">
                        Stop juggling five different apps. Mnemo brings the most powerful learning techniques together into <b>one environment.</b>
                    </p>
                </div>
            </RevealOnScroll>

            {/* Main Showcase */}
            <RevealOnScroll delay={200}>
                <div className="mb-10">
                    <WindowFrame className="max-w-5xl mx-auto shadow-2xl shadow-brand-900/10">
                        <ThemeCompareSlider />
                    </WindowFrame>
                </div>
            </RevealOnScroll>

        </div>
    </section>
);

const FeaturesList = () => (
    <section className="pb-20 pt-10 relative">
        <div className="max-w-7xl mx-auto px-6">
            {/* Feature Rows */}
            <div className="space-y-12">
                <RevealOnScroll>
                    <FeatureBlock
                        title="Spaced Repetition"
                        desc="Forget about forgetting. Mnemo's built-in algorithms (compatible with Anki) schedule reviews at the perfect time, so you learn faster with less effort."
                    >
                        <FlashcardMockup />
                    </FeatureBlock>
                </RevealOnScroll>

                <RevealOnScroll>
                    <FeatureBlock
                        title="Mindmaps"
                        desc="Break free from linear notes. Explore ideas spatially and design workflows that match the way you think."
                        reversed
                    >
                        <MindmapMockup />
                    </FeatureBlock>
                </RevealOnScroll>

                <RevealOnScroll>
                    <FeatureBlock
                        title="Embedded Game Engine"
                        desc="Mnemo embeds the MonoGame framework, enabling developers to build full games where study data drives the mechanics. Turn flashcard decks into RPG battles or unlock levels by mastering concepts."
                    >
                        <GameMockup />
                    </FeatureBlock>
                </RevealOnScroll>

                <RevealOnScroll>
                    <FeatureBlock
                        title="Extensible by Design"
                        desc="Every part of Mnemo is a module. Customize the entire UI, create new card types, or build full games using the C# Extension API."
                        reversed
                    >
                        <CodeMockup />
                    </FeatureBlock>
                </RevealOnScroll>
            </div>
        </div>
    </section>
);



const WhyChoose = () => (
    <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <RevealOnScroll>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Mnemo?</h2>
                    <p className="text-lg text-slate-500">
                        Built for serious learners who care about their data, their privacy, and the longevity of their knowledge base.
                    </p>
                </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                        icon: IconShield,
                        title: "Privacy First",
                        desc: "Your data lives on your device. No tracking, no ads, and no hidden telemetry."
                    },
                    {
                        icon: IconCloudOff,
                        title: "Offline Capable",
                        desc: "Study anywhere, even without an internet connection. Sync only when you want to."
                    },
                    {
                        icon: IconCode,
                        title: "Open Source",
                        desc: "Auditable code and community-driven development ensures the app improves for everyone."
                    },
                    {
                        icon: IconDatabase,
                        title: "No Vendor Lock-in",
                        desc: "Your knowledge belongs to you. Export to JSON, CSV, or Anki packages at any time."
                    }
                ].map((item, i) => (
                    <RevealOnScroll key={i} delay={i * 100} className="h-full">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10 transition-all group h-full">
                            <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-brand-600">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    </section>
)

const TechStrip = () => (
    <div className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <RevealOnScroll>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-12">Built with Modern Open Source Tech</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <div className="text-2xl font-bold text-slate-700 flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-600 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div> .NET 8
                    </div>
                    <div className="text-2xl font-bold text-slate-700 flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div> Avalonia
                    </div>
                    <div className="text-2xl font-bold text-slate-700 flex items-center gap-3">
                        <div className="w-3 h-3 bg-slate-800 rounded-full shadow-[0_0_10px_rgba(30,41,59,0.5)]"></div> SQLite
                    </div>
                    <div className="text-2xl font-bold text-slate-700 flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full shadow-[0_0_10px_rgba(22,163,74,0.5)]"></div> C#
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    </div>
)

const Footer = () => (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <RevealOnScroll>
                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                                <img src={logo_plain} alt="Mnemo Logo" className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-slate-900">Mnemo</span>
                        </div>
                        <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
                            The open-source learning platform that respects your privacy.
                            Master any subject with spaced repetition, mindmaps, and gamification.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/ShadowCCS/mnemoapp"
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300 group"
                                aria-label="GitHub"
                            >
                                <IconGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold text-lg mb-6 text-slate-900">Product</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Roadmap</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Download</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold text-lg mb-6 text-slate-900">Resources</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-brand-600 transition-colors">Community</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-bold text-lg mb-6 text-slate-900">Stay Updated</h4>
                        <p className="text-slate-500 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and features.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 outline-none transition-all"
                            />
                            <button className="bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg text-sm px-4 py-2.5 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>


            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                <div>
                    © 2025 Mnemo Project. Open Source under MIT License.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-brand-600 transition-colors">Cookie Policy</a>
                </div>
            </div>
        </div >
    </footer >
);

const Roadmap = () => {
    const phases = [
        {
            status: "completed",
            title: "Phase 1: Foundation",
            items: [
                "Modular architecture (Avalonia 11, .NET 8)",
                "Extension system (lifecycle, permissions, packaging)",
                "MnemoAPI (comprehensive extension API)",
                "Theme & language system (localization, customization)",
                "Storage system (SQLite runtime, packaged storage)",
                "Navigation & UI framework (overlays, toasts, breadcrumbs)",
                "File processing (TXT, JSON, PDF, DOCX)",
                "AI service infrastructure (model management, drivers)",
                "LaTeX rendering engine",
                "Task system (background tasks, scheduling)"
            ]
        },
        {
            status: "current",
            title: "Phase 2: Core Learning Features",
            items: [
                "Learning paths (creation, viewing, unit navigation)",
                "Notes editor (rich text, organization, search)",
                "Flashcards system (card creation, spaced repetition algorithms)",
                "Progress tracking (analytics, statistics, metrics)"
            ]
        },
        {
            status: "planned",
            title: "Phase 3: Next Steps",
            items: [
                "Mindmaps (visual concept mapping, interactive graphs)",
                "Game Engine Imbedding (MnemoGame)",
                "Media support (images, audio, video in content)"
            ]
        },
        {
            status: "planned",
            title: "Phase 4: Coming Soon",
            items: [
                "TBA"
            ]
        }
    ];

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Roadmap</h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        We're building Mnemo in the open. Here's what we've shipped and what's coming next.
                    </p>
                </div>

                <div className="space-y-8">
                    {phases.map((phase, i) => (
                        <RevealOnScroll key={i} delay={i * 100}>
                            <div className={`relative pl-8 md:pl-0 ${phase.status === 'completed' ? 'opacity-70 hover:opacity-100 transition-opacity' : ''}`}>
                                {/* Timeline Line (Desktop) */}
                                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>

                                <div className={`md:flex items-center justify-between gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Timeline Dot (Desktop) */}
                                    <div className={`hidden md:flex absolute left-[50%] -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-sm items-center justify-center z-10
                                        ${phase.status === 'completed' ? 'bg-green-500' : phase.status === 'current' ? 'bg-brand-500 animate-pulse' : 'bg-slate-300'}`}>
                                        {phase.status === 'completed' && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>

                                    <div className="md:w-[45%]">
                                        <div className={`p-6 rounded-2xl border ${phase.status === 'current' ? 'bg-white border-brand-200 shadow-lg shadow-brand-500/10 ring-1 ring-brand-100' : 'bg-slate-50 border-slate-200'}`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide
                                                    ${phase.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                        phase.status === 'current' ? 'bg-brand-100 text-brand-700' : 'bg-slate-200 text-slate-600'}`}>
                                                    {phase.status}
                                                </span>
                                                <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                                            </div>
                                            <ul className="space-y-3">
                                                {phase.items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-3 text-slate-600">
                                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${phase.status === 'completed' ? 'bg-green-400' : 'bg-slate-400'}`}></div>
                                                        <span className={phase.status === 'completed' ? 'line-through decoration-slate-300' : ''}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="md:w-[45%]"></div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    const features = [
        {
            title: "Spaced Repetition",
            description: "Master any subject with scientifically-proven spaced repetition algorithms. Compatible with Anki's SM-2 algorithm, Mnemo schedules reviews at optimal intervals to maximize retention and minimize study time.",
            highlights: [
                "Anki-compatible scheduling",
                "Customizable review intervals",
                "Progress tracking and statistics",
                "Multiple card types support"
            ],
            mockup: <FlashcardMockup />
        },
        {
            title: "Visual Mindmaps",
            description: "Break free from linear note-taking. Create interactive mindmaps that mirror how your brain actually works. Connect concepts, visualize relationships, and explore your knowledge spatially.",
            highlights: [
                "Infinite canvas for ideas",
                "Link notes and flashcards",
                "Export to multiple formats",
                "Collaborative editing ready"
            ],
            mockup: <MindmapMockup />
        },
        {
            title: "Embedded Game Engine",
            description: "Transform learning into an adventure. Mnemo embeds the MonoGame framework, enabling developers to create full games where your study progress drives gameplay mechanics.",
            highlights: [
                "MonoGame integration",
                "Turn flashcards into RPG battles",
                "Unlock content through learning",
                "Full C# game development API"
            ],
            mockup: <GameMockup />
        },
        {
            title: "Extensible Architecture",
            description: "Mnemo is built on a modular plugin system. Customize every aspect of the UI, create new card types, add themes, or build entirely new learning modes using the comprehensive C# Extension API.",
            highlights: [
                "Full C# Extension API",
                "Custom card types and themes",
                "Plugin marketplace ready",
                "Hot-reload during development"
            ],
            mockup: <CodeMockup />
        },
        {
            title: "Smart Dashboard",
            description: "Get insights into your learning journey with comprehensive analytics. Track your progress, identify weak areas, and optimize your study sessions with data-driven recommendations.",
            highlights: [
                "Learning path visualization",
                "Performance analytics",
                "Study session tracking",
                "Personalized recommendations"
            ],
            mockup: <DashboardMockup />
        },
        {
            title: "Privacy & Ownership",
            description: "Your knowledge belongs to you. Mnemo stores everything locally, works completely offline, and lets you export your data anytime. No cloud lock-in, no tracking, no compromises.",
            highlights: [
                "100% offline capable",
                "Local-first data storage",
                "Export to JSON, CSV, Anki",
                "No telemetry or tracking"
            ],
            mockup: <PrivacyMockup />
        }
    ];

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Powerful Features for Serious Learners
                    </h1>
                    <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                        Mnemo combines the best learning techniques into one modular, privacy-first platform.
                        Everything you need to build and retain knowledge, nothing you don't.
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, i) => (
                        <RevealOnScroll key={i}>
                            <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                                <div className="flex-1 text-center lg:text-left">
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {feature.highlights.map((highlight, j) => (
                                            <li key={j} className="flex items-start gap-3 text-slate-700">
                                                <svg className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {feature.mockup && (
                                    <div className="flex-1 w-full">
                                        <WindowFrame className="transform hover:scale-[1.02] transition-transform duration-500 shadow-soft">
                                            {feature.mockup}
                                        </WindowFrame>
                                    </div>
                                )}
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

const App = () => {
    const [view, setView] = React.useState<'home' | 'features' | 'roadmap'>('home');

    return (
        <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900 font-sans overflow-x-hidden">
            <Navbar onNavigate={setView} currentView={view} />
            <main>
                {view === 'home' ? (
                    <>
                        <Hero />
                        <FeaturesIntro />
                        <WhyChoose />
                        <FeaturesList />
                        <TechStrip />
                    </>
                ) : view === 'features' ? (
                    <Features />
                ) : (
                    <Roadmap />
                )}
            </main>
            <Footer />
        </div>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
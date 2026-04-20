"use client";

import React, { useState, useEffect, useRef } from "react";
import { MoveRight, RefreshCcw, CheckCircle2, ShieldCheck } from "lucide-react";

interface SliderCaptchaProps {
    onVerify: (token: string) => void;
    onRefresh?: () => void;
}

export const SliderCaptcha: React.FC<SliderCaptchaProps> = ({ onVerify, onRefresh }) => {
    const [isVerified, setIsVerified] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [targetPosition, setTargetPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [imageReload, setImageReload] = useState(0);

    // Constants
    const width = 320;
    const height = 160;
    const pieceSize = 50;
    const pieceY = 55; // Fixed Y position for the puzzle piece for simplicity

    // Randomize target position on init/reload
    useEffect(() => {
        // Random position between 50px and width-50px
        const randomX = Math.floor(Math.random() * (width - 100)) + 50;
        setTargetPosition(randomX);
        setSliderValue(0);
        setIsVerified(false);
    }, [imageReload]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isVerified) return;
        setSliderValue(Number(e.target.value));
    };

    const handleDragEnd = () => {
        if (isVerified) return;
        setIsDragging(false);

        // Check if within tolerance (e.g., +/- 5px)
        const difference = Math.abs(sliderValue - targetPosition);
        if (difference <= 5) {
            setIsVerified(true);
            // Snap to exact position
            setSliderValue(targetPosition);
            // Send verified token
            onVerify("slider-captcha-verified-token");
        } else {
            // Return to start if failed
            setIsVerified(false);
            setSliderValue(0);
            // Optional: Shake effect or error feedback could go here
        }
    };

    const reloadCaptcha = () => {
        setImageReload(prev => prev + 1);
        if (onRefresh) onRefresh();
    };

    // Image source - using a reliable random image service or local static logic
    // Using picsum with a cache buster
    const imgSrc = `https://picsum.photos/${width}/${height}?random=${imageReload}`;

    return (
        <div className="w-full max-w-[320px] mx-auto font-sans select-none">
            {/* Card Container */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-800 p-4 space-y-4">

                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Security Verification
                    </h3>
                    <button
                        onClick={reloadCaptcha}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        type="button"
                        title="Refresh Image"
                    >
                        <RefreshCcw className="w-4 h-4" />
                    </button>
                </div>

                {/* Captcha Image Area */}
                <div
                    className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-zinc-800"
                    style={{ width: `${width}px`, height: `${height}px` }}
                >
                    {/* Loading Placeholder */}
                    {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">Loading...</div> */}

                    {/* Main Background Image */}
                    <img
                        src={imgSrc}
                        alt="Captcha Background"
                        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                        draggable={false}
                    />

                    {/* Target Hole (Visual indicator on background) */}
                    <div
                        className="absolute bg-black/50 border border-white/30 shadow-inner"
                        style={{
                            width: `${pieceSize}px`,
                            height: `${pieceSize}px`,
                            top: `${pieceY}px`,
                            left: `${targetPosition}px`,
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
                        }}
                    />

                    {/* Puzzle Piece (Overlay) */}
                    <div
                        className="absolute top-0 left-0 h-full w-full pointer-events-none"
                    >
                        <div
                            className="absolute shadow-[2px_2px_8px_rgba(0,0,0,0.6)] border border-white/80 z-10"
                            style={{
                                width: `${pieceSize}px`,
                                height: `${pieceSize}px`,
                                top: `${pieceY}px`,
                                left: `${sliderValue}px`, // Controlled by slider
                                backgroundImage: `url(${imgSrc})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: `-${targetPosition}px -${pieceY}px`, // Shows the slice from the target
                                backgroundSize: `${width}px ${height}px`,
                                transition: isDragging ? 'none' : 'left 0.3s ease-in-out'
                            }}
                        />
                    </div>

                    {/* Success Overlay */}
                    {isVerified && (
                        <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-[1px] flex items-center justify-center z-20 animate-in fade-in duration-300">
                            <div className="bg-white text-emerald-600 px-4 py-2 rounded-full shadow-lg font-bold flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" /> Verified
                            </div>
                        </div>
                    )}
                </div>

                {/* Slider Controls */}
                <div className="relative h-10 bg-gray-100 dark:bg-zinc-800 rounded-full border border-gray-200 dark:border-zinc-700 overflow-hidden group">
                    <div
                        className="absolute top-0 bottom-0 left-0 bg-emerald-100 dark:bg-emerald-900/30 transition-all duration-100 border-r border-emerald-200 dark:border-emerald-800"
                        style={{ width: `${(sliderValue / width) * 100}%` }}
                    />

                    <p className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-400 select-none z-0">
                        {isVerified ? "Verification Complete" : "Slide to fit the puzzle piece"}
                    </p>

                    <input
                        type="range"
                        min="0"
                        max={width - pieceSize}
                        step="1"
                        value={sliderValue}
                        onChange={handleSliderChange}
                        onMouseDown={() => setIsDragging(true)}
                        onTouchStart={() => setIsDragging(true)}
                        onMouseUp={handleDragEnd}
                        onTouchEnd={handleDragEnd}
                        disabled={isVerified}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />

                    {/* Custom Thumb (Visual Only if input opacity 0 handles interaction) -> actually standard range input is easier. 
                Let's use a visual handle that follows the value
            */}
                    <div
                        className="absolute top-1 bottom-1 w-10 bg-white dark:bg-zinc-700 shadow-md rounded-full flex items-center justify-center pointer-events-none transition-all duration-75 border border-gray-200 dark:border-zinc-600"
                        style={{
                            left: `${sliderValue}px`,
                            transition: isDragging ? 'none' : 'left 0.3s ease-in-out'
                        }}
                    >
                        {isVerified ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : (
                            <MoveRight className="w-4 h-4 text-gray-400" />
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

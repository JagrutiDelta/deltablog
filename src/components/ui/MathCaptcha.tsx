"use client";

import React, { useState, useEffect } from 'react';
import { RefreshCcw, CheckCircle2 } from 'lucide-react';

interface MathCaptchaProps {
    onVerify: (token: string | null) => void;
}

export const MathCaptcha: React.FC<MathCaptchaProps> = ({ onVerify }) => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answer, setAnswer] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        generateProblem();
    }, []);

    const generateProblem = () => {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        setNum1(n1);
        setNum2(n2);
        setAnswer("");
        setIsVerified(false);
        onVerify(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setAnswer(val);

        const sum = num1 + num2;
        if (parseInt(val) === sum) {
            setIsVerified(true);
            onVerify("math-captcha-verified-token");
        } else {
            setIsVerified(false);
            onVerify(null);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-4 bg-gray-100 dark:bg-zinc-800 p-3 rounded-lg border border-gray-200 dark:border-zinc-700">
                <div className="flex items-center space-x-2 text-lg font-bold text-gray-700 dark:text-gray-200 select-none">
                    <span>{num1}</span>
                    <span>+</span>
                    <span>{num2}</span>
                    <span>=</span>
                </div>
                <input
                    type="number"
                    value={answer}
                    onChange={handleChange}
                    className="w-16 p-1 text-center border-b-2 border-gray-300 dark:border-zinc-600 bg-transparent focus:border-blue-500 focus:outline-none dark:text-white font-medium"
                    placeholder="?"
                    disabled={isVerified}
                />
                <button
                    type="button"
                    onClick={generateProblem}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <RefreshCcw size={16} />
                </button>
            </div>
            {isVerified && (
                <div className="text-sm text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={14} /> Verified
                </div>
            )}
        </div>
    );
};

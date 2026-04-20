import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Timeline = () => {
    const events = [
        { id: 1, title: '2010', points: ['Web Module', 'Inventory Management', 'Purchase Management', 'Data Reports'] },
        { id: 2, title: '2012', points: ['PPC', 'Mobile App'] },
        { id: 3, title: '2014', points: ['Distributor Portal', "Employee Management (FMS)", "Shipment Management"] },
        { id: 4, title: '2016', points: ['Assets Module', 'Kanban', "Marketing CRM", "Employee Klock", "Design Module"] },
        { id: 5, title: '2018', points: [' Trading Module', 'Vendor Application', 'Budget Module', "HR-MyTime", "Attendance App"] },
        { id: 6, title: '2020', points: ['Inventory 2.0', 'Gate Module', 'SOP Mobile App', 'Kanban 3.0', "Tender Management", "Dealer Application"] },
        { id: 7, title: '2022', points: ['Vendor Audit And Registration', 'Costing Module', 'Procurement Module', "Dashboards BI", "Branch Management", "Payment Gateway"] },
        { id: 8, title: '2024', points: ['Auto Audit Module', 'AI Driven Procurement Planning', "Man/Shop Schedule", "Fit To Job"] },
        { id: 9, title: '2026', points: ['IOT In Plant', 'End User Potential Analysis', 'Logistic Integration'] },
        { id: 10, title: '2028', points: ['AR Based Pump', 'Diagnosis Tools', 'Pump Health Card'] },
        { id: 11, title: '2030', points: ['Multi Location Smart Mini Factory'] },
        { id: 12, title: 'Beyond 2030', points: ['Sustainable Digital Ecosystems', 'Autonomous Enterprise Intelligence', 'Global Tech Synergy'] },
    ];

    return (
        <div className="flex flex-col items-center relative w-full max-w-[1600px] mx-auto px-4 md:px-8">
            {/* Center Line (Desktop) / Left Line (Mobile) */}
            {/* Center Line (Desktop) / Left Line (Mobile) - Extends to show ongoing journey */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-[-50px] w-0.5 bg-gradient-to-b from-teal-500/0 via-teal-500/50 to-teal-500/0 lg:-translate-x-1/2" />

            {events.map((event, index) => {
                const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.1,
                });

                const isLeft = index % 2 === 0;
                // Future Vision starts from 2026 (index 8) based on original logic 'index > 7' was colored, so 8,9,10.
                const isFuture = index >= 8;

                const CardContent = () => {
                    const isCurrentFocus = event.title === '2026'; // 2026
                    const isFutureConcept = index > 8;  // 2028, 2030, Beyond 2030

                    return (
                        <div className={clsx(
                            "p-6 md:p-8 rounded-2xl border transition-all duration-500 relative group overflow-hidden",
                            isCurrentFocus && "bg-teal-50/50 dark:bg-gray-900 border-teal-200 dark:border-teal-500/50 shadow-[0_0_30px_rgba(20,184,166,0.1)] dark:shadow-[0_0_30px_rgba(20,184,166,0.2)] hover:shadow-[0_0_60px_rgba(20,184,166,0.2)] dark:hover:shadow-[0_0_60px_rgba(20,184,166,0.4)]",
                            isFutureConcept && "bg-blue-50/50 dark:bg-slate-950 border-blue-200 dark:border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.05)] dark:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:border-blue-400/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
                            !isFuture && "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl"
                        )}>
                            {/* Futuristic Background Accents */}
                            {(isCurrentFocus || isFutureConcept) && (
                                <>
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50 dark:opacity-100" />
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        <div className={clsx(
                                            "absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] transition-all duration-700 group-hover:blur-[100px] opacity-20 dark:opacity-40",
                                            isCurrentFocus ? "bg-teal-500" : "bg-blue-500"
                                        )} />
                                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500/5 dark:bg-white/5 rounded-full blur-[40px]" />

                                        {/* Scanning Line Effect */}
                                        <motion.div
                                            animate={{
                                                top: ["-50%", "150%"],
                                                opacity: [0, 0.5, 0]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className={clsx(
                                                "absolute inset-x-0 h-[2px] w-full z-20",
                                                isCurrentFocus ? "bg-gradient-to-r from-transparent via-teal-400 to-transparent" : "bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                                            )}
                                        />
                                    </div>
                                </>
                            )}

                            {/* Badge */}
                            {(isCurrentFocus || isFutureConcept) && (
                                <div className="absolute top-4 right-4 z-30">
                                    <span className={clsx(
                                        "px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border flex items-center gap-2",
                                        isCurrentFocus ? "bg-teal-500/10 border-teal-500/30 text-teal-600 dark:text-teal-400" : "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-300"
                                    )}>
                                        <span className={clsx(
                                            "w-1.5 h-1.5 rounded-full",
                                            isCurrentFocus ? "bg-teal-500 animate-ping" : "bg-blue-500"
                                        )} />
                                        {isCurrentFocus ? "Phase: Development" : "Target: Vision"}
                                    </span>
                                </div>
                            )}

                            <h3 className={clsx(
                                "text-4xl font-black mb-4 relative z-20 tracking-tighter",
                                isCurrentFocus ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-300 dark:to-emerald-400" : isFutureConcept ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400" : "text-gray-900 dark:text-white"
                            )}>
                                {event.title}
                            </h3>

                            <div className={clsx(
                                "h-[2px] w-20 rounded-full mb-6 relative z-20",
                                isCurrentFocus ? "bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)] dark:shadow-[0_0_15px_rgba(20,184,166,1)]" : isFutureConcept ? "bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-teal-500 ml-auto lg:ml-auto lg:mr-0"
                            )}></div>

                            <ul className={clsx(
                                "space-y-4 relative z-20",
                                (isFutureConcept || isCurrentFocus) ? "text-gray-600 dark:text-gray-400 font-medium" : "text-gray-600 dark:text-gray-300"
                            )}>
                                {event.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group/item">
                                        <span className={clsx(
                                            "h-5 w-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover/item:scale-110",
                                            isCurrentFocus ? "border-teal-500/50 text-teal-500" : isFutureConcept ? "border-blue-500/30 text-blue-500" : "border-teal-500/20 text-teal-500"
                                        )}>
                                            <div className={clsx(
                                                "w-1.5 h-1.5 rounded-sm",
                                                isCurrentFocus ? "bg-teal-500 shadow-[0_0_8px_rgba(45,212,191,0.5)] dark:shadow-[0_0_8px_rgba(45,212,191,1)]" : isFutureConcept ? "bg-blue-500" : "bg-teal-500"
                                            )} />
                                        </span>
                                        <span className="text-lg leading-tight transition-colors group-hover/item:text-teal-600 dark:group-hover:text-white">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                }

                return (
                    <div key={event.id} className="w-full">
                        {index === 8 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                className="relative flex items-center justify-center py-24 z-10"
                            >
                                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                                    <div className="w-[600px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full" />
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                                    <div className="bg-white/80 dark:bg-black/50 backdrop-blur-xl px-12 py-5 rounded-2xl border border-teal-100 dark:border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-center gap-2">
                                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-teal-600 dark:text-teal-500/80">Propelling Into</span>
                                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white italic tracking-tighter">
                                            THE <span className="text-teal-500">NEXT</span> ERA
                                        </h2>
                                    </div>
                                    <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                                </div>
                            </motion.div>
                        )}

                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={timelineVariants}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative mb-12 lg:mb-24"
                        >
                            {/* Desktop Layout */}
                            <div className="hidden lg:flex w-full items-start justify-center">
                                {/* Left Side */}
                                <div className="w-5/12 pr-12">
                                    {isLeft && <CardContent />}
                                </div>

                                {/* Center Dot */}
                                <div className="w-2/12 flex justify-center relative pt-8">
                                    <div className={clsx(
                                        "w-5 h-5 rounded-full border-4 z-10",
                                        isFuture
                                            ? "bg-gray-900 border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.6)]"
                                            : "bg-white dark:bg-gray-900 border-teal-500 shadow-sm"
                                    )}></div>
                                </div>

                                {/* Right Side */}
                                <div className="w-5/12 pl-12">
                                    {!isLeft && <CardContent />}
                                </div>
                            </div>

                            {/* Mobile Layout (All Right) */}
                            <div className="flex lg:hidden w-full pl-12 md:pl-16 relative">
                                <div className={clsx(
                                    "absolute left-8 -translate-x-1/2 top-8 w-4 h-4 rounded-full border-3 z-10",
                                    isFuture
                                        ? "bg-gray-900 border-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.6)]"
                                        : "bg-white dark:bg-gray-900 border-teal-500"
                                )}></div>
                                <div className="w-full">
                                    <CardContent />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;

import React, { useState, useEffect } from 'react';
import { DollarSign, Users, Clock, ArrowRight } from 'lucide-react';

const ROICalculator: React.FC = () => {
    const [employees, setEmployees] = useState(10);
    const [hoursPerWeek, setHoursPerWeek] = useState(5);
    const [hourlyRate, setHourlyRate] = useState(40); // Default average fully loaded cost
    const [savings, setSavings] = useState(0);

    useEffect(() => {
        // Calculation: Employees * Hours/Week * 52 Weeks * Hourly Rate
        const annualSavings = employees * hoursPerWeek * 52 * hourlyRate;
        setSavings(annualSavings);
    }, [employees, hoursPerWeek, hourlyRate]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <section className="py-24 bg-navy-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-accent-light font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
                        See The Value
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 font-heading">
                        Calculate Your <span className="text-accent">Automation ROI</span>
                    </h2>
                    <p className="text-navy-300 max-w-xl mx-auto text-lg leading-relaxed">
                        See how much manual data entry is actually costing your business every year.
                    </p>
                </div>

                <div className="bg-navy-950/50 backdrop-blur-sm border border-navy-800 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Inputs Column */}
                        <div className="space-y-8">

                            {/* Employees Input */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-white font-medium">
                                        <Users size={18} className="text-accent" />
                                        Number of Employees
                                    </label>
                                    <span className="text-accent-light font-mono font-bold bg-accent/10 px-3 py-1 rounded">
                                        {employees}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="500"
                                    value={employees}
                                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                                    className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                                <div className="flex justify-between text-xs text-navy-400 font-mono">
                                    <span>1</span>
                                    <span>500+</span>
                                </div>
                            </div>

                            {/* Hours Input */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="flex items-center gap-2 text-white font-medium">
                                        <Clock size={18} className="text-accent-light" />
                                        Wasted Hours / Week (Per Employee)
                                    </label>
                                    <span className="text-accent-light font-mono font-bold bg-accent/10 px-3 py-1 rounded">
                                        {hoursPerWeek} hrs
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                                    className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-accent-light"
                                />
                                <div className="flex justify-between text-xs text-navy-400 font-mono">
                                    <span>1 hr</span>
                                    <span>40 hrs</span>
                                </div>
                            </div>

                            {/* Hourly Rate Toggle */}
                            <div className="pt-4 border-t border-navy-800">
                                <label className="text-xs text-navy-400 uppercase tracking-wider mb-2 block">Avg. Fully Loaded Hourly Cost</label>
                                <div className="flex items-center gap-4">
                                    {[30, 40, 60].map((rate) => (
                                        <button
                                            key={rate}
                                            onClick={() => setHourlyRate(rate)}
                                            className={`px-4 py-2 rounded text-sm font-medium transition-colors border ${hourlyRate === rate ? 'bg-navy-800 text-white border-accent/50' : 'text-navy-500 border-transparent hover:text-white'}`}
                                        >
                                            ${rate}/hr
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Result Column */}
                        <div className="bg-gradient-to-br from-accent to-accent-dark rounded-xl p-8 text-center text-white shadow-lg relative overflow-hidden group border border-white/10">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]" />

                            <h3 className="text-indigo-100 uppercase tracking-widest text-sm font-semibold mb-2">Potential Annual Savings</h3>
                            <div className="text-4xl md:text-6xl font-bold mb-2 tracking-tight font-heading">
                                {formatCurrency(savings)}
                            </div>
                            <p className="text-indigo-100 text-sm mb-8">
                                Recovered directly to your bottom line.
                            </p>

                            <a
                                href="https://intake.nihilosolutions.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-accent-dark px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors w-full justify-center"
                            >
                                Start Saving Now <ArrowRight size={18} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;

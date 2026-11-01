import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  Calculator, 
  Sparkles, 
  TrendingUp,
  Droplets,
  HeartPulse,
  PiggyBank,
  Scissors
} from 'lucide-react';
import { Initiative } from '../types';

interface InitiativeDetailProps {
  initiative: Initiative;
  onBack: () => void;
}

export default function InitiativeDetail({ initiative, onBack }: InitiativeDetailProps) {
  // States for interactive widgets
  const [vedicNum, setVedicNum] = useState<number>(35);
  const [drillAnswer, setDrillAnswer] = useState<string | null>(null);
  
  // Initiative 2: Life skills tab
  const [lifeSkillTab, setLifeSkillTab] = useState<'earthquake' | 'snakebite' | 'savings'>('earthquake');
  const [snakebiteAnswer, setSnakebiteAnswer] = useState<string | null>(null);
  const [dailySavings, setDailySavings] = useState<number>(25);

  // Initiative 3: Enterprise Simulator
  const [businessType, setBusinessType] = useState<'pickle' | 'tailoring'>('pickle');
  const [unitCost, setUnitCost] = useState<number>(120);
  const [quantity, setQuantity] = useState<number>(100);
  const [targetMargin, setTargetMargin] = useState<number>(30); // 30%

  const handleBusinessTypeChange = (type: 'pickle' | 'tailoring') => {
    setBusinessType(type);
    if (type === 'pickle') {
      setUnitCost(120);
      setQuantity(100);
      setTargetMargin(30);
    } else {
      setUnitCost(450);
      setQuantity(35);
      setTargetMargin(25);
    }
  };

  // Vedic Square Trick Solver
  const solveVedicSquare = (num: number) => {
    if (num % 10 !== 5) return { error: "Vedic trick requires a number ending in 5" };
    const prefix = Math.floor(num / 10);
    const prefixResult = prefix * (prefix + 1);
    const suffix = 25;
    const finalResult = num * num;
    return {
      prefix,
      nextPrefix: prefix + 1,
      prefixResult,
      suffix,
      finalResult
    };
  };

  const vedicResult = solveVedicSquare(vedicNum);

  // Cost calculation calculations
  const totalCost = unitCost * quantity;
  const targetProfit = totalCost * (targetMargin / 100);
  const suggestedRevenue = totalCost + targetProfit;
  const suggestedPricePerUnit = suggestedRevenue / quantity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#FAFAFA] py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 font-mono transition-colors duration-300 mb-8 cursor-pointer focus:outline-none group"
          id="back-to-initiatives-btn"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to initiatives</span>
        </button>

        {/* Header Hero Section */}
        <div className="mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-500 bg-red-50 px-3 py-1.5 rounded-full">
            {initiative.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl text-gray-900 font-extrabold tracking-tight mt-4 leading-tight">
            {initiative.title}
          </h1>
          <p className="text-gray-500 mt-3 font-light text-base max-w-2xl leading-relaxed text-justify">
            {initiative.summary}
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white mb-10 h-72 md:h-96">
          <img
            src={initiative.image}
            alt={initiative.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Two-Column Detail Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Main detailed description */}
          <div className="md:col-span-8 flex flex-col gap-8">
            {initiative.sections && initiative.sections.length > 0 ? (
              initiative.sections.map((section, sIdx) => (
                <div key={sIdx} className="flex flex-col gap-3">
                  <h3 className="font-display text-lg font-bold text-gray-900 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-red-500 rounded-full inline-block" />
                    <span>{section.heading}</span>
                  </h3>
                  <div className="flex flex-col gap-4 text-gray-600 font-light text-base leading-relaxed text-justify">
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-lg font-bold text-gray-800 border-b border-gray-100 pb-2">
                  Initiative Scope & Delivery
                </h3>
                <div className="flex flex-col gap-5 text-gray-600 font-light text-base leading-relaxed text-justify">
                  {initiative.details.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Key highlights / Metrics */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col gap-5">
              <h4 className="font-display text-sm font-bold text-gray-800 tracking-wide uppercase">
                Core Metrics
              </h4>
              <ul className="flex flex-col gap-4">
                {initiative.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC INTERACTIVE PLAYGROUNDS BASED ON THE INITIATIVE --- */}
        <div className="p-8 md:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm mt-16 relative overflow-hidden" id="initiative-interactive-playground">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/20 rounded-full blur-2xl pointer-events-none" />
          
          {initiative.id === 1 && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-red-50 text-red-500">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-gray-900">
                    Vedic Square Trick Playground
                  </h4>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">Project SAMYA Mathematics Lab</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 font-light leading-relaxed text-justify">
                In our schools, we teach mental math shortcuts like the Vedic squaring technique. Squaring any number ending in <strong>5</strong> becomes instant! Learn the logic below by choosing a number.
              </p>

              {/* Interactive Tool */}
              <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Input selection */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Select a Number (Ending in 5):
                  </label>
                  <div className="flex gap-2">
                    {[15, 25, 35, 45, 65, 75, 85, 95].map((val) => (
                      <button
                        key={val}
                        onClick={() => setVedicNum(val)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all border ${
                          vedicNum === val
                            ? 'bg-red-500 text-white border-red-500 shadow-sm font-bold'
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Solving logic */}
                <div className="flex flex-col gap-3 justify-center">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">Logic Walkthrough</p>
                  <div className="flex flex-col gap-2 border-l-2 border-red-200 pl-4 py-1">
                    <p className="text-xs text-gray-600">
                      1. Multiply the leading digit <span className="font-bold text-red-500">{vedicResult.prefix}</span> by the next consecutive number (<span className="font-bold text-gray-700">{vedicResult.prefix} + 1 = {vedicResult.nextPrefix}</span>)
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {vedicResult.prefix} × {vedicResult.nextPrefix} = {vedicResult.prefixResult}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      2. Append the constant <span className="font-bold text-orange-500">25</span> to the end:
                    </p>
                    <p className="text-base font-bold text-gray-900 font-mono">
                      Result: {vedicResult.prefixResult}{vedicResult.suffix}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                <span>By transforming abstract numbers into accessible mental logic, math becomes play!</span>
              </div>
            </div>
          )}

          {initiative.id === 2 && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-50 text-orange-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-gray-900">
                    Essential Life Skills & Preparedness Lab
                  </h4>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">Project SAMYA Community Well-being</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 font-light leading-relaxed text-justify">
                Our initiative delivered four core educational sessions: safe drinking water, snakebite first aid, earthquake preparedness, and adolescent financial literacy. Explore the interactive learning modules below.
              </p>

              {/* Module Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-3">
                <button
                  onClick={() => setLifeSkillTab('earthquake')}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    lifeSkillTab === 'earthquake'
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Earthquake Drill</span>
                </button>
                <button
                  onClick={() => setLifeSkillTab('snakebite')}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    lifeSkillTab === 'snakebite'
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Snakebite & Water First Aid</span>
                </button>
                <button
                  onClick={() => setLifeSkillTab('savings')}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    lifeSkillTab === 'savings'
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <PiggyBank className="w-3.5 h-3.5" />
                  <span>Piggy Bank Savings Simulator</span>
                </button>
              </div>

              {/* Tab 1: Earthquake Drill */}
              {lifeSkillTab === 'earthquake' && (
                <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col gap-4">
                  <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Scenario: If an earthquake occurs while you are inside a government school classroom, what is the safest immediate action?</span>
                  </p>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setDrillAnswer('A')}
                      className={`text-left p-3 rounded-lg text-sm transition-all border ${
                        drillAnswer === 'A'
                          ? 'bg-red-50 border-red-200 text-red-700 font-medium'
                          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      A. Run out of the room immediately to the nearest exit stairs.
                    </button>
                    <button
                      onClick={() => setDrillAnswer('B')}
                      className={`text-left p-3 rounded-lg text-sm transition-all border ${
                        drillAnswer === 'B'
                          ? 'bg-green-50 border-green-200 text-green-700 font-medium'
                          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      B. Drop to your hands and knees under your desk, cover your head, and hold on.
                    </button>
                    <button
                      onClick={() => setDrillAnswer('C')}
                      className={`text-left p-3 rounded-lg text-sm transition-all border ${
                        drillAnswer === 'C'
                          ? 'bg-red-50 border-red-200 text-red-700 font-medium'
                          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      C. Stand securely in a doorway or next to a glass window.
                    </button>
                  </div>

                  {drillAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg text-xs leading-relaxed ${
                        drillAnswer === 'B'
                          ? 'bg-green-100/50 text-green-800 border border-green-200/50'
                          : 'bg-red-100/50 text-red-800 border border-red-200/50'
                      }`}
                    >
                      {drillAnswer === 'B' ? (
                        <strong>Correct!</strong>
                      ) : (
                        <strong>Incorrect choice.</strong>
                      )}{' '}
                      Disaster authorities recommend the <strong>Drop, Cover, and Hold On!</strong> protocol inside buildings. Falling debris is the single largest cause of injury. Running during active shaking is extremely dangerous.
                    </motion.div>
                  )}
                </div>
              )}

              {/* Tab 2: Snakebite & Water First Aid */}
              {lifeSkillTab === 'snakebite' && (
                <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col gap-5">
                  <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Scenario: If someone in the community is bitten by a snake, which step is recommended?</span>
                  </p>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setSnakebiteAnswer('A')}
                      className={`text-left p-3 rounded-lg text-sm transition-all border ${
                        snakebiteAnswer === 'A'
                          ? 'bg-red-50 border-red-200 text-red-700 font-medium'
                          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      A. Cut the bite mark to let out venom or tie a tight tourniquet.
                    </button>
                    <button
                      onClick={() => setSnakebiteAnswer('B')}
                      className={`text-left p-3 rounded-lg text-sm transition-all border ${
                        snakebiteAnswer === 'B'
                          ? 'bg-green-50 border-green-200 text-green-700 font-medium'
                          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      B. Keep the person calm, immobilize the bitten limb, and transport immediately to a medical post with anti-venom.
                    </button>
                  </div>

                  {snakebiteAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg text-xs leading-relaxed ${
                        snakebiteAnswer === 'B'
                          ? 'bg-green-100/50 text-green-800 border border-green-200/50'
                          : 'bg-red-100/50 text-red-800 border border-red-200/50'
                      }`}
                    >
                      {snakebiteAnswer === 'B' ? (
                        <strong>Correct!</strong>
                      ) : (
                        <strong>Myth Alert!</strong>
                      )}{' '}
                      Cutting the wound or using tight tourniquets can cause severe tissue necrosis and accelerates complications. Immobilization and immediate transfer to a health post with anti-venom is the life-saving standard.
                    </motion.div>
                  )}

                  <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-100 text-xs text-blue-900 flex items-start gap-2.5">
                    <Droplets className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>Safe Drinking Water Note:</strong> River water frequently carries water-borne pathogens. With our USD 1,000 fundraiser, we installed a water filtration system at a school where students previously drank directly from the river.
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Piggy Bank Savings Simulator */}
              {lifeSkillTab === 'savings' && (
                <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-widest">
                      Every Student Received a Piggy Bank
                    </span>
                    <p className="text-sm text-gray-700">
                      Adjust daily savings to see how regular adolescent habits accumulate into a meaningful educational safety net over time:
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                      <span>Daily Savings from Pocket Allowance:</span>
                      <span className="font-mono text-gray-900 font-bold">Rs. {dailySavings} / day</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={dailySavings}
                      onChange={(e) => setDailySavings(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-white rounded-xl border border-gray-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">1 Month (30d)</p>
                      <p className="text-base font-bold text-gray-800 mt-1">Rs. {(dailySavings * 30).toLocaleString()}</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">6 Months</p>
                      <p className="text-base font-bold text-gray-800 mt-1">Rs. {(dailySavings * 180).toLocaleString()}</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-xl border border-orange-200">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-orange-600 font-bold">1 Full Year</p>
                      <p className="text-base font-bold text-orange-600 mt-1">Rs. {(dailySavings * 365).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {initiative.id === 3 && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-yellow-50 text-yellow-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-gray-900">
                    Local Enterprise Business & Financial Simulator
                  </h4>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">Project SAMYA Women's Enterprise Initiative</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 font-light leading-relaxed text-justify">
                With AUD 6,000 raised, our team provided a tailoring machine and comprehensive business training in product quality, pricing, and financial management for two community enterprises: tailoring and pickle-making. Simulate enterprise pricing models below.
              </p>

              {/* Enterprise Selector */}
              <div className="flex gap-2 border-b border-gray-100 pb-3">
                <button
                  onClick={() => handleBusinessTypeChange('pickle')}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    businessType === 'pickle'
                      ? 'bg-yellow-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Pickle-Making Enterprise</span>
                </button>
                <button
                  onClick={() => handleBusinessTypeChange('tailoring')}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    businessType === 'tailoring'
                      ? 'bg-yellow-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Tailoring Enterprise</span>
                </button>
              </div>

              {/* Pricing Assistant Widget */}
              <div className="bg-[#FAFAFA] p-6 rounded-xl border border-gray-100 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Cost per unit slider */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                      <span>Production Cost:</span>
                      <span className="font-mono text-gray-800 font-bold">
                        Rs. {unitCost} / {businessType === 'pickle' ? 'Jar' : 'Garment'}
                      </span>
                    </label>
                    <input
                      type="range"
                      min={businessType === 'pickle' ? 40 : 150}
                      max={businessType === 'pickle' ? 300 : 1200}
                      step={businessType === 'pickle' ? 5 : 25}
                      value={unitCost}
                      onChange={(e) => setUnitCost(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                    />
                  </div>

                  {/* Quantity Slider */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                      <span>Batch Volume:</span>
                      <span className="font-mono text-gray-800 font-bold">
                        {quantity} {businessType === 'pickle' ? 'Jars' : 'Garments'}
                      </span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max={businessType === 'pickle' ? 400 : 100}
                      step={businessType === 'pickle' ? 10 : 5}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                    />
                  </div>

                  {/* Target margin slider */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                      <span>Target Margin (%):</span>
                      <span className="font-mono text-gray-800 font-bold">{targetMargin}%</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      step="5"
                      value={targetMargin}
                      onChange={(e) => setTargetMargin(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                    />
                  </div>
                </div>

                {/* Simulated Output Metrics */}
                <div className="border-t border-gray-200/60 pt-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-white rounded-xl border border-gray-100">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Total Production Cost</p>
                    <p className="text-sm font-bold text-gray-800 mt-1">Rs. {totalCost.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-100">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Net Enterprise Profit</p>
                    <p className="text-sm font-bold text-green-600 mt-1">Rs. {Math.round(targetProfit).toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-gray-100">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-gray-400">Total Projected Revenue</p>
                    <p className="text-sm font-bold text-gray-800 mt-1">Rs. {Math.round(suggestedRevenue).toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-yellow-700 font-bold">
                      Fair Price / {businessType === 'pickle' ? 'Jar' : 'Garment'}
                    </p>
                    <p className="text-sm font-bold text-yellow-700 mt-1">Rs. {Math.round(suggestedPricePerUnit)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

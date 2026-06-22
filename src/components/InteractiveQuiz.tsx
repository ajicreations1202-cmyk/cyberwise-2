/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS, PROGRAMS } from '../data';
import { Trophy, RefreshCcw, HelpCircle, ArrowRight } from 'lucide-react';

interface InteractiveQuizProps {
  onSelectTrack: (trackId: string) => void;
}

export default function InteractiveQuiz({ onSelectTrack }: InteractiveQuizProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({
    'digital-marketing': 0,
    'multimedia-design': 0,
    'website-development': 0,
    'ai-integration': 0
  });
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [recommendedId, setRecommendedId] = useState<string>('');

  const handleOptionSelect = (points: { [key: string]: number }) => {
    // Accumulate scores
    const updatedScores = { ...scores };
    Object.keys(points).forEach((key) => {
      if (updatedScores[key] !== undefined) {
        updatedScores[key] += points[key];
      }
    });
    setScores(updatedScores);

    // Proceed or Complete
    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(idx => idx + 1);
    } else {
      // Calculate winner
      let winnerId = 'digital-marketing';
      let maxVal = -1;
      Object.keys(updatedScores).forEach((key) => {
        if (updatedScores[key] > maxVal) {
          maxVal = updatedScores[key];
          winnerId = key;
        }
      });
      setRecommendedId(winnerId);
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setScores({
      'digital-marketing': 0,
      'multimedia-design': 0,
      'website-development': 0,
      'ai-integration': 0
    });
    setRecommendedId('');
    setIsCompleted(false);
  };

  const recommendedProgram = PROGRAMS.find(p => p.id === recommendedId) || PROGRAMS[0];

  return (
    <div className="px-4 md:px-8 max-w-4xl mx-auto" id="career-quiz">
      <div className="bg-white border-2 border-[#1A1A1A] p-6 md:p-10 relative overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A]">
        <div className="relative z-10">
          {!isCompleted ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase font-bold text-[#5A5A40] tracking-widest block font-bold">// PATHFINDER QUIZ</span>
                  <h3 className="text-xl md:text-2xl font-serif font-black text-[#1A1A1A] tracking-tight">
                    Find Your Ideal Digital Discipline
                  </h3>
                </div>
                {/* Progress bar info */}
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs font-mono font-bold text-[#5A5A40] block">
                    Step {currentQuestionIdx + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <div className="w-24 h-1.5 bg-[#E2DEC9] overflow-hidden mt-1 rounded-none border border-[#1A1A1A]/20">
                    <div 
                      className="bg-[#5A5A40] h-full transition-all duration-300"
                      style={{ width: `${((currentQuestionIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Active Question Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIdx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#5A5A40] shrink-0 mt-0.5" />
                    <h4 className="text-base md:text-lg font-serif font-bold text-[#1A1A1A] leading-snug">
                      {QUIZ_QUESTIONS[currentQuestionIdx].question}
                    </h4>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-3">
                    {QUIZ_QUESTIONS[currentQuestionIdx].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(option.points)}
                        className="p-4 rounded-none text-left bg-[#FCFAF7] hover:bg-[#F4F0E6] border border-[#1A1A1A] transition-all duration-200 group flex items-start gap-3.5 focus:outline-none cursor-pointer shadow-[2px_2px_0px_0px_#1A1A1A]"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1A1A1A] text-[#FCFAF7] text-xs font-mono font-bold shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-xs md:text-sm text-[#1A1A1A] font-bold group-hover:text-[#5A5A40] transition-colors">
                          {option.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Completed Test Outcome */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-left space-y-6"
            >
              <div className="flex items-center gap-4 border-b border-[#1A1A1A]/10 pb-4">
                <div className="p-2.5 bg-[#5A5A40] text-[#FCFAF7] rounded-none">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A5A40] font-bold block">RECOMMENDED PATHWAY DETERMINED</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-[#1A1A1A]">
                    {recommendedProgram.title} Track
                  </h3>
                </div>
              </div>

              <div className="bg-[#FCFAF7] border border-[#1A1A1A] p-5 space-y-3.5">
                <p className="text-xs md:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
                  Based on your diagnostic choices, your potential aligns best with <span className="text-[#1A1A1A] font-bold underline decoration-[#5A5A40] decoration-2">{recommendedProgram.title}</span>. 
                  This curriculum is structured specifically to move candidates towards learning {recommendedProgram.topics[0]} and {recommendedProgram.topics[1]} with practical assignments under real agency guides.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#1A1A1A]/20 pt-4 text-xs font-mono">
                  <div>
                    <span className="text-[#5A5A40] block uppercase font-bold text-[9px]">Standard Duration</span>
                    <span className="text-[#1A1A1A] font-bold">{recommendedProgram.duration}</span>
                  </div>
                  <div>
                    <span className="text-[#5A5A40] block uppercase font-bold text-[9px]">Placement Outlook</span>
                    <span className="text-[#1A1A1A] font-bold">Excellent / Targeted Local Agencies Placement</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onSelectTrack(recommendedProgram.id)}
                  className="px-6 py-3 rounded-none bg-[#1A1A1A] text-[#FCFAF7] hover:bg-[#5A5A40] font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all uppercase tracking-wider cursor-pointer shadow-[3px_3px_0px_0px_#5A5A40]"
                >
                  Apply For This Track <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleRestart}
                  className="px-5 py-3 rounded-none bg-[#FCFAF7] border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F4F0E6] font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#1A1A1A]"
                >
                  <RefreshCcw className="w-3.5 h-3.5" /> Retake Diagnostic Quiz
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

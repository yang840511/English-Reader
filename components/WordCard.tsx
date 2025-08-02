'use client';

import { useState } from 'react';
import { Word } from '../lib/wordData';

interface WordCardProps {
  word: Word;
}

export default function WordCard({ word }: WordCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showPronunciation, setShowPronunciation] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    // 模拟音频播放
    setTimeout(() => setIsPlaying(false), 1000);
    
    // 使用Web Speech API播放发音
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border dark:border-gray-700">
      {/* Word Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{word.word}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {word.partOfSpeech}
            </span>
          </div>
          <div className="text-gray-600 dark:text-gray-400 mb-1">
            <span className="text-blue-600 dark:text-blue-400 font-mono">{word.phonetic}</span>
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300 font-medium">
            {word.chinese}
          </div>
        </div>
        
        {/* Play Button */}
        <button
          onClick={playAudio}
          disabled={isPlaying}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl transition-all ${
            isPlaying 
              ? 'bg-green-500 animate-pulse' 
              : 'bg-blue-500 hover:bg-blue-600 hover:scale-110 dark:bg-blue-600 dark:hover:bg-blue-700'
          }`}
        >
          <i className={`${isPlaying ? 'ri-volume-up-line animate-bounce' : 'ri-volume-up-line'} w-6 h-6`}></i>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setShowExamples(!showExamples)}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
            showExamples
              ? 'bg-green-500 text-white'
              : 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50'
          }`}
        >
          <i className="ri-translate-2 w-4 h-4 mr-2"></i>
          词句运用
        </button>
        
        <button
          onClick={() => setShowPronunciation(!showPronunciation)}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
            showPronunciation
              ? 'bg-purple-500 text-white'
              : 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/50'
          }`}
        >
          <i className="ri-lightbulb-line w-4 h-4 mr-2"></i>
          发音技巧
        </button>
      </div>

      {/* Examples Section */}
      {showExamples && (
        <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-medium text-green-800 dark:text-green-300 mb-3 flex items-center">
            <i className="ri-chat-quote-line w-4 h-4 mr-2"></i>
            例句
          </h4>
          <div className="space-y-3">
            {word.examples.map((example, index) => (
              <div key={index} className="border-l-3 border-green-400 dark:border-green-500 pl-3">
                <div className="text-gray-800 dark:text-gray-200 mb-1">{example.english}</div>
                <div className="text-green-700 dark:text-green-300 text-sm">{example.chinese}</div>
              </div>
            ))}
          </div>
          
          {/* Common Phrases */}
          {word.usage.commonPhrases.length > 0 && (
            <div className="mt-4 pt-3 border-t border-green-200 dark:border-green-700">
              <h5 className="text-sm font-medium text-green-800 dark:text-green-300 mb-2">常用短语：</h5>
              <div className="flex flex-wrap gap-2">
                {word.usage.commonPhrases.map((phrase, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-green-100 dark:bg-green-800/50 text-green-700 dark:text-green-300 text-xs rounded-md"
                  >
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Pronunciation Tips Section */}
      {showPronunciation && (
        <div className="mb-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-3 flex items-center">
            <i className="ri-volume-down-line w-4 h-4 mr-2"></i>
            发音注意点
          </h4>
          <ul className="space-y-2">
            {word.pronunciation.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <i className="ri-arrow-right-s-line w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0"></i>
                <span className="text-purple-700 dark:text-purple-300 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
          
          {/* Synonyms and Antonyms */}
          <div className="mt-4 pt-3 border-t border-purple-200 dark:border-purple-700">
            {word.usage.synonyms && word.usage.synonyms.length > 0 && (
              <div className="mb-2">
                <span className="text-sm font-medium text-purple-800 dark:text-purple-300">近义词：</span>
                <span className="text-sm text-purple-700 dark:text-purple-300 ml-2">
                  {word.usage.synonyms.join(', ')}
                </span>
              </div>
            )}
            {word.usage.antonyms && word.usage.antonyms.length > 0 && (
              <div>
                <span className="text-sm font-medium text-purple-800 dark:text-purple-300">反义词：</span>
                <span className="text-sm text-purple-700 dark:text-purple-300 ml-2">
                  {word.usage.antonyms.join(', ')}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-600">
        <div className="flex items-center space-x-3">
          <button 
            onClick={playAudio}
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="ri-headphone-line w-4 h-4 mr-1"></i>
            再听一遍
          </button>
        </div>
        <div className="flex items-center space-x-1">
          <i className="ri-bookmark-line w-4 h-4"></i>
          <span>收藏</span>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Unit } from '../../../lib/wordData';
import WordCard from '../../../components/WordCard';
import ThemeToggle from '../../../components/ThemeToggle';

interface UnitDetailProps {
  unitData: Unit;
}

export default function UnitDetail({ unitData }: UnitDetailProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const isUpperSemester = unitData.id.startsWith('upper');
  const semesterPath = isUpperSemester ? '/semester/upper' : '/semester/lower';
  const semesterName = isUpperSemester ? '六年级上册' : '六年级下册';

  // 过滤单词
  const filteredWords = unitData.words.filter(word =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.chinese.includes(searchTerm)
  );

  // 播放所有单词
  const playAllWords = () => {
    if (!('speechSynthesis' in window)) {
      alert('您的浏览器不支持语音播放功能');
      return;
    }

    setIsPlaying(true);
    let currentIndex = 0;

    const playNext = () => {
      if (currentIndex < unitData.words.length) {
        const utterance = new SpeechSynthesisUtterance(unitData.words[currentIndex].word);
        utterance.lang = 'en-US';
        utterance.rate = 0.7;
        utterance.onend = () => {
          currentIndex++;
          setTimeout(playNext, 500); // 间隔500ms
        };
        speechSynthesis.speak(utterance);
      } else {
        setIsPlaying(false);
      }
    };

    playNext();
  };

  const stopPlaying = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href={semesterPath} className="flex items-center space-x-3">
              <i className="ri-arrow-left-line w-6 h-6 text-gray-600 dark:text-gray-300"></i>
              <span className="text-gray-600 dark:text-gray-300">返回{semesterName}</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-[\'Pacifico\'] text-indigo-600 dark:text-indigo-400">English Reader</h1>
              <p className="text-gray-600 dark:text-gray-300">{semesterName}</p>
            </div>
            <div className="w-28"></div>
          </div>
        </div>
      </div>

      {/* Unit Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-3">{unitData.title}</h2>
          <h3 className="text-2xl mb-4 text-indigo-100 dark:text-indigo-200">{unitData.theme}</h3>
          <p className="text-lg text-indigo-100 dark:text-indigo-200 mb-6">
            共 {unitData.words.length} 个单词 • 标准美式发音 • 详细解释
          </p>

          {/* Play All Button */}
          <div className="flex justify-center space-x-4">
            {!isPlaying ? (
              <button
                onClick={playAllWords}
                className="flex items-center px-6 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-gray-50 dark:bg-gray-200 dark:hover:bg-gray-300 transition-colors whitespace-nowrap"
              >
                <i className="ri-play-circle-line w-5 h-5 mr-2"></i>
                播放所有单词
              </button>
            ) : (
              <button
                onClick={stopPlaying}
                className="flex items-center px-6 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors whitespace-nowrap"
              >
                <i className="ri-stop-circle-line w-5 h-5 mr-2 animate-pulse"></i>
                停止播放
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8 border dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5"></i>
              <input
                type="text"
                placeholder="搜索单词..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <i className="ri-volume-up-line w-4 h-4 mr-1"></i>
                点击发音
              </div>
              <div className="flex items-center">
                <i className="ri-translate-2 w-4 h-4 mr-1"></i>
                查看用法
              </div>
              <div className="flex items-center">
                <i className="ri-lightbulb-line w-4 h-4 mr-1"></i>
                学习技巧
              </div>
            </div>
          </div>

          {searchTerm && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                找到 <span className="font-medium text-indigo-600 dark:text-indigo-400">{filteredWords.length}</span> 个相关单词
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-3 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    清除搜索
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Words Grid */}
        {filteredWords.length > 0 ? (
          <div className="grid gap-6">
            {filteredWords.map((word, index) => (
              <WordCard key={word.id} word={word} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <i className="ri-search-line text-gray-400 dark:text-gray-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">没有找到相关单词</h3>
            <p className="text-gray-500 dark:text-gray-400">尝试使用其他关键词搜索</p>
          </div>
        )}
      </div>

      {/* Learning Progress */}
      <div className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 border border-green-100 dark:border-green-800">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">学习建议</h3>
              <p className="text-gray-600 dark:text-gray-300">掌握这些技巧，让英语学习更高效</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="ri-repeat-line text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">反复朗读</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  每个单词至少读3遍，加深记忆
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <i className="ri-book-open-line text-green-600 dark:text-green-400 text-xl"></i>
                </div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">理解例句</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  通过例句理解单词在语境中的使用
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <i className="ri-timer-line text-purple-600 dark:text-purple-400 text-xl"></i>
                </div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">定期复习</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  按遗忘曲线规律进行复习
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 监听主题变化
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // 初始主题检查
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme === 'dark');

    return () => observer.disconnect();
  }, []);

  // 防止水合不匹配，服务端渲染时使用默认亮色主题
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <ThemeToggle />
        
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center">
              <h1 className="text-4xl font-[\'Pacifico\'] mb-2 text-indigo-600">
                English Reader
              </h1>
              <p className="text-gray-600">
                人教版六年级英语点读学习平台
              </p>
            </div>
          </div>
        </div>

        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              开始你的英语学习之旅
            </h2>
            <p className="text-xl mb-12 text-gray-600">
              互动式点读，标准发音，让英语学习变得简单有趣
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Link href="/semester/upper">
                <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group border bg-white border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <i className="ri-book-open-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    六年级上册
                  </h3>
                  <p className="mb-6 text-gray-600">
                    包含Unit 1-6的核心词汇，涵盖日常生活、学校、家庭等主题
                  </p>
                  <div className="rounded-lg p-4 bg-blue-50">
                    <div className="flex items-center justify-center space-x-6 text-sm text-blue-600">
                      <div className="flex items-center">
                        <i className="ri-volume-up-line w-4 h-4 mr-2"></i>
                        标准发音
                      </div>
                      <div className="flex items-center">
                        <i className="ri-translate-2 w-4 h-4 mr-2"></i>
                        词句运用
                      </div>
                      <div className="flex items-center">
                        <i className="ri-lightbulb-line w-4 h-4 mr-2"></i>
                        发音技巧
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors whitespace-nowrap">
                    开始学习上册
                    <i className="ri-arrow-right-line w-4 h-4 ml-2"></i>
                  </div>
                </div>
              </Link>

              <Link href="/semester/lower">
                <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group border bg-white border-gray-200">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-book-line text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    六年级下册
                  </h3>
                  <p className="mb-6 text-gray-600">
                    包含Unit 1-4的进阶词汇，深入学习更复杂的表达方式
                  </p>
                  <div className="rounded-lg p-4 bg-green-50">
                    <div className="flex items-center justify-center space-x-6 text-sm text-green-600">
                      <div className="flex items-center">
                        <i className="ri-volume-up-line w-4 h-4 mr-2"></i>
                        标准发音
                      </div>
                      <div className="flex items-center">
                        <i className="ri-translate-2 w-4 h-4 mr-2"></i>
                        词句运用
                      </div>
                      <div className="flex items-center">
                        <i className="ri-lightbulb-line w-4 h-4 mr-2"></i>
                        发音技巧
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors whitespace-nowrap">
                    开始学习下册
                    <i className="ri-arrow-right-line w-4 h-4 ml-2"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        background: isDark 
          ? 'linear-gradient(to bottom right, #0a0a0a, #000000)' 
          : 'linear-gradient(to bottom right, #dbeafe, #e0e7ff)'
      }}
    >
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Header */}
      <div 
        className="shadow-sm"
        style={{
          backgroundColor: isDark ? '#1a1a1a' : '#ffffff'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 
              className="text-4xl font-[\'Pacifico\'] mb-2"
              style={{ color: isDark ? '#818cf8' : '#4f46e5' }}
            >
              English Reader
            </h1>
            <p style={{ color: isDark ? '#e5e5e5' : '#6b7280' }}>
              人教版六年级英语点读学习平台
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl font-bold mb-6"
            style={{ color: isDark ? '#ffffff' : '#1f2937' }}
          >
            开始你的英语学习之旅
          </h2>
          <p 
            className="text-xl mb-12"
            style={{ color: isDark ? '#e5e5e5' : '#6b7280' }}
          >
            互动式点读，标准发音，让英语学习变得简单有趣
          </p>

          {/* Version Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Upper Semester Card */}
            <Link href="/semester/upper">
              <div 
                className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group border"
                style={{
                  backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                  borderColor: isDark ? '#333333' : '#e5e7eb'
                }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-book-open-line text-white text-3xl"></i>
                </div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  六年级上册
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: isDark ? '#e5e5e5' : '#6b7280' }}
                >
                  包含Unit 1-6的核心词汇，涵盖日常生活、学校、家庭等主题
                </p>
                <div 
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: isDark ? 'rgba(59, 130, 246, 0.15)' : '#dbeafe'
                  }}
                >
                  <div 
                    className="flex items-center justify-center space-x-6 text-sm"
                    style={{ color: isDark ? '#93c5fd' : '#2563eb' }}
                  >
                    <div className="flex items-center">
                      <i className="ri-volume-up-line w-4 h-4 mr-2"></i>
                      标准发音
                    </div>
                    <div className="flex items-center">
                      <i className="ri-translate-2 w-4 h-4 mr-2"></i>
                      词句运用
                    </div>
                    <div className="flex items-center">
                      <i className="ri-lightbulb-line w-4 h-4 mr-2"></i>
                      发音技巧
                    </div>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors whitespace-nowrap">
                  开始学习上册
                  <i className="ri-arrow-right-line w-4 h-4 ml-2"></i>
                </div>
              </div>
            </Link>

            {/* Lower Semester Card */}
            <Link href="/semester/lower">
              <div 
                className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group border"
                style={{
                  backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
                  borderColor: isDark ? '#333333' : '#e5e7eb'
                }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <i className="ri-book-line text-white text-3xl"></i>
                </div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                >
                  六年级下册
                </h3>
                <p 
                  className="mb-6"
                  style={{ color: isDark ? '#e5e5e5' : '#6b7280' }}
                >
                  包含Unit 1-4的进阶词汇，深入学习更复杂的表达方式
                </p>
                <div 
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: isDark ? 'rgba(34, 197, 94, 0.15)' : '#dcfce7'
                  }}
                >
                  <div 
                    className="flex items-center justify-center space-x-6 text-sm"
                    style={{ color: isDark ? '#86efac' : '#16a34a' }}
                  >
                    <div className="flex items-center">
                      <i className="ri-volume-up-line w-4 h-4 mr-2"></i>
                      标准发音
                    </div>
                    <div className="flex items-center">
                      <i className="ri-translate-2 w-4 h-4 mr-2"></i>
                      词句运用
                    </div>
                    <div className="flex items-center">
                      <i className="ri-lightbulb-line w-4 h-4 mr-2"></i>
                      发音技巧
                    </div>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors whitespace-nowrap">
                  开始学习下册
                  <i className="ri-arrow-right-line w-4 h-4 ml-2"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div 
        className="py-20"
        style={{
          backgroundColor: isDark ? '#1a1a1a' : '#ffffff'
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 
              className="text-3xl font-bold mb-4"
              style={{ color: isDark ? '#ffffff' : '#1f2937' }}
            >
              学习特色
            </h3>
            <p style={{ color: isDark ? '#e5e5e5' : '#6b7280' }}>
              全方位英语学习体验
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: isDark ? 'rgba(59, 130, 246, 0.2)' : '#dbeafe'
                }}
              >
                <i 
                  className="ri-mic-line text-2xl"
                  style={{ color: isDark ? '#93c5fd' : '#2563eb' }}
                ></i>
              </div>
              <h4 
                className="text-xl font-bold mb-3"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
              >
                标准发音
              </h4>
              <p style={{ color: isDark ? '#e5e5e5' : '#6b7280' }}>
                纯正美式发音，点击即可听到每个单词的标准读音，帮助你掌握正确发音
              </p>
            </div>

            <div className="text-center p-6">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: isDark ? 'rgba(34, 197, 94, 0.2)' : '#dcfce7'
                }}
              >
                <i 
                  className="ri-chat-3-line text-2xl"
                  style={{ color: isDark ? '#86efac' : '#16a34a' }}
                ></i>
              </div>
              <h4 
                className="text-xl font-bold mb-3"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
              >
                词句运用
              </h4>
              <p style={{ color: isDark ? '#e5e5e5' : '#6b7280' }}>
                丰富的例句和对话场景，让你了解单词在实际语境中的使用方法
              </p>
            </div>

            <div className="text-center p-6">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: isDark ? 'rgba(147, 51, 234, 0.2)' : '#f3e8ff'
                }}
              >
                <i 
                  className="ri-lightbulb-line text-2xl"
                  style={{ color: isDark ? '#c4b5fd' : '#7c3aed' }}
                ></i>
              </div>
              <h4 
                className="text-xl font-bold mb-3"
                style={{ color: isDark ? '#ffffff' : '#1f2937' }}
              >
                发音技巧
              </h4>
              <p style={{ color: isDark ? '#e5e5e5' : '#6b7280' }}>
                详细的发音要点和注意事项，帮助你避免常见的发音错误
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="py-20 text-white"
        style={{
          background: isDark 
            ? 'linear-gradient(to right, #1e1b4b, #1e40af)' 
            : 'linear-gradient(to right, #4f46e5, #2563eb)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">准备好开始学习了吗？</h3>
          <p 
            className="text-xl mb-8"
            style={{ color: isDark ? '#c7d2fe' : '#e0e7ff' }}
          >
            选择你的学期，开始有趣的英语点读之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/semester/upper">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-50 transition-colors whitespace-nowrap">
                学习上册
              </button>
            </Link>
            <Link href="/semester/lower">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-indigo-600 transition-colors whitespace-nowrap">
                学习下册
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div 
        className="text-white py-8"
        style={{
          backgroundColor: isDark ? '#000000' : '#1f2937'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-4">
            <h5 className="text-xl font-[\'Pacifico\'] text-white">English Reader</h5>
          </div>
          <p style={{ color: isDark ? '#888888' : '#9ca3af' }}>
            2024 English Reader. 专注于人教版英语学习
          </p>
        </div>
      </div>
    </div>
  );
}

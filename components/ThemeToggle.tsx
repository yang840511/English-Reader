
'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 初始化主题
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemDark);
    
    setIsDark(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  // 更新主题 - 使用更深的黑色
  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.style.setProperty('--bg-primary', '#0a0a0a');
      document.documentElement.style.setProperty('--bg-secondary', '#1a1a1a');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#e5e5e5');
      document.documentElement.style.setProperty('--border-color', '#333333');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--bg-secondary', '#f9fafb');
      document.documentElement.style.setProperty('--text-primary', '#1f2937');
      document.documentElement.style.setProperty('--text-secondary', '#6b7280');
      document.documentElement.style.setProperty('--border-color', '#e5e7eb');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  // 切换主题
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    updateTheme(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center">
        <div className="w-6 h-6"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full shadow-lg border flex items-center justify-center hover:scale-110 transition-all duration-300"
      style={{
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        borderColor: isDark ? '#333333' : '#e5e7eb',
        color: isDark ? '#ffffff' : '#1f2937'
      }}
      aria-label="切换主题模式"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* 太阳图标 (亮色模式) */}
        <i 
          className={`ri-sun-line absolute transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
          style={{ color: '#eab308' }}
        ></i>
        
        {/* 月亮图标 (暗色模式) */}
        <i 
          className={`ri-moon-line absolute transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`}
          style={{ color: '#60a5fa' }}
        ></i>
      </div>
    </button>
  );
}

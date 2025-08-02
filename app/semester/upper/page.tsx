'use client';

import Link from 'next/link';
import ThemeToggle from '../../../components/ThemeToggle';

const units = [
  {
    id: 1,
    title: 'Unit 1',
    theme: 'How can I get there?',
    description: '学习问路和指路的表达方式',
    wordCount: 12,
    color: 'blue',
    topics: ['地点', '方向', '交通工具']
  },
  {
    id: 2,
    title: 'Unit 2',
    theme: 'Ways to go to school',
    description: '不同的上学方式和交通规则',
    wordCount: 15,
    color: 'green',
    topics: ['交通方式', '规则', '安全']
  },
  {
    id: 3,
    title: 'Unit 3',
    theme: 'My weekend plan',
    description: '制定周末计划和表达将来时',
    wordCount: 14,
    color: 'purple',
    topics: ['时间', '计划', '活动']
  },
  {
    id: 4,
    title: 'Unit 4',
    theme: 'I have a pen pal',
    description: '介绍笔友和爱好',
    wordCount: 16,
    color: 'orange',
    topics: ['爱好', '朋友', '兴趣']
  },
  {
    id: 5,
    title: 'Unit 5',
    theme: 'What does he do?',
    description: '询问和描述职业',
    wordCount: 13,
    color: 'red',
    topics: ['职业', '工作', '梦想']
  },
  {
    id: 6,
    title: 'Unit 6',
    theme: 'How do you feel?',
    description: '表达情感和感受',
    wordCount: 18,
    color: 'teal',
    topics: ['情绪', '感受', '建议']
  }
];

const colorClasses = {
  blue: {
    bg: 'from-blue-400 to-blue-600',
    text: 'text-blue-600',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200'
  },
  green: {
    bg: 'from-green-400 to-green-600',
    text: 'text-green-600',
    lightBg: 'bg-green-50',
    border: 'border-green-200'
  },
  purple: {
    bg: 'from-purple-400 to-purple-600',
    text: 'text-purple-600',
    lightBg: 'bg-purple-50',
    border: 'border-purple-200'
  },
  orange: {
    bg: 'from-orange-400 to-orange-600',
    text: 'text-orange-600',
    lightBg: 'bg-orange-50',
    border: 'border-orange-200'
  },
  red: {
    bg: 'from-red-400 to-red-600',
    text: 'text-red-600',
    lightBg: 'bg-red-50',
    border: 'border-red-200'
  },
  teal: {
    bg: 'from-teal-400 to-teal-600',
    text: 'text-teal-600',
    lightBg: 'bg-teal-50',
    border: 'border-teal-200'
  }
};

export default function UpperSemester() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <i className="ri-arrow-left-line w-6 h-6 text-gray-600 dark:text-gray-300"></i>
              <span className="text-gray-600 dark:text-gray-300">返回首页</span>
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-[\'Pacifico\'] text-indigo-600 dark:text-indigo-400">English Reader</h1>
              <p className="text-gray-600 dark:text-gray-300">六年级上册</p>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            人教版六年级英语上册
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            点击单元开始学习，掌握核心词汇和表达
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {units.map((unit) => {
            const colors = colorClasses[unit.color];
            return (
              <Link key={unit.id} href={`/unit/upper-${unit.id}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group border dark:border-gray-700">
                  {/* Unit Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold">{unit.id}</span>
                    </div>
                    <div className={`px-3 py-1 ${colors.lightBg} dark:bg-opacity-20 ${colors.text} dark:text-opacity-90 rounded-full text-sm font-medium`}>
                      {unit.wordCount} 个单词
                    </div>
                  </div>

                  {/* Unit Title */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {unit.title}
                  </h3>
                  <h4 className={`text-lg font-medium ${colors.text} dark:text-opacity-90 mb-3`}>
                    {unit.theme}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {unit.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {unit.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className={`px-2 py-1 ${colors.lightBg} dark:bg-opacity-20 ${colors.text} dark:text-opacity-90 rounded-md text-xs`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <i className="ri-volume-up-line w-4 h-4 mr-1"></i>
                        发音
                      </div>
                      <div className="flex items-center">
                        <i className="ri-translate-2 w-4 h-4 mr-1"></i>
                        运用
                      </div>
                    </div>
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${colors.bg} text-white rounded-full text-sm font-medium group-hover:shadow-md transition-all whitespace-nowrap`}>
                      开始学习
                      <i className="ri-arrow-right-line w-4 h-4 ml-2"></i>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            学习统计
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-300">个单元</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">88</div>
              <div className="text-gray-600 dark:text-gray-300">个单词</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">120</div>
              <div className="text-gray-600 dark:text-gray-300">个例句</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">标准发音</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

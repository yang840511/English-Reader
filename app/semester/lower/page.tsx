'use client';

import Link from 'next/link';
import ThemeToggle from '../../../components/ThemeToggle';

const units = [
  {
    id: 1,
    title: 'Unit 1',
    theme: 'How tall are you?',
    description: '学习比较级和描述身高体重',
    wordCount: 16,
    color: 'blue',
    topics: ['比较级', '身高', '体重', '年龄']
  },
  {
    id: 2,
    title: 'Unit 2',
    theme: 'Last weekend',
    description: '描述过去的活动和经历',
    wordCount: 18,
    color: 'green',
    topics: ['过去时', '周末活动', '时间表达']
  },
  {
    id: 3,
    title: 'Unit 3',
    theme: 'Where did you go?',
    description: '询问和描述旅行经历',
    wordCount: 20,
    color: 'purple',
    topics: ['旅行', '地点', '交通工具', '过去时']
  },
  {
    id: 4,
    title: 'Unit 4',
    theme: 'Then and now',
    description: '对比过去和现在的变化',
    wordCount: 22,
    color: 'orange',
    topics: ['过去与现在', '变化', '成长', '科技']
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
  }
};

export default function LowerSemester() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
              <h1 className="text-3xl font-[\'Pacifico\'] text-emerald-600 dark:text-emerald-400">English Reader</h1>
              <p className="text-gray-600 dark:text-gray-300">六年级下册</p>
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
            人教版六年级英语下册
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            进阶学习，掌握更多复杂的语言表达
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {units.map((unit) => {
            const colors = colorClasses[unit.color];
            return (
              <Link key={unit.id} href={`/unit/lower-${unit.id}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group border dark:border-gray-700">
                  {/* Unit Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-xl">{unit.id}</span>
                    </div>
                    <div className={`px-4 py-2 ${colors.lightBg} dark:bg-opacity-20 ${colors.text} dark:text-opacity-90 rounded-full text-sm font-medium`}>
                      {unit.wordCount} 个单词
                    </div>
                  </div>

                  {/* Unit Title */}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {unit.title}
                  </h3>
                  <h4 className={`text-xl font-medium ${colors.text} dark:text-opacity-90 mb-4`}>
                    {unit.theme}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {unit.description}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {unit.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-2 ${colors.lightBg} dark:bg-opacity-20 ${colors.text} dark:text-opacity-90 rounded-lg text-sm font-medium`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
                        <i className="ri-volume-up-line text-red-600 dark:text-red-400"></i>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">标准发音</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                        <i className="ri-translate-2 text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">词句运用</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                        <i className="ri-lightbulb-line text-purple-600 dark:text-purple-400"></i>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">发音技巧</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className={`w-full py-3 bg-gradient-to-r ${colors.bg} text-white rounded-xl text-center font-medium group-hover:shadow-md transition-all whitespace-nowrap`}>
                    <i className="ri-play-circle-line w-5 h-5 mr-2"></i>
                    开始学习
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            下册学习统计
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-300">个单元</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">76</div>
              <div className="text-gray-600 dark:text-gray-300">个单词</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">150</div>
              <div className="text-gray-600 dark:text-gray-300">个例句</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">进阶</div>
              <div className="text-gray-600 dark:text-gray-300">难度等级</div>
            </div>
          </div>
        </div>

        {/* Learning Tips */}
        <div className="mt-8 bg-gradient-to-r from-emerald-500 to-green-600 dark:from-emerald-600 dark:to-green-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">学习建议</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <i className="ri-check-line w-6 h-6 mt-1 flex-shrink-0"></i>
              <div>
                <h4 className="font-medium mb-1">循序渐进</h4>
                <p className="text-emerald-100 dark:text-emerald-200 text-sm">按单元顺序学习，掌握基础后再进阶</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="ri-check-line w-6 h-6 mt-1 flex-shrink-0"></i>
              <div>
                <h4 className="font-medium mb-1">多听多读</h4>
                <p className="text-emerald-100 dark:text-emerald-200 text-sm">反复点读练习，培养语感和正确发音</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// 人教版六年级英语单词数据库

export interface Word {
  id: string;
  word: string;
  phonetic: string;
  chinese: string;
  partOfSpeech: string;
  examples: Array<{
    english: string;
    chinese: string;
  }>;
  pronunciation: {
    tips: string[];
    audioUrl: string;
  };
  usage: {
    commonPhrases: string[];
    synonyms?: string[];
    antonyms?: string[];
  };
}

export interface Unit {
  id: string;
  title: string;
  theme: string;
  words: Word[];
}

export const upperSemesterData: Unit[] = [
  {
    id: 'upper-1',
    title: 'Unit 1',
    theme: 'How can I get there?',
    words: [
      {
        id: 'science',
        word: 'science',
        phonetic: '/ˈsaɪəns/',
        chinese: '科学',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'I love science class.',
            chinese: '我喜欢科学课。'
          },
          {
            english: 'Science is very interesting.',
            chinese: '科学很有趣。'
          }
        ],
        pronunciation: {
          tips: [
            '注意"sci"发音为/saɪ/',
            '重音在第一音节',
            'ence结尾发/əns/音'
          ],
          audioUrl: '/audio/science.mp3'
        },
        usage: {
          commonPhrases: ['science museum', 'science class', 'computer science'],
          synonyms: ['knowledge', 'study']
        }
      },
      {
        id: 'museum',
        word: 'museum',
        phonetic: '/mjuˈziːəm/',
        chinese: '博物馆',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'Where is the science museum?',
            chinese: '科学博物馆在哪里？'
          },
          {
            english: 'We went to the museum yesterday.',
            chinese: '我们昨天去了博物馆。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第二音节',
            'mu发/mjuː/音',
            'seum发/ziːəm/音'
          ],
          audioUrl: '/audio/museum.mp3'
        },
        usage: {
          commonPhrases: ['science museum', 'art museum', 'history museum']
        }
      },
      {
        id: 'post-office',
        word: 'post office',
        phonetic: '/ˈpəʊst ˈɒfɪs/',
        chinese: '邮局',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'The post office is next to the bank.',
            chinese: '邮局在银行旁边。'
          },
          {
            english: 'I need to go to the post office.',
            chinese: '我需要去邮局。'
          }
        ],
        pronunciation: {
          tips: [
            'post中o发/əʊ/音',
            'office重音在第一音节',
            '注意两个单词的连读'
          ],
          audioUrl: '/audio/post-office.mp3'
        },
        usage: {
          commonPhrases: ['go to the post office', 'near the post office']
        }
      },
      {
        id: 'bookstore',
        word: 'bookstore',
        phonetic: '/ˈbʊkstɔː(r)/',
        chinese: '书店',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'Is there a bookstore near here?',
            chinese: '这附近有书店吗？'
          },
          {
            english: 'I buy books at the bookstore.',
            chinese: '我在书店买书。'
          }
        ],
        pronunciation: {
          tips: [
            'book发/bʊk/音',
            'store发/stɔː/音',
            '是一个合成词'
          ],
          audioUrl: '/audio/bookstore.mp3'
        },
        usage: {
          commonPhrases: ['go to the bookstore', 'online bookstore']
        }
      },
      {
        id: 'cinema',
        word: 'cinema',
        phonetic: '/ˈsɪnəmə/',
        chinese: '电影院',
        partOfSpeech: 'n.',
        examples: [
          {
            english: "Let's go to the cinema tonight.",
            chinese: '今晚我们去电影院吧。'
          },
          {
            english: 'The cinema is behind the hospital.',
            chinese: '电影院在医院后面。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'ci发/sɪ/音',
            'nema发/nəmə/音'
          ],
          audioUrl: '/audio/cinema.mp3'
        },
        usage: {
          commonPhrases: ['go to the cinema', 'cinema ticket'],
          synonyms: ['movie theater', 'theater']
        }
      },
      {
        id: 'hospital',
        word: 'hospital',
        phonetic: '/ˈhɒspɪtl/',
        chinese: '医院',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'My mom works in a hospital.',
            chinese: '我妈妈在医院工作。'
          },
          {
            english: 'The hospital is across from the park.',
            chinese: '医院在公园对面。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'hos发/hɒs/音',
            '注意不要漏读pi'
          ],
          audioUrl: '/audio/hospital.mp3'
        },
        usage: {
          commonPhrases: ['go to hospital', "children's hospital"]
        }
      }
    ]
  },
  {
    id: 'upper-2',
    title: 'Unit 2',
    theme: 'Ways to go to school',
    words: [
      {
        id: 'on-foot',
        word: 'on foot',
        phonetic: '/ɒn fʊt/',
        chinese: '步行',
        partOfSpeech: 'adv.',
        examples: [
          {
            english: 'I go to school on foot.',
            chinese: '我步行去学校。'
          },
          {
            english: "It's good to go on foot.",
            chinese: '步行很好。'
          }
        ],
        pronunciation: {
          tips: [
            'on发/ɒn/音',
            'foot发/fʊt/音',
            '注意连读'
          ],
          audioUrl: '/audio/on-foot.mp3'
        },
        usage: {
          commonPhrases: ['go on foot', 'walk on foot'],
          synonyms: ['walk', 'walking']
        }
      },
      {
        id: 'by',
        word: 'by',
        phonetic: '/baɪ/',
        chinese: '乘坐',
        partOfSpeech: 'prep.',
        examples: [
          {
            english: 'I go to work by bus.',
            chinese: '我乘公交车去上班。'
          },
          {
            english: 'She travels by plane.',
            chinese: '她乘飞机旅行。'
          }
        ],
        pronunciation: {
          tips: [
            '发/baɪ/音，与buy同音',
            '是个短音节单词'
          ],
          audioUrl: '/audio/by.mp3'
        },
        usage: {
          commonPhrases: ['by bus', 'by car', 'by bike', 'by train']
        }
      },
      {
        id: 'bus',
        word: 'bus',
        phonetic: '/bʌs/',
        chinese: '公共汽车',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'The bus is coming.',
            chinese: '公交车来了。'
          },
          {
            english: 'I take the bus to school.',
            chinese: '我乘公交车去学校。'
          }
        ],
        pronunciation: {
          tips: [
            '发/bʌs/音',
            'u发短音/ʌ/',
            's发清音/s/'
          ],
          audioUrl: '/audio/bus.mp3'
        },
        usage: {
          commonPhrases: ['take the bus', "school bus", 'bus stop']
        }
      },
      {
        id: 'train',
        word: 'train',
        phonetic: '/treɪn/',
        chinese: '火车',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'The train is fast.',
            chinese: '火车很快。'
          },
          {
            english: 'We go by train.',
            chinese: '我们乘火车去。'
          }
        ],
        pronunciation: {
          tips: [
            'tr发/tr/音',
            'ai发/eɪ/音',
            'n发鼻音'
          ],
          audioUrl: '/audio/train.mp3'
        },
        usage: {
          commonPhrases: ['by train', 'train station', 'high-speed train']
        }
      }
    ]
  },
  {
    id: 'upper-3',
    title: 'Unit 3',
    theme: 'My weekend plan',
    words: [
      {
        id: 'visit',
        word: 'visit',
        phonetic: '/ˈvɪzɪt/',
        chinese: '拜访；参观',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I will visit my grandparents this weekend.',
            chinese: '这个周末我要去看望我的祖父母。'
          },
          {
            english: 'We are going to visit the museum.',
            chinese: '我们打算参观博物馆。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'vi发/vɪ/音',
            'sit发/zɪt/音'
          ],
          audioUrl: '/audio/visit.mp3'
        },
        usage: {
          commonPhrases: ['visit friends', 'visit a place', 'pay a visit'],
          synonyms: ['see', 'call on']
        }
      },
      {
        id: 'film',
        word: 'film',
        phonetic: '/fɪlm/',
        chinese: '电影',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'I want to see a film tonight.',
            chinese: '今晚我想看电影。'
          },
          {
            english: 'This film is very interesting.',
            chinese: '这部电影很有趣。'
          }
        ],
        pronunciation: {
          tips: [
            '发/fɪlm/音',
            'i发短音/ɪ/',
            'lm连读'
          ],
          audioUrl: '/audio/film.mp3'
        },
        usage: {
          commonPhrases: ['see a film', 'watch a film', 'action film'],
          synonyms: ['movie', 'picture']
        }
      },
      {
        id: 'see',
        word: 'see',
        phonetic: '/siː/',
        chinese: '看见',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I can see a bird in the tree.',
            chinese: '我能看见树上有只鸟。'
          },
          {
            english: 'Let me see your homework.',
            chinese: '让我看看你的作业。'
          }
        ],
        pronunciation: {
          tips: [
            '发长音/siː/',
            '与sea同音',
            '是不规则动词'
          ],
          audioUrl: '/audio/see.mp3'
        },
        usage: {
          commonPhrases: ['see a film', 'see you later', 'let me see'],
          synonyms: ['look at', 'watch']
        }
      },
      {
        id: 'trip',
        word: 'trip',
        phonetic: '/trɪp/',
        chinese: '旅行',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'We are going on a trip next week.',
            chinese: '下周我们要去旅行。'
          },
          {
            english: 'Did you enjoy your trip?',
            chinese: '你的旅行愉快吗？'
          }
        ],
        pronunciation: {
          tips: [
            'tr发/tr/音',
            'i发短音/ɪ/',
            'p发爆破音'
          ],
          audioUrl: '/audio/trip.mp3'
        },
        usage: {
          commonPhrases: ['go on a trip', 'school trip', 'business trip'],
          synonyms: ['journey', 'travel']
        }
      },
      {
        id: 'supermarket',
        word: 'supermarket',
        phonetic: '/ˈsuːpəmɑːkɪt/',
        chinese: '超市',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'My mom is shopping at the supermarket.',
            chinese: '我妈妈在超市购物。'
          },
          {
            english: 'The supermarket is near our house.',
            chinese: '超市离我们家很近。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'super发/suːpə/音',
            'market发/mɑːkɪt/音'
          ],
          audioUrl: '/audio/supermarket.mp3'
        },
        usage: {
          commonPhrases: ['go to the supermarket', 'supermarket shopping']
        }
      },
      {
        id: 'evening',
        word: 'evening',
        phonetic: '/ˈiːvnɪŋ/',
        chinese: '晚上；傍晚',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'I do my homework in the evening.',
            chinese: '我晚上做作业。'
          },
          {
            english: 'Good evening, teacher.',
            chinese: '老师，晚上好。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'eve发/iːv/音',
            'ning发/nɪŋ/音'
          ],
          audioUrl: '/audio/evening.mp3'
        },
        usage: {
          commonPhrases: ['in the evening', 'this evening', 'good evening'],
          synonyms: ['night']
        }
      },
      {
        id: 'tonight',
        word: 'tonight',
        phonetic: '/təˈnaɪt/',
        chinese: '在今晚',
        partOfSpeech: 'adv.',
        examples: [
          {
            english: 'We will have dinner together tonight.',
            chinese: '今晚我们一起吃晚饭。'
          },
          {
            english: 'Are you free tonight?',
            chinese: '你今晚有空吗？'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第二音节',
            'to发/tə/音',
            'night发/naɪt/音'
          ],
          audioUrl: '/audio/tonight.mp3'
        },
        usage: {
          commonPhrases: ['see you tonight', 'tonight show'],
          synonyms: ['this evening']
        }
      },
      {
        id: 'tomorrow',
        word: 'tomorrow',
        phonetic: '/təˈmɒrəʊ/',
        chinese: '明天',
        partOfSpeech: 'adv./n.',
        examples: [
          {
            english: 'Tomorrow is Saturday.',
            chinese: '明天是星期六。'
          },
          {
            english: 'I will call you tomorrow.',
            chinese: '我明天给你打电话。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第二音节',
            'to发/tə/音',
            'morrow发/mɒrəʊ/音'
          ],
          audioUrl: '/audio/tomorrow.mp3'
        },
        usage: {
          commonPhrases: ['see you tomorrow', 'tomorrow morning'],
          antonyms: ['yesterday']
        }
      },
      {
        id: 'next-week',
        word: 'next week',
        phonetic: '/nekst wiːk/',
        chinese: '下周',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'We will start next week.',
            chinese: '我们下周开始。'
          },
          {
            english: 'Next week is very busy.',
            chinese: '下周很忙。'
          }
        ],
        pronunciation: {
          tips: [
            'next发/nekst/音',
            'week发/wiːk/音',
            '注意连读'
          ],
          audioUrl: '/audio/next-week.mp3'
        },
        usage: {
          commonPhrases: ['next week Monday', 'see you next week']
        }
      }
    ]
  },
  {
    id: 'upper-4',
    title: 'Unit 4',
    theme: 'I have a pen pal',
    words: [
      {
        id: 'studies',
        word: 'studies',
        phonetic: '/ˈstʌdiz/',
        chinese: '学习',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'He studies Chinese every day.',
            chinese: '他每天学习中文。'
          },
          {
            english: 'My sister studies in Beijing.',
            chinese: '我姐姐在北京学习。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'stu发/stʌ/音',
            'dies发/diz/音'
          ],
          audioUrl: '/audio/studies.mp3'
        },
        usage: {
          commonPhrases: ['studies hard', 'studies Chinese']
        }
      },
      {
        id: 'puzzle',
        word: 'puzzle',
        phonetic: '/ˈpʌzl/',
        chinese: '谜；智力游戏',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'I like doing word puzzles.',
            chinese: '我喜欢做字谜游戏。'
          },
          {
            english: 'This puzzle is very difficult.',
            chinese: '这个谜很难。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'puz发/pʌz/音',
            'zle发/l/音'
          ],
          audioUrl: '/audio/puzzle.mp3'
        },
        usage: {
          commonPhrases: ['word puzzle', 'jigsaw puzzle']
        }
      },
      {
        id: 'hiking',
        word: 'hiking',
        phonetic: '/ˈhaɪkɪŋ/',
        chinese: '远足',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'I like going hiking.',
            chinese: '我喜欢去远足。'
          },
          {
            english: 'Hiking is good exercise.',
            chinese: '远足是很好的锻炼。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'hi发/haɪ/音',
            'king发/kɪŋ/音'
          ],
          audioUrl: '/audio/hiking.mp3'
        },
        usage: {
          commonPhrases: ['go hiking', 'hiking boots']
        }
      },
      {
        id: 'pen-pal',
        word: 'pen pal',
        phonetic: '/pen pæl/',
        chinese: '笔友',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'I have a pen pal in America.',
            chinese: '我有一个美国笔友。'
          },
          {
            english: 'Do you want to be my pen pal?',
            chinese: '你想做我的笔友吗？'
          }
        ],
        pronunciation: {
          tips: [
            'pen发/pen/音',
            'pal发/pæl/音',
            '两个单词分开发音'
          ],
          audioUrl: '/audio/pen-pal.mp3'
        },
        usage: {
          commonPhrases: ['have a pen pal', 'write to pen pal']
        }
      }
    ]
  },
  {
    id: 'upper-5',
    title: 'Unit 5',
    theme: 'What does he do?',
    words: [
      {
        id: 'factory-worker',
        word: 'factory worker',
        phonetic: '/ˈfæktəri ˈwɜːkə(r)/',
        chinese: '工厂工人',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'My father is a factory worker.',
            chinese: '我父亲是工厂工人。'
          },
          {
            english: 'Factory workers work very hard.',
            chinese: '工厂工人工作很辛苦。'
          }
        ],
        pronunciation: {
          tips: [
            'factory重音在第一音节',
            'worker重音在第一音节',
            '注意连读'
          ],
          audioUrl: '/audio/factory-worker.mp3'
        },
        usage: {
          commonPhrases: ['be a factory worker', 'factory workers']
        }
      },
      {
        id: 'postman',
        word: 'postman',
        phonetic: '/ˈpəʊstmən/',
        chinese: '邮递员',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'The postman brings letters.',
            chinese: '邮递员送信件。'
          },
          {
            english: 'Our postman is very friendly.',
            chinese: '我们的邮递员很友好。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'post发/pəʊst/音',
            'man发/mən/音'
          ],
          audioUrl: '/audio/postman.mp3'
        },
        usage: {
          commonPhrases: ['the postman comes', 'friendly postman']
        }
      },
      {
        id: 'businessman',
        word: 'businessman',
        phonetic: '/ˈbɪznɪsmən/',
        chinese: '商人',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'He is a successful businessman.',
            chinese: '他是一个成功的商人。'
          },
          {
            english: 'The businessman travels a lot.',
            chinese: '这个商人经常出差。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'business发/bɪznɪs/音',
            'man发/mən/音'
          ],
          audioUrl: '/audio/businessman.mp3'
        },
        usage: {
          commonPhrases: ['successful businessman', 'young businessman']
        }
      },
      {
        id: 'police-officer',
        word: 'police officer',
        phonetic: '/pəˈliːs ˈɒfɪsə(r)/',
        chinese: '警察',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'The police officer helps people.',
            chinese: '警察帮助人们。'
          },
          {
            english: 'My uncle is a police officer.',
            chinese: '我叔叔是警察。'
          }
        ],
        pronunciation: {
          tips: [
            'police重音在第二音节',
            'officer重音在第一音节',
            '注意连读'
          ],
          audioUrl: '/audio/police-officer.mp3'
        },
        usage: {
          commonPhrases: ['police officer on duty', 'ask the police officer']
        }
      }
    ]
  },
  {
    id: 'upper-6',
    title: 'Unit 6',
    theme: 'How do you feel?',
    words: [
      {
        id: 'angry',
        word: 'angry',
        phonetic: '/ˈæŋɡri/',
        chinese: '生气的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'Why are you angry?',
            chinese: '你为什么生气？'
          },
          {
            english: 'My mom is angry with me.',
            chinese: '我妈妈对我很生气。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'ang发/æŋ/音',
            'ry发/ri/音'
          ],
          audioUrl: '/audio/angry.mp3'
        },
        usage: {
          commonPhrases: ['be angry with', 'get angry'],
          antonyms: ['happy', 'pleased']
        }
      },
      {
        id: 'afraid',
        word: 'afraid',
        phonetic: '/əˈfreɪd/',
        chinese: '害怕的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: "Don't be afraid.",
            chinese: '不要害怕。'
          },
          {
            english: 'I am afraid of dogs.',
            chinese: '我害怕狗。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第二音节',
            'a发/ə/音',
            'fraid发/freɪd/音'
          ],
          audioUrl: '/audio/afraid.mp3'
        },
        usage: {
          commonPhrases: ["don't be afraid", 'afraid of'],
          synonyms: ['scared', 'frightened']
        }
      },
      {
        id: 'sad',
        word: 'sad',
        phonetic: '/sæd/',
        chinese: '难过的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'She looks very sad today.',
            chinese: '她今天看起来很难过。'
          },
          {
            english: 'Why are you so sad?',
            chinese: '你为什么这么难过？'
          }
        ],
        pronunciation: {
          tips: [
            '发短音/sæd/',
            'a发/æ/音',
            'd发清音'
          ],
          audioUrl: '/audio/sad.mp3'
        },
        usage: {
          commonPhrases: ['feel sad', 'look sad'],
          antonyms: ['happy', 'glad']
        }
      },
      {
        id: 'worried',
        word: 'worried',
        phonetic: '/ˈwʌrid/',
        chinese: '担心的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'My mother is worried about me.',
            chinese: '我妈妈为我担心。'
          },
          {
            english: "Don't be worried.",
            chinese: '不要担心。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'wor发/wʌr/音',
            'ried发/id/音'
          ],
          audioUrl: '/audio/worried.mp3'
        },
        usage: {
          commonPhrases: ['be worried about', 'look worried'],
          synonyms: ['concerned', 'anxious']
        }
      },
      {
        id: 'happy',
        word: 'happy',
        phonetic: '/ˈhæpi/',
        chinese: '高兴的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'I am very happy today.',
            chinese: '我今天很高兴。'
          },
          {
            english: 'Happy birthday to you!',
            chinese: '祝你生日快乐！'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'hap发/hæp/音',
            'py发/pi/音'
          ],
          audioUrl: '/audio/happy.mp3'
        },
        usage: {
          commonPhrases: ['be happy', 'happy birthday', 'feel happy'],
          antonyms: ['sad', 'unhappy']
        }
      }
    ]
  }
];

export const lowerSemesterData: Unit[] = [
  {
    id: 'lower-1',
    title: 'Unit 1',
    theme: 'How tall are you?',
    words: [
      {
        id: 'younger',
        word: 'younger',
        phonetic: '/ˈjʌŋɡə(r)/',
        chinese: '更年轻的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'My sister is younger than me.',
            chinese: '我妹妹比我年轻。'
          },
          {
            english: 'Tom is younger than John.',
            chinese: '汤姆比约翰年轻。'
          }
        ],
        pronunciation: {
          tips: [
            'young发/jʌŋ/音',
            'er表示比较级',
            '重音在第一音节'
          ],
          audioUrl: '/audio/younger.mp3'
        },
        usage: {
          commonPhrases: ['younger than', 'younger brother', 'younger sister'],
          antonyms: ['older', 'elder']
        }
      },
      {
        id: 'older',
        word: 'older',
        phonetic: '/ˈəʊldə(r)/',
        chinese: '更年长的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'He is older than his brother.',
            chinese: '他比他弟弟年长。'
          },
          {
            english: 'I am two years older.',
            chinese: '我大两岁。'
          }
        ],
        pronunciation: {
          tips: [
            'old发/əʊld/音',
            'er表示比较级',
            '注意/əʊ/的发音'
          ],
          audioUrl: '/audio/older.mp3'
        },
        usage: {
          commonPhrases: ['older than', 'older brother', 'older sister'],
          antonyms: ['younger']
        }
      },
      {
        id: 'taller',
        word: 'taller',
        phonetic: '/ˈtɔːlə(r)/',
        chinese: '更高的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'I am taller than you.',
            chinese: '我比你高。'
          },
          {
            english: 'The tree is getting taller.',
            chinese: '这棵树越来越高。'
          }
        ],
        pronunciation: {
          tips: [
            'tall发/tɔːl/音',
            'er表示比较级',
            'a发长音/ɔː/'
          ],
          audioUrl: '/audio/taller.mp3'
        },
        usage: {
          commonPhrases: ['taller than', 'much taller', 'a little taller'],
          antonyms: ['shorter']
        }
      },
      {
        id: 'shorter',
        word: 'shorter',
        phonetic: '/ˈʃɔːtə(r)/',
        chinese: '更矮的；更短的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'This pencil is shorter.',
            chinese: '这支铅笔更短。'
          },
          {
            english: 'She is shorter than her sister.',
            chinese: '她比她姐姐矮。'
          }
        ],
        pronunciation: {
          tips: [
            'sh发/ʃ/音',
            'or发/ɔː/音',
            '注意双重含义'
          ],
          audioUrl: '/audio/shorter.mp3'
        },
        usage: {
          commonPhrases: ['shorter than', 'much shorter', 'a bit shorter'],
          antonyms: ['taller', 'longer']
        }
      },
      {
        id: 'longer',
        word: 'longer',
        phonetic: '/ˈlɒŋɡə(r)/',
        chinese: '更长的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'This ruler is longer than that one.',
            chinese: '这把尺子比那把长。'
          },
          {
            english: 'The days are getting longer.',
            chinese: '白天越来越长。'
          }
        ],
        pronunciation: {
          tips: [
            'long发/lɒŋ/音',
            'er表示比较级',
            '注意鼻音/ŋ/'
          ],
          audioUrl: '/audio/longer.mp3'
        },
        usage: {
          commonPhrases: ['longer than', 'much longer', 'a bit longer'],
          antonyms: ['shorter']
        }
      },
      {
        id: 'thinner',
        word: 'thinner',
        phonetic: '/ˈθɪnə(r)/',
        chinese: '更瘦的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'He is thinner than his brother.',
            chinese: '他比他哥哥瘦。'
          },
          {
            english: 'This book is thinner.',
            chinese: '这本书更薄。'
          }
        ],
        pronunciation: {
          tips: [
            'th发/θ/音',
            'in发/ɪn/音',
            '注意双写n'
          ],
          audioUrl: '/audio/thinner.mp3'
        },
        usage: {
          commonPhrases: ['thinner than', 'much thinner'],
          antonyms: ['fatter', 'thicker']
        }
      },
      {
        id: 'heavier',
        word: 'heavier',
        phonetic: '/ˈhevɪə(r)/',
        chinese: '更重的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'This box is heavier than that one.',
            chinese: '这个箱子比那个重。'
          },
          {
            english: 'The elephant is much heavier.',
            chinese: '大象重得多。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'hea发/hev/音',
            'vier发/vɪə/音'
          ],
          audioUrl: '/audio/heavier.mp3'
        },
        usage: {
          commonPhrases: ['heavier than', 'much heavier'],
          antonyms: ['lighter']
        }
      },
      {
        id: 'bigger',
        word: 'bigger',
        phonetic: '/ˈbɪɡə(r)/',
        chinese: '更大的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'The tiger is bigger than the cat.',
            chinese: '老虎比猫大。'
          },
          {
            english: 'I need a bigger bag.',
            chinese: '我需要一个更大的包。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'big发/bɪg/音',
            '注意双写g'
          ],
          audioUrl: '/audio/bigger.mp3'
        },
        usage: {
          commonPhrases: ['bigger than', 'much bigger', 'a bit bigger'],
          antonyms: ['smaller']
        }
      },
      {
        id: 'smaller',
        word: 'smaller',
        phonetic: '/ˈsmɔːlə(r)/',
        chinese: '更小的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'My room is smaller than yours.',
            chinese: '我的房间比你的小。'
          },
          {
            english: 'This phone is smaller.',
            chinese: '这个手机更小。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'small发/smɔːl/音',
            'a发长音/ɔː/'
          ],
          audioUrl: '/audio/smaller.mp3'
        },
        usage: {
          commonPhrases: ['smaller than', 'much smaller'],
          antonyms: ['bigger', 'larger']
        }
      },
      {
        id: 'stronger',
        word: 'stronger',
        phonetic: '/ˈstrɒŋɡə(r)/',
        chinese: '更强壮的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'Mike is stronger than Tom.',
            chinese: '迈克比汤姆强壮。'
          },
          {
            english: 'Exercise makes you stronger.',
            chinese: '锻炼让你更强壮。'
          }
        ],
        pronunciation: {
          tips: [
            'str发/str/音',
            'ong发/ɒŋ/音',
            '注意鼻音/ŋ/'
          ],
          audioUrl: '/audio/stronger.mp3'
        },
        usage: {
          commonPhrases: ['stronger than', 'much stronger', 'get stronger'],
          antonyms: ['weaker']
        }
      }
    ]
  },
  {
    id: 'lower-2',
    title: 'Unit 2',
    theme: 'Last weekend',
    words: [
      {
        id: 'cleaned',
        word: 'cleaned',
        phonetic: '/kliːnd/',
        chinese: '打扫（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I cleaned my room yesterday.',
            chinese: '我昨天打扫了我的房间。'
          },
          {
            english: 'She cleaned the windows last weekend.',
            chinese: '她上周末擦了窗户。'
          }
        ],
        pronunciation: {
          tips: [
            'clean发/kliːn/音',
            'ed发/d/音',
            '注意过去式变化'
          ],
          audioUrl: '/audio/cleaned.mp3'
        },
        usage: {
          commonPhrases: ['cleaned my room', 'cleaned the house', 'cleaned up'],
          synonyms: ['tidied', 'swept']
        }
      },
      {
        id: 'stayed',
        word: 'stayed',
        phonetic: '/steɪd/',
        chinese: '停留；待（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I stayed at home last Sunday.',
            chinese: '上周日我待在家里。'
          },
          {
            english: 'We stayed in the hotel for three days.',
            chinese: '我们在酒店住了三天。'
          }
        ],
        pronunciation: {
          tips: [
            'stay发/steɪ/音',
            'ed发/d/音',
            'ai发/eɪ/音'
          ],
          audioUrl: '/audio/stayed.mp3'
        },
        usage: {
          commonPhrases: ['stayed at home', 'stayed in bed', 'stayed up late']
        }
      },
      {
        id: 'washed',
        word: 'washed',
        phonetic: '/wɒʃt/',
        chinese: '洗（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I washed my clothes yesterday.',
            chinese: '我昨天洗了衣服。'
          },
          {
            english: 'He washed his hands before dinner.',
            chinese: '他饭前洗了手。'
          }
        ],
        pronunciation: {
          tips: [
            'wash发/wɒʃ/音',
            'ed发/t/音',
            '注意清音结尾'
          ],
          audioUrl: '/audio/washed.mp3'
        },
        usage: {
          commonPhrases: ['washed clothes', 'washed hands', 'washed dishes'],
          synonyms: ['cleaned']
        }
      },
      {
        id: 'watched',
        word: 'watched',
        phonetic: '/wɒtʃt/',
        chinese: '观看（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I watched TV last night.',
            chinese: '我昨晚看了电视。'
          },
          {
            english: 'We watched a movie together.',
            chinese: '我们一起看了电影。'
          }
        ],
        pronunciation: {
          tips: [
            'watch发/wɒtʃ/音',
            'ed发/t/音',
            'tch发/tʃ/音'
          ],
          audioUrl: '/audio/watched.mp3'
        },
        usage: {
          commonPhrases: ['watched TV', 'watched a movie', 'watched the game'],
          synonyms: ['viewed', 'observed']
        }
      },
      {
        id: 'had',
        word: 'had',
        phonetic: '/hæd/',
        chinese: '有；吃（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I had a cold last week.',
            chinese: '我上周感冒了。'
          },
          {
            english: 'We had lunch at 12 oclock.',
            chinese: '我们12点吃了午饭。'
          }
        ],
        pronunciation: {
          tips: [
            '发/hæd/音',
            'a发短音/æ/',
            '是have的过去式'
          ],
          audioUrl: '/audio/had.mp3'
        },
        usage: {
          commonPhrases: ['had breakfast', 'had a cold', 'had fun'],
          synonyms: ['possessed', 'ate']
        }
      },
      {
        id: 'had-a-cold',
        word: 'had a cold',
        phonetic: '/hæd ə kəʊld/',
        chinese: '感冒了',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'I had a cold yesterday.',
            chinese: '我昨天感冒了。'
          },
          {
            english: 'She had a bad cold last week.',
            chinese: '她上周重感冒了。'
          }
        ],
        pronunciation: {
          tips: [
            'had发/hæd/音',
            'cold发/kəʊld/音',
            '注意连读'
          ],
          audioUrl: '/audio/had-a-cold.mp3'
        },
        usage: {
          commonPhrases: ['had a bad cold', 'had a cold yesterday'],
          synonyms: ['caught a cold']
        }
      },
      {
        id: 'slept',
        word: 'slept',
        phonetic: '/slept/',
        chinese: '睡觉（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I slept for 8 hours last night.',
            chinese: '我昨晚睡了8个小时。'
          },
          {
            english: 'The baby slept well.',
            chinese: '宝宝睡得很好。'
          }
        ],
        pronunciation: {
          tips: [
            '发/slept/音',
            'e发短音/e/',
            '是sleep的过去式'
          ],
          audioUrl: '/audio/slept.mp3'
        },
        usage: {
          commonPhrases: ['slept well', 'slept late', 'slept for hours'],
          synonyms: ['dozed', 'rested']
        }
      },
      {
        id: 'read',
        word: 'read',
        phonetic: '/red/',
        chinese: '读；阅读（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I read a book last Sunday.',
            chinese: '我上周日读了一本书。'
          },
          {
            english: 'She read the newspaper this morning.',
            chinese: '她今天早上看了报纸。'
          }
        ],
        pronunciation: {
          tips: [
            '过去式发/red/音',
            '与red同音',
            '原形发/riːd/音'
          ],
          audioUrl: '/audio/read-past.mp3'
        },
        usage: {
          commonPhrases: ['read a book', 'read the news', 'read stories'],
          synonyms: ['studied', 'perused']
        }
      },
      {
        id: 'saw',
        word: 'saw',
        phonetic: '/sɔː/',
        chinese: '看见（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I saw a film yesterday.',
            chinese: '我昨天看了一部电影。'
          },
          {
            english: 'We saw many animals at the zoo.',
            chinese: '我们在动物园看到了很多动物。'
          }
        ],
        pronunciation: {
          tips: [
            '发/sɔː/音',
            '是see的过去式',
            'a发长音/ɔː/'
          ],
          audioUrl: '/audio/saw.mp3'
        },
        usage: {
          commonPhrases: ['saw a film', 'saw friends', 'saw the doctor'],
          synonyms: ['witnessed', 'observed']
        }
      },
      {
        id: 'last',
        word: 'last',
        phonetic: '/lɑːst/',
        chinese: '上一个的；最后的',
        partOfSpeech: 'adj.',
        examples: [
          {
            english: 'I went to Beijing last week.',
            chinese: '我上周去了北京。'
          },
          {
            english: 'This is the last question.',
            chinese: '这是最后一个问题。'
          }
        ],
        pronunciation: {
          tips: [
            '发/lɑːst/音',
            'a发长音/ɑː/',
            'st连读'
          ],
          audioUrl: '/audio/last.mp3'
        },
        usage: {
          commonPhrases: ['last week', 'last year', 'last night', 'at last'],
          antonyms: ['first', 'next']
        }
      },
      {
        id: 'yesterday',
        word: 'yesterday',
        phonetic: '/ˈjestədeɪ/',
        chinese: '昨天',
        partOfSpeech: 'adv./n.',
        examples: [
          {
            english: 'I did my homework yesterday.',
            chinese: '我昨天做了作业。'
          },
          {
            english: 'Yesterday was Sunday.',
            chinese: '昨天是星期日。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'yes发/jes/音',
            'terday发/tədeɪ/音'
          ],
          audioUrl: '/audio/yesterday.mp3'
        },
        usage: {
          commonPhrases: ['yesterday morning', 'yesterday evening'],
          antonyms: ['tomorrow', 'today']
        }
      },
      {
        id: 'before',
        word: 'before',
        phonetic: '/bɪˈfɔː(r)/',
        chinese: '在...之前',
        partOfSpeech: 'prep./adv.',
        examples: [
          {
            english: 'I brush my teeth before breakfast.',
            chinese: '我早饭前刷牙。'
          },
          {
            english: 'Have you been here before?',
            chinese: '你以前来过这里吗？'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第二音节',
            'be发/bɪ/音',
            'fore发/fɔː/音'
          ],
          audioUrl: '/audio/before.mp3'
        },
        usage: {
          commonPhrases: ['before dinner', 'before school', 'long before'],
          antonyms: ['after']
        }
      }
    ]
  },
  {
    id: 'lower-3',
    title: 'Unit 3',
    theme: 'Where did you go?',
    words: [
      {
        id: 'went',
        word: 'went',
        phonetic: '/went/',
        chinese: '去（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I went to the park yesterday.',
            chinese: '我昨天去了公园。'
          },
          {
            english: 'We went shopping last weekend.',
            chinese: '我们上周末去购物了。'
          }
        ],
        pronunciation: {
          tips: [
            '发/went/音',
            '是go的过去式',
            'e发短音/e/'
          ],
          audioUrl: '/audio/went.mp3'
        },
        usage: {
          commonPhrases: ['went to school', 'went shopping', 'went home'],
          synonyms: ['traveled', 'moved']
        }
      },
      {
        id: 'camp',
        word: 'camp',
        phonetic: '/kæmp/',
        chinese: '野营',
        partOfSpeech: 'n./v.',
        examples: [
          {
            english: 'We went to camp last summer.',
            chinese: '我们去年夏天去野营了。'
          },
          {
            english: 'The children love summer camp.',
            chinese: '孩子们喜欢夏令营。'
          }
        ],
        pronunciation: {
          tips: [
            '发/kæmp/音',
            'a发短音/æ/',
            'mp连读'
          ],
          audioUrl: '/audio/camp.mp3'
        },
        usage: {
          commonPhrases: ['summer camp', 'go camping', 'camp fire'],
          synonyms: ['camping']
        }
      },
      {
        id: 'went-camping',
        word: 'went camping',
        phonetic: '/went ˈkæmpɪŋ/',
        chinese: '去野营了',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'We went camping in the mountains.',
            chinese: '我们去山里野营了。'
          },
          {
            english: 'My family went camping last month.',
            chinese: '我家人上个月去野营了。'
          }
        ],
        pronunciation: {
          tips: [
            'went发/went/音',
            'camping发/kæmpɪŋ/音',
            '注意连读'
          ],
          audioUrl: '/audio/went-camping.mp3'
        },
        usage: {
          commonPhrases: ['went camping together', 'went camping last weekend']
        }
      },
      {
        id: 'went-fishing',
        word: 'went fishing',
        phonetic: '/went ˈfɪʃɪŋ/',
        chinese: '去钓鱼了',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'My dad and I went fishing.',
            chinese: '我和爸爸去钓鱼了。'
          },
          {
            english: 'They went fishing by the lake.',
            chinese: '他们去湖边钓鱼了。'
          }
        ],
        pronunciation: {
          tips: [
            'went发/went/音',
            'fishing发/fɪʃɪŋ/音',
            'sh发/ʃ/音'
          ],
          audioUrl: '/audio/went-fishing.mp3'
        },
        usage: {
          commonPhrases: ['went fishing early', 'went fishing together']
        }
      },
      {
        id: 'rode',
        word: 'rode',
        phonetic: '/rəʊd/',
        chinese: '骑（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I rode a bike to school.',
            chinese: '我骑自行车去学校。'
          },
          {
            english: 'She rode a horse yesterday.',
            chinese: '她昨天骑了马。'
          }
        ],
        pronunciation: {
          tips: [
            '发/rəʊd/音',
            '是ride的过去式',
            'o发/əʊ/音'
          ],
          audioUrl: '/audio/rode.mp3'
        },
        usage: {
          commonPhrases: ['rode a bike', 'rode a horse', 'rode the bus'],
          synonyms: ['traveled on']
        }
      },
      {
        id: 'rode-a-bike',
        word: 'rode a bike',
        phonetic: '/rəʊd ə baɪk/',
        chinese: '骑自行车了',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'I rode a bike in the park.',
            chinese: '我在公园里骑了自行车。'
          },
          {
            english: 'We rode a bike together.',
            chinese: '我们一起骑自行车。'
          }
        ],
        pronunciation: {
          tips: [
            'rode发/rəʊd/音',
            'bike发/baɪk/音',
            '注意连读'
          ],
          audioUrl: '/audio/rode-a-bike.mp3'
        },
        usage: {
          commonPhrases: ['rode a bike to school', 'rode a bike in the park']
        }
      },
      {
        id: 'rode-a-horse',
        word: 'rode a horse',
        phonetic: '/rəʊd ə hɔːs/',
        chinese: '骑马了',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'I rode a horse for the first time.',
            chinese: '我第一次骑马。'
          },
          {
            english: 'She rode a horse on the farm.',
            chinese: '她在农场骑了马。'
          }
        ],
        pronunciation: {
          tips: [
            'rode发/rəʊd/音',
            'horse发/hɔːs/音',
            '注意h不发音'
          ],
          audioUrl: '/audio/rode-a-horse.mp3'
        },
        usage: {
          commonPhrases: ['rode a horse slowly', 'rode a horse carefully']
        }
      },
      {
        id: 'hurt',
        word: 'hurt',
        phonetic: '/hɜːt/',
        chinese: '受伤',
        partOfSpeech: 'v./adj.',
        examples: [
          {
            english: 'I hurt my foot yesterday.',
            chinese: '我昨天脚受伤了。'
          },
          {
            english: 'My leg hurts.',
            chinese: '我的腿疼。'
          }
        ],
        pronunciation: {
          tips: [
            '发/hɜːt/音',
            'ur发/ɜː/音',
            '原形和过去式相同'
          ],
          audioUrl: '/audio/hurt.mp3'
        },
        usage: {
          commonPhrases: ['hurt my foot', 'get hurt', 'hurt badly'],
          synonyms: ['injured', 'painful']
        }
      },
      {
        id: 'ate',
        word: 'ate',
        phonetic: '/eɪt/',
        chinese: '吃（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I ate fresh food yesterday.',
            chinese: '我昨天吃了新鲜食物。'
          },
          {
            english: 'We ate dinner at 7 oclock.',
            chinese: '我们7点吃了晚饭。'
          }
        ],
        pronunciation: {
          tips: [
            '发/eɪt/音',
            '是eat的过去式',
            '与eight同音'
          ],
          audioUrl: '/audio/ate.mp3'
        },
        usage: {
          commonPhrases: ['ate breakfast', 'ate too much', 'ate fresh food'],
          synonyms: ['consumed', 'devoured']
        }
      },
      {
        id: 'ate-fresh-food',
        word: 'ate fresh food',
        phonetic: '/eɪt freʃ fuːd/',
        chinese: '吃了新鲜食物',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'We ate fresh food at the farm.',
            chinese: '我们在农场吃了新鲜食物。'
          },
          {
            english: 'I ate fresh food every day.',
            chinese: '我每天都吃新鲜食物。'
          }
        ],
        pronunciation: {
          tips: [
            'ate发/eɪt/音',
            'fresh发/freʃ/音',
            'food发/fuːd/音'
          ],
          audioUrl: '/audio/ate-fresh-food.mp3'
        },
        usage: {
          commonPhrases: ['ate fresh food daily', 'ate fresh food together']
        }
      },
      {
        id: 'took',
        word: 'took',
        phonetic: '/tʊk/',
        chinese: '拍照；带走（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I took pictures in the park.',
            chinese: '我在公园里拍了照片。'
          },
          {
            english: 'She took my book yesterday.',
            chinese: '她昨天拿走了我的书。'
          }
        ],
        pronunciation: {
          tips: [
            '发/tʊk/音',
            '是take的过去式',
            'oo发短音/ʊ/'
          ],
          audioUrl: '/audio/took.mp3'
        },
        usage: {
          commonPhrases: ['took pictures', 'took a bus', 'took care of'],
          synonyms: ['captured', 'carried']
        }
      },
      {
        id: 'took-pictures',
        word: 'took pictures',
        phonetic: '/tʊk ˈpɪktʃəz/',
        chinese: '拍照片了',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'We took pictures at the beach.',
          chinese: '我们在海滩拍了照片。'
          },
          {
            english: 'I took pictures of my friends.',
            chinese: '我给朋友们拍了照片。'
          }
        ],
        pronunciation: {
          tips: [
            'took发/tʊk/音',
            'pictures发/pɪktʃəz/音',
            '注意复数s发/z/音'
          ],
          audioUrl: '/audio/took-pictures.mp3'
        },
        usage: {
          commonPhrases: ['took many pictures', 'took beautiful pictures']
        }
      },
      {
        id: 'bought',
        word: 'bought',
        phonetic: '/bɔːt/',
        chinese: '买（过去式）',
        partOfSpeech: 'v.',
        examples: [
          {
            english: 'I bought gifts for my family.',
            chinese: '我给家人买了礼物。'
          },
          {
            english: 'She bought a new dress.',
            chinese: '她买了一条新裙子。'
          }
        ],
        pronunciation: {
          tips: [
            '发/bɔːt/音',
            '是buy的过去式',
            'ough发/ɔː/音'
          ],
          audioUrl: '/audio/bought.mp3'
        },
        usage: {
          commonPhrases: ['bought gifts', 'bought food', 'bought online'],
          synonyms: ['purchased', 'acquired']
        }
      },
      {
        id: 'bought-gifts',
        word: 'bought gifts',
        phonetic: '/bɔːt ɡɪfts/',
        chinese: '买了礼物',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'I bought gifts for my parents.',
            chinese: '我给父母买了礼物。'
          },
          {
            english: 'We bought gifts at the shop.',
            chinese: '我们在商店买了礼物。'
          }
        ],
        pronunciation: {
          tips: [
            'bought发/bɔːt/音',
            'gifts发/ɡɪfts/音',
            '注意复数s发/s/音'
          ],
          audioUrl: '/audio/bought-gifts.mp3'
        },
        usage: {
          commonPhrases: ['bought many gifts', 'bought special gifts']
        }
      }
    ]
  },
  {
    id: 'lower-4',
    title: 'Unit 4',
    theme: 'Then and now',
    words: [
      {
        id: 'dining-hall',
        word: 'dining hall',
        phonetic: '/ˈdaɪnɪŋ hɔːl/',
        chinese: '饭厅',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'We eat lunch in the dining hall.',
            chinese: '我们在饭厅吃午饭。'
          },
          {
            english: 'The dining hall is very big.',
            chinese: '饭厅很大。'
          }
        ],
        pronunciation: {
          tips: [
            'dining发/daɪnɪŋ/音',
            'hall发/hɔːl/音',
            '注意连读'
          ],
          audioUrl: '/audio/dining-hall.mp3'
        },
        usage: {
          commonPhrases: ['school dining hall', 'eat in the dining hall']
        }
      },
      {
        id: 'grass',
        word: 'grass',
        phonetic: '/ɡrɑːs/',
        chinese: '草坪',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'The grass is green.',
            chinese: '草坪是绿色的。'
          },
          {
            english: 'Children play on the grass.',
            chinese: '孩子们在草坪上玩。'
          }
        ],
        pronunciation: {
          tips: [
            'gr发/ɡr/音',
            'a发长音/ɑː/',
            'ss发/s/音'
          ],
          audioUrl: '/audio/grass.mp3'
        },
        usage: {
          commonPhrases: ['green grass', 'play on the grass', 'cut the grass']
        }
      },
      {
        id: 'gym',
        word: 'gym',
        phonetic: '/dʒɪm/',
        chinese: '体育馆',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'We play basketball in the gym.',
            chinese: '我们在体育馆打篮球。'
          },
          {
            english: 'The gym is next to the library.',
            chinese: '体育馆在图书馆旁边。'
          }
        ],
        pronunciation: {
          tips: [
            '发/dʒɪm/音',
            'g发/dʒ/音',
            'y发/ɪ/音'
          ],
          audioUrl: '/audio/gym.mp3'
        },
        usage: {
          commonPhrases: ['go to the gym', 'school gym', 'gym class']
        }
      },
      {
        id: 'ago',
        word: 'ago',
        phonetic: '/əˈɡəʊ/',
        chinese: '以前',
        partOfSpeech: 'adv.',
        examples: [
          {
            english: 'I went there two years ago.',
            chinese: '我两年前去过那里。'
          },
          {
            english: 'Long long ago, there was a king.',
            chinese: '很久很久以前，有一个国王。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第二音节',
            'a发/ə/音',
            'go发/ɡəʊ/音'
          ],
          audioUrl: '/audio/ago.mp3'
        },
        usage: {
          commonPhrases: ['years ago', 'months ago', 'long ago']
        }
      },
      {
        id: 'cycling',
        word: 'cycling',
        phonetic: '/ˈsaɪklɪŋ/',
        chinese: '骑自行车运动',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'I like cycling in the park.',
            chinese: '我喜欢在公园里骑自行车。'
          },
          {
            english: 'Cycling is good exercise.',
            chinese: '骑自行车是很好的锻炼。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'cy发/saɪ/音',
            'cling发/klɪŋ/音'
          ],
          audioUrl: '/audio/cycling.mp3'
        },
        usage: {
          commonPhrases: ['go cycling', 'like cycling', 'cycling race']
        }
      },
      {
        id: 'go-cycling',
        word: 'go cycling',
        phonetic: '/ɡəʊ ˈsaɪklɪŋ/',
        chinese: '去骑自行车',
        partOfSpeech: 'phrase',
        examples: [
          {
            english: 'We go cycling every weekend.',
            chinese: '我们每个周末都去骑自行车。'
          },
          {
            english: 'Do you want to go cycling?',
            chinese: '你想去骑自行车吗？'
          }
        ],
        pronunciation: {
          tips: [
            'go发/ɡəʊ/音',
            'cycling发/saɪklɪŋ/音',
            '注意连读'
          ],
          audioUrl: '/audio/go-cycling.mp3'
        },
        usage: {
          commonPhrases: ['go cycling together', 'go cycling in the park']
        }
      },
      {
        id: 'ice-skate',
        word: 'ice-skate',
        phonetic: '/ˈaɪs skeɪt/',
        chinese: '滑冰',
        partOfSpeech: 'v./n.',
        examples: [
          {
            english: 'I can ice-skate very well.',
            chinese: '我滑冰滑得很好。'
          },
          {
            english: 'We went ice-skating yesterday.',
            chinese: '我们昨天去滑冰了。'
          }
        ],
        pronunciation: {
          tips: [
            'ice发/aɪs/音',
            'skate发/skeɪt/音',
            '注意连字符'
          ],
          audioUrl: '/audio/ice-skate.mp3'
        },
        usage: {
          commonPhrases: ['go ice-skating', 'learn to ice-skate']
        }
      },
      {
        id: 'badminton',
        word: 'badminton',
        phonetic: '/ˈbædmɪntən/',
        chinese: '羽毛球',
        partOfSpeech: 'n.',
        examples: [
          {
            english: 'I play badminton with my friends.',
            chinese: '我和朋友们打羽毛球。'
          },
          {
            english: 'Badminton is popular in China.',
            chinese: '羽毛球在中国很受欢迎。'
          }
        ],
        pronunciation: {
          tips: [
            '重音在第一音节',
            'bad发/bæd/音',
            'minton发/mɪntən/音'
          ],
          audioUrl: '/audio/badminton.mp3'
        },
        usage: {
          commonPhrases: ['play badminton', 'badminton game', 'badminton court']
        }
      }
    ]
  }
];

// 获取指定单元的数据
export function getUnitData(unitId: string): Unit | null {
  const allUnits = [...upperSemesterData, ...lowerSemesterData];
  return allUnits.find(unit => unit.id === unitId) || null;
}

// 获取所有上册数据
export function getUpperSemesterData(): Unit[] {
  return upperSemesterData;
}

// 获取所有下册数据
export function getLowerSemesterData(): Unit[] {
  return lowerSemesterData;
}

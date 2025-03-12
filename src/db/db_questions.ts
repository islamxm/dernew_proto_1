import { Question } from "../models";

export const questions_AS:Question[] = [
  {
    id: 1,
    question: 'Jenaýat işini gozgamak üçin delil we esas',
    correctAnswer: 'a',
    answers: [
      {variant: 'a', answerText: 'raýatlaryň arzalary', id: 1},
      {variant: 'b', answerText: 'edara, kärhana, gurama wezipeli adamlar', id: 2},
      {variant: 'c', answerText: 'KHBS-de berlen habar', id: 3},
      {variant: 'd', answerText: 'günäni boýun alyp gelmek', id: 4},
      {variant: 'e', answerText: 'ýokardakylaryň hemmesi dogry', id: 4},
    ],
    categoryId: 7
  },
]

export const questions_dernew: Question[] = [
  {
    id: 1,
    question: 'Güman edilýän adam hökmünde tussaglykda saklama möhleti?',
    correctAnswer: 'c',
    answers: [
      {variant: 'a', answerText: '48 sagat', id: 1},
      {variant: 'b', answerText: '24 sagat', id: 2},
      {variant: 'c', answerText: '72 sagat', id: 3},
      {variant: 'd', answerText: '2 sagat', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 2,
    question: 'Tussag etmek görnüşinde ätiýaçsyzlandyryş çäresi ulanylan güman edilen adam babatynda tussaglykda saklama möhleti?',
    correctAnswer: 'c',
    answers: [
      {variant: 'a', answerText: '2 aýa çenli', id: 1},
      {variant: 'b', answerText: 'Derňew möhleti tamamlanýnça', id: 2},
      {variant: 'c', answerText: '10 gije-gündize çenli', id: 3},
      {variant: 'd', answerText: '7 gije-gündize çenli', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 3,
    question: 'Şaýat hökmünde sorag edilip bilinmejek adamlar haýsylar?',
    correctAnswer: 'e',
    answers: [
      {variant: 'a', answerText: 'Ýokary wezipeli adamlar', id: 1},
      {variant: 'b', answerText: 'Güman edilýän, aýyplanýan, kazyýetde işi seredilýäniň adwokady', id: 2},
      {variant: 'c', answerText: 'Diplomatik wekilhanalaryň işgärleri', id: 3},
      {variant: 'd', answerText: 'Jebir çekeniň raýat hak isleýjiniň raýat jogap berijiniň wekilleri', id: 4},
      {variant: 'e', answerText: 'b) we d) dogry', id: 5},
      {variant: 'f', answerText: 'Hemmesi dogry', id: 6},
    ],
    categoryId: 1
  },
  {
    id: 4,
    question: 'Tussag edilen adam tarapyndan, prokurora hat iberilen ýagdaýynda gözden geçirilýärmi?',
    correctAnswer: 'a',
    answers: [
      {variant: 'a', answerText: 'Ýok', id: 1},
      {variant: 'b', answerText: 'Hawa', id: 2},
      {variant: 'c', answerText: 'Diňe tussag edilen adamyň razylygy bolsa', id: 3},
      {variant: 'd', answerText: 'Hemmesi ýalňyş', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 5,
    question: 'Wagtlaýyn saklaw gabawhanasynda tussag edilen adam näçe gün saklanyp bilner?',
    correctAnswer: 'a',
    answers: [
      {variant: 'a', answerText: '3 gije-gündiz', id: 1},
      {variant: 'b', answerText: '7 gije-gündiz', id: 2},
      {variant: 'c', answerText: 'Prokuroryň sanksiýasy esasynda derňew möhleti tamamlanýança', id: 3},
      {variant: 'd', answerText: '10 gije-gündize çenli', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 6,
    question: 'Eger aranyň uzaklygy, gatnaw ýolunyň ýokdugy sebäpli günäli adamy derňew gabawhanasyna getirip bolmasa näçe gün möhlet bilen saklanyp bilner?',
    correctAnswer: 'c',
    answers: [
      {variant: 'a', answerText: '7 gije-gündiz', id: 1},
      {variant: 'b', answerText: 'Prokuroryň sanksiýasy esasynda derňew möhleti tamamlanýança', id: 2},
      {variant: 'c', answerText: '20 gije-gündiz', id: 3},
      {variant: 'd', answerText: '10 gije-gündize çenli', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 7,
    question: 'Deslapky derňewiň möhletli',
    correctAnswer: 'a',
    answers: [
      {variant: 'a', answerText: '2 aý', id: 1},
      {variant: 'b', answerText: '3 aý', id: 2},
      {variant: 'c', answerText: '7 aý', id: 3},
      {variant: 'd', answerText: 'Derňew möhleti tamamlanýança', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 8,
    question: 'Prokuroryň täsir ediş namalarynyň görnüşleri',
    correctAnswer: 'd',
    answers: [
      {variant: 'a', answerText: 'haýyşnama', id: 1},
      {variant: 'b', answerText: 'ykrarnama', id: 2},
      {variant: 'c', answerText: 'delilnama', id: 3},
      {variant: 'd', answerText: 'garşylyknama', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 9,
    question: 'Raýat jogap berijisi diýip ykrar etmek üçin esas',
    correctAnswer: 'd',
    answers: [
      {variant: 'a', answerText: 'sülçiniň karary', id: 1},
      {variant: 'b', answerText: 'kazyýetiň hökümi', id: 2},
      {variant: 'c', answerText: 'fiziki şahsyň meýletin ýüz tutmagy', id: 3},
      {variant: 'd', answerText: 'maddy zyýanyň ýetirilen möçberi', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 10,
    question: 'Kazyýetde aýyplanýan aklanan ýagdaýynda raýat hak islegi ýatyrylýarmy?',
    correctAnswer: 'a',
    answers: [
      {variant: 'a', answerText: 'hawa', id: 1},
      {variant: 'b', answerText: 'ýok', id: 2},
    ],
    categoryId: 1
  },
  {
    id: 11,
    question: 'Jenaýat jogapkärçiliginiň düşýän ýaşy',
    correctAnswer: 'd',
    answers: [
      {variant: 'a', answerText: '14 ýaş', id: 1},
      {variant: 'b', answerText: '13 ýaş (m.№101, m.№134, m.№227, m.№230)', id: 2},
      {variant: 'c', answerText: '21 ýaş', id: 3},
      {variant: 'd', answerText: '16 ýaş', id: 4},
      {variant: 'e', answerText: 'islendik ýagdaýda 18 ýaşda', id: 5},
    ],
    categoryId: 1
  },
  {
    id: 12,
    question: 'Deslapky derňewiň dowamynda çykarylýan resminama (TJIÝK madda №240)',
    correctAnswer: 'b',
    answers: [
      {variant: 'a', answerText: 'höküm', id: 1},
      {variant: 'b', answerText: 'karar', id: 2},
      {variant: 'c', answerText: 'ykrarnama', id: 3},
      {variant: 'd', answerText: 'delilnama', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 13,
    question: 'Jenaýatyň edilmegine ýol açan sebäpleri ýok etmek üçin prokuroryň ulanýan täsir ediş namasynyň görnüşi',
    correctAnswer: 'c',
    answers: [
      {variant: 'a', answerText: 'garşylyknama', id: 1},
      {variant: 'b', answerText: 'karar', id: 2},
      {variant: 'c', answerText: 'teklipnama', id: 3},
      {variant: 'd', answerText: 'kazyýete hak isleýiş arza', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 14,
    question: 'Prokuroryň ýazan teklipnamasyna wezipeli adamlar näçe güniň dowamynda ýazmaça jogap berilmeli?',
    correctAnswer: 'a',
    answers: [
      {variant: 'a', answerText: '30 gün', id: 1},
      {variant: 'b', answerText: '15 gün', id: 2},
      {variant: 'c', answerText: '3 gün', id: 3},
      {variant: 'd', answerText: 'alan dessine haýal etmän', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 15,
    question: 'Aýybyň bildiriýän möhleti',
    correctAnswer: 'd',
    answers: [
      {variant: 'a', answerText: '10 gün', id: 1},
      {variant: 'b', answerText: '72 sagat', id: 2},
      {variant: 'c', answerText: '7 gün', id: 3},
      {variant: 'd', answerText: '2 gije-gündizden gijä goýulman', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 16,
    question: 'Sorag emtmegiň düzgünleri',
    correctAnswer: 'c',
    answers: [
      {variant: 'a', answerText: 'arakesmesiz 8 sagada çenli', id: 1},
      {variant: 'b', answerText: 'arakesmesiz 6 sagada çenli', id: 2},
      {variant: 'c', answerText: 'arakesmesiz 4 sagada çenli', id: 3},
      {variant: 'd', answerText: 'sülçiniň islegine görä', id: 4},
    ],
    categoryId: 1
  },
  {
    id: 17,
    question: '16 ýaşyna ýetmedikleri sorag etmegiň düzgüni',
    correctAnswer: 'a',
    answers: [
      {variant: 'a', answerText: 'sorag edilýäniň ýanynda mugallymy bolmaly', id: 1},
      {variant: 'b', answerText: 'sorag edilýäniň ýeke özi bolmaly', id: 2},
      {variant: 'c', answerText: 'sülçüniň garamagyna göra', id: 3},
    ],
    categoryId: 1
  },
  {
    id: 18,
    question: 'Sülçi aýyp bildirilenden soň näçe wagtyň dowamynda aýyplanýany sorag etmeli (TJIÝK madda №256)?',
    correctAnswer: 'b',
    answers: [
      {variant: 'a', answerText: '48 sagatdan gijä goýman', id: 1},
      {variant: 'b', answerText: '24 sagatdan gijä goýman', id: 2},
      {variant: 'c', answerText: '72 sagatdan gijä goýman', id: 3},
    ],
    categoryId: 1
  },
  // {
  //   id: 19,
  //   question: '',
  //   correctAnswer: 'a',
  //   answers: [
  //     {variant: 'a', answerText: '', id: 1},
  //     {variant: 'b', answerText: '', id: 2},
  //     {variant: 'c', answerText: '', id: 3},
  //   ],
  //   categoryId: 1
  // },
]



export default [
  ...questions_AS,
  ...questions_dernew
]
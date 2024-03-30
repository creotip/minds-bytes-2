interface QuizPage {
  title: string
  description: string
}

interface SEOConfig {
  siteName: string
  title: string
  alternativeTitle: string
  description: string
  alternativeDescription: string
  url: string
  quizPages: Record<string, QuizPage>
}

interface AppConfig {
  seo: SEOConfig
  db: {
    quizzes: Record<string, string>
  }
  quizList: Array<{
    title: string
    children: null | Array<{
      title: string
      children: null
    }>
  }>
}

export const config: AppConfig = {
  seo: {
    siteName: 'MindsBytes',
    title: 'MindsBytes - Make Learning Fun With Quizzes',
    alternativeTitle: 'MindsBytes - Explore, Learn, and Have Fun with Quizzes',
    description:
      'Boost your coding skills with JavaScript, Python, Go, React, Rust, and more. Dive into quizzes covering Math, CS, Data Science, AI, and more. Explore engaging quizzes challenging your knowledge',
    alternativeDescription:
      'Elevate coding skills with JavaScript, Python, Go, React, Rust, and more. Immerse in quizzes spanning Math, CS, Data Science, AI, and more. Engage in challenging quizzes to expand your knowledge.',
    url: 'https://mindsbytes.com',
    quizPages: {
      javascript: {
        title: 'Javascript Quiz',
        description:
          'Enhance your JavaScript expertise with our exciting quiz! From basic syntax to advanced concepts, put your coding skills to the test.',
      },
      typescript: {
        title: 'TypeScript Quiz',
        description:
          'Level up your TypeScript knowledge with our thrilling quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      python: {
        title: 'Python Quiz',
        description:
          'Boost your Python skills with our engaging quiz! From basic syntax to advanced concepts, test your coding knowledge with our questions.',
      },
      html: {
        title: 'HTML Quiz',
        description:
          'Test your HTML knowledge with our fun quiz! From basic tags to advanced concepts, challenge yourself with our questions.',
      },
      css: {
        title: 'CSS Quiz',
        description:
          'Enhance your CSS skills with our exciting quiz! From basic properties to advanced concepts, put your coding skills to the test.',
      },
      react: {
        title: 'React Quiz',
        description:
          'Level up your React knowledge with our thrilling quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      vue: {
        title: 'Vue Quiz',
        description:
          'Boost your Vue skills with our engaging quiz! From basic syntax to advanced concepts, test your coding knowledge with our questions.',
      },
      angular: {
        title: 'Angular Quiz',
        description:
          'Test your Angular knowledge with our fun quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      java: {
        title: 'Java Quiz',
        description:
          'Enhance your Java skills with our exciting quiz! From basic syntax to advanced concepts, put your coding skills to the test.',
      },
      kotlin: {
        title: 'Kotlin Quiz',
        description:
          'Level up your Kotlin knowledge with our thrilling quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      swift: {
        title: 'Swift Quiz',
        description:
          'Boost your Swift skills with our engaging quiz! From basic syntax to advanced concepts, test your coding knowledge with our questions.',
      },
      mysql: {
        title: 'MySQL Quiz',
        description:
          'Test your MySQL knowledge with our fun quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      mongodb: {
        title: 'MongoDB Quiz',
        description:
          'Enhance your MongoDB skills with our exciting quiz! From basic syntax to advanced concepts, put your coding skills to the test.',
      },
      csharp: {
        title: 'C# Quiz',
        description:
          'Level up your C# knowledge with our thrilling quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      rust: {
        title: 'Rust Quiz',
        description:
          'Boost your Rust skills with our engaging quiz! From basic syntax to advanced concepts, test your coding knowledge with our questions.',
      },
      go: {
        title: 'Go Quiz',
        description:
          'Test your Go knowledge with our fun quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      c: {
        title: 'C Quiz',
        description:
          'Enhance your C skills with our exciting quiz! From basic syntax to advanced concepts, put your coding skills to the test.',
      },
      cpp: {
        title: 'C++ Quiz',
        description:
          'Level up your C++ knowledge with our thrilling quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      php: {
        title: 'PHP Quiz',
        description:
          'Boost your PHP skills with our engaging quiz! From basic syntax to advanced concepts, test your coding knowledge with our questions.',
      },
      ruby: {
        title: 'Ruby Quiz',
        description:
          'Test your Ruby knowledge with our fun quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      perl: {
        title: 'Perl Quiz',
        description:
          'Enhance your Perl skills with our exciting quiz! From basic syntax to advanced concepts, put your coding skills to the test.',
      },
      scala: {
        title: 'Scala Quiz',
        description:
          'Level up your Scala knowledge with our thrilling quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      dart: {
        title: 'Dart Quiz',
        description:
          'Boost your Dart skills with our engaging quiz! From basic syntax to advanced concepts, test your coding knowledge with our questions.',
      },
      powershell: {
        title: 'PowerShell Quiz',
        description:
          'Test your PowerShell knowledge with our fun quiz! From basic syntax to advanced concepts, challenge yourself with our questions.',
      },
      math: {
        title: 'Math Quiz',
        description:
          'Enhance your Math skills with our exciting quiz! From basic arithmetic to advanced concepts, put your knowledge to the test.',
      },
      computerScience: {
        title: 'Computer Science Quiz',
        description:
          'Level up your Computer Science knowledge with our thrilling quiz! From basic concepts to advanced topics, challenge yourself with our questions.',
      },
    },
  },
  db: {
    quizzes: {
      'math-general':
        'https://mindsbytes-default-rtdb.europe-west1.firebasedatabase.app/quizzes/math-general.json',
      'javascript-general':
        'https://mindsbytes-default-rtdb.europe-west1.firebasedatabase.app/quizzes/javascript-general.json',
      'python-general':
        'https://mindsbytes-default-rtdb.europe-west1.firebasedatabase.app/quizzes/python-general.json',
    },
  },
  quizList: [
    { title: 'Mathematics', children: null },
    { title: 'Computer Science', children: null },
    { title: 'Front-End', children: null },
    { title: 'Back-End', children: null },
    { title: 'Data Science', children: null },
    { title: 'DevOps', children: null },
    { title: 'Network', children: null },
    { title: 'Cyber Security', children: null },
    { title: 'Quality Assurance', children: null },
    { title: 'Blockchain', children: null },
    {
      title: 'Programming Languages',
      children: [
        { title: 'Javascript', children: null },
        { title: 'TypeScript', children: null },
        { title: 'Python', children: null },
        { title: 'HTML', children: null },
        { title: 'CSS', children: null },
        { title: 'Java', children: null },
        { title: 'Kotlin', children: null },
        { title: 'Swift', children: null },
        { title: 'MySQL', children: null },
        { title: 'MongoDB', children: null },
        { title: 'C#', children: null },
        { title: 'Rust', children: null },
        { title: 'Go', children: null },
        { title: 'C', children: null },
        { title: 'C++', children: null },
        { title: 'PHP', children: null },
        { title: 'Ruby', children: null },
        { title: 'Matlab', children: null },
        { title: 'Perl', children: null },
        { title: 'Scala', children: null },
      ],
    },
  ],
}

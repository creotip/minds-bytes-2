import {
  SiAngular,
  SiAssemblyscript,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiDart,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiPerl,
  SiPhp,
  SiPowershell,
  SiPython,
  SiReact,
  SiRuby,
  SiRust,
  SiScala,
  SiSwift,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { BiMath } from 'react-icons/bi'
import { BsDisplay } from 'react-icons/bs'

interface QuizMapProps {
  id: string
  slug: string
  title: string
  icon: JSX.Element
  path: string
}
export const quizMap: QuizMapProps[] = [
  {
    id: '1',
    slug: 'javascript',
    title: 'Javascript',
    icon: <SiJavascript />,
    path: '/quizzes/javascript',
  },
  {
    id: '2',
    slug: 'typescript',
    title: 'TypeScript',
    icon: <SiTypescript />,
    path: '/quizzes/typescript',
  },
  { id: '3', slug: 'python', title: 'Python', icon: <SiPython />, path: '/quizzes/python' },
  { id: '4', slug: 'html', title: 'HTML', icon: <SiHtml5 />, path: '/quizzes/html' },
  { id: '5', slug: 'css', title: 'CSS', icon: <SiCss3 />, path: '/quizzes/css' },
  { id: '6', slug: 'react', title: 'React', icon: <SiReact />, path: '/quizzes/react' },
  { id: '7', slug: 'vue', title: 'Vue', icon: <SiVuedotjs />, path: '/quizzes/vue' },
  { id: '8', slug: 'angular', title: 'Angular', icon: <SiAngular />, path: '/quizzes/angular' },
  { id: '9', slug: 'java', title: 'Java', icon: <FaJava />, path: '/quizzes/java' },
  { id: '10', slug: 'kotlin', title: 'Kotlin', icon: <SiKotlin />, path: '/quizzes/kotlin' },
  { id: '11', slug: 'swift', title: 'Swift', icon: <SiSwift />, path: '/quizzes/swift' },
  { id: '12', slug: 'mysql', title: 'MySQL', icon: <SiMysql />, path: '/quizzes/mysql' },
  { id: '13', slug: 'mongodb', title: 'MongoDB', icon: <SiMongodb />, path: '/quizzes/mongodb' },
  { id: '14', slug: 'csharp', title: 'C#', icon: <SiCsharp />, path: '/quizzes/csharp' },
  { id: '15', slug: 'rust', title: 'Rust', icon: <SiRust />, path: '/quizzes/rust' },
  { id: '16', slug: 'go', title: 'Go', icon: <SiGo />, path: '/quizzes/go' },
  { id: '17', slug: 'c', title: 'C', icon: <SiCplusplus />, path: '/quizzes/c' },
  { id: '18', slug: 'cpp', title: 'C++', icon: <SiCplusplus />, path: '/quizzes/cpp' },
  { id: '19', slug: 'php', title: 'PHP', icon: <SiPhp />, path: '/quizzes/php' },
  { id: '20', slug: 'ruby', title: 'Ruby', icon: <SiRuby />, path: '/quizzes/ruby' },
  { id: '21', slug: 'perl', title: 'Perl', icon: <SiPerl />, path: '/quizzes/perl' },
  { id: '22', slug: 'scala', title: 'Scala', icon: <SiScala />, path: '/quizzes/scala' },
  { id: '23', slug: 'dart', title: 'Dart', icon: <SiDart />, path: '/quizzes/dart' },
  {
    id: '24',
    slug: 'powershell',
    title: 'PowerShell',
    icon: <SiPowershell />,
    path: '/quizzes/powershell',
  },
]

export const quizMapTechScience: QuizMapProps[] = [
  { id: '25', slug: 'math', title: 'Mathematics', icon: <BiMath />, path: '/quizzes/math' },
  {
    id: '26',
    slug: 'computer-science',
    title: 'Computer Science',
    icon: <BsDisplay />,
    path: '/quizzes/computer-science',
  },
]

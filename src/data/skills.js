import { LayoutTemplate, Plug, Database, Wrench } from 'lucide-react'

// Straight from the Technical Skills and project sections of your CV.
export const skillGroups = [
  {
    title: 'Frontend',
    note: 'The interfaces I build and style every day.',
    icon: LayoutTemplate,
    span: 'md:col-span-4',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Responsive Web Design', 'Cross-Browser Compatibility'],
  },
  {
    title: 'Tools',
    note: 'How I work and ship.',
    icon: Wrench,
    span: 'md:col-span-2',
    items: ['Git', 'GitHub', 'Postman'],
  },
  {
    title: 'APIs and Backend',
    note: 'Connecting interfaces to real data.',
    icon: Plug,
    span: 'md:col-span-3',
    items: ['Axios', 'Node.js', 'Express.js', 'JWT authentication'],
  },
  {
    title: 'Databases',
    note: 'Relational and document data behind the screens.',
    icon: Database,
    span: 'md:col-span-3',
    items: ['MySQL', 'Sequelize ORM', 'MongoDB'],
  },
]

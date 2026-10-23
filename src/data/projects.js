// Projects, taken from the Key Projects section of your CV.
// - live / repo: paste real URLs. Empty = the button is hidden (nothing fake is shown).
// - image: put a screenshot in /public/projects and set e.g. '/projects/hrms.png'.
//   Empty = a clearly labelled illustrative preview is shown instead.
// - needsReview: things your CV does not say. In `npm run dev` a reminder shows on the card.

export const projects = [
  {
    id: 'hrms',
    title: 'HR Management System',
    kind: 'Web application (HRMS)',
    preview: 'hrms',
    image: '',
    imageAlt: '',
    problem:
      'HR teams, managers and employees need one place to handle profiles, attendance, leave and payroll.',
    contribution:
      'Developed the responsive React.js front end with separate dashboards for Admin, HR and Employees. Integrated the backend APIs with Axios, worked with MySQL data through Sequelize ORM, and built reusable React components for state management.',
    features: [
      'JWT authentication with role-based access control',
      'Employee profile management with full CRUD',
      'Attendance with check-in/check-out and history',
      'Leave requests with an approval workflow',
      'Payroll with automated salary calculation',
    ],
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Axios', 'JWT', 'MySQL', 'Sequelize', 'Git', 'GitHub', 'Postman'],
    live: '',
    repo: '',
    needsReview: ['live', 'repo'],
  },
  {
    id: 'cares',
    title: 'CARES',
    kind: 'Comprehensive Anxiety Relief Expert System (Android app)',
    preview: 'mood',
    image: '',
    imageAlt: '',
    problem:
      'People managing anxiety need a simple way to track their mood, take assessments and see patterns over time.',
    contribution:
      'Developed the AI-powered Android mental health app, including on-device emotion prediction, real-time data sync, push notifications and mood-trend charts.',
    features: [
      'Mood tracking with AI-driven emotion prediction',
      'Mental health assessments and memory games',
      'Personalized notifications',
      'Trend analysis shown as interactive charts',
    ],
    stack: ['ONNX Runtime', 'Firebase Firestore', 'Firebase Cloud Messaging', 'MPAndroidChart'],
    live: '',
    repo: '',
    needsReview: ['live', 'repo'],
  },
  {
    id: 'affi',
    title: 'Affi Design',
    kind: 'Book cover design portfolio and order platform',
    preview: 'book',
    image: '',
    imageAlt: '',
    problem:
      'A book cover design studio needed to showcase its services and let customers place custom cover orders online.',
    contribution:
      'Developed the client website: the interactive portfolio with 3D book animations, the online order form, instant email delivery of each order, and the admin panel that lists all incoming orders.',
    features: [
      'Interactive portfolio with 3D book animations',
      'Customers place custom cover orders online',
      'Each order delivered instantly by email',
      'Admin panel listing all incoming orders',
    ],
    stack: ['3D animations', 'Online order form', 'Email delivery', 'Admin panel'],
    live: '',
    repo: '',
    needsReview: ['stack (your CV lists no tools for this project)', 'live', 'repo'],
  },
]

// Personal details, taken from your CV. Empty strings = not added yet; the matching button is hidden.
export const site = {
  name: 'Roumaisa Abbasi',
  fullName: 'Roumaisa Rustam Abbasi',
  role: 'Frontend Developer',
  location: 'Islamabad, Pakistan',
  email: 'roumaisaabbasi@gmail.com',
  github: '',   // TODO: e.g. 'https://github.com/your-username' (your CV does not list one)
  linkedin: 'https://www.linkedin.com/in/roumaisa-abbasi-26b933265/',
  resume: '/Roumaisa_Abbasi_CV.pdf', // file lives in /public. Set to '' to hide the button.
  availability: 'Open to Frontend Internship Opportunities',
  languages: 'English, Urdu',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}

export const education = {
  degree: 'BS Software Engineering',
  school: 'International Islamic University Islamabad',
  when: 'Oct 2021 – May 2025',
}

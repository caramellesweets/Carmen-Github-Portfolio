// All the editable content for the site lives here.
// Replace the placeholder text with your own details.

export const site = {
  name: 'Carmen Yuen',
  role: 'Developer & Designer',
  tagline: 'I build thoughtful, accessible things for the web.',
  intro:
    'Welcome to my corner of the internet. This is where I share the projects I have built, the things I am learning, and how to get in touch.',
  location: 'Your City',
  email: 'carmenyuen275@gmail.com',
  links: {
    github: 'https://github.com/caramellesweets',
    linkedin: 'https://www.linkedin.com/in/your-profile',
  },
};

export const about = {
  paragraphs: [
    'Write a few sentences about yourself here: what you do, what you care about, and what kind of work you are looking for.',
    'You can mention your background, what got you into building things, and what you are currently exploring.',
  ],
  skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Astro', 'Git', 'Figma'],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: 'This Portfolio',
    description:
      'A fast, static personal site built with Astro. Zero client-side JavaScript beyond the theme toggle.',
    tags: ['Astro', 'CSS'],
    repo: 'https://github.com/caramellesweets/Carmen-Github-Portfolio',
  },
  {
    title: 'Project Two',
    description:
      'A short description of what this project does, the problem it solves, and what you learned building it.',
    tags: ['JavaScript', 'API'],
    repo: 'https://github.com/your-username/project-two',
    demo: 'https://example.com',
  },
  {
    title: 'Project Three',
    description:
      'Another highlight. Keep each description to two or three sentences so the grid stays easy to scan.',
    tags: ['TypeScript', 'Design'],
    repo: 'https://github.com/your-username/project-three',
  },
];

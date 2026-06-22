/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, CareerRole, QuizQuestion } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Master the strategies and tools required to build brands and businesses online.',
    detailedDescription: 'Go from base concepts to handling real paid media budgets. Unlike traditional theoretical courses, our Digital Marketing curriculum is built directly into current agency workflows, meaning you deal with live metrics, search rankings, and campaign performance optimization from week one.',
    duration: '3 Months (inc. Live Agency Campaigns)',
    topics: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Google Ads & PPC Advertising',
      'Meta (Facebook & Instagram) Ads',
      'Content Marketing Strategies',
      'Email Marketing & Leads Nurturing',
      'Affiliate Marketing Mechanics',
      'YouTube Marketing & Optimization',
      'Analytics and Performance Tracking',
      'AI-Powered Marketing Tools'
    ],
    tools: [
      { name: 'Google Ads', category: 'Advertising' },
      { name: 'Meta Ads Manager', category: 'Advertising' },
      { name: 'Google Analytics 4', category: 'Analytics' },
      { name: 'SEMrush / Ahrefs', category: 'SEO' },
      { name: 'Mailchimp', category: 'Automation' },
      { name: 'ChatGPT / SEO Tools', category: 'AI Assistants' }
    ],
    highlights: [
      'Work on live paid campaign budgets',
      'SEO audit tools certification training',
      'Build client reporting templates'
    ]
  },
  {
    id: 'multimedia-design',
    title: 'Multimedia & Creative Design',
    shortDescription: 'Develop creative skills to produce professional visual and animated content.',
    detailedDescription: 'Step into the realm of professional visual communication. This course focuses on developing structural design principles, lighting, storytelling, and high-end timeline assembly. Learn the core industry suite to prepare yourself for visual design agency roles.',
    duration: '4 Months (inc. Portfolio Showcase)',
    topics: [
      'Graphic Design Fundamentals',
      'Video Editing Theory & Practice',
      'Motion Graphics & Title Design',
      'Adobe Photoshop Mastery',
      'Adobe Illustrator Vector Art',
      'Adobe Premiere Pro Assembly & Grading',
      'Adobe After Effects Compositing',
      'Canva and AI Design Tools Workspace',
      'Branding & Creative Communication'
    ],
    tools: [
      { name: 'Adobe Photoshop', category: 'Graphics' },
      { name: 'Adobe Illustrator', category: 'Vectors' },
      { name: 'Adobe Premiere Pro', category: 'Video Editing' },
      { name: 'Adobe After Effects', category: 'Motion Graphics' },
      { name: 'Canva Pro', category: 'Design Suite' },
      { name: 'Midjourney / AI tools', category: 'Content Gen' }
    ],
    highlights: [
      'Create 5+ high-quality client branding packages',
      'Develop an cinematic showreel',
      'Typography and Vector-art portfolio validation'
    ]
  },
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Build responsive and modern websites using industry-standard technologies.',
    detailedDescription: 'Learn to build clean, fast, and optimized interfaces. We go beyond basic code blocks to explore modern structural frameworks, optimization techniques, domain orchestration, and how to hand off secure, fast client systems.',
    duration: '3 Months (inc. Portfolio Deployment)',
    topics: [
      'HTML5, CSS3, & Modern JavaScript',
      'WordPress Development & Custom Blocks',
      'UI/UX Design Fundamentals',
      'Website Speed & Mobile Optimization',
      'Hosting, Domain, & Server Management',
      'Freelancer Portfolio & Corporate Sites Setup'
    ],
    tools: [
      { name: 'VS Code & Web Tools', category: 'Coding' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'WordPress', category: 'CMS' },
      { name: 'Figma', category: 'UI/UX' },
      { name: 'Git & GitHub', category: 'Version Control' },
      { name: 'cPanel & Host Servers', category: 'Deployment' }
    ],
    highlights: [
      'Deploy real interactive custom sites live on cloud servers',
      'Figma-to-Code responsive layout accuracy training',
      'Page speed optimization score of 95+'
    ]
  },
  {
    id: 'ai-integration',
    title: 'Artificial Intelligence Integration',
    shortDescription: 'Stay ahead of the curve with state-of-the-art AI-powered digital solutions.',
    detailedDescription: 'Unleash extreme multipliers for productivity. Instead of fears about AI replacing roles, this system trains you to adapt to AI interfaces, leverage smart engines for code, graphic assets, automation scripts and business tools.',
    duration: '2 Months (inc. Workflows Automation Lab)',
    topics: [
      'AI Tools for Multi-Channel Marketing',
      'Advanced Prompt Engineering & Content Generation',
      'No-Code Workflow Automation Systems',
      'AI Image and Audio/Video Creation',
      'Productivity Hacks & Smart Business Applications'
    ],
    tools: [
      { name: 'Gemini AI API', category: 'AI Models' },
      { name: 'Make.com / Zapier', category: 'No-Code Automation' },
      { name: 'Midjourney & DALL-E', category: 'Visual Gen' },
      { name: 'ElevenLabs & Runway Gen-2', category: 'Audio/Video' },
      { name: 'v0 / Bolt.new Prototypers', category: 'Dev Automation' }
    ],
    highlights: [
      'Automate real business pipelines with 0 code',
      'Write highly customized smart assistants',
      'Synthesize hyper-realistic media modules'
    ]
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    title: 'Digital Marketing Specialist',
    description: 'Responsible for designing, launching, and analytics assessment of online marketing campaigns across several client fields.',
    roles: ['Brand Growth Engineer', 'Paid Search Specialist', 'Campaign Optimizer'],
    demandLevel: 'Very High',
    growth: '+27% YoY'
  },
  {
    title: 'SEO & Performance Executive',
    description: 'Ensuring that client assets dominate Google Search results naturally through technical updates and keyword architectures.',
    roles: ['Technical SEO Analyst', 'Google Specialist', 'Backlink Architect'],
    demandLevel: 'High',
    growth: '+18% YoY'
  },
  {
    title: 'Creative Content Creator & Editor',
    description: 'Directing the production of striking audio, static layouts, cinematic shorts, and educational content streams.',
    roles: ['Short-form Editor', 'Media Storyteller', 'Content Strategist'],
    demandLevel: 'Trending',
    growth: '+40% YoY'
  },
  {
    title: 'Graphic/Motion Designer',
    description: 'Shaping physical and digital brand communication assets, logo ecosystems, and motion sequences.',
    roles: ['Brand Identity Designer', 'Keyframe Artist', 'Visual Designer'],
    demandLevel: 'Very High',
    growth: '+15% YoY'
  },
  {
    title: 'Full-Stack Website Developer',
    description: 'Designing, prototyping, coding, optimizing, and maintaining websites and client ecommerce hubs.',
    roles: ['Frontend Web Developer', 'WordPress Customizer', 'Freelance Architect'],
    demandLevel: 'Very High',
    growth: '+22% YoY'
  },
  {
    title: 'AI Automation Consultant',
    description: 'Helping modern small-and-medium businesses integrate LLMs, image APIs, and robotic workflows to optimize hours spent.',
    roles: ['Workflow Architect', 'AI Integrator', 'Operations Optimizer'],
    demandLevel: 'Trending',
    growth: '+65% YoY'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'How do you prefer to solve problems or express yourself?',
    options: [
      {
        text: 'Designing stunning visuals, editing dynamic video clips, or crafting custom graphics.',
        points: { 'multimedia-design': 3, 'digital-marketing': 1 }
      },
      {
        text: 'Analyzing trends, strategizing growth ideas, and optimizing online media campaigns.',
        points: { 'digital-marketing': 3, 'ai-integration': 1 }
      },
      {
        text: 'Coding responsive screen layouts, structural design files, and setting up servers.',
        points: { 'website-development': 3, 'ai-integration': 1 }
      },
      {
        text: 'Connecting smart tools together, using prompt designs, and automating daily schedules.',
        points: { 'ai-integration': 3, 'website-development': 1 }
      }
    ]
  },
  {
    id: 2,
    question: 'Choose your ideal morning action at CyberWise agency labs:',
    options: [
      {
        text: 'Tuning raw keys in Lightroom, adding speed modifications to Premiere timelines, or exporting vector assets.',
        points: { 'multimedia-design': 3 }
      },
      {
        text: 'Adjusting bids on paid ad groups, writing marketing slogans, or examining search intent keywords.',
        points: { 'digital-marketing': 3 }
      },
      {
        text: 'Refactoring styling scripts, correcting hosting configuration files, or tailoring interactive modules.',
        points: { 'website-development': 3 }
      },
      {
        text: 'Writing an API script that monitors reviews and uses a model to trigger auto-responses.',
        points: { 'ai-integration': 3 }
      }
    ]
  },
  {
    id: 3,
    question: 'What kind of client deliverable makes you feel most proud?',
    options: [
      {
        text: 'A highly responsive, custom-coded client portal that loads in milliseconds.',
        points: { 'website-development': 3 }
      },
      {
        text: 'A comprehensive visual campaign dashboard displaying high clickthrough rates and return on ad spend.',
        points: { 'digital-marketing': 3 }
      },
      {
        text: 'A professional brand kit complete with gorgeous cinematic animations and promotional items.',
        points: { 'multimedia-design': 3 }
      },
      {
        text: 'An automated workflow system that reduced a team’s repetitive admin chores by 12 hours a week.',
        points: { 'ai-integration': 3 }
      }
    ]
  }
];

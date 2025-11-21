/*
Single-file React + Tailwind portfolio component for Pooja Sukhdeve
Place this file in: src/Portfolio.jsx (or replace src/App.jsx)
Requirements:
 - React 18+
 - Tailwind CSS configured
 - framer-motion installed (optional but used here): `npm i framer-motion`
 - Replace placeholder images and links with your own

How to preview:
 1. Create a React app (Vite or CRA).
 2. Configure Tailwind (https://tailwindcss.com/docs/guides/create-react-app).
 3. Add this file to src/Portfolio.jsx and import it in src/main.jsx or src/App.jsx:
      import Portfolio from './Portfolio';
      export default function App() { return <Portfolio/> }
 4. Run dev server: `npm run dev` or `npm start`.
 5. Deploy to Netlify, Vercel, or GitHub Pages.

Customize quickly:
 - Update contact constants near the top (email, linkedin, portfolioURL).
 - Replace project images in /public or point to external URLs.
 - Edit sections in the JSX to add/remove items.
*/

import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const contact = {
    name: 'Pooja Sukhdeve',
    location: 'Boston, MA',
    phone: '+1 617-963-6004',
    email: 'poojasukhdeve06@gmail.com',
    linkedin: '#',
    portfolio: '#'
  };

  const projects = [
    {
      title: 'Chatalogue — University Chatbot Assistant',
      subtitle: 'Python, Tkinter, SQLite, OpenAI (optional)',
      desc: 'A responsive university chatbot that answers class & campus queries. Multithreaded UI with optional OpenWeatherMap and OpenAI integrations.',
      tags: ['Python','NLP','SQLite','UX']
    },
    {
      title: 'Exoplanet Classification',
      subtitle: 'Random Forest & Gradient Boosting + SHAP',
      desc: 'Built ensemble models and used SHAP for interpretability to classify exoplanets; focused on explainability for scientific use.',
      tags: ['ML','SHAP','Python']
    },
    {
      title: 'Netflix Content Dashboard',
      subtitle: 'Tableau Dashboard',
      desc: 'Analyzed Netflix library trends with interactive dashboards highlighting content-type, genre and regional insights.',
      tags: ['Tableau','Data Viz']
    }
  ];

  const experience = [
    {
      role: 'Research Assistant',
      org: 'Boston University',
      date: 'Sept 2024 – Ongoing',
      bullets: [
        'Developing a Python-based data visualization module for visually impaired users using interactive shapes & patterns.'
      ]
    },
    {
      role: 'Software Developer (Intern)',
      org: 'ASVI Systems',
      date: 'May 2025 – Aug 2025',
      bullets: [
        'Built scalable solutions using AWS and CI/CD pipelines; contributed to system integration and technical docs.'
      ]
    },
    {
      role: 'Data Analyst',
      org: 'Tech Zenesis',
      date: 'Oct 2022 – Dec 2023',
      bullets: [
        'Managed analytics pipelines, automated reporting, dashboarding in Power BI and A/B testing to improve UX.'
      ]
    }
  ];

  const education = [
    {school: 'Boston University', degree: 'M.S. in Computer Science', date: 'May 2026'},
    {school: 'Swami Ramanand Teerth Marathwada University', degree: 'B.Tech in Computer Science', date: 'Jun 2016'}
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{contact.name}</h1>
          <p className="text-sm">{contact.location} • {contact.phone} • <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></p>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="grid md:grid-cols-3 gap-8 items-center py-8">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="md:col-span-2">
            <h2 className="text-4xl font-extrabold leading-tight">Hi — I’m Pooja. I build data-driven products and accessible visualizations.</h2>
            <p className="mt-4 text-lg">M.S. Computer Science (Boston University). Data analyst & software developer experienced in ML, data visualization, and full-stack engineering. Passionate about accessibility and explainable ML.</p>
            <div className="mt-6 space-x-3">
              <a href="#projects" className="inline-block px-5 py-2 rounded-lg border border-gray-300">View Projects</a>
              <a href={`mailto:${contact.email}`} className="inline-block px-5 py-2 rounded-lg bg-gray-900 text-white">Email Me</a>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="w-36 h-36 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">Photo</div>
            <h3 className="text-center font-semibold">{contact.name}</h3>
            <p className="text-center text-sm">Boston University • M.S. Computer Science</p>
            <div className="mt-4 text-sm">
              <p><strong>Skills:</strong> Data Analysis, ML, React, Node.js, SQL, Tableau</p>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p,i) => (
              <motion.article key={i} whileHover={{ y: -6 }} className="bg-white p-5 rounded-xl shadow-sm">
                <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-50 rounded-md mb-3 flex items-center justify-center">Image</div>
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.subtitle}</p>
                <p className="mt-2 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t,idx) => <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Experience</h3>
          <div className="space-y-4">
            {experience.map((e, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.01 }} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{e.role}</h4>
                    <p className="text-sm text-gray-600">{e.org} • {e.date}</p>
                  </div>
                </div>
                <ul className="mt-3 list-disc ml-5 text-sm text-gray-700">
                  {e.bullets.map((b,i) => <li key={i}>{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="education" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((ed, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold">{ed.school}</h4>
                <p className="text-sm text-gray-600">{ed.degree} • {ed.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Publications & Achievements</h3>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>Winner — Boston University Hackathon 2024: Led a data science model project that delivered measurable business impact.</li>
            <li>Chapter contributor, IGI Global publications (2021) — AR in Immersive Virtual Learning Environments & Digital Built Environment.</li>
          </ul>
        </section>

        <section id="contact" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-sm">If you'd like to collaborate or hire me, send an email or connect on LinkedIn.</p>
              <p className="mt-4 text-sm"><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></p>
              <p className="text-sm"><strong>Phone:</strong> {contact.phone}</p>
              <div className="mt-4 space-x-3">
                <a href={contact.linkedin} className="text-sm underline">LinkedIn</a>
                <a href={contact.portfolio} className="text-sm underline">Portfolio</a>
              </div>
            </div>
            <form className="space-y-3">
              <input className="w-full p-3 border rounded" placeholder="Your name" />
              <input className="w-full p-3 border rounded" placeholder="Your email" />
              <textarea className="w-full p-3 border rounded" rows={4} placeholder="Message"></textarea>
              <button className="px-4 py-2 rounded bg-gray-900 text-white">Send</button>
            </form>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-600">© {new Date().getFullYear()} {contact.name} — Built with React & Tailwind</footer>
      </main>
    </div>
  );
}

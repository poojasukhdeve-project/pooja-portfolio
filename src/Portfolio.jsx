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

  // Web projects (3)
  const webProjects = [
    {
      title: 'University Portal',
      subtitle: 'React • Node.js • PostgreSQL',
      desc: 'A responsive portal for students to view schedules, resources, and announcements. Implements auth, REST APIs, and server-side rendering.',
      tags: ['React','Node.js','Postgres'],
      github: 'https://github.com/poojasukhdeve06/university-portal'
    },
    {
      title: 'Portfolio Website (This Site)',
      subtitle: 'React • Tailwind • Vite',
      desc: 'Single-page portfolio built with React + Tailwind. Mobile-first design, accessible components, and deploy-ready CI pipeline.',
      tags: ['React','Tailwind','Vite'],
      github: 'https://github.com/poojasukhdeve06/portfolio'
    },
    {
      title: 'E-Commerce Demo',
      subtitle: 'Next.js • Stripe • MongoDB',
      desc: 'Demo storefront with product catalog, cart, checkout (Stripe integration), and admin product management.',
      tags: ['Next.js','Stripe','MongoDB'],
      github: 'https://github.com/poojasukhdeve06/ecommerce-demo'
    }
  ];

  // Data analytics projects (3)
  const dataProjects = [
    {
      title: 'Chatalogue — University Chatbot Assistant',
      subtitle: 'Python, Tkinter, SQLite, OpenAI (optional)',
      desc: 'A responsive university chatbot that answers class & campus queries. Multithreaded UI with optional OpenWeatherMap and OpenAI integrations.',
      tags: ['Python','NLP','SQLite','UX'],
      github: 'https://github.com/poojasukhdeve06/chatalogue'
    },
    {
      title: 'Exoplanet Classification',
      subtitle: 'Random Forest & Gradient Boosting + SHAP',
      desc: 'Built ensemble models and used SHAP for interpretability to classify exoplanets; focused on explainability for scientific use.',
      tags: ['ML','SHAP','Python'],
      github: 'https://github.com/poojasukhdeve06/exoplanet-classification'
    },
    {
      title: 'Netflix Content Dashboard',
      subtitle: 'Tableau Dashboard',
      desc: 'Analyzed Netflix library trends with interactive dashboards highlighting content-type, genre and regional insights.',
      tags: ['Tableau','Data Viz'],
      github: 'https://github.com/poojasukhdeve06/netflix-dashboard'
    }
  ];

  // Full experience list (7 entries) — will display as 3 / 3 / 1 rows with md:grid-cols-3
  const experience = [
    {
      role: 'Research Assistant',
      org: 'Boston University',
      date: 'Sept 2024 – Ongoing',
      bullets: [
        'Collaborating with Professor Eugene Pinsky to develop a Python-based data visualization module that enables visually impaired users to interpret data structures using interactive shapes and pattern-based representations.',
        'Designing accessible visual encodings and creating prototype demos for classroom evaluation.'
      ]
    },
    {
      role: 'Student Assistant',
      org: 'Boston University (IS&T)',
      date: 'Sept 2024 – Oct 2025',
      bullets: [
        'Supporting the IS&T department by performing office operations, maintaining and updating inventory data in Excel, automating scheduling workflows in Outlook, and delivering frontline technical support during university conferences and academic events.'
      ]
    },
    {
      role: 'Software Developer Intern',
      org: 'ASVI Systems',
      date: 'May 2025 – Aug 2025',
      bullets: [
        'Served as a Software Developer Intern, designing scalable software solutions using AWS services and building CI/CD pipelines for automated deployments.',
        'Worked with cross-functional teams to gather requirements, enhance system performance, and troubleshoot cloud and application issues.',
        'Contributed to code reviews, system integration efforts, and developed clear technical documentation for configurations and processes.'
      ]
    },
    {
      role: 'Data Analyst',
      org: 'Tech Zenesis',
      date: 'Oct 2022 – Dec 2023',
      bullets: [
        'Managed end-to-end data analytics pipeline in a fast-paced startup, from data wrangling and feature engineering to dashboarding and insights for product, marketing, and operations.',
        'Automated reporting with Python and SQL, built Power BI and Excel dashboards, and performed A/B testing and cohort analysis to optimize UX and boost engagement.'
      ]
    },
    {
      role: 'Data Analyst (Volunteer)',
      org: 'Globalshala Education',
      date: 'Jul 2022 – Sept 2022',
      bullets: [
        'Collaborated with a mission-driven organization to perform exploratory data analysis using Python (Pandas, NumPy) and SQL, identifying trends from large and diverse datasets.',
        'Created intuitive dashboards in Tableau to convey insights to a broad, non-technical audience and converted complex data into actionable reports to support resource planning and strategic decision-making.'
      ]
    },
    {
      role: 'Software Developer',
      org: 'Interbeing Foundation',
      date: 'Apr 2020 – Jun 2022',
      bullets: [
        'Designed and maintained scalable software systems using Python, Node.js, and JavaScript, ensuring functionality and performance across full-stack architecture.',
        'Collaborated with stakeholders to gather requirements, developed in agile sprints, and handled testing, deployment, and continuous improvements based on user feedback.'
      ]
    },
    {
      role: 'Software Trainee – Android Development',
      org: 'SSIT Pvt. Ltd.',
      date: 'Dec 2016 – Jun 2017',
      bullets: [
        'Designed and developed Android and iOS applications using Java and Android SDK, implementing responsive UI/UX, RESTful API integration, SQLite database management, performance optimization, and ensuring code quality and version control using Git, JUnit, and Espresso.'
      ]
    }
  ];

  const education = [
    {school: 'Boston University', degree: 'M.S. in Computer Science', date: 'May 2026'},
    {school: 'Swami Ramanand Teerth Marathwada University', degree: 'B.Tech in Computer Science', date: 'Jun 2016'}
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{contact.name}</h1>
          <p className="text-sm">
            {contact.location} • {contact.phone} • <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>
          </p>
        </div>

        <nav className="space-x-4 text-sm">
          <a href="#web-projects" className="hover:underline">Web Projects</a>
          <a href="#data-projects" className="hover:underline">Data Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="grid md:grid-cols-3 gap-8 items-center py-8">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl font-extrabold leading-tight">
              Hi — I’m Pooja. I build data-driven products and accessible visualizations.
            </h2>
            <p className="mt-4 text-lg">
              M.S. Computer Science (Boston University). Data analyst & software developer experienced in ML, data visualization, and full-stack engineering. Passionate about accessibility and explainable ML.
            </p>

            <div className="mt-6 space-x-3">
              <a href="#web-projects" className="inline-block px-5 py-2 rounded-lg border border-gray-300">View Web Projects</a>
              <a href="#data-projects" className="inline-block px-5 py-2 rounded-lg border border-gray-300">View Data Projects</a>
              <a href={`mailto:${contact.email}`} className="inline-block px-5 py-2 rounded-lg bg-gray-900 text-white">Email Me</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            {/* local preview image path (uploaded) */}
            <img
              src="/mnt/data/1deb8c30-b491-4353-b141-3eee4490aacb.png"
              alt="Pooja"
              className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-center font-semibold">{contact.name}</h3>
            <p className="text-center text-sm">Boston University • M.S. Computer Science</p>
            <div className="mt-4 text-sm">
              <p><strong>Skills:</strong> Data Analysis, ML, React, Node.js, SQL, Tableau</p>
            </div>
          </motion.div>
        </section>

        {/* Web Projects */}
        <section id="web-projects" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Web Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {webProjects.map((p, i) => (
              <motion.article key={i} whileHover={{ y: -6 }} className="bg-white p-5 rounded-xl shadow-sm">
                <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-50 rounded-md mb-3 flex items-center justify-center">Image</div>

                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.subtitle}</p>
                <p className="mt-2 text-sm">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 underline hover:text-blue-800"
                  >
                    View on GitHub
                    <span className="ml-2" aria-hidden>↗</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Data Analytics Projects */}
        <section id="data-projects" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Data Analytics Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {dataProjects.map((p, i) => (
              <motion.article key={i} whileHover={{ y: -6 }} className="bg-white p-5 rounded-xl shadow-sm">
                <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-50 rounded-md mb-3 flex items-center justify-center">Image</div>

                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.subtitle}</p>
                <p className="mt-2 text-sm">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 underline hover:text-blue-800"
                  >
                    View on GitHub
                    <span className="ml-2" aria-hidden>↗</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Experience</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((e, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -6 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{e.role}</h4>
                    <p className="text-sm text-gray-600">{e.org} • {e.date}</p>
                  </div>
                </div>

                <ul className="mt-4 list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
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

        {/* Publications & Contact */}
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

            <form className="space-y-3" onSubmit={(ev) => { ev.preventDefault(); alert('Thanks — message not sent in demo.'); }}>
              <input className="w-full p-3 border rounded" placeholder="Your name" />
              <input className="w-full p-3 border rounded" placeholder="Your email" />
              <textarea className="w-full p-3 border rounded" rows={4} placeholder="Message"></textarea>
              <button className="px-4 py-2 rounded bg-gray-900 text-white">Send</button>
            </form>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {contact.name} — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}

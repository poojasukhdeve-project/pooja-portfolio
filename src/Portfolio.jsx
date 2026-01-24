import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

/* Scroll reveal animation */
const scrollReveal = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: false, amount: 0.2 }
};

export default function Portfolio() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const contact = {
    name: 'Pooja Sukhdeve',
    location: 'Boston, MA',
    phone: '+1 617-963-6004',
    phone_secondary: '+91 9518732538',
    email: 'poojasukhdeve06@gmail.com',
    email_secondary: 'psukhdev@bu.edu',
    linkedin: 'https://github.com/poojasukhdeve-project',
    portfolio: '#'
  };


  const dataProjects = [
    {
      title: 'Chatalogue — University Chatbot Assistant',
      subtitle: 'Python, Tkinter, SQLite, OpenAI (optional)',
       image: 'http://localhost:5173/pooja-portfolio/images/data_project1.png',
      desc: 'Chatalogue is a Python-based university chatbot with a 9-stage NLP pipeline combining custom spaCy NER (7 entities), SentenceTransformers, and Logistic Regression to convert natural language into SQL queries. It features context-aware conversation tracking with implicit reference resolution, hybrid RAG + SQL architecture (offline or GPT-4.1-mini enhanced), and production-ready Tkinter GUI with multi-clause splitting, fuzzy search, and threaded processing - all built with modular, extensible architecture.',
      tags: ['Python','NLP','SQLite','UX'],
      github: 'https://github.com/poojasukhdeve06/chatalogue'
    },
    {
      title: 'Exoplanet Classification',
      subtitle: 'Random Forest & Gradient Boosting + SHAP',
      desc: 'A complete ML workflow for exoplanet classification and feature-importance analysis. Implements end-to-end preprocessing (missing value handling, normalization, feature engineering), EDA with visual analytics, multi-algorithm training (Tree-based models, Gradient Boosting), cross-validation performance evaluation, and SHAP value computation for global + local model interpretability. Provides astrophysical insights into which stellar and planetary parameters drive prediction outcomes.',
      tags: ['ML','SHAP','Python'],
      github: 'https://github.com/poojasukhdeve-project/Exoplanet-Data-Visualization-and-Analysis-with-SHAP'
    },
    {
      title: 'BRFSS Disease Prediction Pipeline with ML & SHAP',
      subtitle: 'R • ML Pipelines • Feature Selection • SHAP Explainability • Health Analytics',
      desc: 'A comprehensive ML pipeline built in R for disease-risk prediction using BRFSS data. Implements advanced preprocessing (missing-value imputation, feature engineering, normalization), high-dimensional feature selection (Boruta, CFS), and statistical significance testing. Trains and benchmarks 36 ML models including Logistic Regression, Random Forest, SVM, XGBoost, and GLMNET with cross-validation and hyperparameter tuning.SHAP values provide global and local interpretability of top predictive health indicators. Best-performing model (Random Forest + Boruta) achieved 84.3% accuracy, while KNN (CFS features) achieved top TPR/TNR scores.',
      tags: ['R','ML Pipelines','Feature Selection','SHAP Explainability','Health Analytics'],
      github: 'https://github.com/poojasukhdeve-project/BRFSS-Data-Analytics-Exploring-Health-Patterns-and-Risk-Factors-with-R'
    },
    {
      title: 'Netflix Dashboard',
      subtitle: '• Tableau • Data Analytics • Visualization',
      desc: 'An interactive Tableau dashboard analysing Netflix’s global content library. Visualizes content distribution by country, genre, ratings, and growth trends using maps, bar charts, bubble charts, and area charts to uncover key insights about Netflix’s catalog.',
      tags: ['Tableau','Data Visualization','Analytics','EDA','Dashboard'],
      github: 'https://github.com/poojasukhdeve-project/Netflix-Data-Visualization-Dashboard-using-Tableau'
    },
    {
      title: 'Adidas US Sales Excel Dashboard',
      subtitle: '• Excel • VBA • Data Analytics',
      desc: 'An interactive Excel-based dashboard analyzing Adidas’ US sales performance. Includes automated reporting, dynamic filters, KPIs, regional sales insights, retailer breakdowns, sales methods, and time-series trends. Built using advanced Excel functions, PivotTables, slicers, and VBA for automation and interactivity.',
      tags: ['Excel','VBA','Data Visualization','Analytics','Dashboard'],
      github: 'https://github.com/poojasukhdeve-project/Advance-Excel-Adidas-Sales-Dashboard'
    },
    {
      title: 'Diamond Price Analysis',
      subtitle: 'Python • Kaggle',
      desc: 'EDA on diamond prices focusing on Premium cut.',
      tags: ['EDA','Statistics','Python'],
      github: '#'
    }
  ];

  const webProjects = [
    {
      title: 'Stock Momentum Analyzer',
      subtitle: 'React + Vite • Node.js/Express • GraphQL API • SMA/EMA/RSI Engine • MongoDB',
      desc: 'Built production-ready quantitative trading platform processing multi-day rolling calculations (SMA20, EMA20, RSI14) and generating automated BUY/SELL signals through proprietary Momentum Score algorithm (0–100) using rule-driven technical analysis',
      tags: ['React','Node.js','Postgres'],
      github: 'https://github.com/poojasukhdeve06/university-portal'
    },
    {
      title: 'Space-theme Portfolio Website',
      subtitle: 'React • Tailwind • Vite',
      desc: 'A modern, fully responsive personal portfolio built with Next.js. Showcases sections for projects, skills, and services with smooth animations, custom UI components, and a space-themed design. Includes optimized images, dynamic routing, reusable components, and fast performance powered by Next.js and Tailwind CSS.',
      tags: ['React','Tailwind','Vite'],
      github: 'https://github.com/poojasukhdeve06/portfolio'
    },
    {
      title: 'Flags Quiz - Geography Game',
      subtitle: 'Android • Java • REST API • Google Play Services',
      desc: 'An educational quiz app featuring world flags, capitals, and country info. Includes two game modes (Time & Practice), Google+ login for score sharing, multilingual support (12 languages), global leaderboard, and dynamic question generation.',
      tags: ['Android','Java','REST API','Google Play Services'],
      github: 'https://github.com/poojasukhdeve06/ecommerce-demo'
    }
  ];

const experience = [
  {
    role: 'Research Assistant',
    org: 'Boston University',
    date: 'Sept 2024 – Ongoing',
    bullets: [
      'Collaborating with Professor Eugene Pinsky to develop a Python-based data visualization module for visually impaired users using interactive shapes and pattern-based representations.',
      'Designing accessible visual encodings and building prototype demos for classroom evaluation.'
    ]
  },
  {
    role: 'Student Assistant',
    org: 'Boston University (IS&T)',
    date: 'Sept 2024 – Oct 2025',
    bullets: [
      'Streamlined IS&T operations by automating Outlook workflows using VBA and Power Automate, reducing manual processing time by 40%.',
      'Maintained inventory tracking systems in Excel for 250+ IT assets.',
      'Provided technical support during university conferences for 200+ attendees.'
    ]
  },
  {
    role: 'Software Developer Intern',
    org: 'ASVI Systems',
    date: 'May 2025 – Aug 2025',
    bullets: [
      'Designed scalable software solutions using AWS services and built CI/CD pipelines.',
      'Collaborated with cross-functional teams to enhance system performance.',
      'Contributed to code reviews and technical documentation.'
    ]
  },
  {
    role: 'Data Analyst',
    org: 'Tech Zenesis',
    date: 'Oct 2022 – Dec 2023',
    bullets: [
      'Managed end-to-end data analytics pipelines using Python and SQL.',
      'Built Power BI and Excel dashboards and performed A/B testing.'
    ]
  },
  {
    role: 'Software Developer',
    org: 'Interbeing Foundation',
    date: 'Apr 2020 – Jun 2022',
    bullets: [
      'Designed and maintained full-stack systems using Python, Node.js, and JavaScript.',
      'Worked in agile sprints and handled deployment and testing.'
    ]
  },
  {
    role: 'Web Developer',
    org: 'Oceans Software Technologies',
    date: 'Apr 2018 – Mar 2020',
    bullets: [
      'Developed 8+ full-stack web applications across multiple industries.',
      'Optimized APIs serving 10K+ daily requests and improved page load times by 40%.'
    ]
  },
  {
    role: 'Software Trainee – Android Development',
    org: 'SSIT Pvt. Ltd.',
    date: 'Dec 2016 – Jun 2017',
    bullets: [
      'Developed Android apps using Java and Android SDK.',
      'Implemented REST APIs, SQLite databases, and performance optimizations.'
    ]
  }
];
const education = [
  {
    school: 'Boston University',
    degree: 'M.S. in Computer Science',
    date: 'May 2026'
  },
  {
    school: 'Swami Ramanand Teerth Marathwada University',
    degree: 'B.Tech in Computer Science',
    date: 'Jun 2016'
  }
];

const publications = [
  'Winner — Boston University Hackathon 2024: Led a data science model project that delivered measurable business impact.',
  'Chapter contributor, IGI Global publications (2021) — AR in Immersive Virtual Learning Environments & Digital Built Environment.',
  'Chapter contributor, IGI Global publications (2021) — AR in Immersive Virtual Learning Environments & Digital Built Environment.'
];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Sticky Animated Navbar */}
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="sticky top-0 z-50 bg-gray-50/90 backdrop-blur border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{contact.name}</h1>
            <p className="text-sm">
              {contact.location} • {contact.phone} •{' '}
              <a href={`mailto:${contact.email}`} className="underline">
                {contact.email}
              </a>
            </p>
          </div>

          <nav className="space-x-4 text-sm">
            <a href="#data-projects" className="hover:underline">Data Projects</a>
            <a href="#web-projects" className="hover:underline">Web Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto p-6">

        {/* HERO */}
        <motion.section className="grid md:grid-cols-3 gap-8 items-center py-8" {...scrollReveal}>
          <div className="md:col-span-2">
            <h2 className="text-4xl font-extrabold leading-tight">
              Hi - I’m Pooja. Data Analyst & Software Developer | Turning complex data into actionable insights and scalable software.
            </h2>
            <p className="mt-4 text-lg">
              I’m a Data Analyst and Software Developer pursuing an M.S. in Computer Science at Boston University, with hands-on experience in analytics, machine learning, and full-stack development. I build data-driven applications that convert complex data into clear insights and scalable software.
            </p>
            <p className="mt-4 text-lg"> 
              My skill set includes Python, SQL, Tableau, React, Node.js, REST APIs, and modern analytics workflows. I’m seeking entry-level to early-career Data Analyst or Software Developer roles where I can apply analytical rigor, strong engineering practices, and a user-focused mindset to deliver measurable impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">

  {/* View Web Projects */}
  <a
    href="#web-projects"
    className="px-5 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition"
  >
    View Web Projects
  </a>

  {/* View Data Projects */}
  <a
    href="#data-projects"
    className="px-5 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition"
  >
    View Data Projects
  </a>

  {/* View Resume */}
  <a
    href="/Pooja_Sukhdeve_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
  >
    View Resume
  </a>

</div>

</div>
          {/* RIGHT SIDE: ABOUT CARD (THIS IS THE MISSING PART) */}
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="bg-white p-6 rounded-2xl shadow-sm"
  >
    <img
      src="/profile.png"
      alt="Pooja Sukhdeve"
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />

    <h3 className="text-center font-semibold text-lg">About Me</h3>

    <p className="text-center font-medium mt-1">{contact.name}</p>

    <p className="text-center text-sm text-gray-600 mt-1">
      Boston University • M.S. Computer Science (May 2026)
    </p>

    <div className="mt-4 text-sm">
      <p className="font-semibold">Core Skills</p>
      <p className="text-gray-700">
        Data Analysis • ML • React • Node.js • SQL • Tableau
      </p>
    </div>
  </motion.div>
</motion.section>

        {/* DATA PROJECTS */}
        <motion.section id="data-projects" className="py-8" {...scrollReveal}>
          <h3 className="text-2xl font-bold mb-4">Data Analytics Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {dataProjects.map((p, i) => (
              <motion.article
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white p-5 rounded-xl shadow-sm"
              >
               <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-200">
                 <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"/>
               </div>
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.subtitle}</p>
                <p className="mt-2 text-sm">{p.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* WEB PROJECTS */}
        <motion.section id="web-projects" className="py-8" {...scrollReveal}>
          <h3 className="text-2xl font-bold mb-4">Web Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {webProjects.map((p, i) => (
              <motion.article
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white p-5 rounded-xl shadow-sm"
              >
                <div className="h-36 bg-gray-100 rounded-md mb-3 flex items-center justify-center">Image</div>
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.subtitle}</p>
                <p className="mt-2 text-sm">{p.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
<motion.section
  id="experience"
  className="py-12"
  initial={{ y: 60, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <h3 className="text-2xl font-bold mb-6">Experience</h3>

  <div className="grid md:grid-cols-3 gap-6">
    {experience.map((e, idx) => (
      <motion.div
        key={idx}
        whileHover={{ y: -6 }}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <h4 className="font-semibold text-lg">{e.role}</h4>
        <p className="text-sm text-gray-600">
          {e.org} • {e.date}
        </p>

        <ul className="mt-4 list-disc ml-5 text-sm text-gray-700 space-y-1">
          {e.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* EDUCATION */}
<motion.section
  id="education"
  className="py-12"
  initial={{ y: 60, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <h3 className="text-2xl font-bold mb-6">Education</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {education.map((ed, idx) => (
      <div
        key={idx}
        className="bg-white p-6 rounded-xl shadow-sm"
      >
        <h4 className="font-semibold text-lg">{ed.school}</h4>
        <p className="text-sm text-gray-600 mt-1">
          {ed.degree} • {ed.date}
        </p>
      </div>
    ))}
  </div>
</motion.section>

{/* PUBLICATIONS & ACHIEVEMENTS */}
<motion.section
  id="publications"
  className="py-12"
  initial={{ y: 60, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <h3 className="text-2xl font-bold mb-6">
    Publications & Achievements
  </h3>

  <ul className="list-disc ml-6 space-y-3 text-sm text-gray-800">
    {publications.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
</motion.section>

        {/* Contact Us */}
<motion.section
  id="contact"
  className="py-12"
  initial={{ y: 60, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

  <div className="bg-white p-6 rounded-xl shadow-sm grid md:grid-cols-2 gap-8 items-center">
    
    {/* Left: Contact Info */}
    <div className="text-sm space-y-3">
      <p>
        If you’d like to collaborate, discuss opportunities, or have any questions,
        feel free to reach out.
      </p>

      <p>
        <strong>Email:</strong>{' '}
        <a href={`mailto:${contact.email}`} className="underline">
          {contact.email}
        </a>
      </p>

        <p>
        <strong>Alternative Email:</strong>{' '}
        <a href={`mailto:${contact.email_secondary}`} className="underline">
          {contact.email_secondary}
        </a>
      </p>

      <p>
        <strong>Phone (US):</strong> {contact.phone}
      </p>

      <p>
        <strong>Phone (India):</strong> {contact.phone_secondary}
      </p>

      <p>
        <strong>LinkedIn:</strong>{' '}
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          View Profile
        </a>
      </p>
    </div>

    {/* Right: Contact Form */}
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thanks! Message sending is disabled in demo.');
      }}
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded"
        required
      />
      <textarea
        rows={4}
        placeholder="Your Message"
        className="w-full p-3 border rounded"
        required
      />
      <button className="px-5 py-2 rounded bg-gray-900 text-white">
        Send Message
      </button>
    </form>

  </div>
</motion.section>

      </main>
    </div>
  );
}

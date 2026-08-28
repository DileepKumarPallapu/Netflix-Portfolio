import { useState } from 'react';

const certificates = [
  {
    "page": 1,
    "title": "Building AI-Powered Search with MongoDB Vector Search",
    "issuer": "MongoDB / Credly",
    "date": "Jul 10, 2026",
    "pdf": "/assets/certificates/docs/01-building-ai-powered-search-with-mongodb-vector-search.pdf"
  },
  {
    "page": 2,
    "title": "AI and Innovation: How MongoDB Enables a Resilient AI Strategy",
    "issuer": "MongoDB",
    "date": "Jul 08, 2026",
    "pdf": "/assets/certificates/docs/02-ai-and-innovation-how-mongodb-enables-a-resilient-ai-strategy.pdf"
  },
  {
    "page": 3,
    "title": "Building AI Agents with MongoDB",
    "issuer": "MongoDB / Credly",
    "date": "Jul 10, 2026",
    "pdf": "/assets/certificates/docs/03-building-ai-agents-with-mongodb.pdf"
  },
  {
    "page": 4,
    "title": "Building RAG Apps Using MongoDB",
    "issuer": "MongoDB / Credly",
    "date": "Jul 10, 2026",
    "pdf": "/assets/certificates/docs/04-building-rag-apps-using-mongodb.pdf"
  },
  {
    "page": 5,
    "title": "CRUD Operations in MongoDB",
    "issuer": "MongoDB / Credly",
    "date": "Jul 10, 2026",
    "pdf": "/assets/certificates/docs/05-crud-operations-in-mongodb.pdf"
  },
  {
    "page": 6,
    "title": "MongoDB Basics for Students",
    "issuer": "MongoDB",
    "date": "Jul 08, 2026",
    "pdf": "/assets/certificates/docs/06-mongodb-basics-for-students.pdf"
  },
  {
    "page": 7,
    "title": "AP Cybersecurity",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jul 07, 2026",
    "pdf": "/assets/certificates/docs/07-ap-cybersecurity.pdf"
  },
  {
    "page": 8,
    "title": "Ethical Hacker",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jul 11, 2026",
    "pdf": "/assets/certificates/docs/08-ethical-hacker.pdf"
  },
  {
    "page": 9,
    "title": "Industrial Cybersecurity Essentials",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jul 11, 2026",
    "pdf": "/assets/certificates/docs/09-industrial-cybersecurity-essentials.pdf"
  },
  {
    "page": 11,
    "title": "From Idea to Product: A Design Thinking Approach",
    "issuer": "Vel Tech TBI & Institution’s Innovation Council",
    "date": "Aug 09, 2025",
    "pdf": "/assets/certificates/docs/11-from-idea-to-product-a-design-thinking-approach.pdf"
  },
  {
    "page": 14,
    "title": "Oracle Guided Learning Administrator Certified Foundations Associate - Rel 1",
    "issuer": "Oracle University",
    "date": "Aug 16, 2025",
    "pdf": "/assets/certificates/docs/14-oracle-guided-learning-administrator-certified-foundations-associate-rel-1.pdf"
  },
  {
    "page": 15,
    "title": "CompTIA IT Fundamentals: Operating Systems",
    "issuer": "CompTIA",
    "date": "Feb 15, 2025",
    "pdf": "/assets/certificates/docs/15-comptia-it-fundamentals-operating-systems.pdf"
  },
  {
    "page": 16,
    "title": "Building a Scalable Business Model",
    "issuer": "Vel Tech TBI & Institution’s Innovation Council",
    "date": "Jul 31, 2025",
    "pdf": "/assets/certificates/docs/16-building-a-scalable-business-model.pdf"
  },
  {
    "page": 17,
    "title": "Entrepreneurship",
    "issuer": "Turnip Innovations Private Limited",
    "date": "Jan 22, 2026",
    "pdf": "/assets/certificates/docs/17-entrepreneurship.pdf"
  },
  {
    "page": 19,
    "title": "Python Concurrent Programming: Introduction to Concurrent Programming",
    "issuer": "WingSpan",
    "date": "Oct 15, 2025",
    "pdf": "/assets/certificates/docs/19-python-concurrent-programming-introduction-to-concurrent-programming.pdf"
  },
  {
    "page": 20,
    "title": "Programming Fundamentals: Command Line Interface & Operating System Commands",
    "issuer": "WingSpan",
    "date": "Mar 25, 2026",
    "pdf": "/assets/certificates/docs/20-programming-fundamentals-command-line-interface-and-operating-system-commands.pdf"
  },
  {
    "page": 21,
    "title": "Securing the Backend Layers",
    "issuer": "WingSpan",
    "date": "Apr 13, 2026",
    "pdf": "/assets/certificates/docs/21-securing-the-backend-layers.pdf"
  },
  {
    "page": 22,
    "title": "Creative Thinking",
    "issuer": "WingSpan",
    "date": "Oct 23, 2025",
    "pdf": "/assets/certificates/docs/22-creative-thinking.pdf"
  },
  {
    "page": 23,
    "title": "Mastering Palo Alto Networks",
    "issuer": "WingSpan",
    "date": "Apr 13, 2026",
    "pdf": "/assets/certificates/docs/23-mastering-palo-alto-networks.pdf"
  },
  {
    "page": 24,
    "title": "R Data Structures",
    "issuer": "WingSpan",
    "date": "Sep 09, 2025",
    "pdf": "/assets/certificates/docs/24-r-data-structures.pdf"
  },
  {
    "page": 25,
    "title": "Data Structures & Algorithms in Python: Implementing Trees & Graphs",
    "issuer": "WingSpan",
    "date": "Aug 21, 2025",
    "pdf": "/assets/certificates/docs/25-data-structures-and-algorithms-in-python-implementing-trees-and-graphs.pdf"
  },
  {
    "page": 26,
    "title": "Advanced Data Structures and Algorithms in Python",
    "issuer": "WingSpan",
    "date": "Aug 23, 2025",
    "pdf": "/assets/certificates/docs/26-advanced-data-structures-and-algorithms-in-python.pdf"
  },
  {
    "page": 27,
    "title": "Data Structures & Algorithms in Python: Sorting Algorithms",
    "issuer": "WingSpan",
    "date": "Feb 15, 2025",
    "pdf": "/assets/certificates/docs/27-data-structures-and-algorithms-in-python-sorting-algorithms.pdf"
  },
  {
    "page": 28,
    "title": "STEM Components",
    "issuer": "WingSpan",
    "date": "Oct 14, 2025",
    "pdf": "/assets/certificates/docs/28-stem-components.pdf"
  },
  {
    "page": 30,
    "title": "Basics of Electronics & Programming",
    "issuer": "WingSpan",
    "date": "Oct 14, 2025",
    "pdf": "/assets/certificates/docs/30-basics-of-electronics-and-programming.pdf"
  },
  {
    "page": 32,
    "title": "Data Management",
    "issuer": "WingSpan",
    "date": "Oct 10, 2025",
    "pdf": "/assets/certificates/docs/32-data-management.pdf"
  },
  {
    "page": 33,
    "title": "CCNA: Introduction to Networks",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Apr 04, 2026",
    "pdf": "/assets/certificates/docs/33-ccna-introduction-to-networks.pdf"
  },
  {
    "page": 34,
    "title": "Python Essentials 2",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jun 25, 2026",
    "pdf": "/assets/certificates/docs/34-python-essentials-2.pdf"
  },
  {
    "page": 35,
    "title": "Python Essentials 1",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jun 25, 2026",
    "pdf": "/assets/certificates/docs/35-python-essentials-1.pdf"
  },
  {
    "page": 36,
    "title": "Introduction to Modern AI",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jun 21, 2026",
    "pdf": "/assets/certificates/docs/36-introduction-to-modern-ai.pdf"
  },
  {
    "page": 37,
    "title": "Introduction to Data Science",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jun 20, 2026",
    "pdf": "/assets/certificates/docs/37-introduction-to-data-science.pdf"
  },
  {
    "page": 38,
    "title": "Introduction to Cybersecurity",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jul 03, 2026",
    "pdf": "/assets/certificates/docs/38-introduction-to-cybersecurity.pdf"
  },
  {
    "page": 40,
    "title": "CCNA: Switching, Routing, and Wireless Essentials",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jun 30, 2026",
    "pdf": "/assets/certificates/docs/40-ccna-switching-routing-and-wireless-essentials.pdf"
  },
  {
    "page": 42,
    "title": "CCNA: Enterprise Networking, Security, and Automation",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jun 29, 2026",
    "pdf": "/assets/certificates/docs/42-ccna-enterprise-networking-security-and-automation.pdf"
  },
  {
    "page": 43,
    "title": "Apply AI: Analyze Customer Reviews",
    "issuer": "VelTech / Cisco Networking Academy",
    "date": "Jun 21, 2026",
    "pdf": "/assets/certificates/docs/43-apply-ai-analyze-customer-reviews.pdf"
  },
  {
    "page": 45,
    "title": "Web Development Internship Certificate",
    "issuer": "Infinity Connects Media",
    "date": "Jun 01 – Jul 01, 2026",
    "pdf": "/assets/certificates/docs/45-web-development-internship.pdf"
  },
  {
    "page": 46,
    "title": "TCS CodeVita Season 13 — Rank Certificate",
    "issuer": "Tata Consultancy Services",
    "date": "Global Rank 13540",
    "pdf": "/assets/certificates/TCS-CodeVita-Season13.pdf"
  }
];

const Certificates = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="relative bg-[#050505] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[420px] sm:w-[650px] h-[420px] sm:h-[650px] bg-red-700/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-1.5 rounded bg-black/80 border border-red-600/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 shrink-0 rounded-full bg-red-600 animate-pulse" />
            <span className="text-red-500 font-bold">EPISODE 05</span>
            <span className="text-white/40">|</span>
            <span>CREDENTIAL VAULT</span>
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-none">
            CERTIFICATES <span className="text-red-600">&amp; ACHIEVEMENTS.</span>
          </h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-white/55 leading-relaxed">
            37 verified credentials covering AI, MongoDB, Python, cybersecurity, networking, data structures, internships, entrepreneurship and technical achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {certificates.map((certificate) => (
            <article
              key={certificate.page}
              className="group min-w-0 rounded-2xl bg-[#101010] border border-white/10 p-4 sm:p-5 hover:border-red-600/60 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase tracking-[.14em] sm:tracking-[.18em] font-mono text-red-500 truncate">
                    {certificate.issuer}
                  </p>
                  <h3 className="mt-1.5 text-sm sm:text-[15px] font-bold leading-snug text-white break-words">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 text-[10px] font-mono text-white/35">{certificate.date}</p>
                </div>
                <span className="shrink-0 text-[9px] font-mono text-white/25">
                  #{String(certificate.page).padStart(2, '0')}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActive(certificate)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-red-600/50 bg-red-600/10 hover:bg-red-600 hover:text-white text-red-500 text-[9px] font-mono uppercase tracking-wider font-bold transition-all"
                >
                  View Certificate ↗
                </button>
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[9px] font-mono uppercase tracking-wider font-bold transition-all"
                >
                  Open PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md p-2 sm:p-4 md:p-10 flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-5xl max-h-[96vh] bg-[#0d0d0d] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 p-3 sm:p-4 md:p-5 border-b border-white/10">
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[.16em] text-red-500 truncate">
                  {active.issuer}
                </p>
                <h3 className="mt-1 font-bold text-sm sm:text-base leading-snug">{active.title}</h3>
              </div>
              <button
                type="button"
                aria-label="Close certificate"
                onClick={() => setActive(null)}
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 hover:border-red-600 hover:text-red-500 transition text-xl"
              >
                ×
              </button>
            </div>

            <div className="p-2 sm:p-4 md:p-6 overflow-auto max-h-[calc(96vh-90px)] bg-black">
              <iframe
                src={active.pdf}
                title={active.title}
                className="w-full h-[72vh] min-h-[420px] sm:min-h-[560px] rounded-xl bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

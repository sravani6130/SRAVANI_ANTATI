import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Graph-Augmented Narrative QA System (Python, NLP, RAG, FAISS, BM25, NetworkX)',
    github: 'https://github.com/sravani6130/PROJECTS/tree/main/NLP/PROJECTS/Hallucinating_llamas_end_submission',
    points: [
      'Built a Graph-Augmented Retrieval-Augmented Generation (RAG) system for long-form narrative question answering, integrating FAISS, BM25, Named Entity Recognition (NER), coreference resolution, and dynamic knowledge graph reasoning across 706 books and 17.9K+ questions.',
      'Designed and evaluated a hybrid retrieval pipeline with graph-neighbor expansion and MMR reranking; conducted ablation studies across Dense, BM25, Hybrid, and Graph-based retrieval methods, achieving 4.54 F1 and 4.51 ROUGE-L.'
    ]
  },
  {
    title: 'Distributed Network File System (C, TCP/IP Sockets, Distributed Systems, Trie, LRU Cache)',
    github: 'https://github.com/sravani6130/Network-File-System',
    points: [
      'Developed a distributed Network File System (NFS) in C using a multi-tier architecture comprising Clients, Naming Server, and Storage Servers, enabling remote file operations including create, delete, copy, read, write, and directory management through TCP socket communication.',
      'Engineered efficient metadata management with Trie-based path indexing and LRU caching for fast file discovery and request routing; supported dynamic storage server registration, fault handling, and scalable access across multiple storage servers.'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-title"
                >
                  <span>{project.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="external-link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                <ul className="project-points">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

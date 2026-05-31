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
  },
  {
    title: 'Full-Stack Marketplace Platform (React.js, Node.js, Express.js, MongoDB, JWT, REST APIs)',
    github: 'https://github.com/sravani6130/BUYSELL-IIITH',
    points: [
      'Developed a full-stack e-commerce marketplace using React.js, Node.js, Express.js, and MongoDB, enabling user authentication, profile management, product listings, category-based search, and buyer-seller interactions through RESTful APIs.',
      'Implemented secure backend services with JWT authentication, BCrypt password hashing, cart and order management workflows, and OTP-based delivery verification, ensuring reliable and scalable transaction processing.'
    ]
  },
  {
    title: 'Transformer-Based Code Translation System (CodeT5, Transformers, PyTorch, CodeBLEU, NLP)',
    github: '#',
    points: [
      'Fine-tuned the CodeT5 (Salesforce/codet5-small) transformer model for automated Python-to-C++ code translation using PyTorch and Hugging Face Transformers, implementing custom preprocessing, tokenization pipelines, dataset augmentation, and sequence-to-sequence training workflows.',
      'Designed a comprehensive evaluation framework leveraging BLEU, ROUGE-L, Exact Match, and CodeBLEU metrics, and developed attention-based model interpretability visualizations to analyze translation quality, improve model performance, and validate generated C++ code outputs.'
    ]
  },
  {
    title: 'Polymind AI: Multi-Agent Reasoning System (LLMs, Agent Systems, MCP, Tool Integration, AI Agents)',
    github: 'https://github.com/sravani6130/PROJECTS/tree/main/NLP/PROJECTS/PolyMind-Multi_Agent_Study_Assistant',
    points: [
      'Built a terminal-based multi-agent reasoning system featuring specialized Coding, Math, and General AI agents, integrating MCP-powered tools for code execution, mathematical computation, web scraping, and context-aware information retrieval.',
      'Designed and implemented an autonomous reasoning pipeline with query preprocessing, intelligent tool orchestration, and response post-processing, enabling dynamic tool invocation and consistent high-quality AI-generated outputs.'
    ]
  },
  {
    title: 'C-Shell: Linux Process and I/O Management System',
    github: 'https://github.com/sravani6130/Simple-C-Shell',
    points: [
      'Developed a Unix-like command-line shell in C supporting custom built-in commands, command history, background/foreground process execution, and directory navigation, leveraging Linux system calls such as fork(), execvp(), waitpid(), and chdir().',
      'Implemented advanced shell functionalities including I/O redirection, command piping, process management, signal handling (SIGINT, SIGTSTP, SIGCHLD), and /proc-based process inspection, enabling efficient execution and monitoring of concurrent processes in a Linux environment.'
    ]
  },
  {
    title: 'GeoLens: Multi-Task Visual Geolocation and Scene Understanding System (Computer Vision, Deep Learning, ConvNeXt)',
    github: 'https://github.com/sravani6130/Geolens',
    points: [
      'Developed a multi-task computer vision system capable of predicting image geographic coordinates (latitude/longitude), camera orientation (0–360°), and scene region classification directly from visual content using ConvNeXt-based deep learning architectures and transfer learning.',
      'Engineered specialized learning pipelines including GPS coordinate regression, angle prediction via sine-cosine encoding with custom loss functions, and class-imbalance-aware scene classification using weighted sampling and weighted cross-entropy, improving model robustness and generalization across diverse environments.'
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

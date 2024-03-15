const classes = [
  {
    code: "CS 324",
    className: "Systems Programming",
    description:
      "Systems programming principles and concepts, including Linux systems programming, multiprocessing, concurrency, exceptional control flow, caching, sockets, protocols, and non-blocking I/O.",
    prerequisite: "CS 224",
    level: "Intermediate",
    Specialty: "",
  },
  {
    code: "CS 471",
    className: "Voice User Interfaces",
    description:
      "Methods and development platforms for Voice User Interfaces. Principles of effective design; differences from visual or menu-based interfaces’ mechanics of automatic speech recognition, intent detection, slot filling, dialog state tracking, text generation, and knowledge representation.",
    prerequisite: "",
    level: "Advanced",
    Specialty: "Human-Computer Interaction and Emerging Technologies",
  },
  {
    code: "CS 260",
    className: "Web Programming",
    description:
      "Introduction to web application design and implementation. Both front end and back end development with an emphasis on REST architectures.",
    prerequisite: "CS 111",
    level: "Beginner",
    Specialty: "",
  },

  {
    code: "CS 393",
    className: "Advanced Algorithms and Problem Solving",
    description:
      "This course will help students to become better at problem solving, increasing their ability to excel at technical/coding interviews (a challenging part of the hiring/interviewing process). Students will build on the algorithms and problem-solving strategies that they were taught and had limited practice with in CS 312.",
    prerequisite: "CS 312",
    level: "Intermediate",
    Specialty: "",
  },
  {
    code: "CS 240",
    className: "Advanced Software Construction",
    description:
      "Advanced software development with an object-oriented focus. Design, implementation, and testing of medium-sized programs including a server program.",
    prerequisite: "CS 235",
    level: "Intermediate",
    Specialty: "",
  },
  {
    code: "CS 356",
    className: "Advanced Techniques in Human Computer Interaction",
    description:
      "This class combines designing the user experience with implementing the technology. Students learn website design, information architecture, and how to design for the broader ecosystem of use. Finally, students will learn principles specifically relevant to website design and information architecture. Web design is one of the most common UX jobs and so this makes their skills highly marketable.",
    prerequisite: "CS 256, CS 260",
    level: "Intermediate",
    Specialty: "",
  },

  {
    code: "CS 312",
    className: "Algorithm Design and Analysis",
    description:
      "A study of the design and analysis of algorithms as solutions to problems, including dynamic programming, linear programming, greedy algorithms, divide-and-conquer algorithms, graph algorithms, and intelligent search algorithms.",
    prerequisite: "CS 236",
    level: "Intermediate",
    Specialty: "",
  },
  {
    code: "CS 329",
    className: "Testing, Analysis, and Verification",
    description:
      "Fundamental challenge of software quality through the entire software product life-cycle. Sound engineering principles to ensure and assure quality at each stage of the life-cycle with an emphasis in early stages on testing techniques, dynamic and static program analysis, and formal verification for high assurance systems. Practical application to software artifacts and algorithm implementation connects the course material to real world application in the field.",
    prerequisite: "CS 240",
    level: "Intermediate",
    Specialty: "",
  },
  {
    code: "CS 301R",
    className: "Topics in Computer Science",
    description: "Undergraduate-level topics as announced.",
    prerequisite: "",
    level: "Intermediate",
    Specialty: "",
  },
  {
    code: "CS 497R",
    className: "Undergraduate Research",
    description:
      "Students receive course credit for doing undergraduate research under the supervision of a faculty mentor.",
    prerequisite: "",
    level: "Advanced",
    Specialty: "Miscellaneous Advanced Topics",
  },
  {
    code: "CS 498R",
    className: "Undergraduate Special Projects",
    description:
      "Students identify an interesting problem in computer science and solve it with the aid of faculty members.",
    prerequisite: "CS 240",
    level: "Advanced",
    Specialty: "Miscellaneous Advanced Topics",
  },
  {
    code: "CS 486",
    className: "Verification and Validation",
    description:
      "Foundational topics in verification and validation; the application of logic to building correct systems. Covers logics to formally specify properties of systems, verifications of basic systems, and advanced topics in formal verification for complex systems.",
    prerequisite: "CS 312",
    level: "Advanced",
    Specialty: "Computer Systems and Security",
  },

  {
    code: "CS 501R",
    className: "Advanced Topics in Computer Science",
    description:
      "Advanced undergraduate- and graduate-level subjects as announced before each semester.",
    prerequisite: "",
    level: "Advanced",
    Specialty: "Miscellaneous Advanced Topics",
  },
  {
    code: "CS 142",
    className: "Introduction to Computer Programming",
    description:
      "Introduction to object-oriented program design and development. Principles of algorithm formulation and implementation.",
    prerequisite: "",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 111",
    className: "Introduction to Computer Science",
    description:
      "Teaches how to design, develop, reason about, and test programs. Topics include higher-order functions, object-oriented programming, recursion, algorithms, data structures, decomposition, interpreters, and regular expressions.",
    prerequisite: "",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 224",
    className: "Introduction to Computer Systems",
    description:
      "How a computer works to execute sequential code: low level data representation and abstraction, the relationship between C and assembly, computer architecture and pipelining, the memory hierarchy, dynamic memory allocation, and linking.",
    prerequisite: "",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 180",
    className: "Introduction to Data Science",
    description:
      "statistics; linear algebra; machine learning; data cleaning and visualization; data literacy; decomposing data science problems; critical thinking about analysis; potential pitfalls in data science",
    prerequisite: "",
    level: "Beginner",
    Specialty: "",
  },

  {
    code: "CS 256",
    className: "Introduction to Human Computer Interaction",
    description:
      "Design user experiences with technology that make a meaningful difference in people’s lives. Methods to establish user needs, derive designs, assess tradeoffs, and report results. Develop and iterate prototypes with feedback from representative users.",
    prerequisite: "",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 202",
    className: "Software Engineering Lab 1",
    description:
      "The first of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice. In addition to hands-on lab experiences, this course contains lecture and assigned reading content that will provide an understanding of what a software engineering career is and what roles and responsibilities are available to software engineers.",
    prerequisite: "CS 111",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 203",
    className: "Software Engineering Lab 2",
    description:
      "The second of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice. The lab experiences in this course build on those learned in CS 202 and focus on tools and techniques for source code testing, automated source code analysis, and source code build and dependency management.",
    prerequisite: "CS 202",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 201R",
    className: "Topics in Computer Science",
    description:
      "Undergraduate level subjects as announced before each semester.",
    prerequisite: "",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 235",
    className: "Data Structures and Algorithms",
    description:
      "Fundamental data structures and algorithms of computer science; basic algorithm analysis; recursion; sorting and searching; lists, stacks, queues, trees, hashing; object-oriented data abstraction.",
    prerequisite: "CS 142",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 236",
    className: "Discrete Structures",
    description:
      "Introduction to grammars and parsing; predicate and propositional logic; proof techniques; sets, functions, relations, relational data model; graphs and graph algorithms.",
    prerequisite: "CS 235",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 110",
    className: "How to Program",
    description:
      "Introduction to programming and computer science for those with no prior programming experience. Focuses on the basic aspects of programming, with an emphasis on core principles. Labs provide a supportive environment to learn how to program with peers. Weekly discussions will introduce some of the many ways computer science interacts with society. Programming assignments will demonstrate how to use computing in a variety of disciplines.",
    prerequisite: "",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 252",
    className: "Introduction to Computational Theory",
    description:
      "Finite state automata, regular languages, lexical analysis; push-down automata, context-free languages, parsing; Turing machines and unrestricted grammars; computability complexity, NP-completeness.",
    prerequisite: "",
    level: "Beginner",
    Specialty: "",
  },
  {
    code: "CS 199R",
    className: "Academic Internship",
    description:
      "Internships or cooperative education experiences with organizations outside BYU.",
    prerequisite: "",
    level: "Intermediate",
    Specialty: "",
  },

  {
    code: "CS 330",
    className: "Concepts of Programming Languages",
    description:
      "Principles and concepts characterizing high-level computer programming languages, process and data abstration, encapsulation, inheritance, functional programming, logic programming, scanners, and parsers.",
    prerequisite: "CS 236, CS 224",
    level: "Intermediate",
    Specialty: "",
  },

  {
    code: "CS 404",
    className: "Ethics and Computers in Society",
    description:
      "Societal impact of computer technology, the computer scientist's place in society, ethical issues. Reading, discussion, and writing seminar.",
    prerequisite: "CS 240",
    level: "Intermediate",
    Specialty: "",
  },

  {
    code: "CS 355",
    className: "Interactive Graphics and Image Processing",
    description:
      "Introduces basic concepts of computer graphics and image processing. Includes characteristics of physical cameras and displays; color models; basic image processing algorithms: 2D and 3D homogeneous coordinate transformations; fundamentals of 3D rendering geometry; lighting and shading: image warping and texture mapping; and frequency-domain processing.",
    prerequisite: "",
    level: "Intermediate",
    Specialty: "",
  },
  {
    code: "CS 470",
    className: "Introduction to Artificial Intelligence",
    description:
      "Introduction to core areas of artifical intelligence; intelligent agents, problem solving and search, knowledge-based systems and inference, planning, uncertainty, learning, and perception.",
    prerequisite: "",
    level: "Intermediate",
    Specialty: "",
  },

  {
    code: "CS 345",
    className: "Operating Systems Design",
    description:
      "Principles and concepts of operating systems design and the implementation of an operating system.",
    prerequisite: "CS 224, CS 240",
    level: "Intermediate",
    Specialty: "",
  },

  {
    code: "CS 340",
    className: "Software Design",
    description:
      "Use design, development, testing and refactoring techniques to build and evolve reliable, maintainable and scalable software systems. Covers a wide range of design patterns and principles. Also introduces students to software architecture and architectural patterns.",
    prerequisite: "CS 240, CS 260",
    level: "Intermediate",
    Specialty: "",
  },

  {
    code: "CS 204",
    className: "Software Engineering Lab 3",
    description:
      "The third of three experiential learning labs that will provide students with hands-on experience with various tools, technologies, and techniques that software engineers use in practice. The lab experiences in this course build on those learned in CS 202 and CS 203 and focus on tools and techniques for cloud development and Agile programming.",
    prerequisite: "CS 204",
    level: "Intermediate",
    Specialty: "",
  },

  {
    code: "CS 431",
    className: "Algorithmic Languages and Compilers",
    description:
      "Formal description of algorithmic languages and techniques used in their compilation: semantics, ambiguities, procedures, replication, iteration, recursion.",
    prerequisite: "CS 340",
    level: "Advanced",
    Specialty: "Software Engineering and Development",
  },
  {
    code: "CS 466",
    className: "Blockchain Technologies",
    description:
      "Technical underpinnings of blockchain-based systems, including cryptocurrency, smart contracts, decentralized finance (De-Fi), and Web3. Explores which problems are suitable for a blockchain-based solution and discusses arguments in favor and against blockchain systems.",
    prerequisite: "CS 312",
    level: "Advanced",
    Specialty: "Computer Systems and Security",
  },
  {
    code: "CS 500",
    className: "Business Career Essentials in Science and Math",
    description:
      "Introduction for science, math, and statistics majors to careers in industry. Project planning, oral and written business presentations, business accounting, and technology readiness.",
    prerequisite: "",
    level: "Advanced",
    Specialty: "Software Engineering and Development",
  },
  {
    code: "CS 494",
    className: "Capstone 1",
    description:
      "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, test, and demonstrate a major project.",
    prerequisite: "CS 240",
    level: "Advanced",
    Specialty: "Software Engineering and Development",
  },
  {
    code: "CS 495",
    className: "Capstone 2",
    description:
      "The second semester of a culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, test, and demonstrate a major project.",
    prerequisite: "CS 240",
    level: "Advanced",
    Specialty: "Software Engineering and Development",
  },
  {
    code: "CS 460",
    className: "Computer Communications and Networking",
    description:
      "Introduction to data communications and computer networking. Communications fundamentals, computer networks, software, architecture, telecommunications, regulation, standards.",
    prerequisite: "CS 324",
    level: "Advanced",
    Specialty: "Computer Systems and Security",
  },
  {
    code: "CS 455",
    className: "Computer Graphics",
    description:
      "Interactive computer graphics systems programming and architecture.",
    prerequisite: "CS 355, MATH 213, MATH 215",
    level: "Advanced",
    Specialty: "Human-Computer Interaction and Emerging Technologies",
  },
  {
    code: "CS 465",
    className: "Computer Security",
    description:
      "Introduction to computer security fundamentals: confidentiality, integrity, authentication, and access control. Secret key and public key cryptography, network security protocols, viruses, and fire walls.",
    prerequisite: "CS 324",
    level: "Advanced",
    Specialty: "Computer Systems and Security",
  },
  {
    code: "CS 450",
    className: "Computer Vision",
    description:
      "Introduction to fundamental concepts and algorithms of computer vision, including feature extraction, detection, segmentation, registration, recognition, motion, 3D vision, and image understanding. Applies techniques from image processing, geometry, Bayesian methods, optimization, and machine learning to computer vision problems.",
    prerequisite: "CS 312, MATH 213, MATH 215",
    level: "Advanced",
    Specialty: "Human-Computer Interaction and Emerging Technologies",
  },
  {
    code: "CS 493R",
    className: "Computing Competitions",
    description:
      "Students work in teams to prepare for and compete in computer science competitions in areas such as programming, data science, and ethical hacking",
    prerequisite: "CS 240",
    level: "Advanced",
    Specialty: "Miscellaneous Advanced Topics",
  },
  {
    code: "CS 405",
    className: "Creating and Managing a Software Business",
    description:
      "Entrepreneurship, idea/opportunity generation, strategic planning, legal organization, product development, marketing/sales, customer support, fund raising, and effective management.",
    prerequisite: "CS 240",
    level: "Advanced",
    Specialty: "Software Engineering and Development",
  },
  {
    code: "CS 482",
    className: "Data Science Capstone 1",
    description:
      "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
    prerequisite: "CS 240, CS 312",
    level: "Advanced",
    Specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 483",
    className: "Data Science Capstone 2",
    description:
      "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
    prerequisite: "CS 482",
    level: "Advanced",
    Specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 452",
    className: "Database Modeling Concepts",
    description:
      "Database models: relational, deductive, object-oriented. Integrity constraints, query languages, database design.",
    prerequisite: "CS 240",
    level: "Advanced",
    Specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 580",
    className: "Theory of Predictive Modeling",
    description:
      "Mathematical, computational, and philosophical foundations of machine learning, control, and physical modeling. Introduction to system identification, causality, uncertainty, model approximation, and information geometry.",
    prerequisite: "MATH 213, MATH 215",
    level: "Advanced",
    Specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 452",
    className: "Database Modeling Concepts",
    description:
      "Database models: relational, deductive, object-oriented. Integrity constraints, query languages, database design.",
    prerequisite: "CS 240",
    level: "Advanced",
    Specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 580",
    className: "Theory of Predictive Modeling",
    description:
      "Mathematical, computational, and philosophical foundations of machine learning, control, and physical modeling. Introduction to system identification, causality, uncertainty, model approximation, and information geometry.",
    prerequisite: "MATH 213, MATH 215",
    level: "Advanced",
    Specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 401R",
    className: "Topics in Computer Science",
    description:
      "Undergraduate level subjects as announced before each semester.",
    prerequisite: "",
    level: "Advanced",
    specialty: "Miscellaneous Advanced Topics",
  },
  {
    code: "CS 428",
    className: "Software Engineering",
    description:
      "Analysis, design, implementation, and testing of significant software systems.",
    prerequisite: "CS 340",
    level: "Advanced",
    specialty: "Software Engineering and Development",
  },
  {
    code: "CS 480",
    className: "Software Engineering Capstone 1",
    description:
      "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
    prerequisite: "CS 329, CS 340",
    level: "Advanced",
    specialty: "Software Engineering and Development",
  },
  {
    code: "CS 481",
    className: "Software Engineering Capstone 2",
    description:
      "Culminating experience based on skills learned in advanced technical courses. Students work in teams to plan, design, implement, test, and demonstrate a major project.",
    prerequisite: "CS 480",
    level: "Advanced",
    specialty: "Software Engineering and Development",
  },
  {
    code: "CS 472",
    className: "Introduction to Machine Learning",
    description:
      "Machine learning models and other mechanisms allowing computers to learn and find knowledge from data.",
    prerequisite: "",
    level: "Advanced",
    specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 479",
    className: "Introduction to Machine Translation",
    description:
      "Evolution of machine translation technologies and algorithms, with a foundation in basic algorithms, human-machine interaction, automatic adaptation, statistical and neural models, multilingual models, multimodal models, quality evaluation and estimation, and speech-to-speech translation.",
    prerequisite: "CS 240",
    level: "Advanced",
    specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 575",
    className: "Introduction to Network Science with Applications",
    description:
      "Introduction to current topics in network science including network formation models, information flow over networks, and key network properties.",
    prerequisite: "",
    level: "Advanced",
    specialty: "Computer Systems and Security",
  },
  {
    code: "CS 462",
    className: "Large-Scale Distributed System Design",
    description:
      "Principles and concepts of designing and building distributed systems. Introduction to architectures for distributed computation. Reliability, availability, and scalability of large applications. Cloud computing and APIs.",
    prerequisite: "",
    level: "Advanced",
    specialty: "Computer Systems and Security",
  },
  {
    code: "CS 456",
    className: "Mobile and Ubiquitous Human-Computer Interaction",
    description:
      "Iterative user experience design for mobile and ubiquitous computing with an emphasis on conceptualization and prototyping in specific contexts. Complete an open-ended project from initial design through functional prototype, with design and critique sessions.",
    prerequisite: "CS 356",
    level: "Advanced",
    specialty: "Human-Computer Interaction and Emerging Technologies",
  },
  {
    code: "CS 474",
    className: "Introduction to Deep Learning",
    description:
      "Theory and practice of modern deep learning and associated software frameworks. A broad look at the field, drawing on material from machine vision, machine translation, dynamical systems, audio processing, neural computing and human perception. Supporting mathematical concepts are also covered, including linear algebra, stochastic optimization, and hardware acceleration.",
    prerequisite: "CS 312",
    level: "Advanced",
    specialty: "Data Science and Machine Learning",
  },
  {
    code: "CS 453",
    className: "Fundamentals of Information Retrieval",
    description:
      "Concepts and terminology of information retrieval (IR) systems. Design methodologies and issues. Fundamental IR models examined: Boolean, Vector Space, Probabilistic models, and evaluation strategies.",
    prerequisite: "CS 240",
    level: "Advanced",
    specialty: "Computer Systems and Security",
  },
  {
    code: "CS 513",
    className: "Robust Control",
    description:
      "Introduction to the analysis and design of feedback systems guaranteed to perform well in spite of model uncertainty.",
    prerequisite: "MATH 213, MATH 215",
    level: "Advanced",
    specialty: "Miscellaneous Advanced Topics",
  },
  {
    code: "CS 477R",
    className: "Secondary Minor Student Teaching",
    description:
      "Supervised, full-day, four week experience to develop and demonstrate competence in teaching minor area course content in the secondary classroom.",
    prerequisite: "",
    level: "Advanced",
    specialty: "Miscellaneous Advanced Topics",
  },
  {
    code: "CS 502",
    className: "Job Search Strategies",
    description:
      "Course will assist graduating students in identifying and connecting to potential employers.",
    prerequisite: "",
    level: "Advanced",
    specialty: "Miscellaneous Advanced Topics",
  },
  {
    code: "CS 412",
    className: "Linear Programming and Convex Optimization",
    description:
      "Optimization, problem formulation, and solution algorithms, including simplex and interior point methods. Applications from control, data mining, finance, game theory, learning, network flow, operations research, and statistical estimation.",
    prerequisite: "",
    level: "Advanced",
    specialty: "Miscellaneous Advanced Topics",
  },
];

export default classes;

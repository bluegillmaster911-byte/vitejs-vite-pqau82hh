export interface QuizQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedCaseId?: string;
}

export const quizQuestions: QuizQuestion[] = [
  // === JURISDICTION ===
  {
    id: "q1",
    category: "Jurisdiction",
    difficulty: "easy",
    question: "Which court serves as the main trial court in the federal system?",
    options: [
      "U.S. Supreme Court",
      "U.S. Court of Appeals",
      "U.S. District Court",
      "U.S. Tax Court"
    ],
    correctIndex: 2,
    explanation: "U.S. District Courts are the primary trial courts where most federal cases begin."
  },
  {
    id: "q2",
    category: "Jurisdiction",
    difficulty: "easy",
    question: "Which court hears most appeals from U.S. District Courts?",
    options: [
      "U.S. Supreme Court",
      "U.S. Court of Appeals",
      "U.S. Tax Court",
      "Court of Federal Claims"
    ],
    correctIndex: 1,
    explanation: "The U.S. Courts of Appeals review decisions from the District Courts."
  },
  {
    id: "q3",
    category: "Jurisdiction",
    difficulty: "medium",
    question: "Which court has original jurisdiction in cases between two or more states?",
    options: [
      "U.S. District Court",
      "U.S. Court of Appeals",
      "U.S. Supreme Court",
      "State Supreme Court"
    ],
    correctIndex: 2,
    explanation: "The U.S. Supreme Court has original jurisdiction in disputes between states."
  },

  // === LANDMARK CASES ===
  {
    id: "q4",
    category: "Landmark Cases",
    difficulty: "easy",
    question: "What did Brown v. Board of Education (1954) rule?",
    options: [
      "Segregation was constitutional",
      "Racial segregation in public schools is unconstitutional",
      "States could maintain separate schools",
      "Only universities must integrate"
    ],
    correctIndex: 1,
    explanation: "Brown v. Board of Education declared that separate educational facilities are inherently unequal.",
    relatedCaseId: "brown-v-board-1954"
  },
  {
    id: "q5",
    category: "Landmark Cases",
    difficulty: "easy",
    question: "Which case established the principle of judicial review?",
    options: [
      "Brown v. Board of Education",
      "Marbury v. Madison",
      "Miranda v. Arizona",
      "Gideon v. Wainwright"
    ],
    correctIndex: 1,
    explanation: "Marbury v. Madison (1803) gave the Supreme Court the power to declare laws unconstitutional.",
    relatedCaseId: "marbury-v-madison-1803"
  },
  {
    id: "q6",
    category: "Landmark Cases",
    difficulty: "easy",
    question: "What does Miranda v. Arizona require police to do?",
    options: [
      "Read suspects their rights before custodial interrogation",
      "Allow suspects to go home immediately",
      "Provide a lawyer before any questioning",
      "Record all conversations"
    ],
    correctIndex: 0,
    explanation: "Miranda requires police to inform suspects of their right to remain silent and to have an attorney.",
    relatedCaseId: "miranda-v-arizona-1966"
  },
  {
    id: "q7",
    category: "Landmark Cases",
    difficulty: "easy",
    question: "Which case guaranteed the right to free counsel for poor defendants in felony cases?",
    options: [
      "Miranda v. Arizona",
      "Gideon v. Wainwright",
      "Brown v. Board of Education",
      "Marbury v. Madison"
    ],
    correctIndex: 1,
    explanation: "Gideon v. Wainwright (1963) established the right to appointed counsel for indigent defendants.",
    relatedCaseId: "gideon-v-wainwright-1963"
  },
  {
    id: "q8",
    category: "Landmark Cases",
    difficulty: "medium",
    question: "What doctrine did Plessy v. Ferguson establish?",
    options: [
      "Judicial review",
      "Separate but equal",
      "Right to counsel",
      "Exclusionary rule"
    ],
    correctIndex: 1,
    explanation: "Plessy v. Ferguson upheld racial segregation under the 'separate but equal' doctrine.",
    relatedCaseId: "plessy-v-ferguson-1896"
  },

  // === CONSTITUTIONAL LAW ===
  {
    id: "q9",
    category: "Constitutional Law",
    difficulty: "easy",
    question: "Which article of the Constitution creates the judicial branch?",
    options: ["Article I", "Article II", "Article III", "Article IV"],
    correctIndex: 2,
    explanation: "Article III establishes the judicial branch, including the Supreme Court."
  },
  {
    id: "q10",
    category: "Constitutional Law",
    difficulty: "medium",
    question: "What does the Supremacy Clause establish?",
    options: [
      "States have power over federal law",
      "The Constitution is the supreme law of the land",
      "Congress can override Supreme Court decisions",
      "The President can ignore court rulings"
    ],
    correctIndex: 1,
    explanation: "The Supremacy Clause makes the Constitution, federal laws, and treaties the highest law in the country."
  },

  // === SCENARIO QUESTIONS ===
  {
    id: "q11",
    category: "Scenario",
    difficulty: "medium",
    question: "A suspect is arrested and questioned without being read his rights. He confesses. Under which case is this confession most likely to be thrown out?",
    options: [
      "Brown v. Board of Education",
      "Miranda v. Arizona",
      "Gideon v. Wainwright",
      "Marbury v. Madison"
    ],
    correctIndex: 1,
    explanation: "Under Miranda v. Arizona, statements made during custodial interrogation without proper warnings are generally inadmissible.",
    relatedCaseId: "miranda-v-arizona-1966"
  },
  {
    id: "q12",
    category: "Scenario",
    difficulty: "hard",
    question: "A plaintiff from Ohio wants to sue a defendant from Michigan for $90,000. Which court(s) can hear this case?",
    options: [
      "Only state court",
      "Only federal court",
      "Either state or federal court",
      "Only the U.S. Supreme Court"
    ],
    correctIndex: 2,
    explanation: "This case meets diversity jurisdiction requirements ($75,000+ and parties from different states), so it can be filed in either state or federal court."
  },

  // === ADDITIONAL QUESTIONS ===
  {
    id: "q13",
    category: "Jurisdiction",
    difficulty: "easy",
    question: "What is the highest court in the United States?",
    options: [
      "U.S. Court of Appeals",
      "U.S. District Court",
      "U.S. Supreme Court",
      "U.S. Tax Court"
    ],
    correctIndex: 2,
    explanation: "The U.S. Supreme Court is the highest court in the federal judiciary."
  },
  {
    id: "q14",
    category: "Landmark Cases",
    difficulty: "medium",
    question: "Which case applied the exclusionary rule to the states?",
    options: [
      "Miranda v. Arizona",
      "Mapp v. Ohio",
      "Gideon v. Wainwright",
      "Terry v. Ohio"
    ],
    correctIndex: 1,
    explanation: "Mapp v. Ohio (1961) made illegally obtained evidence inadmissible in state courts."
  },
  {
    id: "q15",
    category: "Jurisdiction",
    difficulty: "easy",
    question: "How many justices currently serve on the U.S. Supreme Court?",
    options: ["7", "8", "9", "11"],
    correctIndex: 2,
    explanation: "There are currently nine justices on the Supreme Court."
  }
];

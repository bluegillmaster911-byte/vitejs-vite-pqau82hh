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
  // Questions will be added here
];

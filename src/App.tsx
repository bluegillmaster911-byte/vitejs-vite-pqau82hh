import { useState } from 'react';
import { quizQuestions, QuizQuestion } from './quizData';

type Tab = 'Home' | 'Matrix' | 'Cases' | 'Quiz' | 'Progress';

interface CaseType {
  title: string;
  color: string;
  icon: string;
  issue: string;
  start: string;
  appeal: string;
  review: string;
}

const caseTypes: CaseType[] = [
  {
    title: 'Bankruptcy',
    color: 'bg-green-100 border-green-500',
    icon: '💵',
    issue: 'Bankruptcy, liquidation, reorganization, adversary proceedings',
    start: 'U.S. Bankruptcy Court',
    appeal: 'District Court → Circuit Court → Supreme Court',
    review: 'Possible by writ of certiorari',
  },
  {
    title: 'Federal Tax Disputes',
    color: 'bg-emerald-100 border-emerald-500',
    icon: '⚖️',
    issue: 'IRS disputes, deficiency notices, collections',
    start: 'U.S. Tax Court',
    appeal: 'D.C. Circuit → Supreme Court',
    review: 'Discretionary review',
  },
  {
    title: 'Claims Against U.S.',
    color: 'bg-orange-100 border-orange-500',
    icon: '🏛️',
    issue: 'Monetary claims against federal government',
    start: 'Court of Federal Claims',
    appeal: 'Federal Circuit → Supreme Court',
    review: 'Possible review',
  },
  {
    title: 'Federal Criminal Cases',
    color: 'bg-yellow-100 border-yellow-500',
    icon: '🚔',
    issue: 'Federal crimes and prosecutions',
    start: 'U.S. District Court',
    appeal: 'Circuit Court → Supreme Court',
    review: 'Possible review',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const tabs: Tab[] = ['Home', 'Matrix', 'Cases', 'Quiz', 'Progress'];
  const currentQuestion: QuizQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);

    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Federal Court Learning App</h1>
          <p className="text-slate-300 mt-1">Interactive tools to understand U.S. Federal Courts</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto p-6">

        {/* HOME TAB */}
        {activeTab === 'Home' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p className="text-slate-600">Use the tabs above to explore the Jurisdiction Matrix, take quizzes, and track your progress.</p>
          </div>
        )}

        {/* MATRIX TAB */}
        {activeTab === 'Matrix' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Federal Court Jurisdiction Matrix</h2>
            <p className="text-slate-600 mb-6">Interactive Decision System for U.S. Federal Court Pathways</p>

            <div className="space-y-4">
              {caseTypes.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow p-5 border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-700 mb-3">{item.issue}</p>
                  <div className="text-sm">
                    <p><strong>Initial Forum:</strong> {item.start}</p>
                    <p><strong>Appeal Path:</strong> {item.appeal}</p>
                    <p><strong>Supreme Court Review:</strong> {item.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CASES TAB */}
        {activeTab === 'Cases' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Landmark Cases</h2>
            <p className="text-slate-600">Coming soon. We will add major cases with full procedural paths.</p>
          </div>
        )}

        {/* QUIZ TAB - CONNECTED */}
        {activeTab === 'Quiz' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Quiz</h2>
            <p className="text-slate-600 mb-6">Test your knowledge of federal courts and landmark cases.</p>

            {quizQuestions.length === 0 ? (
              <div className="bg-white rounded-2xl p-6 text-center">
                <p>No questions found. Please add questions to quizData.ts</p>
              </div>
            ) : !quizFinished ? (
              <div className="bg-white rounded-2xl shadow p-6">
                <div className="text-sm text-slate-500 mb-2">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </div>

                <h3 className="text-xl font-semibold mb-6">{currentQuestion.question}</h3>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-xl border transition ${
                        showExplanation
                          ? index === currentQuestion.correctIndex
                            ? 'bg-green-100 border-green-500'
                            : index === selectedAnswer
                            ? 'bg-red-100 border-red-500'
                            : 'bg-white border-gray-200'
                          : 'bg-white border-gray-300 active:bg-gray-100'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                    <p className="font-semibold mb-1">
                      {selectedAnswer === currentQuestion.correctIndex ? '✅ Correct!' : '❌ Incorrect'}
                    </p>
                    <p className="text-slate-700">{currentQuestion.explanation}</p>
                  </div>
                )}

                {showExplanation && (
                  <button
                    onClick={nextQuestion}
                    className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-medium active:bg-blue-700"
                  >
                    {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                <p className="text-xl mb-6">You scored {score} out of {quizQuestions.length}</p>
                <button
                  onClick={restartQuiz}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium"
                >
                  Restart Quiz
                </button>
              </div>
            )}
          </div>
        )}

        {/* PROGRESS TAB */}
        {activeTab === 'Progress' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
            <p className="text-slate-600">Progress tracking and achievements will appear here.</p>
          </div>
        )}

      </div>
    </div>
  );
}
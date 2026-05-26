import { useState } from 'react';

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
    title: 'Patents & Federal Trade',
    color: 'bg-cyan-100 border-cyan-500',
    icon: '💡',
    issue: 'Patents, trademarks, federal personnel disputes',
    start: 'District Court / Specialized Tribunal',
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
  {
    title: 'Immigration Matters',
    color: 'bg-fuchsia-100 border-fuchsia-500',
    icon: '🌎',
    issue: 'Removal, asylum, deportation, immigration status',
    start: 'Immigration Judge / BIA',
    appeal: 'Circuit Court → Supreme Court',
    review: 'Possible review',
  },
  {
    title: 'Military Justice',
    color: 'bg-red-100 border-red-500',
    icon: '⭐',
    issue: 'Court-martial and UCMJ violations',
    start: 'Court-Martial',
    appeal: 'CAAF → Supreme Court',
    review: 'Rare review',
  },
  {
    title: 'Administrative Agency Review',
    color: 'bg-blue-100 border-blue-500',
    icon: '📋',
    issue: 'EPA, SEC, FCC, NLRB, SSA, agency actions',
    start: 'Administrative Law Judge / Agency Board',
    appeal: 'Circuit Court → Supreme Court',
    review: 'Possible review',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  const tabs: Tab[] = ['Home', 'Matrix', 'Cases', 'Quiz', 'Progress'];

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

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6">

        {/* HOME TAB */}
        {activeTab === 'Home' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p className="text-slate-600">Use the tabs above to explore the Jurisdiction Matrix, Landmark Cases, take Quizzes, and track your Progress.</p>
          </div>
        )}

        {/* MATRIX TAB - FULL CONTENT RESTORED */}
        {activeTab === 'Matrix' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Federal Court Jurisdiction Matrix</h2>
            <p className="text-slate-600 mb-6">Interactive Decision System for U.S. Federal Court Pathways</p>

            <div className="overflow-x-auto">
              <div className="min-w-[1100px] space-y-4">
                {/* Header */}
                <div className="grid grid-cols-4 gap-4 text-center font-bold text-white text-sm">
                  <div className="bg-slate-900 rounded-2xl p-4">Type of Federal Issue</div>
                  <div className="bg-green-700 rounded-2xl p-4">Initial Forum</div>
                  <div className="bg-purple-700 rounded-2xl p-4">Appeal Path</div>
                  <div className="bg-amber-600 rounded-2xl p-4">Supreme Court Review</div>
                </div>

                {caseTypes.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 items-stretch">
                    <div className={`rounded-2xl border-2 shadow p-5 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl">{item.icon}</div>
                        <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                      </div>
                      <p className="text-slate-700 text-sm">{item.issue}</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-5 border flex items-center">
                      <div>
                        <div className="font-semibold text-green-800">{item.start}</div>
                        <div className="text-xs text-slate-500 mt-1">Initial Forum</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-5 border flex items-center">
                      <div>
                        <div className="font-semibold text-purple-800 mb-1">Appeal Route</div>
                        <div className="text-sm text-slate-700">{item.appeal}</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-5 border flex items-center">
                      <div>
                        <div className="text-2xl mb-1">⚖️</div>
                        <div className="font-bold text-amber-700">YES</div>
                        <div className="text-xs text-slate-600">{item.review}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CASES TAB */}
        {activeTab === 'Cases' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Landmark Cases</h2>
            <p className="text-slate-600">Coming soon. We'll add major cases with procedural paths here.</p>
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === 'Quiz' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Quiz</h2>
            <p className="text-slate-600">Quiz system coming soon.</p>
          </div>
        )}

        {/* PROGRESS TAB */}
        {activeTab === 'Progress' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
            <p className="text-slate-600">Progress tracking coming soon.</p>
          </div>
        )}

      </div>
    </div>
  );
}
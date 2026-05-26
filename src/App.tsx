import React, { useState } from 'react';

type Tab = 'Home' | 'Matrix' | 'Cases' | 'Quiz' | 'Progress';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Home');

  const tabs: Tab[] = ['Home', 'Matrix', 'Cases', 'Quiz', 'Progress'];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Federal Court Learning App</h1>
          <p className="text-slate-300 mt-1">Learn U.S. Federal Court Jurisdiction</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto">
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
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto p-6">
        
        {/* HOME TAB */}
        {activeTab === 'Home' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p className="text-slate-600 mb-6">
              This app helps you learn how cases move through the U.S. Federal Court system.
            </p>
            <div className="bg-white rounded-2xl p-6 shadow">
              <p className="text-slate-700">Start by exploring the Jurisdiction Matrix or taking a Quiz.</p>
            </div>
          </div>
        )}

        {/* JURISDICTION MATRIX TAB */}
        {activeTab === 'Matrix' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Federal Court Jurisdiction Matrix</h2>
            <p className="text-slate-600 mb-6">Interactive decision system for U.S. Federal Court pathways.</p>
            
            <div className="bg-white rounded-2xl p-6 shadow">
              <p className="text-slate-700">Matrix content will go here.</p>
              <p className="text-sm text-slate-500 mt-2">(We'll build this next)</p>
            </div>
          </div>
        )}

        {/* LANDMARK CASES TAB */}
        {activeTab === 'Cases' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Landmark Cases</h2>
            <p className="text-slate-600 mb-6">Important Supreme Court cases and their procedural paths.</p>
            
            <div className="bg-white rounded-2xl p-6 shadow">
              <p className="text-slate-700">Case list will go here.</p>
              <p className="text-sm text-slate-500 mt-2">(We'll add cases next)</p>
            </div>
          </div>
        )}

        {/* QUIZ TAB */}
        {activeTab === 'Quiz' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Quiz</h2>
            <p className="text-slate-600 mb-6">Test your knowledge of federal courts and landmark cases.</p>
            
            <div className="bg-white rounded-2xl p-6 shadow">
              <p className="text-slate-700">Quiz system coming soon.</p>
            </div>
          </div>
        )}

        {/* PROGRESS TAB */}
        {activeTab === 'Progress' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
            <p className="text-slate-600 mb-6">Track your learning and achievements.</p>
            
            <div className="bg-white rounded-2xl p-6 shadow">
              <p className="text-slate-700">Progress tracking will appear here.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
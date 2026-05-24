const caseTypes = [
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

export default function FederalJurisdictionApp() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-3xl shadow-2xl p-8 mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-3">
            Federal Court Jurisdiction Matrix
          </h1>
          <p className="text-xl text-slate-200">
            Interactive Decision System for U.S. Federal Court Pathways
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-5 border-l-8 border-blue-600">
            <h2 className="text-lg font-bold mb-2">1. Identify Issue</h2>
            <p className="text-slate-600">Determine the nature of the federal dispute.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 border-l-8 border-green-600">
            <h2 className="text-lg font-bold mb-2">2. Initial Forum</h2>
            <p className="text-slate-600">Locate the proper starting court or tribunal.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 border-l-8 border-purple-600">
            <h2 className="text-lg font-bold mb-2">3. Appeal Path</h2>
            <p className="text-slate-600">Track the appellate review structure.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 border-l-8 border-amber-500">
            <h2 className="text-lg font-bold mb-2">4. Final Review</h2>
            <p className="text-slate-600">Determine if Supreme Court review is possible.</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1200px] space-y-4">
            <div className="grid grid-cols-4 gap-4 text-center font-bold text-white text-lg">
              <div className="bg-slate-900 rounded-2xl p-4">Type of Federal Issue</div>
              <div className="bg-green-700 rounded-2xl p-4">Initial Forum</div>
              <div className="bg-purple-700 rounded-2xl p-4">Appeal Path</div>
              <div className="bg-amber-600 rounded-2xl p-4">Supreme Court Review</div>
            </div>

            {caseTypes.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-stretch">
                <div className={`rounded-2xl border-2 shadow-lg p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{item.issue}</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-5 border-2 border-green-300 flex items-center justify-center text-center">
                  <div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">{item.start}</h4>
                    <p className="text-slate-600">Initial jurisdictional venue</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-5 border-2 border-purple-300 flex items-center justify-center text-center">
                  <div>
                    <h4 className="text-xl font-bold text-purple-800 mb-2">Appeal Route</h4>
                    <p className="text-slate-700 font-medium">{item.appeal}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-5 border-2 border-amber-300 flex items-center justify-center text-center">
                  <div>
                    <div className="text-4xl mb-2">⚖️</div>
                    <h4 className="text-2xl font-bold text-amber-700 mb-2">YES</h4>
                    <p className="text-slate-700">{item.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Key Constitutional Structures
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg">Article III Courts</h3>
                <p className="text-slate-600">
                  Constitutional judiciary including District Courts, Circuit Courts, and the Supreme Court.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold text-lg">Article I Courts</h3>
                <p className="text-slate-600">
                  Legislative courts established by Congress such as Tax Court and Bankruptcy Court.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold text-lg">Administrative Tribunals</h3>
                <p className="text-slate-600">
                  Executive branch adjudicative systems using administrative law judges and agency review boards.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Future Expansion Ideas
            </h2>
            <ul className="space-y-3 text-slate-700 text-lg">
              <li>• Dynamic routing questionnaire</li>
              <li>• Clickable court explanations</li>
              <li>• Real jurisdictional statutes</li>
              <li>• Federal Rules integration</li>
              <li>• Venue determination engine</li>
              <li>• AI-assisted court recommendation</li>
              <li>• Mobile-first litigation navigator</li>
              <li>• Interactive constitutional map</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

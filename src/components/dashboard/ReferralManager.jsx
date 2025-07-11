import React, { useState } from "react";

const ReferralManager = () => {
  const [newReferralCode, setNewReferralCode] = useState("");
  const [referralCodes, setReferralCodes] = useState([
    { id: 1, code: "REF123", used: 15, total: 100 },
    { id: 2, code: "LEARN50", used: 42, total: 100 },
    { id: 3, code: "ENGLISH", used: 78, total: 100 },
  ]);

  const handleCreateCode = () => {
    if (!newReferralCode) return;

    const newCode = {
      id: referralCodes.length + 1,
      code: newReferralCode,
      used: 0,
      total: 100,
    };

    setReferralCodes([...referralCodes, newCode]);
    setNewReferralCode("");
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Create New Referral Code
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={newReferralCode}
            onChange={(e) => setNewReferralCode(e.target.value)}
            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter new referral code"
          />
          <button
            onClick={handleCreateCode}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Create
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Existing Referral Codes
        </h2>
        <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-slate-700">
                  Code
                </th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">
                  Used
                </th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">
                  Limit
                </th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {referralCodes.map((code) => (
                <tr
                  key={code.id}
                  className="border-b border-slate-200 last:border-0"
                >
                  <td className="py-4 px-6 font-medium text-blue-600">
                    {code.code}
                  </td>
                  <td className="py-4 px-6 text-slate-700">{code.used}</td>
                  <td className="py-4 px-6 text-slate-700">{code.total}</td>
                  <td className="py-4 px-6">
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralManager;

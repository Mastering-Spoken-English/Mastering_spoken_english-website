import React, { useState } from "react";

const Settings = () => {
  const [costs, setCosts] = useState({
    hosting: 500,
    video: 300,
    marketing: 200,
    content: 400,
    misc: 100,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCosts((prev) => ({
      ...prev,
      [name]: parseInt(value) || 0,
    }));
  };

  const totalCost = Object.values(costs).reduce((sum, cost) => sum + cost, 0);

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-4">Monthly Costs</h2>

      <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Hosting Cost (₹)
            </label>
            <input
              type="number"
              name="hosting"
              value={costs.hosting}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Video Production (₹)
            </label>
            <input
              type="number"
              name="video"
              value={costs.video}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Marketing (₹)
            </label>
            <input
              type="number"
              name="marketing"
              value={costs.marketing}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Content Creation (₹)
            </label>
            <input
              type="number"
              name="content"
              value={costs.content}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Miscellaneous (₹)
            </label>
            <input
              type="number"
              name="misc"
              value={costs.misc}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-slate-800">
              Total Monthly Cost
            </span>
            <span className="text-2xl font-bold text-blue-600">
              ₹{totalCost}
            </span>
          </div>
        </div>
      </div>

      <div>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;

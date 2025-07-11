import React, { useState } from "react";
import OverviewTab from "./OverviewTab";
import Payouts from "./Payouts";
import Purchases from "./Purchases";
import ReferralManager from "./ReferralManager";
import Settings from "./Settings";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "referral", label: "Referral Manager" },
    { id: "payouts", label: "Payouts" },
    { id: "purchases", label: "Purchases" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-3xl font-bold text-slate-800">
              Admin Dashboard
            </h1>
          </div>

          <div className="border-b border-slate-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === "overview" && <OverviewTab />}
            {activeTab === "referral" && <ReferralManager />}
            {activeTab === "payouts" && <Payouts />}
            {activeTab === "purchases" && <Purchases />}
            {activeTab === "settings" && <Settings />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

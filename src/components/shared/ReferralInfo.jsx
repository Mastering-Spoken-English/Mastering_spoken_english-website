import React, { useState } from "react";

const ReferralInfo = ({ referralCode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://yourdomain.com?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        Your Referral Program
      </h2>

      <div className="mb-6">
        <p className="text-slate-700 mb-3">
          Share your referral link and earn ₹100 cashback for every friend who
          purchases the course!
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 bg-white rounded-xl p-3 border border-blue-300 flex items-center justify-between">
            <span className="text-blue-600 font-medium truncate mr-2">
              https://yourdomain.com?ref={referralCode}
            </span>
            <button
              onClick={copyToClipboard}
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border border-blue-300">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              Your Earnings
            </h3>
            <p className="text-slate-600">₹0 so far</p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              Successful Referrals
            </h3>
            <p className="text-slate-600">0 friends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralInfo;

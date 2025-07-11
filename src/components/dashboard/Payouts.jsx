import React, { useState } from "react";

const Payouts = () => {
  const [payouts, setPayouts] = useState([
    {
      id: 1,
      studentName: "Rahul Sharma",
      amount: 100,
      status: "pending",
      upi: "rahul@upi",
    },
    {
      id: 2,
      studentName: "Priya Patel",
      amount: 100,
      status: "pending",
      upi: "priya@ybl",
    },
    {
      id: 3,
      studentName: "Vikram Singh",
      amount: 100,
      status: "paid",
      upi: "vikram@okicici",
    },
  ]);

  const handlePayNow = (id) => {
    // API call to process payout
    setPayouts(
      payouts.map((payout) =>
        payout.id === id ? { ...payout, status: "paid" } : payout
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-4">Pending Payouts</h2>

      <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 mb-8">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Student Name
              </th>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Amount (₹)
              </th>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Status
              </th>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {payouts
              .filter((payout) => payout.status === "pending")
              .map((payout) => (
                <tr key={payout.id} className="border-b border-slate-200">
                  <td className="py-4 px-6">{payout.studentName}</td>
                  <td className="py-4 px-6">₹{payout.amount}</td>
                  <td className="py-4 px-6">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {payout.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handlePayNow(payout.id)}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-md transition-all"
                    >
                      Pay Now
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-slate-800 mb-4">Payment History</h2>
      <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Student Name
              </th>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Amount (₹)
              </th>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Status
              </th>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {payouts
              .filter((payout) => payout.status === "paid")
              .map((payout) => (
                <tr
                  key={payout.id}
                  className="border-b border-slate-200 last:border-0"
                >
                  <td className="py-4 px-6">{payout.studentName}</td>
                  <td className="py-4 px-6">₹{payout.amount}</td>
                  <td className="py-4 px-6">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {payout.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">15 May 2023</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payouts;

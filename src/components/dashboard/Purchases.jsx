import React from "react";

const Purchases = () => {
  const purchases = [
    {
      id: 1,
      studentName: "Rahul Sharma",
      amount: 199,
      date: "2023-05-10",
      referralCode: "REF123",
    },
    {
      id: 2,
      studentName: "Priya Patel",
      amount: 199,
      date: "2023-05-12",
      referralCode: "LEARN50",
    },
    {
      id: 3,
      studentName: "Vikram Singh",
      amount: 199,
      date: "2023-05-14",
      referralCode: "ENGLISH",
    },
    {
      id: 4,
      studentName: "Anjali Mehta",
      amount: 199,
      date: "2023-05-15",
      referralCode: "",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-4">All Purchases</h2>

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
                Date
              </th>
              <th className="text-left py-4 px-6 font-medium text-slate-700">
                Referral Code
              </th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr
                key={purchase.id}
                className="border-b border-slate-200 last:border-0"
              >
                <td className="py-4 px-6">{purchase.studentName}</td>
                <td className="py-4 px-6">₹{purchase.amount}</td>
                <td className="py-4 px-6">{purchase.date}</td>
                <td className="py-4 px-6">
                  {purchase.referralCode ? (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {purchase.referralCode}
                    </span>
                  ) : (
                    <span className="text-slate-500">None</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchases;

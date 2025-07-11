import React from "react";

const OverviewTab = () => {
  const stats = [
    { title: "Total Students", value: 1242, change: "+12% from last month" },
    { title: "Active Referrals", value: 342, change: "+8% from last month" },
    {
      title: "Pending Payouts",
      value: "₹12,400",
      change: "3 students awaiting payout",
    },
    {
      title: "Monthly Revenue",
      value: "₹2,47,158",
      change: "+18% from last month",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      student: "Rahul Sharma",
      action: "Purchased course",
      time: "2 hours ago",
    },
    {
      id: 2,
      student: "Priya Patel",
      action: "Referred a friend",
      time: "5 hours ago",
    },
    {
      id: 3,
      student: "Vikram Singh",
      action: "Received cashback",
      time: "1 day ago",
    },
    {
      id: 4,
      student: "Anjali Mehta",
      action: "Completed module 3",
      time: "2 days ago",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 shadow-sm"
          >
            <h3 className="text-lg font-medium text-slate-700 mb-2">
              {stat.title}
            </h3>
            <p className="text-3xl font-bold text-slate-800 mb-2">
              {stat.value}
            </p>
            <p className="text-sm text-slate-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Recent Activities
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start pb-4 border-b border-slate-200 last:border-0 last:pb-0"
              >
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">
                    {activity.student}{" "}
                    <span className="font-normal text-slate-600">
                      {activity.action}
                    </span>
                  </p>
                  <p className="text-sm text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 text-center hover:shadow-md transition-all border border-slate-200">
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <span className="font-medium text-slate-800">
                Add Referral Code
              </span>
            </button>

            <button className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 text-center hover:shadow-md transition-all border border-slate-200">
              <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-slate-800">
                Process Payouts
              </span>
            </button>

            <button className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 text-center hover:shadow-md transition-all border border-slate-200">
              <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <span className="font-medium text-slate-800">View Reports</span>
            </button>

            <button className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl p-6 text-center hover:shadow-md transition-all border border-slate-200">
              <div className="bg-violet-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-slate-800">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;

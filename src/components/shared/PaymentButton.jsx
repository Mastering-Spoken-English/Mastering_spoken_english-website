import React from "react";

const PaymentButton = ({ amount, referralCode, user }) => {
  const handlePayment = () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: amount * 100,
      currency: "INR",
      name: "Mastering Spoken English",
      description: "Course Purchase",
      order_id: "order_...", // This should come from your backend
      handler: function (response) {
        // Handle payment success
        console.log(response);
        // Update user payment status in backend
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9999999999",
      },
      notes: {
        referral: referralCode,
      },
      theme: {
        color: "#4f46e5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      Pay ₹{amount} Now
    </button>
  );
};

export default PaymentButton;

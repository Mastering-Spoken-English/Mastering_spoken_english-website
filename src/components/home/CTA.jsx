import React from "react";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your English Skills?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of students who have achieved fluency with our unique
            audio-visual approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
              Get Full Access for ₹199
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300">
              View Sample Lesson
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

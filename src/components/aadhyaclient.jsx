import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const benefits = [
  {
    title: "Access to Domain Experts",
    description: "Work with top professionals from various industries ensuring deep knowledge and strategic insight.",
  },
  {
    title: "Faster Delivery",
    description: "Accelerated project timelines through expert planning, agile execution, and minimal iterations.",
  },
  {
    title: "Cost Efficiency",
    description: "Save on operational costs by leveraging specialized teams and scalable engagement models.",
  },
  {
    title: "Tailored Solutions",
    description: "Customized strategies that align precisely with your business goals and challenges.",
  },
  {
    title: "End-to-End Support",
    description: "From ideation to deployment, clients receive dedicated support at every stage.",
  },
  {
    title: "Future-Proof Technology",
    description: "Solutions built with modern, scalable tech stacks to stay ahead in evolving markets.",
  },
];

const ClientBenefits = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Benefits That Clients Get
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Partnering with us means gaining measurable value through strategic expertise, modern tools, and responsive collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:bg-white transition rounded-2xl shadow p-6 text-left border border-gray-200"
          >
            <CheckCircleIcon className="h-8 w-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-slate-700">{benefit.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientBenefits;

import React from "react";

const customerCareTeam = [
  {
    name: "Claudio Pierantonio",
    role: "Customer Care",
    phone: "Toll Free: +1 855 780 6050",
    image: "/customer.jpg", // Place this in public folder or use external link
  },
  {
    name: "Noelia Rosemberg",
    role: "Customer Care Lead",
    phone: "+1 210 807 3540 ext. 1946",
    image: "/cust1.webp",
  },
];

const CustomerCare = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2
        style={{ textAlign: "center", color: "#320A6B" }}
        className="text-4xl mb-7"
      >
        <strong>Customer Care</strong>
      </h2>
      <p className="text-gray-600 mb-6">
        Not sure where to start? Need help adding that extra mojo to your
        landing page? Just visit our{" "}
        <a href="#" className="text-blue-600 underline">
          help center
        </a>{" "}
        or get in touch with us:
      </p>

      <div className="space-y-6">
        {customerCareTeam.map((person, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={person.image}
              alt={person.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                {person.name}
              </h4>
              <p className="text-sm text-gray-500">{person.role}</p>
              <p className="text-sm text-rose-500">{person.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCare;

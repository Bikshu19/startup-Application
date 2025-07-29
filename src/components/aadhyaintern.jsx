import { DocumentTextIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  UsersIcon,
  BriefcaseIcon, } from "@heroicons/react/24/outline";

export default function InternshipTimeline() {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
        <h1
              className="text-4xl py-6 font-extrabold"
              style={{ textAlign: 'center', color: '#320A6B' }}
            >
              Why we built our kingdom.
            </h1>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        { [
  {
    step: 1,
    title: "Live Project Exposure",
    description:
      "Work on real-world projects in Web Development, AI, ML, and App Development to build hands-on experience.",
    icon: <DocumentTextIcon className="w-12 h-12 text-indigo-500" />,
  },
  {
    step: 2,
    title: "Mentorship & Guidance",
    description:
      "Learn under the supervision of expert developers and industry professionals during your internship.",
    icon: <AcademicCapIcon className="w-12 h-12 text-indigo-500" />,
  },
  {
    step: 3,
    title: "Interview Preparation",
    description:
      "We prepare you for placements with mock interviews, resume polishing, and career guidance.",
    icon: <ChatBubbleLeftRightIcon className="w-12 h-12 text-indigo-500" />,
  },
  {
    step: 4,
    title: "Certificate & LOR",
    description:
      "Upon successful completion, receive an Internship Certificate and a Letter of Recommendation.",
    icon: <StarIcon className="w-12 h-12 text-indigo-500" />,
  },
  {
    step: 5,
    title: "Collaborative Learning",
    description:
      "Engage with peers, participate in group discussions, and solve problems as part of a collaborative environment.",
    icon: <UsersIcon className="w-12 h-12 text-indigo-500" />,
  },
  {
    step: 6,
    title: "Real-World Readiness",
    description:
      "Gain industry-relevant skills that make you ready to step into full-time roles or freelance opportunities.",
    icon: <BriefcaseIcon className="w-12 h-12 text-indigo-500" />,
  },
].map((item, idx) => (
          <div key={idx} className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              {item.step}
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-full inline-flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
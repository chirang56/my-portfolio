import React from "react";

const About: React.FC = () => {
    return (
<section id="about" className="flex flex-col md:flex-row items-center gap-10 bg-gray-900 p-10">
      <div className="w-1/2">
        <img
          src="/image.jpg"
          alt="About"
          className="rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        />
      </div>
      <div className="w-1/2 text-white">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-orange-500">Me</span>
        </h2>
        <p className="text-lg leading-8 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur debitis qui, ducimus sequi nam
          voluptatum consectetur unde, magni quas libero omnis odit expedita eligendi accusantium pariatur non. Officia,
          esse?
        </p>
        <a
          href="#"
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white transition-all duration-300"
        >
          Read More
        </a>
      </div>
      </section>
    );
};
export default About;
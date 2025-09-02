import {
  FaMapMarkedAlt,
  FaPassport,
  FaPlane,
  FaUmbrellaBeach,
  FaGlobeEurope,
} from 'react-icons/fa';
import Link from "next/link";

const SchengenHighlight = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/austriavisit.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 z-10">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Explore Europe with a Schengen Visa –{" "}
            <strong className="text-black">Your Gateway to 27 Stunning Countries</strong>
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            Planning to explore the romantic streets of Paris, breathtaking landscapes of Switzerland, or historic sites of Rome? With a <strong className="text-black">Tourist Schengen Visa</strong>, you can discover the charm of 27 European countries using just a single visa!
          </p>
          <p className="text-base sm:text-lg text-gray-200">
            Whether you're looking for a relaxing holiday, a cultural adventure, or a scenic road trip, the <Link href="https://vjcoverseas.com/schengen-visas" className="text-orange-500">Tourist Schengen Visa</Link> makes it possible to experience Europe without borders.
          </p>
          <p className="text-base sm:text-lg text-gray-300 font-semibold">
            Apply with us now for a seamless experience from visa submission to boarding your flight!
          </p>

          <p className="text-base sm:text-lg text-gray-200">
            At <Link href="https://www.vjcoverseas.com" className="text-orange-500">VJC Overseas</Link>, we specialize in guiding travelers through every step of the application process. From documentation support to interview preparation, our dedicated team ensures your visa journey is smooth, simple, and stress-free.
          </p>

       <p className="text-base sm:text-lg text-gray-200">
  Recognized as one of the <Link href="https://www.vjcoverseas.com" className="text-orange-500">Best Visa Immigration Consultants</Link>, we combine expertise with personalized service to maximize your approval chances and help you get the <strong className="text-blue-500">Schengen Visit Visa</strong> efficiently.
</p>


          <Link href="/assessment">
            <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out group w-fit mt-2">
              <span className="relative z-10">Apply Now</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-blue-400 transition-all duration-500 ease-out group-hover:left-0"></span>
            </button>
          </Link>
        </div>

        {/* Right: Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaGlobeEurope />,
              title: "What is a Schengen Visa?",
              desc: "A single visa to explore 27 European countries for tourism, family visits, or adventure.",
            },
            {
              icon: <FaMapMarkedAlt />,
              title: "Countries You Can Visit",
              desc: "France, Germany, Italy, Greece, Netherlands, Spain, Switzerland & more.",
            },
            {
              icon: <FaUmbrellaBeach />,
              title: "Why Tourists Love It",
              desc: "Access snowy Alps, sunny beaches, and vibrant cities—all under one visa.",
            },
            {
              icon: <FaPassport />,
              title: "Simple & Efficient",
              desc: "Avoid the hassle of multiple visas with one application for all.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-5 rounded-xl shadow-lg hover:bg-white/20 transition backdrop-blur-lg"
            >
              <div className="text-3xl mb-4 text-orange-500">{icon}</div>
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-sm text-gray-200">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Content */}
      <div className="relative max-w-6xl mx-auto mt-10 text-gray-200">
        <p className="mb-5 text-base text-justify leading-snug">
          Why Choose a <Link href="https://www.vjcoverseas.com/schengen-visas" className="text-orange-500">Schengen Visit Visa</Link>? Travel freedom to 27 countries including Germany, Spain, Italy, France, and Greece. Multiple purposes like tourism, family visits, and cultural programs. Short processing time and convenience—all with one visa.
        </p>
        <p className="mb-5 text-base text-justify leading-snug">
          Our goal is to make your dream of traveling across Europe a reality. Through our specialized <Link href="https://www.vjcoverseas.com/visit-visas" className="text-orange-500">Visit Visa Process</Link>, we assist with eligibility guidance, document preparation, visa interview support, and itinerary planning.
        </p>
        <p className="mb-5 text-base text-justify leading-snug">
          In addition, our team offers end-to-end <Link href="https://www.vjcoverseas.com/tours-ticketing" className="text-orange-500">Travel Visa Assistance</Link>, including ticketing, insurance guidance, and consultation on related travel formalities.
        </p>
        <p className="mb-5 text-base text-justify leading-snug">
          Your European journey starts with the right visa partner. Let <strong className="text-blue-500">VJC Overseas</strong> handle the complexities while you focus on creating unforgettable memories.
        </p>
        <p className="mb-5 text-base text-justify leading-snug">
          Apply now for your <strong className="text-blue-500">Tourist Schengen Visa</strong> and take the first step towards experiencing Europe like never before.
        </p> 
      </div>
    </section>
  );
};

export default SchengenHighlight;

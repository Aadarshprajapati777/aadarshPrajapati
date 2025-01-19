import React from "react";

const About = () => {
  return (
    <section id="about" className="p-4 pt-12 md:p-8 md:pt-12">
      {/* Section Title */}
      <div className="hidden lg:block">
        <h2
          className="mb-4 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
          style={{
            textShadow:
              "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
          }}
        >
          <span className="font-brand-primary text-green-700">Abo</span>ut me
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Text Section */}
        <div className="relative flex grow lg:basis-5/6">
          <div className="flex w-full flex-col items-start gap-y-6 overflow-visible rounded-2xl bg-gray-900 p-4 pt-12 shadow-xl shadow-black/30 md:p-8 md:pt-12 lg:pr-28 lg:pt-8">
            <p className="prose prose-sm whitespace-pre-line text-gray-200 sm:prose-base">
              I am a passionate Full Stack Engineer with a strong focus on backend development, scalable systems, and real-time solutions. My journey began in Amritapuri, Kerala, where I honed my technical skills through rigorous coursework and impactful projects. Over the years, I have successfully contributed to multiple startups in remote roles, showcasing my ability to deliver high-quality solutions while collaborating seamlessly across time zones.
              <br />
              In my most recent role as an SDE Intern at Kasicare, I made significant contributions by architecting a library and community platform for selling and sharing digital resources. I implemented a secure payment system, optimized storage efficiency with resource-link mapping, and developed dynamic version control for seamless updates. My work improved system reliability by fixing 30+ critical bugs and adding 20+ features, while advanced search and filtering capabilities enhanced user satisfaction.
              <br />
              Previously, I worked on full-stack applications at amFOSS, focusing on performance, security, and cost efficiency. I automated daily tasks using custom bots, refactored codebases for optimal performance, and delivered scalable solutions that met the highest standards of quality.

              Beyond these roles, I have a proven track record of engineering microservices platforms, optimizing data pipelines, and solving complex real-world problems. My remote job experience has not only deepened my technical expertise but also strengthened my ability to collaborate, innovate, and drive impactful results in dynamic environments.
            </p>

            {/* Key Details */}
            <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <li className="col-span-1 flex items-start gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="size-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                  ></path>
                </svg>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Location:
                </span>
                <span className="text-xs text-gray-200 sm:text-sm">
                  Amritapuri, Kerala (India)
                </span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="size-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  ></path>
                </svg>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Age:
                </span>
                <span className="text-xs text-gray-200 sm:text-sm">22</span>
              </li>
              {/* Add other details similarly */}
              <li className="col-span-1 flex items-start gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"></path></svg>
                <span className="text-sm text-gray-400">
                  <span className="font-bold text-white">Nationality:</span> Nepali /
                  Nepalese
                </span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg>
                <span className="text-sm text-gray-400">
                  <span className="font-bold text-white">Interests:</span> Coding,
                  Filmmaking, Playing Table Tennis
                </span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"></path></svg>
                <span className="text-sm text-gray-400">
                  <span className="font-bold text-white">Study:</span> Amrita Vishwa Vidyapeetham

                </span>
              </li>

              <li className="col-span-1 flex items-start gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"></path></svg>
                <span className="text-sm text-gray-400">
                <span className="font-bold text-white">Study:</span> Atharva Institute of Film and Television, Mumbai University
</span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-5 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"></path></svg>
                <span className="text-sm text-gray-400">
                  <span className="font-bold text-white">Employment:</span> Kasicare,
                  Amfoss Club
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex w-full grow items-end gap-x-4 lg:flex-1 lg:basis-1/6">
          <div className="mr-auto flex flex-1 lg:hidden">
            <h2
              className="mb-4 font-brand-primary text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl"
              style={{
                textShadow:
                  "rgba(0, 0, 0, 0.5) 10px 10px 10px, rgba(0, 0, 0, 0.4) 20px 20px 20px, rgba(0, 0, 0, 0.1) 30px 30px 30px",
              }}
            >
              <span className="font-brand-primary text-green-700">Abo</span>ut
              me
            </h2>
          </div>
          <div className="-my-8 flex w-full flex-1 justify-center self-center lg:-ml-24 lg:block  lg:py-16">
            <div className="relative z-20 aspect-square w-32 overflow-hidden rounded-3xl shadow-xl shadow-black/40 lg:w-auto">
              <img
                alt="profile-image"
                className="object-cover"
                src="/assets/ppp.png"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="ml-auto hidden flex-1 sm:flex lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="grid grid-cols-1 sm:grid-cols-2">
      {/* Left Section: Image */}
      <div className="relative col-span-1 size-full min-h-[200px] overflow-hidden shadow-xl shadow-black/40 sm:rounded-r-3xl">
        <img
          alt="image"
          className="object-cover"
          sizes="(min-width: 320px) 640px, 320px"
          src="/assets/WhatsApp Image 2025-01-18 at 21.42.21.jpeg"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
      </div>

      {/* Right Section: Content */}
      <div className="relative col-span-1 sm:-ml-4 sm:mr-4 sm:py-6 md:-ml-8 md:mr-8 md:py-12">
        <div className="z-20 flex w-full flex-col items-start overflow-visible bg-gray-900 px-4 py-8 shadow-xl shadow-black/30 sm:rounded-2xl sm:p-8 lg:p-12">
          {/* Typing Animation */}
          <div className="relative mb-4 flex flex-row flex-wrap items-center">
            <p className="whitespace-nowrap text-xs font-bold text-stone-300 lg:text-sm">
              &lt;<span className="font-bold text-green-600">code</span>&gt;
              <span className="font-medium text-stone-400">I build</span>
            </p>
            <div className="ml-1 flex w-max items-center">
              <p className="animate-typing overflow-hidden whitespace-nowrap text-xs font-black tracking-wide text-stone-300 lg:text-sm">
                Scalable Full Stack Applications
              </p>
              <p className="animate-blinking p-0.5 align-middle text-lg font-bold text-white">
                |
              </p>
              <p className="text-xs font-bold text-stone-300 lg:text-sm">
                &lt;/<span className="font-bold text-green-600">code</span>&gt;
              </p>
            </div>
          </div>

          {/* Name and Social Links */}
          <div className="mb-4 flex w-full flex-wrap items-center gap-y-2">
            <h1 className="mr-4 w-max text-3xl font-black text-white">
              Aadarsh Prajapati
            </h1>
            <div className="flex gap-x-6 sm:gap-x-3">
              <a
                aria-label="Github"
                href="https://github.com/Aadarshprajapati777"
                className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
              >
                {/* GitHub Icon */}
                <svg
                  className="size-5 align-baseline"
                  fill="currentColor"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19 4.83-1.34 10.005-2.013 15.127-2.033 5.13.02 10.3.693 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  ></path>
                </svg>
              </a>
              {/* Add other social links similarly */}
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/aadarshprajapati777/"
                className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
              >
                {/* LinkedIn Icon */}
                <svg
                  className="size-5 align-baseline"
                  fill="currentColor"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64 0C28.654 0 0 28.654 0 64s28.654 64 64 64 64-28.654 64-64S99.346 0 64 0zm-18.564 97.557H30.218V46.303h15.218v51.254zM37.83 39.612c-4.857 0-8.801-3.944-8.801-8.802 0-4.857 3.944-8.8 8.801-8.8 4.857 0 8.8 3.943 8.8 8.8 0 4.858-3.943 8.802-8.8 8.802zm61.027 57.945H83.64V69.13c0-6.771-2.428-11.396-8.506-11.396-4.641 0-7.399 3.119-8.606 6.128-.445 1.082-.554 2.59-.554 4.103v29.692H50.73V46.303h15.218v7.03c2.014-3.105 5.621-7.527 13.723-7.527 10.032 0 17.502 6.543 17.502 20.61v31.141z"
                  ></path>
                </svg>
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/aadarshprajapati777/"
                className="-m-2 rounded-md p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white sm:-m-1.5 sm:p-1.5"
              >
                {/* Instagram Icon */}
                <svg class="size-5 align-baseline" fill="currentColor" viewBox="0 0 128 128" width="128" xmlns="http://www.w3.org/2000/svg"><path d="M92.6759 0H35.3226C15.8457 0 0 15.8465 0 35.3234V92.6766C0 112.154 15.8457 128 35.3226 128H92.6759C112.154 128 128 112.154 128 92.6766V35.3234C128.001 15.8465 112.154 0 92.6759 0ZM116.644 92.6766C116.644 105.892 105.892 116.643 92.6766 116.643H35.3226C22.1079 116.644 11.3568 105.892 11.3568 92.6766V35.3234C11.3568 22.1086 22.1079 11.3568 35.3226 11.3568H92.6759C105.891 11.3568 116.643 22.1086 116.643 35.3234V92.6766H116.644Z" fill="currentColor"></path><path d="M64 31.0191C45.8133 31.0191 31.0176 45.8147 31.0176 64.0015C31.0176 82.1875 45.8133 96.9823 64 96.9823C82.1867 96.9823 96.9824 82.1875 96.9824 64.0015C96.9824 45.8147 82.1867 31.0191 64 31.0191ZM64 85.6248C52.0761 85.6248 42.3744 75.9246 42.3744 64.0007C42.3744 52.0761 52.0754 42.3751 64 42.3751C75.9246 42.3751 85.6256 52.0761 85.6256 64.0007C85.6256 75.9246 75.9239 85.6248 64 85.6248Z" fill="currentColor"></path><path d="M98.3656 21.3893C96.1775 21.3893 94.0281 22.2752 92.4828 23.8273C90.9299 25.3718 90.0373 27.522 90.0373 29.7176C90.0373 31.9065 90.9307 34.0559 92.4828 35.608C94.0273 37.1526 96.1775 38.046 98.3656 38.046C100.561 38.046 102.704 37.1526 104.256 35.608C105.808 34.0559 106.694 31.9057 106.694 29.7176C106.694 27.522 105.808 25.3718 104.256 23.8273C102.711 22.2752 100.561 21.3893 98.3656 21.3893Z" fill="currentColor"></path></svg>
              </a>

            </div>
          </div>

          {/* Description */}
          <p className="prose mb-4 text-gray-200">
            I'm a Kerala-based{" "}
            <strong className="text-white">Full Stack Software Engineer</strong>
            , currently working at{" "}
            <strong className="text-white">Kasicare</strong> helping
            build a practice management software tailored exclusively for mental health therapists.
          </p>

          <p className="prose mb-4 text-gray-200">
            In my free time, you can catch me shooting in{" "}
            <strong className="text-white">Films</strong>, writing{" "}
            <strong className="text-white">stories</strong>, or exploring
            beautiful <strong className="text-white">beaches and forests</strong>.
          </p>

          {/* Call-'to-Action */}
          <div className="flex space-x-2">
            <a
              href="/assets/SDE_aadarsh_prajapati_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex rounded-full border-2 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 border-green-800 focus:ring-green-800"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="flex rounded-full border-2 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 border-stone-300 focus:ring-stone-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

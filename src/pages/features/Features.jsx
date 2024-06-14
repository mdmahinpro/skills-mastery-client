function Features() {
  return (
    <div className="bg-gray-900 h-screen pb-8">
      <section className="max-w-8xl mx-auto container bg-white dark:bg-gray-900 pt-16">
        <div>
          <div role="contentinfo" className="flex items-center flex-col px-4">
            <h1
              tabIndex="0"
              className="text-2xl md:text-3xl text-center  font-bold text-gray-100 "
            >
              Explorer our main specialities
            </h1>
          </div>
          <div
            tabIndex="0"
            aria-label="group of cards"
            className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
          >
            <div
              tabIndex="0"
              aria-label="card 1"
              className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
            >
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                    alt="drawer"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h2
                  tabIndex="0"
                  className="focus:outline-none text-lg font-bold leading-tight text-gray-800 dark:text-white"
                >
                  Comprehensive Course Catalog
                </h2>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2"
                >
                  Browse through a wide range of courses covering various
                  subjects and topics. Our extensive course catalog ensures that
                  you find the perfect course to suit your learning goals and
                  interests.
                </p>
              </div>
            </div>
            <div
              tabIndex="0"
              aria-label="card 2"
              className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
            >
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                    alt="check"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h2
                  tabIndex="0"
                  className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white"
                >
                  Secure Payment Integration
                </h2>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2"
                >
                  Enjoy a seamless and secure payment process while enrolling in
                  courses. We have integrated a reliable payment gateway to
                  ensure that your transactions are safe and protected.
                </p>
              </div>
            </div>
            <div
              tabIndex="0"
              aria-label="card 3"
              className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
            >
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                    alt="html tag"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h2
                  tabIndex="0"
                  className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white"
                >
                  Engaging Learning Experience
                </h2>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2"
                >
                  Immerse yourself in an interactive and engaging learning
                  environment. Our courses are designed to provide you with a
                  rich learning experience through multimedia content, quizzes,
                  and interactive exercises.
                </p>
              </div>
            </div>
            <div
              tabIndex="0"
              aria-label="card 4"
              className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
            >
              <div className="w-20 h-20 relative mr-5">
                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                    alt="monitor"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h2
                  tabIndex="0"
                  className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-white"
                >
                  Expert Instructors
                </h2>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-base text-gray-600 dark:text-gray-200 leading-normal pt-2"
                >
                  Learn from industry experts and experienced instructors who
                  are passionate about sharing their knowledge. Our instructors
                  are dedicated to providing you with high-quality education and
                  support throughout your learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;

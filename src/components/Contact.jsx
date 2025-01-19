import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const googleFormUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYQxz3awXqh9tsUhDlNMQ82iIPW2LcblJeIWcUG0TYUfDvUg/formResponse";

    const formDataObj = new FormData();
    formDataObj.append("entry.1537323578", formData.name);
    formDataObj.append("entry.1752678056", formData.email); 
    formDataObj.append("entry.422634768", formData.message);

    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors", 
      body: formDataObj,
    })
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again.");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center" id="contact">
      <div className="max-w-5xl mx-auto p-6">
        <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
              <span className="text-green-500">Get</span>
              <span className="text-white"> in touch</span>
              {/* https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYQxz3awXqh9tsUhDlNMQ82iIPW2LcblJeIWcUG0TYUfDvUg/formResponse */}
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYQxz3awXqh9tsUhDlNMQ82iIPW2LcblJeIWcUG0TYUfDvUg/viewform?embedded=true" width="640" height="689" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <p className="text-gray-400">
                  Have a project for me? Any questions about something I've
                  built? I'd love to hear from you. Drop me a message or use the
                  contact form below!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    {/* Location Icon */}
                    <svg
                      className="text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C8.13 2 5 5.13 5 8.5c0 3.74 2.85 7.31 7 12.35 4.15-5.04 7-8.61 7-12.35 0-3.37-3.13-6.5-7-6.5zm0 9.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 4.5 12 4.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                      />
                    </svg>
                    <span>Kerala, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* Email Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="size-4 shrink-0 text-white sm:size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg>
                    <a
                      href="mailto:geekaadarsh.dev@gmail.com"
                      className="hover:text-green-500"
                    >
                      geekaadarsh.dev@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* GitHub Icon */}
                    <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
                    <a
                      href="https://github.com/Aadarshprajapati777"
                      className="hover:text-green-500"
                    >
                      Aadarshprajapati777
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* LinkedIn Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                    <a
                      href="https://www.linkedin.com/in/aadarshprajapati777/"
                      className="hover:text-green-500"
                    >
                      aadarshprajapati777
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* Instagram Icon */}
                    <svg class="size-4 shrink-0 text-white sm:size-5" fill="currentColor" viewBox="0 0 128 128" width="128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M92.6759 0H35.3226C15.8457 0 0 15.8465 0 35.3234V92.6766C0 112.154 15.8457 128 35.3226 128H92.6759C112.154 128 128 112.154 128 92.6766V35.3234C128.001 15.8465 112.154 0 92.6759 0ZM116.644 92.6766C116.644 105.892 105.892 116.643 92.6766 116.643H35.3226C22.1079 116.644 11.3568 105.892 11.3568 92.6766V35.3234C11.3568 22.1086 22.1079 11.3568 35.3226 11.3568H92.6759C105.891 11.3568 116.643 22.1086 116.643 35.3234V92.6766H116.644Z" fill="currentColor"></path><path d="M64 31.0191C45.8133 31.0191 31.0176 45.8147 31.0176 64.0015C31.0176 82.1875 45.8133 96.9823 64 96.9823C82.1867 96.9823 96.9824 82.1875 96.9824 64.0015C96.9824 45.8147 82.1867 31.0191 64 31.0191ZM64 85.6248C52.0761 85.6248 42.3744 75.9246 42.3744 64.0007C42.3744 52.0761 52.0754 42.3751 64 42.3751C75.9246 42.3751 85.6256 52.0761 85.6256 64.0007C85.6256 75.9246 75.9239 85.6248 64 85.6248Z" fill="currentColor"></path><path d="M98.3656 21.3893C96.1775 21.3893 94.0281 22.2752 92.4828 23.8273C90.9299 25.3718 90.0373 27.522 90.0373 29.7176C90.0373 31.9065 90.9307 34.0559 92.4828 35.608C94.0273 37.1526 96.1775 38.046 98.3656 38.046C100.561 38.046 102.704 37.1526 104.256 35.608C105.808 34.0559 106.694 31.9057 106.694 29.7176C106.694 27.522 105.808 25.3718 104.256 23.8273C102.711 22.2752 100.561 21.3893 98.3656 21.3893Z" fill="currentColor"></path></svg>
                    <a
                      href="https://instagram.com/aadarshprajapati777/"
                      className="hover:text-green-500"
                    >
                      aadarshprajapati777
                    </a>
                  </div>
                </div>
              </div>
              {/* Right Column - Contact Form */}
              <div className="bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 shadow-inner">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                      rows="6"
                      className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

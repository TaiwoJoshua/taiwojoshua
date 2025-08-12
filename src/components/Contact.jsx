import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "./ToastContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const { showToast } = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((oldState) => ({ ...oldState, [name]: value }));
  };

  const sendMail = async (name, email, type, message) => {
    try {
      const send = await emailjs.send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        { name, email, message, type },
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      );
      if (send.status === 200) {
        return true;
      }
    } catch (error) {
      return error;
    }
  };

  const send = (e) => {
    e.preventDefault();
    setSending(true);

    sendMail(
      formData.name,
      formData.email,
      formData.type,
      formData.message
    ).then((send) => {
      if (send === true) {
        showToast("Message sent Successfully", "success");
        setFormData({ name: "", email: "", type: "", message: "" });
      } else {
        showToast("Message not Sent", "error");
      }
      setSending(false);
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Phone
                  </h4>
                  <a
                    href="tel:+2348103182378"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    (234) 810-318-2378
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-green-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Email
                  </h4>
                  <a
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                    href="mailto:joshuataiwo07@gmail.com"
                  >
                    joshuataiwo07@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fab fa-linkedin text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    LinkedIn
                  </h4>
                  <a
                    href="https://linkedin.com/in/joshua-taiwo-a565442b7/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    linkedin.com/in/joshua-taiwo-a565442b7/
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fab fa-whatsapp text-green-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/2348103182378"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                  >
                    +234 810 318 2378
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-purple-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <i className="fab fa-github text-gray-500 dark:text-gray-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/TaiwoJoshua/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    github.com/TaiwoJoshua
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={send} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  maxLength={100}
                  minLength={3}
                  disabled={sending}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  maxLength={100}
                  minLength={10}
                  disabled={sending}
                />
              </div>
              <div className="relative">
                <i className="fas fa-chevron-down absolute inset-y-0 right-4 top-[72%] transform -translate-y-1/2 text-white pointer-events-none"></i>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="type"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 appearance-none cursor-pointer"
                  defaultValue={formData.type}
                  onChange={handleChange}
                  required
                  disabled={sending}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Web Application">Web Application</option>
                  <option value="E-commerce Platform">
                    E-commerce Platform
                  </option>
                  <option value="API Development">API Development</option>
                  <option value="Website Maintenance">
                    Website Maintenance
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 resize-none"
                  placeholder="Tell me about your project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  minLength={50}
                  maxLength={300}
                  disabled={sending}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 disabled:from-gray-500 disabled:to-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 disabled:cursor-not-allowed"
                disabled={sending}
              >
                {sending ? (
                  <svg
                    className="animate-spin m-auto h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

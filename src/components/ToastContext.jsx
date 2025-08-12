import React, { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "info") => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  const icons = {
    success: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4 11.414a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.366-.446.957-.646 1.514-.519a1.005 1.005 0 01.707.707c.127.557-.073 1.148-.519 1.514l-6 4.5A1 1 0 014 9.5V4a1 1 0 011-1h3.257zM7 13a1 1 0 112 0v1a1 1 0 11-2 0v-1zm1-3a1 1 0 011-1h.01a1 1 0 01.99 1v.01a1 1 0 01-1 1H8a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-9 3a1 1 0 112 0v1a1 1 0 11-2 0v-1zm0-6a1 1 0 012 0v3a1 1 0 11-2 0V7z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-[500]">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={`w-80 ${
                typeStyles[toast.type || "info"]
              } text-white px-4 py-3 rounded-xl shadow-lg relative`}
            >
              <div className="flex items-start">
                {icons[toast.type || "info"]}
                <div className="flex-1 font-medium">{toast.message}</div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="ml-4 text-white font-bold hover:text-gray-200"
                >
                  ×
                </button>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white/70 rounded-b-xl"
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

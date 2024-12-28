import React, { useState, useEffect } from 'react';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Brauzer muhitida ishlayotganligimizni tekshirish
      const savedMode = localStorage.getItem('darkMode');
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== 'undefined') {
      // Brauzer muhitida `localStorage` saqlash
      localStorage.setItem('darkMode', newMode);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // HTML elementga qo'shish
    } else {
      document.documentElement.classList.remove('dark'); // HTML elementdan o'chirish
    }
  }, [darkMode]);
  

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
        {/* Sidebar */}
        <aside
          className={`fixed z-20 top-0 left-0 h-full w-64 bg-blue-800 text-white flex flex-col transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
        >
          <div className="p-4 text-lg font-bold">My Dashboard</div>
          <nav className="flex-1">
            <ul className="space-y-2 p-4">
              <li>
                <a href="#" className="block p-2 rounded hover:bg-blue-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-blue-700">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-blue-700">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          {/* Logout Button */}
          <div className="p-4">
            <button
              onClick={() => alert('Logging out...')}
              className="w-full p-2 rounded text-white bg-blue-500 hover:bg-white hover:text-blue-500 border border-blue-500 font-semibold"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between bg-white dark:bg-gray-900 shadow p-4">
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-blue-800 dark:text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">Dashboard</h1>
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2 rounded bg-blue-800 dark:bg-gray-700 text-white hover:bg-blue-700 dark:hover:bg-gray-600 focus:outline-none"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </header>

          {/* Main Section */}
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Welcome to the Dashboard
            </h1>

            {/* Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Sales</h2>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">$15,000</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Users</h2>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">1,245</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Revenue</h2>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">$28,750</p>
              </div>
            </section>
          </main>
        </div>

        {/* Overlay for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Index;
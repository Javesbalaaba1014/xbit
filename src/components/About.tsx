import React from 'react';

const About: React.FC = () => {
  return (
    <div className="px-4 py-16 md:px-8 bg-[#2C2844]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Advanced AI Investment Bot for Maximum Returns
            </h2>
            <p className="text-[#B7B3C0] text-lg">
              X-Bit leverages cutting-edge artificial intelligence to execute precise investment strategies across multiple cryptocurrency pairs.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1E1B2E] p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1E1B2E] hover:to-[#2C2844] hover:shadow-lg hover:shadow-[#00E3A5]/10">
                <h3 className="text-[#00E3A5] text-2xl font-bold">97%</h3>
                <p className="text-gray-300">Success Rate</p>
              </div>
              <div className="bg-[#1E1B2E] p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1E1B2E] hover:to-[#2C2844] hover:shadow-lg hover:shadow-[#00E3A5]/10">
                <h3 className="text-[#00E3A5] text-2xl font-bold">15%</h3>
                <p className="text-gray-300">Monthly Returns</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300 p-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1E1B2E] hover:to-transparent">
                <svg className="w-5 h-5 mr-2 text-[#00E3A5]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                24/7 Automated Investment
              </li>
              <li className="flex items-center text-gray-300 p-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1E1B2E] hover:to-transparent">
                <svg className="w-5 h-5 mr-2 text-[#00E3A5]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Risk Management System
              </li>
              <li className="flex items-center text-gray-300 p-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#1E1B2E] hover:to-transparent">
                <svg className="w-5 h-5 mr-2 text-[#00E3A5]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Real-time Market Analysis
              </li>
            </ul>
            <button className="relative bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50 hover:scale-105">
              Start Investing
            </button>
          </div>

          {/* Right side - Trading visualization */}
          <div className="bg-[#1E1B2E] p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#1E1B2E] hover:to-[#2C2844] hover:shadow-xl hover:shadow-[#00E3A5]/10">
            <div className="aspect-w-16 aspect-h-9 bg-[#2C2844] rounded-lg overflow-hidden">
              {/* You can add a trading chart or visualization here */}
              <div className="p-4">
                <div className="flex justify-between mb-4">
                  <span className="text-white font-bold">AI Investment Performance</span>
                  <span className="text-[#00E3A5]">+182.5%</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-[#3C3757] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00E3A5] w-[85%]"></div>
                  </div>
                  <div className="h-2 bg-[#3C3757] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00E3A5] w-[92%]"></div>
                  </div>
                  <div className="h-2 bg-[#3C3757] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00E3A5] w-[78%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
import React from 'react';

const Learn: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1E1B2E] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">AI-Powered Crypto Investment</h1>

        {/* AI Investment Overview */}
        <div className="bg-[#2C2844] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How X-BIT AI Works</h2>
          <p className="text-gray-300 mb-4">
            X-BIT uses advanced artificial intelligence to analyze market patterns, predict trends, 
            and make data-driven investment decisions in the cryptocurrency market.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* AI Analysis */}
          <div className="bg-[#2C2844] rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-[#00E3A5]/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-[#00E3A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Market Analysis</h3>
            </div>
            <p className="text-gray-300">
              Our AI continuously monitors market conditions, analyzing patterns and trends across multiple timeframes.
            </p>
          </div>

          {/* Risk Management */}
          <div className="bg-[#2C2844] rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-[#00E3A5]/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-[#00E3A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Risk Management</h3>
            </div>
            <p className="text-gray-300">
              Advanced algorithms ensure optimal position sizing and risk control for each investment.
            </p>
          </div>

          {/* Portfolio Optimization */}
          <div className="bg-[#2C2844] rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-[#00E3A5]/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-[#00E3A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Portfolio Optimization</h3>
            </div>
            <p className="text-gray-300">
              Dynamic portfolio rebalancing to maximize returns while maintaining risk parameters.
            </p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-[#2C2844] rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">AI Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1E1B2E] p-4 rounded-lg">
              <h3 className="text-gray-300 mb-2">Win Rate</h3>
              <p className="text-2xl font-bold text-[#00E3A5]">76%</p>
            </div>
            <div className="bg-[#1E1B2E] p-4 rounded-lg">
              <h3 className="text-gray-300 mb-2">Average Return</h3>
              <p className="text-2xl font-bold text-[#00E3A5]">18.5%</p>
            </div>
            <div className="bg-[#1E1B2E] p-4 rounded-lg">
              <h3 className="text-gray-300 mb-2">Risk Score</h3>
              <p className="text-2xl font-bold text-[#00E3A5]">Low</p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-[#2C2844] rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Start Investing with AI</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 mb-4">
                Begin your AI-powered investment journey with X-BIT in just a few simple steps:
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Create an account</li>
                <li>Complete verification</li>
                <li>Fund your account</li>
                <li>Select your investment strategy</li>
                <li>Let our AI optimize your portfolio</li>
              </ol>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50 hover:scale-105">
                Start Investing Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn; 
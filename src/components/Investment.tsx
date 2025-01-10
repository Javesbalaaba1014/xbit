import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import InvestmentQRModal from './modals/InvestmentQRModal';
import WithdrawModal from './modals/WithdrawModal';
import { calculateMaturityDate, formatDate, getRemainingDays } from '../utils/dateUtils';

const Investment: React.FC = () => {
  const { user } = useAuth();
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<'BTC' | 'BNB'>('BTC');
  const [selectedInvestment, setSelectedInvestment] = useState<any>(null);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleInvestClick = (coinType: 'BTC' | 'BNB') => {
    setSelectedCoin(coinType);
    setIsQRModalOpen(true);
  };

  const handleWithdraw = (investment: any) => {
    setSelectedInvestment(investment);
    setIsWithdrawModalOpen(true);
  };

  const isInvestmentMature = (date: string) => {
    const investmentDate = new Date(date);
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return investmentDate <= oneMonthAgo;
  };

  const renderMaturityStatus = (investmentDate: string) => {
    const maturityDate = calculateMaturityDate(investmentDate);
    const remainingDays = getRemainingDays(maturityDate);
    
    if (remainingDays <= 0) {
      return (
        <span className="text-[#00E3A5] text-sm">
          Matured on {formatDate(maturityDate)}
        </span>
      );
    }
    
    return (
      <span className="text-yellow-400 text-sm">
        Matures in {remainingDays} days
        <br />
        <span className="text-gray-400">
          {formatDate(maturityDate)}
        </span>
      </span>
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#1E1B2E] py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          variants={itemVariants}
          className="text-3xl font-bold text-white mb-8"
        >
          My Investments
        </motion.h1>
        
        {/* Investment Options */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#2C2844] rounded-xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Invest Now</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1E1B2E] p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <motion.img 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    src="/bitcoin.svg" 
                    alt="Bitcoin" 
                    className="w-8 h-8" 
                  />
                  <div>
                    <h3 className="text-white font-bold">Bitcoin</h3>
                    <p className="text-gray-400">BTC</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleInvestClick('BTC')}
                  className="bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50"
                >
                  Invest BTC
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1E1B2E] p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <motion.img 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    src="/bnb.svg" 
                    alt="BNB" 
                    className="w-8 h-8" 
                  />
                  <div>
                    <h3 className="text-white font-bold">Binance Coin</h3>
                    <p className="text-gray-400">BNB</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleInvestClick('BNB')}
                  className="bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50"
                >
                  Invest BNB
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Investment Summary */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#2C2844] rounded-xl p-6 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {['Total Investment', 'Current Value', 'Total Profit'].map((title, index) => (
              <motion.div
                key={title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1E1B2E] p-4 rounded-lg"
              >
                <h3 className="text-gray-300 mb-2">{title}</h3>
                <p className="text-2xl font-bold text-[#00E3A5]">
                  {index === 0 ? '$10,000' : index === 1 ? '$12,500' : '+25%'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Investments */}
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold text-white mb-6"
        >
          Active Investments
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#2C2844] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img src="/bitcoin.svg" alt="Bitcoin" className="w-8 h-8" />
                <div>
                  <h3 className="text-white font-bold">Bitcoin</h3>
                  <p className="text-gray-400">BTC</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#00E3A5] font-bold">+15.4%</p>
                <p className="text-gray-400">$5,000 invested</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm">
                {renderMaturityStatus('2024-01-07')}
              </div>
              <div className="h-2 bg-[#1E1B2E] rounded-full flex-1 ml-4">
                <div className="h-full bg-[#00E3A5] rounded-full w-[75%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-[#2C2844] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img src="/bnb.svg" alt="BNB" className="w-8 h-8" />
                <div>
                  <h3 className="text-white font-bold">Binance Coin</h3>
                  <p className="text-gray-400">BNB</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#00E3A5] font-bold">+8.2%</p>
                <p className="text-gray-400">$3,000 invested</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm">
                {renderMaturityStatus('2024-01-05')}
              </div>
              <div className="h-2 bg-[#1E1B2E] rounded-full flex-1 ml-4">
                <div className="h-full bg-[#00E3A5] rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment History */}
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold text-white mb-6 mt-8"
        >
          Investment History
        </motion.h2>
        <div className="bg-[#2C2844] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#1E1B2E]">
              <tr>
                <th className="text-left text-gray-300 p-4">Asset</th>
                <th className="text-left text-gray-300 p-4">Amount</th>
                <th className="text-left text-gray-300 p-4">Date</th>
                <th className="text-left text-gray-300 p-4">Maturity</th>
                <th className="text-left text-gray-300 p-4">Status</th>
                <th className="text-left text-gray-300 p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1E1B2E]">
                <td className="p-4 text-white">Bitcoin (BTC)</td>
                <td className="p-4 text-white">$2,000</td>
                <td className="p-4 text-gray-300">2024-01-07</td>
                <td className="p-4">
                  {renderMaturityStatus('2024-01-07')}
                </td>
                <td className="p-4">
                  <span className="text-[#00E3A5] bg-[#00E3A5]/10 px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="p-4">
                  {isInvestmentMature('2024-01-07') && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWithdraw({
                        asset: 'Bitcoin (BTC)',
                        amount: 2000,
                        profit: 308,
                        total: 2308
                      })}
                      className="text-[#00E3A5] hover:text-white bg-[#00E3A5]/10 hover:bg-[#00E3A5] px-3 py-1 rounded transition-colors"
                    >
                      Withdraw
                    </motion.button>
                  )}
                </td>
              </tr>
              <tr>
                <td className="p-4 text-white">Binance Coin (BNB)</td>
                <td className="p-4 text-white">$1,500</td>
                <td className="p-4 text-gray-300">2024-01-05</td>
                <td className="p-4">
                  {renderMaturityStatus('2024-01-05')}
                </td>
                <td className="p-4">
                  <span className="text-[#00E3A5] bg-[#00E3A5]/10 px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="p-4">
                  {isInvestmentMature('2024-01-05') && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWithdraw({
                        asset: 'Binance Coin (BNB)',
                        amount: 1500,
                        profit: 123,
                        total: 1623
                      })}
                      className="text-[#00E3A5] hover:text-white bg-[#00E3A5]/10 hover:bg-[#00E3A5] px-3 py-1 rounded transition-colors"
                    >
                      Withdraw
                    </motion.button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <InvestmentQRModal
          isOpen={isQRModalOpen}
          onClose={() => setIsQRModalOpen(false)}
          coinType={selectedCoin}
        />

        <WithdrawModal
          isOpen={isWithdrawModalOpen}
          onClose={() => setIsWithdrawModalOpen(false)}
          investment={selectedInvestment}
        />
      </div>
    </motion.div>
  );
};

export default Investment; 
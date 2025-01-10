import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  investment: {
    asset: string;
    amount: number;
    profit: number;
    total: number;
  };
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose, investment }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleWithdraw = async () => {
    setIsProcessing(true);
    // Here you would implement the actual withdrawal logic
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
      onClose();
    } catch (error) {
      console.error('Withdrawal failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#2C2844] rounded-xl p-6 max-w-md w-full mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Withdraw Investment
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-[#1E1B2E] p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Asset</span>
                  <span className="text-white font-bold">{investment.asset}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Initial Investment</span>
                  <span className="text-white">${investment.amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Profit</span>
                  <span className="text-[#00E3A5]">+${investment.profit.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-700 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Withdrawal</span>
                  <span className="text-white font-bold">${investment.total.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-[#1E1B2E] p-4 rounded-lg">
                <p className="text-yellow-400 text-sm mb-2">Important:</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Withdrawal will be processed within 24 hours</li>
                  <li>• Network fees will be deducted from the total amount</li>
                  <li>• Make sure your wallet address is correct</li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWithdraw}
              disabled={isProcessing}
              className={`w-full bg-gradient-to-r from-[#00E3A5] to-[#00c48f] text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00E3A5]/50 ${
                isProcessing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Withdrawal...
                </div>
              ) : (
                'Confirm Withdrawal'
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WithdrawModal; 
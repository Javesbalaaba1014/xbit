import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Stats: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#2C2844] py-12 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-[#1E1B2E] rounded-xl p-6">
              <h3 className="text-gray-400 mb-2">Total Investors</h3>
              <div className="text-3xl font-bold text-[#00E3A5]">
                <CountUp end={5000} duration={2.5} separator="," />+
              </div>
              <p className="text-gray-400 mt-2 text-sm">Active users worldwide</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-[#1E1B2E] rounded-xl p-6">
              <h3 className="text-gray-400 mb-2">Total Investment</h3>
              <div className="text-3xl font-bold text-[#00E3A5]">
                $<CountUp end={25000000} duration={2.5} separator="," />
              </div>
              <p className="text-gray-400 mt-2 text-sm">Assets under management</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-[#1E1B2E] rounded-xl p-6">
              <h3 className="text-gray-400 mb-2">Total Withdrawals</h3>
              <div className="text-3xl font-bold text-[#00E3A5]">
                $<CountUp end={12500000} duration={2.5} separator="," />
              </div>
              <p className="text-gray-400 mt-2 text-sm">Successfully processed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats; 
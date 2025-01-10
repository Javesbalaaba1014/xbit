import React from 'react';

interface InvestmentQRModalProps {
  isOpen: boolean;
  onClose: () => void;
  coinType: 'BTC' | 'BNB';
}

const InvestmentQRModal: React.FC<InvestmentQRModalProps> = ({ isOpen, onClose, coinType }) => {
  if (!isOpen) return null;

  const address = coinType === 'BTC' 
    ? 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' // Replace with your actual BTC address
    : '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';  // Replace with your actual BNB address

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2C2844] rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">
            Invest with {coinType}
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

        <div className="bg-white p-4 rounded-lg mb-4">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${address}`}
            alt={`${coinType} QR Code`}
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm mb-1">Address:</p>
            <div className="bg-[#1E1B2E] p-3 rounded-lg flex items-center justify-between">
              <p className="text-white text-sm break-all">{address}</p>
              <button
                onClick={() => navigator.clipboard.writeText(address)}
                className="ml-2 text-[#00E3A5] hover:text-[#00E3A5]/80"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-[#1E1B2E] p-4 rounded-lg">
            <p className="text-yellow-400 text-sm mb-2">Important:</p>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Send only {coinType} to this address</li>
              <li>• Minimum investment: 0.01 {coinType}</li>
              <li>• Transaction will be credited after network confirmation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentQRModal; 
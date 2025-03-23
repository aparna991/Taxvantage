const TaxStatus = () => {
    return (
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Tax Reserve Balance</h3>
        <div className="text-2xl font-bold">₹4,75,375</div>
        <div className="text-gray-500">Target: ₹8,00,000</div>
        <div className="mt-4">
          <h4 className="text-md font-bold">2023 Tax Payment Status</h4>
          <p className="text-xl">₹4,10,525 / ₹11,37,375 estimated tax</p>
          <p className="text-green-500 mt-2">57.5% Paid</p>
        </div>
      </div>
    );
  };
  
  export default TaxStatus;
  
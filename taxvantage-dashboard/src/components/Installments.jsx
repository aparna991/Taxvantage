const Installments = () => {
    const payments = [
      { date: "Dec 15", description: "Q4 Estimated Tax Payment", amount: "₹57,144.00" },
      { date: "Jan 15", description: "Self-Employment Tax", amount: "₹69,823.00" },
      { date: "Jan 31", description: "State Income Tax", amount: "₹35,126.00" },
    ];
  
    return (
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Upcoming Tax Installments</h3>
        {payments.map((item, idx) => (
          <div key={idx} className="flex justify-between p-2 border-b">
            <div>
              <div className="font-bold">{item.date}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
            <div className="text-md font-bold">{item.amount}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Installments;
  
import React from 'react';

const WorkPermit: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f9' }}>
      <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>🎓 US Citizen</h2>
        <p style={{ fontSize: '18px', color: '#333' }}>I am a US Citizen 🌟</p>
      </div>
    </div>
  );
};

export default WorkPermit;

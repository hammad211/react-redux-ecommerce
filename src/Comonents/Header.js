import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className='p-4'
      style={{
        borderBottom: '2px solid #ccc',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: "20px"
      }}
    >
      <div className='ui container center'>
        <button
          onClick={() => { navigate("/") }}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          FakeShop
        </button>
      </div>
    </div>
  )
}

export default Header

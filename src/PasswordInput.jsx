import { useState } from 'react'

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '35px',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 15px 40px rgba(79, 70, 229, 0.15)',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#312e81',
            marginBottom: '10px',
          }}
        >
          Password Input
        </h1>

        <p
          style={{
            textAlign: 'center',
            color: '#64748b',
            marginBottom: '30px',
          }}
        >
          Enter your password securely.
        </p>

        <label
          htmlFor="password"
          style={{
            display: 'block',
            marginBottom: '10px',
            color: '#334155',
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          Password
        </label>

        <div style={{ position: 'relative' }}>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '13px 70px 13px 14px',
              border: '1px solid #cbd5e1',
              borderRadius: '10px',
              outline: 'none',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'transparent',
              color: '#4f46e5',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <p
          style={{
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#64748b',
          }}
        >
          Click Show or Hide to change password visibility.
        </p>
      </div>
    </div>
  )
}

export default PasswordInput
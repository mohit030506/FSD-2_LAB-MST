import React, { useState } from 'react';

const MAX_LIMIT = 100;

export default function PostBox() {
  // 1. Controlled textarea state
  const [content, setContent] = useState('');

  // Derived state values
  const charCount = content.length;
  const isExceeded = charCount > MAX_LIMIT;
  const isEmpty = content.trim().length === 0;

  // 4. Disable button when empty OR limit exceeded
  const isButtonDisabled = isEmpty || isExceeded;

  const handlePost = () => {
    alert(`Published: ${content}`);
    setContent('');
  };

  return (
    <div style={styles.card}>
      <h3>Create Post</h3>
      
      {/* 1. Controlled textarea */}
      <textarea
        style={{
          ...styles.textarea,
          borderColor: isExceeded ? 'red' : '#ccc'
        }}
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div style={styles.footer}>
        {/* 3. Red "Limit exceeded" message */}
        {isExceeded ? (
          <span style={styles.errorMessage}>Limit exceeded</span>
        ) : (
          <span />
        )}

        {/* 2. Live character counter (e.g. 45 / 100) */}
        <span style={{ color: isExceeded ? 'red' : '#666', fontWeight: 'bold' }}>
          {charCount} / {MAX_LIMIT}
        </span>
      </div>

      {/* 4. Post button disabled when empty or over limit */}
      <button
        style={{
          ...styles.button,
          backgroundColor: isButtonDisabled ? '#ccc' : '#007bff',
          cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
        }}
        disabled={isButtonDisabled}
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '400px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'sans-serif'
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none'
  },
  footer: {
    display: 'flex',
    justify-content: 'space-between',
    align-items: 'center',
    marginTop: '8px'
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  button: {
    marginTop: '12px',
    width: '100%',
    padding: '10px',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

// import React from 'react';

// const LoginPage1 = () => {
//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage1;

import React from 'react';

const LoginPage1 = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form}>
        <input type="email" placeholder="Email" required style={styles.input} />
        <input type="password" placeholder="Password" required style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    marginBottom: '15px',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: '#f0f0f0',  // Lighter background color
    color: '#333',  // Dark text color
  },
  inputPlaceholder: {
    color: '#888',  // Subtle gray placeholder text
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default LoginPage1;

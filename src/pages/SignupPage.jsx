// import React from 'react';

// const SignupPage = () => {
//   return (
//     <div>
//       <h2>Signup</h2>
//       <form>
//         <input type="text" placeholder="Name" required />
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <input type="tel" placeholder="Phone Number" required />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;

import React from 'react';

const SignupPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Name" required style={styles.input} />
        <input type="email" placeholder="Email" required style={styles.input} />
        <input type="password" placeholder="Password" required style={styles.input} />
        <input type="tel" placeholder="Phone Number" required style={styles.input} />
        <button type="submit" style={styles.button}>Signup</button>
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
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
  button: {
    padding: '12px',
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

export default SignupPage;

// import React, { useState, useEffect } from 'react';

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyapi.online/api/movies')
//       .then((response) => response.json())
//       .then((data) => setMovies(data));
//   }, []);

//   return (
//     <div>
//       <h2>Movie Dashboard</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Movie Name</th>
//             <th>Rating</th>
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map((movie) => (
//             <tr key={movie.id}>
//               <td>{movie.id}</td>
//               <td>{movie.movie}</td>
//               <td>{movie.rating}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://dummyapi.online/api/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Movie Dashboard</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableHeaderCell}>ID</th>
            <th style={styles.tableHeaderCell}>Movie Name</th>
            <th style={styles.tableHeaderCell}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{movie.id}</td>
              <td style={styles.tableCell}>{movie.movie}</td>
              <td style={styles.tableCell}>{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    //padding: '2px',
    backgroundColor: '#f4f4f4',
    maxWidth: '800px',
    margin: '0 auto',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
  },
  tableHeaderCell: {
    padding: '12px',
    textAlign: 'left',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left',
    color: '#333'
  },
};

export default HomePage;

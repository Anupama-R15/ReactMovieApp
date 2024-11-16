import React from 'react';

const AddMoviePage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add Movie</h2>
      <form style={styles.form}>
        <label htmlFor="movie-name" style={styles.label}>Movie Name</label>
        <input
          type="text"
          id="movie-name"
          placeholder="Movie Name"
          required
          style={styles.input}
        />
        
        <label htmlFor="movie-description" style={styles.label}>Movie Description</label>
        <textarea
          id="movie-description"
          placeholder="Movie Description"
          required
          style={styles.textarea}
        ></textarea>
        
        <label htmlFor="movie-rating" style={styles.label}>Movie Rating</label>
        <input
           type="number"  
           id="movie-rating"
           placeholder="Movie Rating"
           required
           step="0.1"  
           style={styles.input}
        />
        
        <button type="submit" style={styles.button}>Add Movie</button>
      </form>
    </div>
  );
};


const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    width: '200%',  
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '14px',
    color: 'blue',
    textAlign: 'left',
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
  textarea: {
    marginBottom: '15px',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    backgroundColor: '#f0f0f0',  
    color: '#333',  
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#4a2bf8',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    alignSelf: 'flex-start',
  },
};

export default AddMoviePage;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form({ onSubmit }) {
  const [input, setInput] = useState({ name: '', lastname: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput({ name: '', lastname: '', email: '' });
  };

  const handleReset = () => {
    setInput({ name: '', lastname: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">First Name:</label>
        <input type="text" className="form-control" id="name" name="name" value={input.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Last Name:</label>
        <input type="text" className="form-control" id="lastname" name="lastname" value={input.lastname} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" name="email" value={input.email} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary me-2">Submit</button>
      <button type="reset" className="btn btn-secondary">Reset</button>
    </form>
  );
}

export default Form;

import React, { useState } from 'react';
import Form from './components/Form';
import DataTable from './components/DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <div className="App">
      <h1 className="text-center my-4">Form Submission</h1>
      <Form onSubmit={handleFormSubmit} />
      <DataTable data={formData} />
    </div>
  );
}

export default App;

import React from 'react';
import userFetchJobs from './userFetchJobs';
import { Container } from 'react-bootstrap';

function App() {
  const { jobs, loading, error } = userFetchJobs();

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing!</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;

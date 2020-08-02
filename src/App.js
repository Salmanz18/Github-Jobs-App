import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import Job from './components/Job';
import { Container } from 'react-bootstrap';
import { JobsPagination } from './components/JobsPagination';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  return (
    <Container className='my-4'>
      <h1 className='mb-4'>Github Jobs</h1>
      <JobsPagination page={page} setPage={setPage} hasNextPage={true} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing!</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;

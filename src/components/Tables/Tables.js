import React from 'react';
import { Container, Grid } from '@mui/material';
import Pagination from '../pagination/Paginations';
const Tables = ({ logsData,  handlePrevious, handleNext, page, pageCount, setPage}) => {
  return (
    <Container>
      {logsData.length > 0 ? (
        logsData.map((element, index) => (
          <div key={index}>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <span style={{ fontWeight: 'bold' }}>level:</span>: {element.level}
              </Grid>
              <Grid item xs={12}>
                <span style={{ fontWeight: 'bold' }}>message:</span>: {element.message}
              </Grid>
              <Grid item xs={12}>
                <span style={{ fontWeight: 'bold' }}>resourceId:</span>: {element.resourceId}
              </Grid>
              <Grid item xs={12}>
                <span style={{ fontWeight: 'bold' }}>timestamp:</span>: {element.timestamp}
              </Grid>
              <Grid item xs={12}>
                <span style={{ fontWeight: 'bold' }}>traceId:</span>: {element.traceId}
              </Grid>
              <Grid item xs={12}>
                <span style={{ fontWeight: 'bold' }}>spanId:</span>: {element.spanId}
              </Grid>
              <Grid item xs={12}>
                <span style={{ fontWeight: 'bold' }}>commit:</span>: {element.commit}
              </Grid>
              <Grid item xs={12}>
                <span style={{ fontWeight: 'bold' }}>metadata.parentResourceId:</span>:{' '}
                {element.metadata?.parentResourceId || 'N/A'}
              </Grid>
              <Grid item xs={12} sm={1.2}></Grid>
              <Grid item xs={12} sm={10.8}></Grid>
            </Grid>
            <hr />
          </div>
        ))
      ) : (
        <div className='no_data text-center'>NO Data Found</div>
      )}
      <Pagination handlePrevious={handlePrevious} handleNext={handleNext} page={page} pageCount={pageCount} setPage={setPage}/>
    </Container>
  );
};

export default Tables;

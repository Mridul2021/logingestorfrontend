import * as React from 'react';
import { Pagination, Button, Stack, Typography } from '@mui/material';

const Paginations = ({ handlePrevious, handleNext, page, pageCount, setPage }) => {
  return (
    <div style={{ marginBottom: '3vh' }}>
      {pageCount > 0 ? (
        <Stack direction="row" spacing={2} sx={{ marginLeft: '30vw', alignItems: 'center' }}>
          <Button variant="contained" color="primary" onClick={() => handlePrevious()}>
            Previous
          </Button>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {page}
          </Typography>
          <Button variant="contained" color="primary" sx={{ paddingRight: '30px', paddingLeft: '20px' }} onClick={() => handleNext()}>
            Next
          </Button>
        </Stack>
      ) : (
        <Typography variant="body1" sx={{ marginLeft: '30vw' }}>
          No pages available.
        </Typography>
      )}
    </div>
  );
};

export default Paginations;

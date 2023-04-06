import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <div>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 3,
          height: '200vh',
        }}
        open={true}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  );
}

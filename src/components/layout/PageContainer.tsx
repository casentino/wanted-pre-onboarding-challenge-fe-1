import React from 'react';
import { Container } from '@mui/material';

function PageContainer({ children }: React.PropsWithChildren) {
  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: '150px',
        height: '100vh',
      }}
    >
      {children}
    </Container>
  );
}
export default PageContainer;

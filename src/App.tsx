import React from 'react';
import { CssBaseline } from '@mui/material';
import './App.css';
import PageContainer from './components/layout/PageContainer';
import PageRouters from './routes/PageRouters';

function App() {
  return (
    <PageContainer>
      <CssBaseline />
      <PageRouters />
    </PageContainer>
  );
}

export default App;

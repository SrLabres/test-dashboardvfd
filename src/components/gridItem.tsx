import { Box } from '@mui/material'
import React from 'react'
export default function GridItem(props) {
    const { children } = props;
  
    return (
      <Box sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      </Box>
    );
  }
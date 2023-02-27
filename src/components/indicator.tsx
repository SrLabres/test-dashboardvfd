import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
export function Indicator(props) {
    const { name, value } = props
    return (
       
                <><Box sx={{ color: 'text.secondary' }}>{name}</Box>
                <Box sx={{ color: 'text.primary', fontSize: "2em", fontWeight: 'medium' }}>
                    {value}
                </Box></>
           
    )
}
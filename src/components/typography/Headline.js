import React from 'react';
import {Divider, Typography, Stack} from "@mui/material";
import {colors} from "../../styles/globals";

const Headline = ({title, textColor = colors.TITLE, dividerColor =  colors.ORANGE}) => {
    return (
       <Stack alignItems={'center'} justifyContent={'center'}>
           <Typography variant={'h2'} fontSize={['1.4rem','2rem']} color={textColor} textTransform={'uppercase'} fontWeight={600} letterSpacing={'2px'} textAlign={'center'}>{title}</Typography>
           <Divider color={dividerColor} sx={{height: '.1rem', width: '10%', marginY: 2}} />
       </Stack>
    );
};

export default Headline;

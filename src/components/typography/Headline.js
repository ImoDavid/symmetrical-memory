import React from 'react';
import {Divider, Typography, Stack} from "@mui/material";
import {colors} from "../../styles/globals";

const Headline = ({ title, textColor = colors.TITLE, dividerColor = colors.ORANGE, width = '10%', fontSize = ['1.4rem', '2rem'], textAlign ='center', alignItems='center'}) => {
    return (
        <Stack alignItems={alignItems} justifyContent={'center'}>
            <Typography variant={'h2'} fontSize={fontSize} color={textColor} textTransform={'uppercase'} fontWeight={600} letterSpacing={'2px'} textAlign={textAlign}>{title}</Typography>
            <Divider color={dividerColor} sx={{height: '.1rem', width: width, marginY: 2}} />
        </Stack>
    );
};

export default Headline;

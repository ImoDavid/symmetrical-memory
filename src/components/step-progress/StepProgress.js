import React from 'react';
import {Box, styled, Typography} from '@mui/material';
import {BsFileRichtextFill, BsHouseDoor} from 'react-icons/bs';
import {MdOutlinePayments} from 'react-icons/md';
import {IoCubeOutline} from 'react-icons/io5';
import {colors} from "../../styles/globals";

const MainContainer = styled(Box)({
    width: '100%',
    maxWidth: '100%',
    margin: `0 auto`
});

const StepContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    '&:before': {
        content: '""',
        position: 'absolute',
        borderBottom: '3px dashed #F2F4F7',
        background: 'transparent',
        width: '100%',
        top: '23%',
        transform: 'translateY(-50%)',
        left: 0
    },

    '@media screen and (max-width: 1200px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        '&:before': {
            left: '25px',
            top: '50%',
            width: '3px',
            height: '100%',
            borderLeft: '3px dashed #F2F4F7'
        }
    }
});

const StepWrapper = styled(Box)({
    position: 'relative',
    zIndex: 1,

    '@media screen and (max-width: 1200px)': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const StepStyle = styled(Box)({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    transition: '.4s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginBottom: '15px',

    '@media screen and (max-width: 1200px)': {
        width: '48px',
        height: '48px',
        margin: '10px auto',
        marginRight: 8
    }
});

const StepsLabelContainer = styled(Box)({});

const StepLabel = styled(Typography)({
    fontWeight: 500,
    fontSize: '1rem'
});

const CheckMark = styled(Box)({
    fontSize: '26px',
    fontWeight: 600,
    color: '#4a154b',
    transform: `scaleX(-1) rotate(-46deg)`
})


const StepCount = styled('span')({
    fontSize: '19px',
    color: colors.BLACK,

    '@media screen (max-width: 600px)': {
       fontSize: '16px'
    }
})


const steps = [
    {
        label: 'Pending',
        step: 1
    },
    {
        label: 'Processing',
        step: 2
    },
    {
        label: 'In Transit',
        step: 3
    },
    {
        label: 'On Hold',
        step: 4
    },
    {
        label: 'Delivered',
        step: 5
    }
];

const StepProgressBar = ({status}) => {
    const [activeStep, setActiveStep] = React.useState(0);

    React.useEffect(() => {
        status === 'Pending' && setActiveStep(1);
        status === 'Processing' && setActiveStep(2);
        status === 'In Transit' && setActiveStep(3);
        status === 'On Hold' && setActiveStep(4);
        status === 'Delivered' && setActiveStep(5);
    }, [status]);

    const totalSteps = steps.length;
    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

    return (
        <MainContainer>
            <StepContainer
                sx={{
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        borderBottom: '3px dashed #E3FBCC',
                        background: 'transparent',
                        width,
                        top: '23%',
                        transform: 'translateY(-50%)',
                        transition: '0.4s ease',
                        left: 0,

                        '@media screen and (max-width: 1200px)': {
                            left: '25px',
                            top: '50%',
                            height: `100%`,
                            width: '3px',
                            borderLeft: '3px dashed #E3FBCC',
                            transform: 'translateY(-50%)'
                        }
                    }
                }}
            >
                {steps.map(({step, label}) => (
                    <StepWrapper key={step}>
                        <StepStyle bgcolor={activeStep >= step ? colors.ORANGE : '#F2F4F7'}>
                            {activeStep > step ? (
                                <CheckMark>L</CheckMark>
                            ) : (
                                <StepCount>{step}</StepCount>
                            )}
                        </StepStyle>
                        <StepsLabelContainer>
                            <StepLabel key={step} color={activeStep >= step ? colors.ORANGE : colors.OFF_WHITE}>
                                {label}
                            </StepLabel>
                        </StepsLabelContainer>
                    </StepWrapper>
                ))}
            </StepContainer>
        </MainContainer>
    );
};

export default StepProgressBar;

import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import {
  Box,
  styled,
  Typography,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
} from '@mui/material';
import { colors } from '../../styles/globals';
import { CallToAction } from '../../components/home-page';
import formatCurrency from '../../utils/formatCurrency';
import { StepProgress } from '../../components/step-progress';

const StyledBox = styled(Box)({
  background: `url(https://res.cloudinary.com/dywofwzdx/image/upload/v1671989031/pch-van_q4sn7e.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
});

const StyledInnerBox = styled(Box)({
  width: '95%',
  backgroundColor: colors.BLACK,
  margin: '1rem auto',
  padding: ['0rem', '1rem'],
});
const StyledDivider = styled(Divider)({
  Color: colors.WHITE,
  height: '.1rem',
});
const StyledTitle = styled(Typography)({
  color: colors.PRIMARY,
  // textTransform: "capitalize",
});
const ShipmentTracking = () => {
  const [query, setQuery] = useState('');
  const [trackingReport, setTrackingReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const HandleChange = (event) => {
    setQuery(event.target.value.trim());
    setError(false);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setTrackingReport(null);
      const response = await axios.get(
        `https://raw.pchofficials.com/api/track-shipment/${query}`
      );
      setTrackingReport(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  console.log(trackingReport);

  return (
    <>
      <Helmet>
        <title>Track Shipment | Pch Officials</title>
      </Helmet>
      <StyledBox height={['40vh', '55vh']} />;
      <Box paddingY={6}>
        <CallToAction
          title={'Track your Shipment'}
          label={'Enter Tracking No'}
          backgroundColor={colors.WHITE}
          onChange={HandleChange}
          onClick={HandleSubmit}
          buttonColor={colors.BLACK}
          buttonColorHover={colors.ORANGE}
          buttonText={loading ? 'Loading...' : 'TRACK RESULT'}
        />
        {trackingReport !== null && (
          <Box
            sx={{
              backgroundColor: colors.PRIMARY,
              height: 'auto',
              width: ['95%', '80%'],
              margin: 'auto',
              color: colors.WHITE,
              padding: '1rem 0rem',
            }}
          >
            <Typography padding={2}>Shipment/ Tracking</Typography>
            <Divider />

            <StyledInnerBox>
              <StyledTitle
                padding={['0.5rem', '1rem']}
                textTransform={'uppercase'}
              >
                Tracking no.:{trackingReport.tracking_code}
              </StyledTitle>
              <Box my={2}>
                <StepProgress status={trackingReport.delivery_status} />
              </Box>
              <Divider m={1} color={colors.WHITE} />
              <Stack direction={'row'}>
                <Box width={['55%', '80%']} padding={1}>
                  <StyledTitle>Shipment Dates</StyledTitle>
                  <Divider
                    m={1}
                    color={colors.WHITE}
                    sx={{ height: '.1rem' }}
                  />
                  <Stack direction={['column', 'row']}>
                    <Typography mr={['0', '5rem']} textTransform={'capitalize'}>
                      Ship date: {trackingReport.createdAt}
                    </Typography>
                    <Typography textTransform={'capitalize'}>
                      Delivery date: {trackingReport.deliveryDate}
                    </Typography>
                  </Stack>
                </Box>
                <Box width={['45%', '20%']} padding={1}>
                  <StyledTitle>Destination</StyledTitle>
                  <Divider
                    m={1}
                    color={colors.WHITE}
                    sx={{ height: '.1rem' }}
                  />
                  <Typography textTransform={'capitalize'}>
                    {trackingReport.destination}
                  </Typography>
                </Box>
              </Stack>
            </StyledInnerBox>

            <StyledInnerBox>
              <StyledTitle padding={['0.5rem', '1rem']}>
                Shipment Profile
              </StyledTitle>
              <Divider m={1} color={colors.WHITE} />
              <Stack direction={'row'}>
                <Box width={'50%'} padding={1}>
                  <StyledTitle>Shipper Details</StyledTitle>
                  <Divider
                    m={1}
                    color={colors.WHITE}
                    sx={{ height: '.1rem' }}
                  />
                  <Box>
                    <List>
                      <ListItem>
                        <Typography textTransform={'capitalize'}>
                          <b>Shipper Name:</b> {trackingReport.shipper_name}
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography textTransform={'capitalize'}>
                          <b>Shipper Phone:</b>{' '}
                          {trackingReport.shipper_phone_number}
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography textTransform={'none'}>
                          <b>Shipper E-mail:</b> {trackingReport.shipper_email}
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography textTransform={'capitalize'}>
                          <b>Shipper Address:</b>{' '}
                          {trackingReport.shipper_address}
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box width={'50%'} padding={1}>
                  <StyledTitle variant={'body1'}>Receiver Details</StyledTitle>
                  <Divider
                    m={1}
                    color={colors.WHITE}
                    sx={{ height: '.1rem' }}
                  />
                  <Typography textTransform={'capitalize'}>
                    {trackingReport.receiver_address}
                  </Typography>
                </Box>
              </Stack>
            </StyledInnerBox>

            <StyledInnerBox>
              <StyledTitle padding={['0.5rem', '1rem']}>
                Shipment Content / Description
              </StyledTitle>
              <Divider m={1} color={colors.WHITE} />
              <Stack direction={'row'}>
                <Box width={'33.3%'} padding={1}>
                  <StyledTitle variant={'body1'}>no</StyledTitle>
                  <Typography>1</Typography>
                </Box>
                <Box width={'33.3%'} padding={1}>
                  <StyledTitle variant={'body1'}>Qty</StyledTitle>
                  <Typography>1</Typography>
                </Box>
                <Box width={'33.3%'} padding={1}>
                  <StyledTitle variant={'body1'}>Content</StyledTitle>
                  <Typography textTransform={'capitalize'}>
                    {formatCurrency(trackingReport.item_content)}
                  </Typography>
                </Box>
              </Stack>
            </StyledInnerBox>

            <StyledInnerBox>
              <StyledTitle padding={['0.5rem', '1rem']}>
                Shipment Details
              </StyledTitle>
              <Divider m={1} color={colors.WHITE} />
              <Stack direction={'row'}>
                <Box width={'55%'} padding={1}>
                  <Stack direction={['column', 'row']}>
                    <Typography mr={['0', '5rem']} textTransform={'capitalize'}>
                      Service type: {trackingReport.delivery_type}
                    </Typography>
                    <Typography textTransform={'capitalize'}>
                      Weight:{' '}
                      {trackingReport.item_weight + trackingReport.item_unit}
                    </Typography>
                  </Stack>
                </Box>
                <Box width={'45%'} padding={1}>
                  <Typography color={colors.BLACK} textTransform={'capitalize'}>
                    Reference: {trackingReport.id}
                  </Typography>
                </Box>
              </Stack>
            </StyledInnerBox>

            <StyledInnerBox>
              <StyledTitle>Shipment Travel History</StyledTitle>
              <Divider m={1} color={colors.WHITE} />
              <Typography>
                All shipment travel activity is displayed here
              </Typography>
              <TableContainer>
                <Table size='small' sx={{ marginY: '0.5rem' }}>
                  <TableHead bgcolor={colors.PRIMARY}>
                    <TableRow>
                      <TableCell>DATE/TIME</TableCell>
                      <TableCell>ACTIVITY</TableCell>

                      <TableCell>DETAILS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody bgcolor={colors.WHITE}>
                    {trackingReport.shipping_activities.map((row, i) => (
                      <TableRow key={i} sx={{ border: 0 }}>
                        <TableCell component='th'>{row.updatedAt}</TableCell>
                        <TableCell>{row.activity}</TableCell>
                        <TableCell>{row.details}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </StyledInnerBox>
          </Box>
        )}
        {error && (
          <Box
            sx={{
              backgroundColor: colors.PRIMARY,
              height: 'auto',
              width: ['95%', '80%'],
              margin: 'auto',
              color: colors.WHITE,
              padding: '1rem 0rem',
            }}
          >
            <Typography padding={2}>Shipment/ Tracking</Typography>
            <Divider />

            <StyledInnerBox>
              <StyledTitle padding={['0.5rem', '1rem']}>
                Tracking no.:{query} not found
              </StyledTitle>
            </StyledInnerBox>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ShipmentTracking;

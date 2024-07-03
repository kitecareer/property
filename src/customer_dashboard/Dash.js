import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import axios from '../AxiosInstance';
import '../css/style.css';
import img from '../asserts/dash1.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('Token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('filter/owned_properties_count', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
        setTotal(response.data.total_count);
        setDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const cardStyles = {
    backgroundColor: '#D2D2D2',
    margin: '0 auto',
    height: 300,
    width: 300,
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
  };

  const cardHeaderStyles = {
    textAlign: 'center',
    backgroundColor: '#66604A',
    padding: '20px',
    borderRadius: '20px 20px 0 0',
  };

  const cardContentStyles = {
    backgroundColor: '#D2D2D2',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '0 0 20px 20px',
  };

  return (
    <Sidebar>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={cardStyles}>
            <div style={cardHeaderStyles}>
              <img src={img} width={100} height={100} alt="Property" />
              <MoreHorizIcon />
            </div>
            <CardContent sx={cardContentStyles}>
              <Typography gutterBottom component="div">
                <h2>Total Properties: {total}</h2>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {details.map((property, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={cardStyles}>
              <div style={cardHeaderStyles}>
                <img src={img} width={100} height={100} alt="Property" />
              </div>
              <CardContent sx={cardContentStyles}>
                <Typography variant="body2">
                  <h1>{property.ad_category}: {property.count}</h1>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Sidebar>
  );
}

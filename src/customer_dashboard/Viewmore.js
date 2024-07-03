import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Box, Typography } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BalconyIcon from '@mui/icons-material/Balcony';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import '../css/style.css';

const PropertyDetails = () => {
  const location = useLocation();
  const property = location.state.property;

  const decodeBase64Image = (base64ImageString) => {
    return `data:image/jpeg;base64,${base64ImageString}`;
  };

  return (
    <Box padding="20px">
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{padding:'10px 0'}}>
          <Typography variant="h6" component="b" >
            {property.BHK_type} {property.property_type} {property.total_area} sq.ft. for Sale in <u>{property.area}, {property.locality}</u>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ border: '1px solid', padding: '10px' }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4">{property.apartment_name}</Typography>
              <img
                src={decodeBase64Image(property.upload_images)}
                alt="Property"
                style={{ width: '100%', height: 'auto'}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">
                {property.BHK_type} {property.property_type} {property.total_area} sq.ft. for Sale in <u>{property.area}, {property.locality}</u>
              </Typography>
              {/* <table style={{ width: "97%", borderCollapse: 'collapse', padding: '10px', color: '#000',background:'#EAEAEA' }}>
       
            <tr >
              <th style={{padding:'10px 0'}}><span style={{paddingTop:'20px'}}><ExploreIcon/></span>Property Type</th>
              <th ><BathtubIcon/><span>Property Type</span></th>
              <th><BalconyIcon/><span>Property Type</span></th>
              <th><SquareFootIcon/><span>Property Type</span></th>
             
            </tr>
          
        </table> */}
        <div className='viewbox' style={{display:'flex',justifyContent:'space-evenly'}}>
        <p><span><ExploreIcon/> </span>Property Type</p>|
        <p><span><ExploreIcon/> </span> Property Type</p>
        <p><span><ExploreIcon/> </span> Property Type</p>
        <p><span><ExploreIcon/> </span> Property Type</p>
        </div>
        
        
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Box>
                <Typography><b>Type of Property:</b> {property.type_of_property}</Typography>
                <Typography><b>Category:</b> {property.ad_category}</Typography>
                <Typography><b>Property Type:</b> {property.property_type}</Typography>
                <Typography><b>Apartment Name:</b> {property.apartment_name}</Typography>
                <Typography><b>BHK Type:</b> {property.BHK_type}</Typography>
                <Typography><b>Floor:</b> {property.floor}</Typography>
                <Typography><b>Total Floor:</b> {property.total_floor}</Typography>
                <Typography><b>Floor Type:</b> {property.floor_type}</Typography>
                <Typography><b>Property Age:</b> {property.property_age}</Typography>
                <Typography><b>Ownership Type:</b> {property.ownership_type}</Typography>
                <Typography><b>Facing:</b> {property.facing}</Typography>
                <Typography><b>Total area:</b> {property.total_area}</Typography>
                <Typography><b>City:</b> {property.area}</Typography>
                <Typography><b>Locality:</b> {property.locality}</Typography>
                <Typography><b>Landmark:</b> {property.landmark}</Typography>
                <Typography><b>Rental Type:</b> {property.rental_type}</Typography>
                <Typography><b>Expected Rent:</b> {property.expected_rent}</Typography>
                <Typography><b>Expected Deposit:</b> {property.expected_deposit}</Typography>
                <Typography><b>Rent Negotiable:</b> {property.rent_negotiable}</Typography>
                <Typography><b>Lease Amount:</b> {property.expected_lease_amount}</Typography>
                <Typography><b>Year of Lease:</b> {property.year_of_lease}</Typography>
                <Typography><b>Lease Negotiable:</b> {property.lease_negotiable}</Typography>
                <Typography><b>Monthly Maintenance:</b> {property.monthly_maintenance}</Typography>
                <Typography><b>Maintenance Extra:</b> {property.maintenance_extra}</Typography>
                <Typography><b>Preferred Tenants:</b> {property.preferred_tenant}</Typography>
                <Typography><b>Furnishing:</b> {property.is_furnishing}</Typography>
                <Typography><b>Parking:</b> {property.is_parking}</Typography>
                <Typography><b>Available From:</b> {property.available_from}</Typography>
                <Typography><b>No.of Bathroom:</b> {property.bathroom}</Typography>
                <Typography><b>No.of Balcony:</b> {property.balcony}</Typography>
                <Typography><b>Who will Show the Property:</b> {property.showing_agent}</Typography>
                <Typography><b>Phone Number:</b> {property.secondary_number}</Typography>
                <Typography><b>Water Supply:</b> {property.water_supply}</Typography>
                <Typography><b>Gym:</b> {property.gym}</Typography>
                <Typography><b>Gated Security:</b> {property.gated_security}</Typography>
                <Typography><b>Extra Facilities:</b> {property.available_amenities}</Typography>
              </Box>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyDetails;

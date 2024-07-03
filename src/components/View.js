import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import '../css/Home.css';

export default function View() {
  const location = useLocation();
  const { propertyDetails = [] } = location.state || {};

  // Log propertyDetails to verify data structure
  console.log("Property Details:", propertyDetails);

  return (
    <Grid container sx={{ backgroundColor: '#22323F', height: '100vh', width: '100vw' }}>
      <Grid item xs={12}>
        <table style={{ width: "97%", margin: '15px', borderCollapse: 'collapse', padding: '10px', color: '#fff' }}>
          <thead>
            <tr>
              <th>Property Type</th>
              <th>Location</th>
              <th>Price</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {propertyDetails.length > 0 ? (
              propertyDetails.map((property, index) => (
                <tr key={index}>
                  <td>{property.BHK_type} </td>
                  <td>{property.location}</td>
                  <td>{property.price}</td>
                  <td>{property.type}</td>
                  <td>{property.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No property details available</td>
              </tr>
            )}
          </tbody>
        </table>
      </Grid>
      <Grid container spacing={2} item xs={12} sx={{ display: 'flex' }}>
        <Grid item xs={7}>
          <div className="image-container">
            {propertyDetails.length > 0 ? (
              propertyDetails.map((property, index) => (
                property.upload_images ? (
                  property.upload_images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt={`Property Image ${imgIndex + 1}`} />
                  ))
                ) : (
                  <p key={index}>No images available</p>
                )
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </Grid>
        <Grid item xs={5}>
          <table style={{ width: "95%", borderCollapse: 'collapse', color: '#fff' }}>
            <tbody>
              <tr>
                <td className='tab-data'>Jill</td>
                <td className='tab-data'>Smith</td>
              </tr>
              <tr>
                <td className='tab-data'>Eve</td>
                <td className='tab-data'>Jackson</td>
              </tr>
              <tr>
                <td className='tab-data'>Jill</td>
                <td className='tab-data'>Smith</td>
              </tr>
              <tr>
                <td className='tab-data'>Eve</td>
                <td className='tab-data'>Jackson</td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Grid>
  );
}

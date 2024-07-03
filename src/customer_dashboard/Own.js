import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import { Grid, Button, Dialog, DialogActions, DialogContent, MenuItem, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Axios from '../AxiosInstance';
import Swal from 'sweetalert2';


export default function Own({ propertyType, handleDelete, handleEdit }) {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedForm, setSelectedForm] = useState();
  const [formData, setFormData] = useState({
    property_details: {},
    locality: {},
    rental: {},
    image: {},
    amenities: {},
  });

  const navigate = useNavigate();

  const decodeBase64Image = (base64ImageString) => {
    return `data:image/jpeg;base64,${base64ImageString}`;
  };
  const handleViewMore = (property) => {
    navigate(`/property/${property.id}`, { state: { property } });
  };
  

  const handleEditClick = (property) => {
    setSelectedProperty(property);
    setSelectedForm('property_details');
    setShowFullDetails(true);
    setFormData({
      property_details: { ...property },
      locality: {},
      rental: {},
      image: {},
      amenities: {},
    });
    setEditDialogOpen(true);
  };

  const handleFormChange = (formName, e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [formName]: {
        ...formData[formName],
        [name]: value,
      },
    });
  };

  const handleEditSave = () => {
    handleEdit(selectedProperty.id, formData[selectedForm]);
    setEditDialogOpen(false);
  };

  const handleDeleteClick = async (propertyId) => {
    try {

        const secondResult = await Swal.fire({
          title: 'Are you really sure?',
          text: "This action is irreversible. Do you really want to delete?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'Cancel'
        });

        if (secondResult.isConfirmed) {
          await Axios.delete(`/property/delete_property_detail?property_id=${propertyId}`, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('Token'),
            },
          });
          Swal.fire('Deleted!', 'Your property has been deleted.', 'success');
          window.location.reload(); 
         
        }
      
    } catch (error) {
      console.error('Failed to delete property:', error);
      Swal.fire('Error', 'Failed to delete property. Please try again later.', 'error');
    }
  };

  

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Owned Properties</h1>
      <div style={{ overflowY: 'auto', padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
        {propertyType.map((property, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 calc(50% - 40px)',
              margin: '10px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box',
              minWidth: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h2>Property {index + 1}</h2>
            {showFullDetails ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <Grid item xs={4}>
                    <Grid item sm={5} sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center', height: 250 }}>
                      {property.upload_images && (
                        <img src={decodeBase64Image(property.upload_images[0])} alt="Property" style={{ width: '100%', height: 'auto' }} />
                      )}
                    </Grid>
                    {/* Property details */}
                    <p><b>Type of Property:</b> {property.type_of_property}</p>
                    <p><b>Category:</b> {property.ad_category}</p>
                    <p><b>Property Type:</b> {property.property_type}</p>
                    <p><b>Apartment Name:</b> {property.apartment_name}</p>  
                    <p><b>BHK Type:</b> {property.BHK_type}</p>
                    <p><b>Floor:</b> {property.floor}</p>
                    <p><b>Total Floor:</b> {property.total_floor}</p>
                    <p><b>Floor Type:</b> {property.floor_type}</p>
                    <p><b>Property Age:</b> {property.property_age}</p>
                    <p><b>Ownership Type:</b> {property.ownership_type}</p>
                    <p><b>Facing:</b> {property.facing}</p>
                    <p><b>Total area sqt:</b> {property.total_area}</p>
                    {/* Locality */}
                    <p><b>City:</b> {property.area}</p>
                    <p><b>Locality:</b> {property.locality}</p>
                    <p><b>Landmark:</b> {property.landmark}</p>
                    {/* Rental details */}
                    <p><b>Rental Type:</b> {property.rental_type}</p>
                    <p><b>Expected Rent:</b> {property.expected_rent}</p>
                    <p><b>Expected Deposit:</b> {property.expected_deposit}</p>
                    <p><b>Rent Negotiable:</b> {property.rent_negotiable}</p>
                    <p><b>Lease Ammount:</b> {property.expcted_lease_amount}</p>
                    <p><b>Year of Lease:</b> {property.year_of_lease}</p>
                    <p><b>Lease Negotiable:</b> {property.LeaseNegotiable}</p>
                    <p><b>Monthly Maintenance:</b> {property.monthly_maintenance}</p>
                    <p><b>Maintenance Extra:</b> {property.maintenance_extra}</p>
                    <p><b>preferred Tenants:</b> {property.preferred_tenant}</p>
                    <p><b>Furnishing:</b> {property.is_furnishing}</p>
                    <p><b>Parking:</b> {property.is_parking}</p>
                    <p><b>Available From:</b> {property.availablr_from}</p>
                    {/* Facilities */}
                    <p><b>No.of Bathroom:</b> {property.bathroom}</p>
                    <p><b>No.of Balcony:</b> {property.balcony}</p>
                    <p><b>Who will Show the Property:</b> {property.showing_agent}</p>
                    <p><b>Phone Number:</b> {property.secondary_number}</p>
                    <p><b>Water Supply:</b> {property.water_supply}</p>
                    <p><b>Gym:</b> {property.gym}</p>
                    <p><b>Gated Security:</b> {property.gated_security}</p>
                    <p><b>Extra Facilities:</b> {property.available_amenities}</p>

                    {/* Add more property details */}
                    <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => handleViewMore(property)}>
                      View More
                    </button>
                  </Grid>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Button onClick={() => handleEditClick(property)}>Edit</Button>
                    <Button onClick={() => handleDeleteClick(property.id)}>Delete</Button>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <p>Type of Property: {property.type_of_property}</p>
                <p>Property Type: {property.property_type}</p>
                <p>City: {property.area}</p>
                <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => handleViewMore(property)}>
                  View More
                </button>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEditClick(property)}
                style={{ marginRight: '10px' }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteClick(property.property_id)} // Call the new delete handler
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>


      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Property</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ padding: '20px' }}>
            Which form you will edit.
          </DialogContentText>
          <TextField
            select
            label="Form"
            value={selectedForm}
            onChange={(e) => setSelectedForm(e.target.value)}
            fullWidth
            sx={{ marginBottom: '20px' }}
          >
            <MenuItem value="property_details">Property Details</MenuItem>
            <MenuItem value="locality">Locality</MenuItem>
            <MenuItem value="rental">Rental</MenuItem>
            <MenuItem value="image">Image</MenuItem>
            <MenuItem value="amenities">Amenities</MenuItem>
          </TextField>
          {selectedForm && (
            <form>
              {Object.keys(formData[selectedForm]).map((field) => (
                <TextField
                  key={field}
                  label={field}
                  name={field}
                  value={formData[selectedForm][field]}
                  onChange={(e) => handleFormChange(selectedForm, e)}
                  fullWidth
                  sx={{ marginBottom: '20px' }}
                />
              ))}
            </form>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

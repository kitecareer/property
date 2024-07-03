import React, { useState, useEffect } from 'react';
import { Grid, TextField, Autocomplete, FormLabel, Radio, RadioGroup, FormControlLabel, Box } from '@mui/material';
import '../../css/Home.css';
import Title from '../../components/formTitile';
import StickyBotton from './sticky_botton';
import axios from '../../AxiosInstance';
import Swal from 'sweetalert2';


const residentialOptions = ['Apartment', 'Independent House', 'Villa'];
const commercialOptions = ['Office Space', 'Shop', 'Warehouse'];
const landOptions = ['Plot', 'Agricultural Land'];

const options1 = ['RK', '1BHK', '2BHK', '3BHK', '4+BHK'];
const options2 = ['Ground', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const options3 = ['Less than a year', '1 to 5 year', '5 to 10 year', 'more than 10 year'];
const options4 = ['East', 'West', 'North', 'South'];
const options7 = ['Rent', 'Sale', 'Lease'];

export default function GroupOrientation({ handleMove = () => { console.log("props_not_getting") },
 handleback = () => { } }) {
  const [type_of_property, settype_of_property] = useState(localStorage.getItem('type_of_property') || "");
  const [ad_category, setad_category] = useState(localStorage.getItem('adcategory') || "");
  const [property_type, setproperty_type] = useState("");
  const [BHK_type, setBHK_type] = useState("");
  const [floor, setfloor] = useState("");
  const [total_floor, settotal_floor] = useState("");
  const [property_age, setproperty_age] = useState("");
  const [facing, setfacing] = useState("");
  const [total_area, settotal_area] = useState('');
  // const [showfloor_typeInput, setShowfloor_typeInput] = useState(false);
  const [apartment_name, setapartment_name] = useState('');
  const [showApartmentNameInput, setShowApartmentNameInput] = useState(false);
  const [showFloorNameInput, setShowFloorNameInput] = useState(false);
  const [errors, setErrors] = useState({});


  useEffect(() => {
         localStorage.setItem('type_of_property', type_of_property);
         if (type_of_property !== 'Residential') {
           setBHK_type('');
           setproperty_type('');
         }
         if (type_of_property !== 'Commercial') {
           setproperty_type('');
         }
         if (type_of_property !== 'Land') {
           setproperty_type('');
         }
       }, [type_of_property]);

          useEffect(() => {
     localStorage.setItem('property_type', property_type);
     if (property_type !== 'Apartment') {
       setShowApartmentNameInput(false);
       setShowFloorNameInput(false);
       setapartment_name("");
       settotal_floor("");
     }
   }, [property_type]);

  const handleSubmit = async () => {
    const newErrors = {};

    if (type_of_property === 'Residential')
    {
    if (!type_of_property) newErrors.type_of_property = 'Property type is required';
    if (!BHK_type) newErrors.BHK_type = 'BHK type is required';
    }

    if (type_of_property === 'Commercial') {
      if (!type_of_property) newErrors.type_of_property = 'Property type is required';
    }

    if (type_of_property === 'Land') {
      if (!type_of_property) newErrors.type_of_property = 'Property type is required';   
    }

      if (!ad_category) newErrors.ad_category = 'Ad category is required';
      if (!property_type) newErrors.property_type = 'Property type is required';
      if (!property_age) newErrors.property_age = 'Property age is required';
      if (!facing) newErrors.facing = 'Facing is required';
      if (showApartmentNameInput && !apartment_name) newErrors.apartment_name = 'Apartment name is required';


    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: "You are about to submit the property details and move to the next locality page!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, submit it!',
          cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
          const formData = {
          type_of_property,
          ad_category,
          property_type,
          BHK_type,
          floor,
          total_floor,
          property_age,
          facing,
          total_area,
          // text_area,
          apartment_name
        };

        
        const response = await axios.post('property/add_property_detail', formData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("Token")
          }
        });

        if (response.data.property_id) {
          localStorage.setItem('property_id', response.data.property_id);
        }

        handleMove(formData, 'property_details');
      } 
    }
    catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Title title={"Provide Locality Details about your Property "} />
        <Grid item xs={12}>
          <FormLabel className="label" id="demo-radio-buttons-group-label">
            Choose Your Option *
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={type_of_property}
            onChange={(event) => settype_of_property(event.target.value)}
          >
            <Box sx={{ display: 'flex' }}>
              <FormControlLabel
                value="Residential"
                control={<Radio sx={{ color: '#FED233', '&.Mui-checked': { color: '#FED233' } }} />}
                label="Residential"
              />
              <FormControlLabel
                value="Commercial"
                control={<Radio sx={{ color: '#FED233', '&.Mui-checked': { color: '#FED233' } }} />}
                label="Commercial"
              />
              <FormControlLabel
                value="Land"
                control={<Radio sx={{ color: '#FED233', '&.Mui-checked': { color: '#FED233' } }} />}
                label="Land"
              />
            </Box>
          </RadioGroup>
          {errors.type_of_property && <span className="error">{errors.type_of_property}</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="ad-category">Ad Category *</label>
          <Autocomplete
            value={ad_category}
            onChange={(event, newValue) => {
              setad_category(newValue ?? "");
              localStorage.setItem('adcategory', newValue ?? "");
            }}
            inputValue={ad_category}
            onInputChange={(event, newInputValue) => {
              setad_category(newInputValue ?? "");
              localStorage.setItem('adcategory', newInputValue ?? "");
            }}
            id="ad-category"
            options={options7}
            renderInput={(params) => <TextField {...params} placeholder="Ad Category" className='custom-autocomplete' fullWidth />}
          />
          {errors.ad_category && <span className="error">{errors.ad_category}</span>}
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="property-type">Property Type *</label>
          <Autocomplete
            value={property_type}
            onChange={(event, newValue) => {
              setproperty_type(newValue ?? "");
              setShowApartmentNameInput(newValue === 'Apartment');
              setShowFloorNameInput(newValue === 'Apartment');
            }}
            inputValue={property_type}
            onInputChange={(event, newInputValue) => {
              setproperty_type(newInputValue ?? "");
            }}
            id="property-type"
            options={
              type_of_property === 'Residential' ? residentialOptions :
              type_of_property === 'Commercial' ? commercialOptions :
              type_of_property === 'Land' ? landOptions : []
            }
            renderInput={(params) => <TextField {...params} placeholder="House Type" className='custom-autocomplete' fullWidth />}
          />
          {errors.property_type && <span className="error">{errors.property_type}</span>}
        </Grid>
        {showApartmentNameInput && (
          <Grid item xs={12} sm={6}>
            <label className='label' htmlFor="apartment-name">Apartment Name *</label>
            <TextField
              id="apartment-name"
              value={apartment_name}
              onChange={(event) => setapartment_name(event.target.value)}
              placeholder="Apartment Name"
              fullWidth
              className='custom-autocomplete'
            />
            {errors.apartment_name && <span className="error">{errors.apartment_name}</span>}
          </Grid>
        )}
        {showFloorNameInput && (
        <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="total-floor">Total Floor in the Apartment </label>
          <Autocomplete
            value={total_floor}
            onChange={(event, newValue) => settotal_floor(newValue ?? "")}
            inputValue={total_floor}
            onInputChange={(event, newInputValue) => settotal_floor(newInputValue ?? "")}
            id="total-floor"
            options={options2}
            renderInput={(params) => <TextField {...params} placeholder="Total Floor" className='custom-autocomplete' fullWidth />}
          />
        {errors.total_floor && <span className="error">{errors.total_floor}</span>}

        </Grid>

      )}
      {type_of_property === 'Residential' && (
        <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="bhk-type">BHK Type *</label>
          <Autocomplete
            value={BHK_type}
            onChange={(event, newValue) => setBHK_type(newValue ?? "")}
            inputValue={BHK_type}
            onInputChange={(event, newInputValue) => setBHK_type(newInputValue ?? "")}
            id="bhk-type"
            options={options1}
            renderInput={(params) => <TextField {...params} placeholder="BHK Type" className='custom-autocomplete' fullWidth />}
          />
          {errors.BHK_type && <span className="error">{errors.BHK_type}</span>}
        </Grid>
      )}
      {type_of_property !== 'Land'&&  (
        <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="floor">Vacant Floor </label>
          <Autocomplete
            value={floor}
            onChange={(event, newValue) => setfloor(newValue ?? "")}
            inputValue={floor}
            onInputChange={(event, newInputValue) => setfloor(newInputValue ?? "")}
            id="floor"
            options={options2}
            renderInput={(params) => <TextField {...params} placeholder="Floor" className='custom-autocomplete' fullWidth />}
          />
        </Grid>
      )}
        <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="property-age">Property Age *</label>
          <Autocomplete
            value={property_age}
            onChange={(event, newValue) => setproperty_age(newValue ?? "")}
            inputValue={property_age}
            onInputChange={(event, newInputValue) => setproperty_age(newInputValue ?? "")}
            id="property-age"
            options={options3}
            renderInput={(params) => <TextField {...params} placeholder="Property Age" className='custom-autocomplete' fullWidth />}
          />
          {errors.property_age && <span className="error">{errors.property_age}</span>}
        </Grid> 
        <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="facing">Facing *</label>
          <Autocomplete
            value={facing}
            onChange={(event, newValue) => setfacing(newValue ?? "")}
            inputValue={facing}
            onInputChange={(event, newInputValue) => setfacing(newInputValue ?? "")}
            id="facing"
            options={options4}
            renderInput={(params) => <TextField {...params} placeholder="Facing" className='custom-autocomplete' fullWidth />}
          />
          {errors.facing && <span className="error">{errors.facing}</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="total-area">Total Area </label>
          <TextField
            id="total-area"
            value={total_area}
            onChange={(event) => settotal_area(event.target.value)}
            placeholder="Total Area"
            fullWidth
            className='custom-autocomplete'
          />
          {errors.total_area && <span className="error">{errors.total_area}</span>}
        </Grid>
      </Grid>
      <StickyBotton saveText={'Save & Continue'} fun_save={handleSubmit} fun_back={handleback} />

    </div>
  );
  }}
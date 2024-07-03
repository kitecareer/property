import React, { useState, useCallback ,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../../css/Home.css';
import Title from '../../components/formTitile';
import StickyBotton from './sticky_botton';
import axios from '../../AxiosInstance';
import 'leaflet/dist/leaflet.css';

const options = ['chennai', 'Mumbai', 'Delhi', 'Pune'];


export default function Locality({ handleMove = () => { console.log("props_not_getting") }, handleback = () => {} }) {
  const [area, setarea] = useState('');
  const [landmark, setlandmark] = useState('');
  const [locality, setlocality] = useState('');
  const [errors, setErrors] = useState({ area: '', landmark: '', locality: '' });



  const handleSubmit = async () => {
    let valid = true;
    let newErrors = { area: '', landmark: '', locality: '' };

    if (!area) {
      newErrors.area = 'City is required';
      valid = false;
    }
    if (!locality) {
      newErrors.locality = 'Locality is required';
      valid = false;
    }
    if (!landmark) {
      newErrors.landmark = 'Landmark is required';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    try {
      handleMove({ area, locality, landmark }, "Locality");
      const formData = {
        area,
        locality,
        landmark,
      
      };
      const pid = localStorage.getItem('property_id');
      const response = await axios.post(`property/add_locality_detail?property_id=${pid}`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("Token")
        }
      });
      // Handle success
      console.log('Response:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  return (
    <Grid sx={{ height: '100vh', padding: 2 }}>
      <Title title={"Provide Locality Details about your Property "} />
      <Grid container spacing={2} xs={12}>
        <Grid item xs={6}>
          <label className='lable' htmlFor="outlined-basic">City *</label>
          <Autocomplete
            sx={{ paddingTop: -10 }}
            value={area}
            onChange={(event, newValue) => {
              setarea(newValue ?? "");
            }}
            inputValue={area}
            onInputChange={(event, newInputValue) => {
              setarea(newInputValue);
            }}
            id="controllable-states-demo1" // Unique id for the first Autocomplete
            options={options}
            renderInput={(params) => <TextField {...params} placeholder="City" className='custom-autocomplete' error={!!errors.area} helperText={errors.area} />}
          />
        </Grid>

        <Grid item xs={6}>
          <label className='lable' htmlFor="outlined-basic">Locality *</label><br />
          <TextField id="outlined-basic" placeholder="Locality" className='custom-autocomplete' variant="outlined" sx={{ width: 355 }} value={locality} onChange={(event) => setlocality(event.target.value)} error={!!errors.locality}
            helperText={errors.locality} />
        </Grid>
        <Grid item xs={6}>
          <label className='lable' htmlFor="outlined-basic">Landmark *</label><br />
          <TextField id="outlined-basic" placeholder="Landmark " className='custom-autocomplete' variant="outlined" value={landmark} onChange={(event) => setlandmark(event.target.value)} sx={{ width: 355 }} error={!!errors.landmark}
            helperText={errors.landmark} />
        </Grid>
        <Grid item xs={12}>
        <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31527.36820928463!2d77.39533395603016!3d8.979414629100484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042783f161560f%3A0xaaf9292d94be27c9!2sSurandai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719382949312!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        </Grid>
      </Grid>
      <StickyBotton backText="Back" saveText={"Save & Continue"} fun_save={handleSubmit} fun_back={handleback} />
    </Grid>
  );
}

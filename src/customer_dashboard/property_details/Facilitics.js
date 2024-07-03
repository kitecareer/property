import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import StickyBotton from './sticky_botton';
import axios from '../../AxiosInstance';
import Title from '../../components/formTitile';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SetMealIcon from '@mui/icons-material/SetMeal';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Icon1 from '@mui/icons-material/Elevator';
import Icon2 from '@mui/icons-material/AcUnit';
import Icon4 from '@mui/icons-material/ChildFriendly';
import Icon6 from '@mui/icons-material/Water';
import Icon7 from '@mui/icons-material/CleaningServices';
import Icon8 from '@mui/icons-material/LocalParking';
import Icon9 from '@mui/icons-material/Wifi';
import Icon10 from '@mui/icons-material/Pool';
import Icon11 from '@mui/icons-material/Whatshot';
import Icon12 from '@mui/icons-material/LocalMall';
import Icon13 from '@mui/icons-material/Nature';
import Icon14 from '@mui/icons-material/LocalDrink';
import Icon15 from '@mui/icons-material/BatteryFull';
import FenceIcon from '@mui/icons-material/Fence';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AirlinesIcon from '@mui/icons-material/Airlines';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';

const options = ['1', '2', '3', '4', '5'];
const options1 = ['Null','1', '2', '3', '4', '5'];
const optionWater = ['Corporation', 'Borewell', 'Both'];
const options3 = ['Need help', 'I will show', 'Neighbours','Friends','Security','Others'];
const optionselectricity  = ['Yes', 'No'];
const optionwater_sources = ['Irrigation System','natural Water water_sources']
const optionsoil = ['Loam',' Clay','Sandy']
const optionterrain = ['Hills','Flat']
const optionfarm = ['fences','sheds','Greenhouses'] 
const optionzoning  = ['Heavy Industrial','Light Industrial'] 
const optionenvironmental  = ['environmental Impact Assessments ','Hazardous materials Restrictions '] 

export default function GroupOrientation({ handleMove = () => { console.log("props_not_getting") }, handleback = () => { } }) {
    const [bathroom, setbathroom] = useState('');
    const [balcony, setbalcony] = useState('');
    const [water_supply, setWaterSupply] = useState('');
    const [gym, setGym] = useState('');
    const [gated_security, setgated_security] = useState('');
    const [showing_agent, setshowing_agent] = useState('');
    const [secondary_number, setsecondary_number] = useState('');
    const [personal_number, setpersonal_number] = useState('');
    const [available_amenities, setavailable_amenities] = useState([]);
    const [electricity ,setelectricity ] =useState('');
    const [water_sources ,setwater_sources ] =useState('');
    const [soil_type ,setsoil_type ] =useState('');
    const [terrain_type ,setterrain_type ] =useState('');
    const [farm , setfarm ] = useState('');
    const [previous_crops,setprevious_crops] = useState('');
    const [current_crops,setcurrent_crops] = useState('');
    const [zoning ,setzoning ] = useState('');
    const [environmental ,setenvironmental ] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async () => {
      const newErrors = {};

      if (type_of_property === 'Residential'){
       if (!gym) newErrors.gym = 'Gym is required';
       }
       if(type_of_property!=='Land'){
      if (!bathroom) newErrors.bathroom = 'Bathroom is required';
      if (!balcony) newErrors.balcony = 'Balcony is required';  
      if (!water_supply) newErrors.water_supply = 'Water Supply is required';
      if (!gated_security) newErrors.gated_security = 'Gatedc Security is required';
      if (!showing_agent) newErrors.showing_agent = 'Showing Agent is required';
       }

      if (property_type === 'Agriculture Land'){
      if (!electricity) newErrors.electricity = 'Electricity is required';  
      if (!water_sources) newErrors.water_sources = ' Water Sources is required';
      if (!soil_type) newErrors.soil_type = 'Soil Type is required';
      if (!farm) newErrors.farm = 'Farm is required';
      if (!terrain_type) newErrors.terrain_type = 'Terrain type is required';
      if (!previous_crops) newErrors.previous_crops = 'Previous Crops is required';
      if (!current_crops) newErrors.current_crops = 'Current Crops is required';
      if (!secondary_number) newErrors.secondary_number = 'Secondary Number is required';
      }
      if (property_type === 'Industrial Land'){
      if (!environmental) newErrors.environmental = 'Environmental is required';
      if (!zoning) newErrors.zoning = 'Zoning is required';
      }
      if (!personal_number) newErrors.personal_number = 'Personal Number is required';
      if (!available_amenities) newErrors.available_amenities = 'Available Amenities is required';
      if (!secondary_number) newErrors.secondary_number = 'Customer Contact Number is required';
      
     setErrors(newErrors);
     if (Object.keys(newErrors).length === 0) {
            try {
                const formData = {
                    bathroom:0,
                    balcony,
                    water_supply,
                    water_sources,
                    soil_type,
                    terrain_type,
                    farm,
                    zoning,
                    environmental,
                    previous_crops,
                    current_crops,
                    electricity,
                    showing_agent,
                    gym,
                    gated_security,
                    personal_number,
                    secondary_number,
                    available_amenities,  
                    ad_category,
                    type_of_property,
                    property_type,
                };
                console.log('Form Data:', formData);
                handleMove(formData, "Rental");
                const pid = localStorage.getItem('property_id');
                const response = await axios.post(`property/add_amenities_detail?property_id=${pid}`, formData,{
      headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + localStorage.getItem("Token")
                  }
              });
            
              console.log('Response:', response.data);
              // alert("Successful finished");
              
              handleMove(formData, "property_details");
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    };
    const ad_category = localStorage.getItem('adcategory');
    const type_of_property = localStorage.getItem('type_of_property');
    const property_type = localStorage.getItem('property_type');

    const handleAdd = (value) => {
        if (available_amenities.includes(value)) {
            setavailable_amenities(values => values.filter((value1) => value1 !== value));
        } else {
            setavailable_amenities((values) => [...values, value]);
        }
    }
    return (
        <>
<Grid container spacing={2}>
  <Grid item xs={12}>
      <Title title={"Provide Amenities Details about your Property "} />
   </Grid>
{type_of_property !== 'Land'&&(
  <Grid item xs={6}>
      <label className='lable' htmlFor="outlined-basic"> Bathroom(s) *</label>
          <Autocomplete
            value={bathroom}
            onChange={(event, newValue) => { setbathroom(newValue ?? "") }}
            inputValue={bathroom}
            onInputChange={(event, newInputValue) => { setbathroom(newInputValue ?? "") }}
            id="controllable-states-demo1"
            options={options}
            renderInput={(params) => <TextField {...params} placeholder="Bathroom(s)" />}
            />
            {errors.bathroom && <span className="error">{errors.bathroom}</span>}
    </Grid>
)}
                {type_of_property !== 'Land'&&(
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Balcony *</label>
                    <Autocomplete
                        value={balcony}
                        onChange={(event, newValue) => { setbalcony(newValue ?? "") }}
                        inputValue={balcony}
                        onInputChange={(event, newInputValue) => { setbalcony(newInputValue ?? "") }}
                        id="controllable-states-demo2"
                        options={options1}
                        
                        renderInput={(params) => <TextField {...params} placeholder="Balcony" />}
                    />
                      {errors.balcony && <span className="error">{errors.balcony}</span>}
                </Grid>
                )}
                {type_of_property === 'Residential' && type_of_property === 'Commercial' &&(
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Water Supply *</label>
                    <Autocomplete
                        value={water_supply}
                        onChange={(event, newValue) => { setWaterSupply(newValue ?? "") }}
                        inputValue={water_supply}
                        onInputChange={(event, newInputValue) => { setWaterSupply(newInputValue ?? "") }}
                        id="controllable-states-demo1"
                        options={optionWater}
                        
                        renderInput={(params) => <TextField {...params} placeholder="Water Supply" />}
                    />
                    {errors.water_supply && <span className="error">{errors.water_supply}</span>}
                </Grid>
                )}
                {property_type !== 'Plot'&& type_of_property !== 'Commercial' &&(
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic"> Water Sources *</label>
                    <Autocomplete
                        value={water_sources}
                        onChange={(event, newValue) => { setwater_sources(newValue ?? "") }}
                        inputValue={water_sources}
                        onInputChange={(event, newInputValue) => { setwater_sources(newInputValue ?? "") }}
                        id="controllable-states-demo1"
                        options={optionwater_sources}
                        
                        renderInput={(params) => <TextField {...params} placeholder=" Water Sources" />}
                    />
                    {errors.water_sources && <span className="error">{errors.water_sources}</span>}
                </Grid>
                )}
                {property_type === 'Agricultural Land'&&(
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Soil Type *</label>
                    <Autocomplete
                        value={soil_type}
                        onChange={(event, newValue) => { setsoil_type(newValue ?? "") }}
                        inputValue={soil_type}
                        onInputChange={(event, newInputValue) => { setsoil_type(newInputValue ?? "") }}
                        id="controllable-states-demo1"
                        options={optionsoil}
                        
                        renderInput={(params) => <TextField {...params} placeholder="Soil Type" />}
                    />
                    {errors.soil_type && <span className="error">{errors.soil_type}</span>}
                </Grid>
                )}

                {property_type === 'Agricultural Land'&&(
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Terrain Type *</label>
                    <Autocomplete
                        value={terrain_type}
                        onChange={(event, newValue) => { setterrain_type(newValue ?? "") }}
                        inputValue={terrain_type}
                        onInputChange={(event, newInputValue) => { setterrain_type(newInputValue ?? "") }}
                        id="controllable-states-demo1"
                        options={optionterrain}
                        
                        renderInput={(params) => <TextField {...params} placeholder="Terrain Type" />}
                    />
                    {errors.terrain_type && <span className="error">{errors.terrain_type}</span>}
                </Grid>
                )}
                {property_type === 'Agricultural Land'&&(
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Farm Infrastructure*</label>
                    <Autocomplete
                        value={farm }
                        onChange={(event, newValue) => { setfarm (newValue ?? "") }}
                        inputValue={farm }
                        onInputChange={(event, newInputValue) => { setfarm (newInputValue ?? "") }}
                        id="controllable-states-demo1"
                        options={optionfarm }
                        
                        renderInput={(params) => <TextField {...params} placeholder="Farm Infrastructure" />}
                    />
                    {errors.farm && <span className="error">{errors.farm}</span>}
                </Grid>
                )}

                {property_type === 'Industrial Land'&& (
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Types of Industry Allowed  *</label>
                    <Autocomplete
                        value={zoning}
                        onChange={(event, newValue) => { setzoning(newValue ?? "") }}
                        inputValue={zoning}
                        onInputChange={(event, newInputValue) => { setzoning(newInputValue ?? "") }}
                        id="controllable-states-demo1"
                        options={optionzoning}
                        
                        renderInput={(params) => <TextField {...params} placeholder="Types of Industry Allowed " />}
                    />
                    {errors.zoning && <span className="error">{errors.zoning}</span>}
                </Grid>
                )}
                {property_type === 'Industrial Land'&&(
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic"> Environmental Restrictions*</label>
                    <Autocomplete
                        value={environmental }
                        onChange={(event, newValue) => { setenvironmental (newValue ?? "") }}
                        inputValue={environmental }
                        onInputChange={(event, newInputValue) => { setenvironmental(newInputValue ?? "") }}
                        id="controllable-states-demo1"
                        options={optionenvironmental }
                        
                        renderInput={(params) => <TextField {...params} placeholder="Environmental Restrictions" />}
                    />
                    {errors.environmental && <span className="error">{errors.environmental}</span>}
                </Grid>
                )}



                {property_type === 'Agricultural Land'&&(
            <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="total-area">Previous Crops Grown </label>
          <TextField sx={{padding:'15px 0'}}
            id="previous"
            value={previous_crops}
            onChange={(event) => setprevious_crops(event.target.value)}
            placeholder="Previous Crops Grown "
            fullWidth
            className='custom-autocomplete'
          />
          {errors.previous_crops && <span className="error">{errors.previous_crops}</span>}
        </Grid>
                )}
                {property_type === 'Agricultural Land'&&(
            <Grid item xs={12} sm={6}>
          <label className='label' htmlFor="total-area">Current Crops Grown </label>
          <TextField sx={{padding:'15px 0'}}
            id="current"
            value={current_crops}
            onChange={(event) => setcurrent_crops(event.target.value)}
            placeholder="current crops Grown "
            fullWidth
            className='custom-autocomplete'
          />
          {errors.current_crops && <span className="error">{errors.current_crops}</span>}
        </Grid>
                )}
                {type_of_property === 'Land' &&(
                  <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Electricity  *</label>
                    <Autocomplete
                        value={electricity }
                        onChange={(event, newValue) => { setelectricity (newValue ?? "") }}
                        inputValue={electricity }
                        onInputChange={(event, newInputValue) => { setelectricity (newInputValue ?? "") }}
                        id="controllable-states-demo1"
                        options={optionselectricity }
                        
                        renderInput={(params) => <TextField {...params} placeholder=" Electricity " />}
                    />
                    {errors.electricity && <span className="error">{errors.electricity}</span>}
                </Grid>
                )}

                {type_of_property !== 'Land'&&(
                <Grid item xs={6}>
                <label className='lable' htmlFor="outlined-basic">Who will show the property? *</label>
                <Autocomplete
                  value={showing_agent}
                  onChange={(event, newValue) => { setshowing_agent(newValue ?? "") }}
                  inputValue={showing_agent}
                  onInputChange={(event, newInputValue) => { setshowing_agent(newInputValue ?? "") }}
                  id="controllable-states-demo2"
                  options={options3}
                  
                  renderInput={(params) => <TextField {...params} placeholder="Enter showing agent" />}
                />
                {errors.showing_agent && <span className="error">{errors.showing_agent}</span>}
                </Grid>
                )}
       
      {type_of_property !== 'Commercial' && type_of_property !== 'Land' &&(     
    <Grid item xs={6}>
  <FormControl fullWidth>
    <InputLabel 
      id="non-veg-allowed-label"
      sx={{ display: 'flex', alignItems: 'center' }}
      htmlFor="gym"
    >
      <FitnessCenterIcon sx={{ marginRight: '8px' }} />
      Gym
    </InputLabel>
    <Select
      labelId="gym"
      id="gym"
      value={gym}
      onChange={e=>setGym(e.target.value)}
      label="gym *"
    >
      <MenuItem value="Yes">Yes</MenuItem>
      <MenuItem value="No">No</MenuItem>
    </Select>
  </FormControl>
  {errors.gym && <span className="error">{errors.gym}</span>}
</Grid>
      )}

{type_of_property !== 'Land' &&(
 <Grid item xs={6}>
  <FormControl fullWidth>
  <InputLabel 
      id="gated_security"
      sx={{ display: 'flex', alignItems: 'center' }}
      htmlFor="gated_security"
    >
      <SportsMartialArtsIcon sx={{ marginRight: '8px' }} />
      Gated Security
    </InputLabel>
    <Select
      labelId="Gated Security"
      id="Gated Security"
      onChange={e=>setgated_security(e.target.value)}
      label="Gated Security *"
    >
      <MenuItem value="Yes">Yes</MenuItem>
      <MenuItem value="No">No</MenuItem>
    </Select>
  </FormControl>
  {errors.gated_security && <span className="error">{errors.gated_security}</span>}
</Grid>
)}
<Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Personal Number *</label><br></br>
                    <TextField sx={{padding:'15px 0'}}
                    id="outlined-basic"
                    placeholder="personal Number"
                    variant="outlined"
                    fullWidth
                    value={personal_number}
                    onChange={(event)=>setpersonal_number(event.target.value)}
          />
          {errors.personal_number && <span className="error">{errors.personal_number}</span>}
      </Grid>
 
                <Grid item xs={6}>
                    <label className='lable' htmlFor="outlined-basic">Customer Contact Number *</label><br></br>
                    <TextField sx={{padding:'15px 0'}}
                    id="outlined-basic"
                    placeholder="Customer Contact Number"
                    variant="outlined"
                    fullWidth
                    value={secondary_number}
                    onChange={(event)=>setsecondary_number(event.target.value)}
          />
          {errors.secondary_number && <span className="error">{errors.secondary_number}</span>}
      </Grid>
    
      <Grid item xs={12}>
        <label className="label" htmlFor="outlined-basic">Select the Available Amenities *</label>
      </Grid> 

      {type_of_property !== 'Commercial' && type_of_property !== 'Land' && (
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Children Play Area")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon4 sx={{ marginRight: '8px' }} /> Children Play Area
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Gas Pipeline")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon7 sx={{ marginRight: '8px' }} /> Gas Pipeline
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("House Keeping")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon7 sx={{ marginRight: '8px' }} /> House Keeping
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Swimming pool")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon10 sx={{ marginRight: '8px' }} /> Swimming pool
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Shopping Center")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon12 sx={{ marginRight: '8px' }} /> Shopping Center
              </Box>
            }
          />
        </Grid>
      )}

      {type_of_property === 'Land' && (
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Sewage Treatment Plant")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon14 sx={{ marginRight: '8px' }} /> Sewage Treatment Plant
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Boundary Wall")} />}
            label={
              <Box display="flex" alignItems="center">
                <FenceIcon sx={{ marginRight: '8px' }} /> Boundary Wall
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Road Access")} />}
            label={
              <Box display="flex" alignItems="center">
                <AddRoadIcon sx={{ marginRight: '8px' }} /> Road Access
              </Box>
            }
          />
       
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Public Transportation")} />}
            label={
              <Box display="flex" alignItems="center">
                <DirectionsBusIcon sx={{ marginRight: '8px' }} /> Public Transportation
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Proximity to Markets")} />}
            label={
              <Box display="flex" alignItems="center">
                <LocalGroceryStoreIcon sx={{ marginRight: '8px' }} /> Proximity to Markets
              </Box>
            }
          />
             <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Proximity to major Highways")} />}
            label={
              <Box display="flex" alignItems="center">
                <AirlinesIcon sx={{ marginRight: '8px' }} /> Proximity to major Highways
              </Box>
            }
          />
             <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("distance nearest to AirPort ")} />}
            label={
              <Box display="flex" alignItems="center">
                <ConnectingAirportsIcon sx={{ marginRight: '8px' }} /> Distance Nearest to AirPort 
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Distance nearest to Railyard")} />}
            label={
              <Box display="flex" alignItems="center">
                <DirectionsRailwayIcon sx={{ marginRight: '8px' }} /> Distance Nearest to Railyard
              </Box>
            }
          />
        </Grid>
        
      )}

      {type_of_property !== 'Land' && (
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Lift")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon1 sx={{ marginRight: '8px' }} /> Lift
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Power Backup")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon15 sx={{ marginRight: '8px' }} /> Power Backup
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Air Conditioner")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon2 sx={{ marginRight: '8px' }} /> Air Conditioner
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Intercom")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon2 sx={{ marginRight: '8px' }} /> Intercom
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Internet Services")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon9 sx={{ marginRight: '8px' }} /> Internet Services
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Rain Water Harvesting")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon6 sx={{ marginRight: '8px' }} /> Rain Water Harvesting
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Fire Safety")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon11 sx={{ marginRight: '8px' }} /> Fire Safety
              </Box>
            }
          />
          <FormControlLabel
            control={<Checkbox onChange={() => handleAdd("Sewage Treatment Plant")} />}
            label={
              <Box display="flex" alignItems="center">
                <Icon14 sx={{ marginRight: '8px' }} /> Sewage Treatment Plant
              </Box>
            }
          />
          {errors.type_of_property && <span className="error">{errors.type_of_property}</span>}
        </Grid>
      )}

        </Grid>    
      <StickyBotton backText="Back" disabled={true} saveText={"Save & Continue"} fun_save={handleSubmit} fun_back={handleback} />
        </>
  );
}

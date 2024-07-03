import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import axios from '../../AxiosInstance';
import Title from '../../components/formTitile';
import StickyBotton from './sticky_botton';
import '../../css/Home.css';

const optionsmainten = ['Maintenance include', 'Maintenance Extra'];
const optionFurnish = ['Fully Furnished', 'Semi Furnished', 'Un Furnished'];
const optionparking = ['Car', 'Bike', 'Both', 'None'];
const optionyear = ['1', '2', '3', '4'];
const optionfloor = ['Wooden', 'Cement', 'Marbles'];
const optionlegal =['DTCP Authority','TNHP Authority','CMDA Authority'];

export default function Rental_Form({ handleMove = () => { console.log("props_not_getting") }, handleback = () => { } }) {
  const [expected_rent, setexpected_rent] = useState("");
  const [expected_deposit, setexpected_deposit] = useState("");
  const [rent_negotiable, setRentnego] = useState(false);
  const [sale_negotiable, setSalenego] = useState(false);
  const [monthly_maintenance, setMonthly] = useState("");
  const [maintenance_extra, setExtra] = useState("");
  const [parking_extra, setparkingExtra] = useState("");
  const [available_from, setDate] = useState(dayjs());
  const [preferred_tenant, setpreferred_tenant] = useState([]);
  const [is_furnishing, setis_furnishing] = useState('');
  const [is_parking, setis_parking] = useState('');
  const [lease_negotiable, setLeasenego] = useState(false);
  const [expected_lease_amount, setLeaseAmmount] = useState("");
  const [year_of_lease, setyear_of_lease] = useState("");
  const [sale_amount, setExpectedSaleAmount] = useState("");
  const [errors, setErrors] = useState({});
  const [floor_type, setfloor_type] = useState('');
  const [legal, setlegal] = useState('');
  const [current_worth, setcurrent_worth] = useState('');


  const handleSubmit = async () => {
    const validationErrors = {};
    if (!ad_category) validationErrors.ad_category = 'Rental type is required';
    if (ad_category === 'Lease' && !expected_lease_amount) validationErrors.LeaseAmmount = ' Lease Amount is required';
    if (ad_category === 'Sale' && !sale_amount) validationErrors.sale_amount = ' Sale Amount is required';
    if (ad_category !== 'Lease' && ad_category !== 'Sale' && !expected_rent) validationErrors.expected_rent = ' Rent is required';
    if (ad_category === 'Lease' && !year_of_lease) validationErrors.year_of_lease = 'Lease Duration is required';
    if (ad_category !== 'Lease' && ad_category !== 'Sale' && !expected_deposit) validationErrors.expected_deposit = ' Deposit is required';
    if (!monthly_maintenance) validationErrors.monthly_maintenance = 'Monthly Maintenance is required';
    if (monthly_maintenance === 'Maintenance Extra' && !maintenance_extra) validationErrors.maintenance_extra = 'Maintenance Amount is required';
    if (!available_from) validationErrors.available_from = 'Available From is required';
    if (!is_furnishing) validationErrors.is_furnishing = 'Furnishing Status is required';
    if (!is_parking) validationErrors.is_parking = 'Parking Status is required';


    setErrors(validationErrors);

   
      try {
        let formData = {
          ad_category,
          type_of_property,
          expected_lease_amount:0,
          sale_amount:0,
          expected_rent,
          lease_negotiable,
          rent_negotiable,
          sale_negotiable,
          year_of_lease,
          expected_deposit,
          current_worth,
          monthly_maintenance,
          maintenance_extra,
          floor_type,
          preferred_tenant,
          is_furnishing,
          is_parking,
          parking_extra,
          legal,
          available_from: available_from.toISOString(),

        };
        console.log('Form Data:', formData);
        handleMove(formData, "Rental");
        const pid = localStorage.getItem('property_id');
        const response = await axios.post(`property/add_rental_detail?property_id=${pid}`, formData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("Token")
          }
        });

        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    
  };

  const handleAdd = (value) => {
    if (preferred_tenant.includes(value)) {
      setpreferred_tenant(values => values.filter((value1) => value1 !== value));
    } else {
      setpreferred_tenant((values) => [...values, value]);
    }
  }
  const ad_category = localStorage.getItem('adcategory');
  const type_of_property = localStorage.getItem('type_of_property');

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title title={"Provide Rental Details about your Property "} />
        </Grid>
        <Grid item xs={6}>
        
          <label className="label" htmlFor="outlined-basic">
            {ad_category === "Lease" ? " Lease Amount *" : ad_category === "Sale" ? " Sale Amount *" : " Rent Amount *"}
          </label>
          <br />
          {ad_category === "Lease" ? (
            <TextField sx={{padding:'15px 0'}}
              id="outlined-basic"
              fullWidth
              placeholder=" Lease Amount"
              variant="outlined"
              className='custom-autocomplete'
              value={expected_lease_amount}
              onChange={(event) => setLeaseAmmount(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
          ) : ad_category === "Sale" ? (
            <TextField sx={{padding:'15px 0'}}
              id="outlined-basic"
              fullWidth
              placeholder=" Sale Amount"
              variant="outlined"
              className='custom-autocomplete'
              value={sale_amount}
              onChange={(event) => setExpectedSaleAmount(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <TextField sx={{padding:'15px 0'}}
              id="outlined-basic"
              fullWidth
              placeholder=" Rent Amount"
              variant="outlined"
              className='custom-autocomplete'
              value={expected_rent}
              onChange={(event) => { setexpected_rent(event.target.value) }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          {errors.expected_rent && <p className="error">{errors.expected_rent}</p>}
          {errors.LeaseAmmount && <p className="error">{errors.LeaseAmmount}</p>}
          {errors.sale_amount && <p className="error">{errors.sale_amount}</p>}
          {ad_category === "Lease" ? (
  <FormControlLabel control={<Checkbox />} label="Lease Negotiable " value={lease_negotiable} onChange={(event, value) => { setLeasenego(value) }} />
) : ad_category === "Sale" ? (
  <FormControlLabel control={<Checkbox />} label="Sale Negotiable " value={sale_negotiable} onChange={(event, value) => { setSalenego(value) }} />
) : (
  <FormControlLabel control={<Checkbox />} label="Rent Negotiable " value={rent_negotiable} onChange={(event, value) => { setRentnego(value) }} />
)}
        </Grid>
        {ad_category !== 'Sale' &&(
        <Grid item xs={6}>
          <label className="label" htmlFor="outlined-basic">
            {ad_category === 'Lease' ? 'Lease Duration*' : 'Expected Deposit *'}
          </label>
          <br />
          {ad_category === 'Lease' ? (
            <Autocomplete
              value={year_of_lease}
              onChange={(event, value) => setyear_of_lease(value)}
              disablePortal
              id="combo-box-demo"
              options={optionyear}
              renderInput={(params) => (
                <TextField {...params} placeholder="Lease Duration" variant="outlined" className='custom-autocomplete' />
              )}
            />
          ) : ( 
            <TextField sx={{padding:'15px 0'}}
              id="outlined-basic"
              fullWidth
              placeholder=" Deposit Amount"
              variant="outlined"
              className='custom-autocomplete'
              value={expected_deposit}
              onChange={(event) => { setexpected_deposit(event.target.value) }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          {errors.expected_deposit && <p className="error">{errors.expected_deposit}</p>}
          {errors.year_of_lease && <p className="error">{errors.year_of_lease}</p>}
        </Grid>
        )}
        {type_of_property === 'Land' &&(
        <Grid item xs={6}>
        <label className="label" htmlFor="outlined-basic">Current Worth</label>
          <br />
        <TextField sx={{padding:'15px 0'}}
              id="outlined-basic"
              fullWidth
              placeholder="Current Worth"
              variant="outlined"
              className='custom-autocomplete'
              value={current_worth}
              onChange={(event) => { setcurrent_worth(event.target.value) }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
        )}
        {ad_category !== 'Sale' &&(
        <Grid item xs={6}>
          <label className="label" htmlFor="outlined-basic">Maintenance</label>
          <br />
          <Autocomplete
            value={monthly_maintenance}
            onChange={(event, value) => { setMonthly(value) }}
            disablePortal
            id="combo-box-demo"
            options={optionsmainten}
            renderInput={(params) => (
              <TextField {...params} placeholder="Monthly Maintenance" variant="outlined" className='custom-autocomplete' />
            )}
          />
          {errors.monthly_maintenance && <p className="error">{errors.monthly_maintenance}</p>}
        </Grid>
        )}
        {monthly_maintenance === "Maintenance Extra" && (
          <Grid item xs={6}>
            <label className="label" htmlFor="outlined-basic">Maintenance Amount (Per/Month)</label>
            <br />
            <TextField sx={{padding:'15px 0'}}
              id="outlined-basic"
              fullWidth
              placeholder="Maintenance Amount"
              variant="outlined"
              className='custom-autocomplete'
              value={maintenance_extra}
              onChange={(event) => { setExtra(event.target.value) }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.maintenance_extra && <p className="error">{errors.maintenance_extra}</p>}
          </Grid>
        )}
        {ad_category === 'Sale' && type_of_property !== 'Land'&& (
        <Grid item xs={12} sm={6}>
            <label className='label' htmlFor="floor-type">Floor Type *</label>
            <Autocomplete
              value={floor_type}
              onChange={(event, newValue) => {
                setfloor_type(newValue ?? "");
              }}
              inputValue={floor_type}
              onInputChange={(event, newInputValue) => {
                setfloor_type(newInputValue ?? "");
              }}
              id="floor-type"
              options={optionfloor}
              renderInput={(params) => <TextField {...params} placeholder="Floor Type" className='custom-autocomplete' fullWidth />}
            />
            {errors.floor_type && <span className="error">{errors.floor_type}</span>}
          </Grid>
        )}
        {ad_category !== 'Sale' &&  type_of_property !== 'Land'&&(
        <Grid item xs={12}>
          <label className="label" htmlFor="outlined-basic">Preferred Tenant</label>
          <br />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel control={<Checkbox />} label="Family" checked={preferred_tenant.includes('Family')} onChange={() => handleAdd('Family')} />
            <FormControlLabel control={<Checkbox />} label="Bachlore" checked={preferred_tenant.includes('Bachlore')} onChange={() => handleAdd('Bachlore')} />
            <FormControlLabel control={<Checkbox />} label="Any" checked={preferred_tenant.includes('Any')} onChange={() => handleAdd('Any')} />
          </Box>
        </Grid>
        )}
        { type_of_property !== 'Land'&&(
        <Grid item xs={6}>
          <label className="label" htmlFor="outlined-basic">Furnishing Status</label>
          <br />
          <Autocomplete
            value={is_furnishing}
            onChange={(event, value) => { setis_furnishing(value) }}
            disablePortal
            id="combo-box-demo"
            options={optionFurnish}
            renderInput={(params) => (
              <TextField {...params} placeholder="Furnishing Status" variant="outlined" className='custom-autocomplete' />
            )}
          />
          {errors.is_furnishing && <p className="error">{errors.is_furnishing}</p>}
        </Grid>
        )}
        { type_of_property !== 'Land'&&(
        <Grid item xs={6}>
          <label className="label" htmlFor="outlined-basic">Parking Status</label>
          <br />
          <Autocomplete
            value={is_parking}
            onChange={(event, value) => { setis_parking(value) }}
            disablePortal
            id="combo-box-demo"
            options={optionparking}
            renderInput={(params) => (
              <TextField {...params} placeholder="Parking Status" variant="outlined" className='custom-autocomplete' />
            )}
          />
          {errors.is_parking && <p className="error">{errors.is_parking}</p>}
        </Grid>
        )}
        { is_parking === "car" && (
          <Grid item xs={6}>
            <label className="label" htmlFor="outlined-basic">Parking Amount (Per/Month)</label>
            <br />
            <TextField sx={{padding:'15px 0'}}
              id="outlined-basic"
              fullWidth
              placeholder="Parking Amount"
              variant="outlined"
              className='custom-autocomplete'
              value={parking_extra}
              onChange={(event) => { setparkingExtra(event.target.value) }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors.parking_extra && <p className="error">{errors.parking_extra}</p>}
          </Grid>
        )}
        
        { type_of_property === 'Land'&&(
        <Grid item xs={6}>
          <label className="label" htmlFor="outlined-basic">Legal Description</label>
          <br />
          <Autocomplete
            value={legal}
            onChange={(event, value) => { setlegal(value) }}
            disablePortal
            id="combo-box-demo"
            options={optionlegal}
            renderInput={(params) => (
              <TextField {...params} placeholder="Legal Description" variant="outlined" className='custom-autocomplete' />
            )}
          />
          {errors.legal && <p className="error">{errors.legal}</p>}
        </Grid>
        )}
       
       
        <Grid item xs={6}>
          <label className="label" htmlFor="outlined-basic">Available From *</label>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker value={available_from} onChange={(value) => setDate(value)} />
            </DemoContainer>
          </LocalizationProvider>
          {errors.available_from && <p className="error">{errors.available_from}</p>}
        </Grid>
      </Grid>
      <StickyBotton saveText={'Save & Continue'} fun_save={handleSubmit} fun_back={handleback} />

    </>
  );
}

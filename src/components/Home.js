import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../css/Home.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { TextField, Snackbar, Alert, Box } from '@mui/material';
import Axios from '../AxiosInstance';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import homeimg from '../asserts/homeimg.png';

// Import your image

const optionsResidential = ['Residential', 'Commercial','Land'];
const optionsPropertyType = ['Apartment', 'Independent House', 'Villa'];
const optionsCommercial = ['Office', 'Shop', 'WareHouse'];
const optionsLand = ['Plot', 'Agriculture Land','Industrial Land'];



export default function Home() {
  const [city, setCity] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const navigate = useNavigate();
  const [openResidential, setOpenResidential] = useState(false);
  const [openPropertyType, setOpenPropertyType] = useState(false);
  const [ad_category,setad_category] = useState()
  const [selectedResidentialType, setSelectedResidentialType] = useState('Select Property Type');
  const [selectedTypeOfProperty, setSelectedTypeOfProperty] = useState('Select  Type');
  const anchorRefResidential = useRef(null);
  const anchorRefPropertyType = useRef(null);

  useEffect(() => {
    const storedResidentialType = localStorage.getItem(selectedResidentialType);
    if (storedResidentialType) {
      setSelectedResidentialType(storedResidentialType);
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filterProperties = async (ad_category, selectedResidentialType,selectedTypeOfProperty, city) => {
    try {
      const response = await Axios.get('filter/filter_details', {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          ad_category: ad_category,
          property_type:selectedTypeOfProperty ,
          city: city.trim(),
          type_of_property: selectedResidentialType,
        }
      });

      console.log('Search response:', response.data); // Debugging log
      if (!response.data.data || response.data.data.length === 0) {

        setShowSnackbar(true);
      }
      setFilteredProperties(response.data.data || []);
      console.log('Filtered Properties:', response.data.data || []); // Debugging log
    } catch (error) {
      console.error('Error searching:', error);
      setShowSnackbar(true);
    }
  };

  const handleClick = (ad_category) => {
    setad_category(ad_category);
    localStorage.setItem(ad_category, ad_category);
  };

  const handleMenuItemClickPropertyType = (event, option) => {
    setSelectedTypeOfProperty(option);
    setOpenPropertyType(false);
  };

  const handleMenuItemClickResidential = (event, option) => {
    console.log(event);
    setSelectedResidentialType(option);
    setOpenResidential(false);
  };
  const handleTogglePropertyType = () => {
    setOpenPropertyType((prevOpen) => !prevOpen);
  };

  const handleToggleResidential = () => {
    setOpenResidential((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRefResidential.current && anchorRefResidential.current.contains(event.target)) {
      return;
    }
    if (anchorRefPropertyType.current && anchorRefPropertyType.current.contains(event.target)) {
      return;
    }
    setOpenResidential(false);
    setOpenPropertyType(false);
  };

  const handleViewMore = (propertyId) => async () => {
    try {
      const response = await Axios.get(`property/get_property_details?property_id=${propertyId}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      console.log('Property details response:', response.data.data); 
      navigate('/View', { state: { propertyDetails: response.data } });
    } catch (error) {
      console.error('Error fetching property details:', error);
    }
  };

  const handleSearch = async () => {
    await filterProperties(ad_category, selectedResidentialType,selectedTypeOfProperty, city,);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };
console.log(selectedTypeOfProperty);
console.log(selectedResidentialType);
  return (
    <div>
      <div className='container'>
        <Card sx={{background:'#F8F8F8',boxShadow:'0 0 8px #ccc', maxWidth: '85%', margin: "30px auto", borderRadius: "10px  70px " }}>
          <CardContent>
            <Stack className='btn1' spacing={2} direction="row" sx={{ display: "flex", justifyContent: "space-evenly", }}>
              {['Buy', 'Rent', 'Lease'].map((type) => (
                
                <Button sx={{color:'#000',fontWeight:'700'}} key={type} variant="text" onClick={() => handleClick(type)}>{type}</Button>
              ))}
            </Stack>
            <hr style={{background:'#27563A',height:'1px'}} />
            <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <ButtonGroup variant="text" ref={anchorRefResidential} aria-label="Residential Type button group">
        <Button onClick={handleToggleResidential} sx={{color:'#27563A', fontWeight:'700'}}>{selectedResidentialType}</Button>
        <Button
          size="small"
          aria-controls={openResidential ? 'split-button-menu-residential' : undefined}
          aria-expanded={openResidential ? 'true' : undefined}
          aria-label="select property type"
          aria-haspopup="menu"
          onClick={handleToggleResidential}
          sx={{color:'#27563A'}}
          
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 ,width:'30%'}}
        open={openResidential}
        anchorEl={anchorRefResidential.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu-residential" autoFocusItem>
                  {optionsResidential.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={option === selectedResidentialType}
                      onClick={(event) => handleMenuItemClickResidential(event, option)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <ButtonGroup variant="text" ref={anchorRefPropertyType} aria-label="Property Type button group">
        <Button onClick={handleTogglePropertyType} sx={{color:'#27563A', fontWeight:'700'}}>{selectedTypeOfProperty}</Button>
        <Button
          size="small"
          aria-controls={openPropertyType ? 'split-button-menu-property' : undefined}
          aria-expanded={openPropertyType ? 'true' : undefined}
          aria-label="select  type"
          aria-haspopup="menu"
          onClick={handleTogglePropertyType}
          sx={{color:'#27563A'}}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={openPropertyType}
        anchorEl={anchorRefPropertyType.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
<Paper>
  <ClickAwayListener onClickAway={handleClose}>
    <MenuList id="split-button-menu-property" autoFocusItem>
      {selectedResidentialType === 'Residential' 
        ? optionsPropertyType.map((option, index) => (
            <MenuItem
              key={option}
              selected={option === selectedTypeOfProperty}
              onClick={(event) => handleMenuItemClickPropertyType(event, option)}
            >
              {option}
            </MenuItem>
          ))
        : selectedResidentialType === 'Commercial' 
        ? optionsCommercial.map((option, index) => (
            <MenuItem
              key={option}
              selected={option === selectedTypeOfProperty}
              onClick={(event) => handleMenuItemClickPropertyType(event, option)}
            >
              {option}
            </MenuItem>
          ))
        : optionsLand.map((option, index) => (
            <MenuItem
              key={option}
              selected={option === selectedTypeOfProperty}
              onClick={(event) => handleMenuItemClickPropertyType(event, option)}
            >
              {option}
            </MenuItem>
          ))
      }
    </MenuList>
  </ClickAwayListener>
</Paper>


          </Grow>
        )}
      </Popper>
              <FormControl>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  placeholder='Search "chennai..." '
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormControl>
              <Box>
              <Button sx={{padding:'5px 30px',background:'#27563A',marginTop:'10px'}} variant='contained' onClick={handleSearch}>  <SearchIcon sx={{paddingRight:'10px'}}/>   Search</Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      <Grid container xs={12}>
        <Grid item xs={6}>
        <div className='content' style={{ textAlign: "center", fontSize: "30px", color: "#000" }}>
          <h2 >THE BEST REAL <br /> ESTATE IN THE TOWN</h2>
          <p style={{ fontSize: '18px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting printing<br />typesetting industry.</p>
        </div>
        </Grid>

        <Grid item xs={6}>
        <img src={homeimg} className='homeimg'/>
        </Grid>
        
      </Grid>

  <Card >
  <CardContent >
    {filteredProperties.length > 0 ? (
      filteredProperties.map((filter_detail, index) => (
        <div key={index} style={{marginBottom:'10px'}}>
        {/* <h2 style={{textAlign:'center'}}>{filter_detail.BHK_type}  Flat in </h2> */}
          <Grid container spacing={2} className='filter-card'>
            <Grid item xs={6} style={{marginBottom:6, width: '100%', }}>
              {filter_detail.upload_images && <img src={`data:image/jpeg;base64,${filter_detail.upload_images[0]}`} alt="Property" style={{ width: '100%', height: 'auto',borderRadius:'10px' }} />}
            </Grid>
            <Grid item xs={6} className='grid2'>
            <h2 style={{textAlign:'center'}}>{filter_detail.BHK_type} {filter_detail.property_type} For {filter_detail.ad_category} in {filter_detail.area} .</h2>
            <hr style={{width:'95%'}}/>
            <table style={{width:"98%",margin:'50px 0'}}>
              <tr>
              <td>
                <div className='icon'>
            <svg width="35" height="36" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.9818 19.7356L13.0535 11.8613C12.4795 11.5369 11.6684 12.3231 11.9803 12.9096L19.6549 26.0874L32.8327 33.762C32.9815 33.8159 33.1427 33.8259 33.297 33.7906C33.4513 33.7554 33.5921 33.6764 33.7027 33.5632C33.8133 33.45 33.8889 33.3073 33.9205 33.1522C33.9521 32.9972 33.9384 32.8363 33.881 32.6888L25.9818 19.7356ZM20.9902 24.7272L24.7339 20.9835L30.4118 30.2679L20.9902 24.7272Z" fill="#FED233"/>
            <path d="M22.462 3.12605C18.513 3.12605 14.6527 4.29706 11.3693 6.491C8.08582 8.68493 5.52668 11.8033 4.01547 15.4516C2.50426 19.1 2.10886 23.1146 2.87926 26.9877C3.64967 30.8608 5.55129 34.4185 8.34364 37.2108C11.136 40.0032 14.6937 41.9048 18.5668 42.6752C22.4399 43.4456 26.4544 43.0502 30.1028 41.539C33.7512 40.0278 36.8695 37.4686 39.0635 34.1852C41.2574 30.9017 42.4284 27.0414 42.4284 23.0925C42.4284 17.797 40.3248 12.7185 36.5804 8.97408C32.836 5.22965 27.7574 3.12605 22.462 3.12605ZM23.7099 40.5007V37.4807H21.2141V40.5007C17.0287 40.1969 13.0924 38.3968 10.125 35.4295C7.15766 32.4621 5.35754 28.5258 5.05381 24.3404H8.07373V21.8446H5.05381C5.35754 17.6591 7.15766 13.7228 10.125 10.7554C13.0924 7.7881 17.0287 5.98798 21.2141 5.68425V8.70417H23.7099V5.68425C27.8954 5.98798 31.8317 7.7881 34.799 10.7554C37.7664 13.7228 39.5665 17.6591 39.8702 21.8446H36.8503V24.3404H39.8702C39.5665 28.5258 37.7664 32.4621 34.799 35.4295C31.8317 38.3968 27.8954 40.1969 23.7099 40.5007Z" fill="#FED233"/>
            </svg>
                </div>
            <b>{filter_detail.facing}</b> <br/>Facing</td>
                <td>
                <div className='icon'>
                <svg width="35" height="36" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2146 0.413014C24.0331 0.306281 23.8264 0.25 23.6159 0.25C23.4054 0.25 23.1987 0.306281 23.0173 0.413014L1.92578 12.8197L3.12311 14.8554L23.6159 2.8006L44.1087 14.8566L45.3061 12.8209L37.7855 8.39759V2.61167C37.7855 2.2985 37.6611 1.99816 37.4397 1.77671C37.2182 1.55527 36.9179 1.43087 36.6047 1.43087H33.0623C32.7492 1.43087 32.4488 1.55527 32.2274 1.77671C32.0059 1.99816 31.8815 2.2985 31.8815 2.61167V4.92249L24.2146 0.413014ZM11.8079 17.9621H24.7967V25.0469H11.8079V17.9621Z" fill="#FED233"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.616 4.97321L7.08481 14.4196V30.9508H1.1808C0.867633 30.9508 0.567292 31.0752 0.345849 31.2967C0.124406 31.5181 0 31.8185 0 32.1316C0 32.4448 0.124406 32.7451 0.345849 32.9666C0.567292 33.188 0.867633 33.3124 1.1808 33.3124H43.6896C44.0028 33.3124 44.3032 33.188 44.5246 32.9666C44.746 32.7451 44.8704 32.4448 44.8704 32.1316C44.8704 31.8185 44.746 31.5181 44.5246 31.2967C44.3032 31.0752 44.0028 30.9508 43.6896 30.9508H40.1472V14.4196L23.616 4.97321ZM23.616 7.69259L9.44641 15.7905V30.9508H28.3392V17.962H35.424V30.9508H37.7856V15.7893L23.616 7.69259Z" fill="#FED233"/>
            </svg>

                </div><b>{filter_detail.BHK_type}</b><br/>BHK Type</td>
              </tr>
              <tr>
                <td>
                <div className='icon'>
                <svg width="37" height="37" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.171 26.1637H6.16728V8.8182C6.1655 8.16498 6.29329 7.51789 6.54327 6.9144C6.79326 6.3109 7.16046 5.76299 7.62363 5.30236L7.66218 5.26382C8.38805 4.53901 9.31999 4.05598 10.3307 3.88071C11.3414 3.70544 12.3816 3.84648 13.3091 4.28457C12.4331 5.741 12.069 7.44842 12.2747 9.1355C12.4803 10.8226 13.2439 12.3925 14.4441 13.5959L15.4993 14.6512L13.5569 16.5937L15.7373 18.774L17.6797 16.8316L28.4425 6.06903L30.3849 4.12663L28.2044 1.9462L26.2619 3.88861L25.2067 2.83333C23.9432 1.5734 22.2777 0.796737 20.5004 0.638676C18.7231 0.480615 16.9467 0.951179 15.4808 1.96837C13.9349 0.992119 12.103 0.570666 10.2859 0.773242C8.46887 0.975818 6.77474 1.79038 5.48185 3.08311L5.4433 3.12165C4.69286 3.86798 4.09791 4.75575 3.69287 5.73356C3.28783 6.71138 3.08076 7.75982 3.08364 8.8182V26.1637H0V29.2473H3.08364V32.2057C3.08358 32.4543 3.12366 32.7012 3.20236 32.937L6.07092 41.5423C6.224 42.003 6.51836 42.4038 6.91218 42.6876C7.306 42.9715 7.77926 43.1241 8.26474 43.1237H9.50783L8.38365 46.9783H11.5957L12.72 43.1237H32.7733L33.9297 46.9783H37.1483L35.9919 43.1237H37.9895C38.475 43.1242 38.9484 42.9717 39.3423 42.6878C39.7362 42.4039 40.0306 42.0031 40.1837 41.5423L43.0521 32.937C43.1308 32.7012 43.1709 32.4543 43.171 32.2057V29.2473H46.2546V26.1637H43.171ZM16.6247 5.01375C17.4742 4.16606 18.6253 3.68999 19.8255 3.68999C21.0256 3.68999 22.1767 4.16606 23.0262 5.01375L24.0813 6.06903L17.68 12.4704L16.6247 11.4153C15.777 10.5657 15.301 9.41463 15.301 8.21453C15.301 7.01442 15.777 5.86332 16.6247 5.01375ZM40.0873 32.0804L37.4343 40.0401H8.82037L6.16728 32.0804V29.2473H40.0873V32.0804Z" fill="#FED233"/>
            </svg>

                </div><b>{filter_detail.bathroom}</b><br />Bathroom</td>
                <td>
                <div className='icon'>
                <svg width="43" height="43" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4419 4.49457C38.6116 4.49457 48.4766 14.3595 48.4766 26.5292C48.4766 38.699 38.6116 48.5639 26.4419 48.5639C14.2721 48.5639 4.40723 38.699 4.40723 26.5292C4.40723 14.3595 14.2721 4.49457 26.4419 4.49457ZM26.4419 8.9015C21.7667 8.9015 17.283 10.7587 13.9772 14.0645C10.6714 17.3704 8.81416 21.8541 8.81416 26.5292C8.81416 31.2044 10.6714 35.6881 13.9772 38.9939C17.283 42.2998 21.7667 44.157 26.4419 44.157C31.1171 44.157 35.6007 42.2998 38.9066 38.9939C42.2124 35.6881 44.0696 31.2044 44.0696 26.5292C44.0696 21.8541 42.2124 17.3704 38.9066 14.0645C35.6007 10.7587 31.1171 8.9015 26.4419 8.9015ZM29.7471 15.5119C31.7578 15.509 33.6901 16.2915 35.1322 17.6925C36.5744 19.0936 37.4123 21.0025 37.4675 23.0124C37.5226 25.0223 36.7907 26.9743 35.4275 28.4524C34.0644 29.9305 32.178 30.8178 30.1702 30.9252L29.7471 30.9362H24.2384V35.3431C24.2378 35.9047 24.0228 36.4449 23.6372 36.8533C23.2517 37.2617 22.7248 37.5074 22.1641 37.5403C21.6034 37.5733 21.0514 37.3908 20.6207 37.0304C20.19 36.6699 19.9133 36.1586 19.8469 35.6009L19.8315 35.3431V19.9188C19.8311 18.807 20.2511 17.7362 21.007 16.9209C21.763 16.1057 22.7992 15.6063 23.9079 15.5229L24.2384 15.5119H29.7471ZM29.7471 19.9188H24.2384V26.5292H29.7471C30.5959 26.5288 31.412 26.2019 32.0263 25.6161C32.6406 25.0303 33.0061 24.2307 33.0468 23.3829C33.0876 22.535 32.8007 21.704 32.2454 21.062C31.6902 20.42 30.9093 20.0162 30.0644 19.9343L29.7471 19.9188Z" fill="#FED233"/>
            </svg>

                </div><b>{filter_detail.is_parking}</b><br />Parking</td>
              </tr>
            </table>
            <Grid sx={{display:'flex',justifyContent:'space-around'}}>
            <Button  sx={{background:'#FED233',color:'#000',borderRadius:'50PX',padding:'5px 15px'}}>Get Owner Details</Button>
            <Button onClick={handleViewMore(filter_detail.property_id)} sx={{background:'#FED233',color:'#000',borderRadius:'50PX',padding:'5px 15px'}}>View More</Button>
           
            </Grid>
            
            
            </Grid>
          </Grid>
        </div>
      ))
    ) : (
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="warning">
          No properties found!
        </Alert>
      </Snackbar>
    )}
  </CardContent>
</Card>
  
      </div>
    </div>
  );
}

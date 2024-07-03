import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Typography,Grid } from '@mui/material';
import '../css/style.css';
import image from '../asserts/Left Column.png';
import image1 from '../asserts/mission.jpeg';
import image2 from '../asserts/service.jpeg';
import image3 from '../asserts/lease.jpeg';



const AboutDrawer = ({ section, setSection }) => {
  const sections = ['About', 'Our Mission', 'Our Services', 'Lease and Tenant Management', 'Property Buying and Selling','Our Team', 'Why Choose Us?', 'Our Values'];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ width: 240, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', zIndex: 3 } }}
    >
      <div>
        <Typography variant="h6" sx={{ margin: 2, fontWeight: 'bold' }}>
          About Us
          <div style={{ borderBottom: '2px solid green', marginTop: 2 }} />
        </Typography>
        <List>
          {sections.map((text, index) => (
            <ListItem 
              button 
              key={index} 
              onClick={() => setSection(text)}
              sx={{ 
                borderBottom: section === text ? '2px solid green' : 'none',
                color: section === text ? 'black' : 'grey',
                fontWeight: section === text ? '700' : '400',
              }}
            >
              <ListItemText primary={text} primaryTypographyProps={{ style: { fontWeight: 'inherit', color: 'inherit' } }} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

const About = () => (
  <div style={{ flexGrow: 1, padding: 16 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src={image} width={300} height={530}/>
      </Grid>
      <Grid item xs={8}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        
    <Typography sx={{marginTop:'50px'}} variant="h4"><svg width="42" height="34" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0728 20.2173C15.8151 19.8522 14.5575 19.6669 13.334 19.6669C11.4448 19.6669 9.86845 20.1023 8.64612 20.6353C9.82453 16.2853 12.6554 8.77948 18.2946 7.93421C18.8169 7.8559 19.2448 7.47512 19.3873 6.96256L20.6198 2.51749C20.7238 2.14157 20.6622 1.73919 20.4495 1.41297C20.2369 1.08675 19.8951 0.869084 19.5121 0.816153C19.0959 0.758902 18.6717 0.729736 18.2512 0.729736C11.4823 0.729736 4.77879 7.85373 1.95007 18.0542C0.28958 24.0386 -0.197318 33.0356 3.89284 38.6987C6.18163 41.8675 9.52082 43.5596 13.8177 43.7287C13.8354 43.7292 13.8525 43.7297 13.8702 43.7297C19.172 43.7297 23.8733 40.1294 25.3035 34.9752C26.1578 31.8939 25.7716 28.6624 24.2151 25.8738C22.6751 23.1166 20.1388 21.1069 17.0728 20.2173Z" fill="#D9E8BD"/>
<path d="M50.0149 25.8741C48.4749 23.1163 45.9386 21.1066 42.8726 20.2171C41.6149 19.8519 40.3572 19.6667 39.1343 19.6667C37.2451 19.6667 35.6681 20.102 34.4458 20.6351C35.6242 16.2851 38.4551 8.77938 44.0949 7.93412C44.6172 7.85581 45.0446 7.47504 45.1877 6.96248L46.4202 2.51746C46.5241 2.14156 46.4625 1.73918 46.2499 1.41296C46.0377 1.08674 45.696 0.869082 45.3125 0.816152C44.8968 0.758902 44.4726 0.729736 44.0516 0.729736C37.2826 0.729736 30.5789 7.85365 27.7496 18.054C26.0897 24.0383 25.6028 33.0352 29.6935 38.6993C31.9818 41.8675 35.3216 43.5601 39.618 43.7287C39.6357 43.7292 39.6528 43.7297 39.671 43.7297C44.9723 43.7297 49.6742 40.1294 51.1044 34.9753C51.9577 31.894 51.571 28.662 50.0149 25.8741Z" fill="#D9E8BD"/>
</svg>
About Us</Typography>
<Typography sx={{marginTop:'50px'}} variant="h4"><svg width="45" height="41" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.06283" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.5623" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="30.7297" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
</svg>
</Typography>
      </div>
      <hr />
        <Typography sx={{marginTop:'60px',color:'#373737'}} variant="h6">Welcome to [Your Company Name], where exceptional property management meets personalized service. With years of experience in the real estate and property management industry, we pride ourselves on providing comprehensive and tailored solutions to property owners and tenants alike.</Typography>
      </Grid>
    </Grid>
  </div>
);

const Mission = () => (
  <div style={{ flexGrow: 1, padding: 16 }}>
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <img src={image1} width={300} height={530}/>
    </Grid>
    <Grid item xs={8}>
    <div style={{display:'flex',justifyContent:'space-between'}}>
      
  <Typography sx={{marginTop:'50px'}} variant="h4"><svg width="42" height="34" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0728 20.2173C15.8151 19.8522 14.5575 19.6669 13.334 19.6669C11.4448 19.6669 9.86845 20.1023 8.64612 20.6353C9.82453 16.2853 12.6554 8.77948 18.2946 7.93421C18.8169 7.8559 19.2448 7.47512 19.3873 6.96256L20.6198 2.51749C20.7238 2.14157 20.6622 1.73919 20.4495 1.41297C20.2369 1.08675 19.8951 0.869084 19.5121 0.816153C19.0959 0.758902 18.6717 0.729736 18.2512 0.729736C11.4823 0.729736 4.77879 7.85373 1.95007 18.0542C0.28958 24.0386 -0.197318 33.0356 3.89284 38.6987C6.18163 41.8675 9.52082 43.5596 13.8177 43.7287C13.8354 43.7292 13.8525 43.7297 13.8702 43.7297C19.172 43.7297 23.8733 40.1294 25.3035 34.9752C26.1578 31.8939 25.7716 28.6624 24.2151 25.8738C22.6751 23.1166 20.1388 21.1069 17.0728 20.2173Z" fill="#D9E8BD"/>
<path d="M50.0149 25.8741C48.4749 23.1163 45.9386 21.1066 42.8726 20.2171C41.6149 19.8519 40.3572 19.6667 39.1343 19.6667C37.2451 19.6667 35.6681 20.102 34.4458 20.6351C35.6242 16.2851 38.4551 8.77938 44.0949 7.93412C44.6172 7.85581 45.0446 7.47504 45.1877 6.96248L46.4202 2.51746C46.5241 2.14156 46.4625 1.73918 46.2499 1.41296C46.0377 1.08674 45.696 0.869082 45.3125 0.816152C44.8968 0.758902 44.4726 0.729736 44.0516 0.729736C37.2826 0.729736 30.5789 7.85365 27.7496 18.054C26.0897 24.0383 25.6028 33.0352 29.6935 38.6993C31.9818 41.8675 35.3216 43.5601 39.618 43.7287C39.6357 43.7292 39.6528 43.7297 39.671 43.7297C44.9723 43.7297 49.6742 40.1294 51.1044 34.9753C51.9577 31.894 51.571 28.662 50.0149 25.8741Z" fill="#D9E8BD"/>
</svg>
Our Mission</Typography>
<Typography sx={{marginTop:'50px'}} variant="h4"><svg width="45" height="41" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.06283" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.5623" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="30.7297" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
</svg>

</Typography>

    </div>
    <hr />
      <Typography sx={{marginTop:'60px',color:'#373737'}} variant="h6">At [Your Company Name], our mission is simple: to deliver unparalleled property management services that maximize property value, ensure tenant satisfaction, and create seamless experiences for everyone involved. We believe in fostering long-term relationships built on trust, transparency, and a commitment to excellence.</Typography>
    </Grid>
  </Grid>
</div>
);

// Define other components for each section similarly

const App = () => {
  const [section, setSection] = useState('About');

  let content;
  switch (section) {
    case 'About':
      content = <About />;
      break;
    case 'Our Mission':
      content = <Mission />;
      break;
    case 'Our Services':
      content = (
        <div style={{ flexGrow: 1, padding: 16 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src={image2} width={300} height={830}/>
      </Grid>
      <Grid item xs={8}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        
    <Typography sx={{marginTop:'50px'}} variant="h4"><svg width="42" height="34" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0728 20.2173C15.8151 19.8522 14.5575 19.6669 13.334 19.6669C11.4448 19.6669 9.86845 20.1023 8.64612 20.6353C9.82453 16.2853 12.6554 8.77948 18.2946 7.93421C18.8169 7.8559 19.2448 7.47512 19.3873 6.96256L20.6198 2.51749C20.7238 2.14157 20.6622 1.73919 20.4495 1.41297C20.2369 1.08675 19.8951 0.869084 19.5121 0.816153C19.0959 0.758902 18.6717 0.729736 18.2512 0.729736C11.4823 0.729736 4.77879 7.85373 1.95007 18.0542C0.28958 24.0386 -0.197318 33.0356 3.89284 38.6987C6.18163 41.8675 9.52082 43.5596 13.8177 43.7287C13.8354 43.7292 13.8525 43.7297 13.8702 43.7297C19.172 43.7297 23.8733 40.1294 25.3035 34.9752C26.1578 31.8939 25.7716 28.6624 24.2151 25.8738C22.6751 23.1166 20.1388 21.1069 17.0728 20.2173Z" fill="#D9E8BD"/>
<path d="M50.0149 25.8741C48.4749 23.1163 45.9386 21.1066 42.8726 20.2171C41.6149 19.8519 40.3572 19.6667 39.1343 19.6667C37.2451 19.6667 35.6681 20.102 34.4458 20.6351C35.6242 16.2851 38.4551 8.77938 44.0949 7.93412C44.6172 7.85581 45.0446 7.47504 45.1877 6.96248L46.4202 2.51746C46.5241 2.14156 46.4625 1.73918 46.2499 1.41296C46.0377 1.08674 45.696 0.869082 45.3125 0.816152C44.8968 0.758902 44.4726 0.729736 44.0516 0.729736C37.2826 0.729736 30.5789 7.85365 27.7496 18.054C26.0897 24.0383 25.6028 33.0352 29.6935 38.6993C31.9818 41.8675 35.3216 43.5601 39.618 43.7287C39.6357 43.7292 39.6528 43.7297 39.671 43.7297C44.9723 43.7297 49.6742 40.1294 51.1044 34.9753C51.9577 31.894 51.571 28.662 50.0149 25.8741Z" fill="#D9E8BD"/>
</svg>
Our Services</Typography>
<Typography sx={{marginTop:'50px'}} variant="h4"><svg width="45" height="41" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.06283" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.5623" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="30.7297" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
</svg>

</Typography>

      </div>
      <hr />
        <Typography sx={{marginTop:'60px',color:'#373737'}} variant="h6">
        We offer a full suite of property management services designed to meet the unique needs of residential and commercial property owners. Our services include:
        <ul>
        <li><b>Property Marketing</b>: Effective marketing strategies to attract and retain high-quality tenants.</li>
        <li><b>Tenant Screening and Management</b>: Thorough screening processes to ensure reliable and responsible tenants, coupled with ongoing tenant relations to foster a positive living environment.</li>
        <li><b>Lease Management</b>: Efficient handling of lease agreements, renewals, and terminations, ensuring compliance with all legal requirements and optimal terms for property owners.</li>
        <li><b>Maintenance and Repairs</b>: Prompt and professional maintenance services to keep your property in top condition, from routine upkeep to emergency repairs.</li>
        <li><b>Financial Reporting</b>: Detailed financial reports to keep you informed about your property's performance, including income, expenses, and net operating income.</li>
        <li><b>Rent Collection</b>: Streamlined rent collection and accounting to ensure timely payments and reduce delinquencies.</li>
        </ul>
        </Typography>
      </Grid>
    </Grid>
  </div>
      );
      break;
    case 'Lease and Tenant Management':
      content = (
        <div style={{ flexGrow: 1, padding: 16 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src={image3} width={300} height={830}/>
      </Grid>
      <Grid item xs={8}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        
    <Typography sx={{marginTop:'50px'}} variant="h4"><svg width="42" height="34" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0728 20.2173C15.8151 19.8522 14.5575 19.6669 13.334 19.6669C11.4448 19.6669 9.86845 20.1023 8.64612 20.6353C9.82453 16.2853 12.6554 8.77948 18.2946 7.93421C18.8169 7.8559 19.2448 7.47512 19.3873 6.96256L20.6198 2.51749C20.7238 2.14157 20.6622 1.73919 20.4495 1.41297C20.2369 1.08675 19.8951 0.869084 19.5121 0.816153C19.0959 0.758902 18.6717 0.729736 18.2512 0.729736C11.4823 0.729736 4.77879 7.85373 1.95007 18.0542C0.28958 24.0386 -0.197318 33.0356 3.89284 38.6987C6.18163 41.8675 9.52082 43.5596 13.8177 43.7287C13.8354 43.7292 13.8525 43.7297 13.8702 43.7297C19.172 43.7297 23.8733 40.1294 25.3035 34.9752C26.1578 31.8939 25.7716 28.6624 24.2151 25.8738C22.6751 23.1166 20.1388 21.1069 17.0728 20.2173Z" fill="#D9E8BD"/>
<path d="M50.0149 25.8741C48.4749 23.1163 45.9386 21.1066 42.8726 20.2171C41.6149 19.8519 40.3572 19.6667 39.1343 19.6667C37.2451 19.6667 35.6681 20.102 34.4458 20.6351C35.6242 16.2851 38.4551 8.77938 44.0949 7.93412C44.6172 7.85581 45.0446 7.47504 45.1877 6.96248L46.4202 2.51746C46.5241 2.14156 46.4625 1.73918 46.2499 1.41296C46.0377 1.08674 45.696 0.869082 45.3125 0.816152C44.8968 0.758902 44.4726 0.729736 44.0516 0.729736C37.2826 0.729736 30.5789 7.85365 27.7496 18.054C26.0897 24.0383 25.6028 33.0352 29.6935 38.6993C31.9818 41.8675 35.3216 43.5601 39.618 43.7287C39.6357 43.7292 39.6528 43.7297 39.671 43.7297C44.9723 43.7297 49.6742 40.1294 51.1044 34.9753C51.9577 31.894 51.571 28.662 50.0149 25.8741Z" fill="#D9E8BD"/>
</svg>
Lease and Tenant Management</Typography>
<Typography sx={{marginTop:'50px'}} variant="h4"><svg width="45" height="41" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.06283" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.5623" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="30.7297" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
</svg>

</Typography>

      </div>
      <hr />
        <Typography sx={{marginTop:'60px',color:'#373737'}} variant="h6">
        <b>Our lease and tenant management services are designed to minimize vacancy rates and maximize tenant satisfaction. We handle every aspect of the leasing process, including:</b>
        <ul>
        <li><b>Comprehensive Marketing</b>: Utilizing both traditional and digital platforms to advertise vacancies and attract potential tenants.</li>
        <li><b>Tenant Screening</b>: Conducting thorough background checks, credit assessments, and employment verifications to select the most reliable tenants.</li>
        <li><b>Lease Preparation and Execution</b>: Drafting and managing legally sound lease</li>
        </ul>
        <h6><b>Agreements that protect your interests and   comply with local regulations.</b></h6>
        <ul>
        <li><b>Ongoing Tenant Relations</b>: Providing responsive and courteous support to address tenant inquiries and concerns, ensuring a positive and stable tenancy.</li>
        <li><b>Lease Renewal and Termination</b>: Managing lease renewals proactively to retain high-quality tenants, and overseeing smooth transitions when leases end.</li>
        </ul>
        </Typography>
      </Grid>
    </Grid>
  </div>
      );
      break;
    case 'Property Buying and Selling':
      content = (
        <div style={{ flexGrow: 1, padding: 16 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src={image} width={300} height={530}/>
      </Grid>
      <Grid item xs={8}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        
    <Typography sx={{marginTop:'50px'}} variant="h4"><svg width="42" height="34" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0728 20.2173C15.8151 19.8522 14.5575 19.6669 13.334 19.6669C11.4448 19.6669 9.86845 20.1023 8.64612 20.6353C9.82453 16.2853 12.6554 8.77948 18.2946 7.93421C18.8169 7.8559 19.2448 7.47512 19.3873 6.96256L20.6198 2.51749C20.7238 2.14157 20.6622 1.73919 20.4495 1.41297C20.2369 1.08675 19.8951 0.869084 19.5121 0.816153C19.0959 0.758902 18.6717 0.729736 18.2512 0.729736C11.4823 0.729736 4.77879 7.85373 1.95007 18.0542C0.28958 24.0386 -0.197318 33.0356 3.89284 38.6987C6.18163 41.8675 9.52082 43.5596 13.8177 43.7287C13.8354 43.7292 13.8525 43.7297 13.8702 43.7297C19.172 43.7297 23.8733 40.1294 25.3035 34.9752C26.1578 31.8939 25.7716 28.6624 24.2151 25.8738C22.6751 23.1166 20.1388 21.1069 17.0728 20.2173Z" fill="#D9E8BD"/>
<path d="M50.0149 25.8741C48.4749 23.1163 45.9386 21.1066 42.8726 20.2171C41.6149 19.8519 40.3572 19.6667 39.1343 19.6667C37.2451 19.6667 35.6681 20.102 34.4458 20.6351C35.6242 16.2851 38.4551 8.77938 44.0949 7.93412C44.6172 7.85581 45.0446 7.47504 45.1877 6.96248L46.4202 2.51746C46.5241 2.14156 46.4625 1.73918 46.2499 1.41296C46.0377 1.08674 45.696 0.869082 45.3125 0.816152C44.8968 0.758902 44.4726 0.729736 44.0516 0.729736C37.2826 0.729736 30.5789 7.85365 27.7496 18.054C26.0897 24.0383 25.6028 33.0352 29.6935 38.6993C31.9818 41.8675 35.3216 43.5601 39.618 43.7287C39.6357 43.7292 39.6528 43.7297 39.671 43.7297C44.9723 43.7297 49.6742 40.1294 51.1044 34.9753C51.9577 31.894 51.571 28.662 50.0149 25.8741Z" fill="#D9E8BD"/>
</svg>
Property Buying and Selling</Typography>
<Typography sx={{marginTop:'50px'}} variant="h4"><svg width="45" height="41" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.06283" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.5623" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="30.7297" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
</svg>

</Typography>

      </div>
      <hr />
        <Typography sx={{marginTop:'60px',color:'#373737'}} variant="h6">
        <b>In addition to our property management services, we also specialize in property acquisitions and sales. Our expert team is dedicated to helping you navigate the complexities of the real estate market, whether you're looking to expand your portfolio or sell an existing asset.</b>
        <ul>
        <li><b>Property Acquisition</b>: We assist investors in identifying and acquiring properties that meet their investment criteria, conducting thorough due diligence, and negotiating favourable terms.</li>
        <li><b>Property Sales</b>: Our sales team leverages extensive market knowledge and innovative marketing strategies to ensure your property is presented to the right buyers, achieving the best possible sale price.</li>
        <li><b>Market Analysis</b>: Providing comprehensive market analysis and property valuations to inform you’re buying and selling decisions.</li>
        <li><b>Transaction Management</b>: Coordinating all aspects of the transaction process, from initial negotiations to closing, ensuring a seamless and stress-free experience.</li>
        </ul>
        </Typography>
      </Grid>
    </Grid>
  </div>
      );
      break;
    case 'Our Team':
      content = (
        <div style={{ flexGrow: 1, padding: 16 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src={image} width={300} height={530}/>
      </Grid>
      <Grid item xs={8}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        
    <Typography sx={{marginTop:'50px'}} variant="h4"><svg width="42" height="34" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0728 20.2173C15.8151 19.8522 14.5575 19.6669 13.334 19.6669C11.4448 19.6669 9.86845 20.1023 8.64612 20.6353C9.82453 16.2853 12.6554 8.77948 18.2946 7.93421C18.8169 7.8559 19.2448 7.47512 19.3873 6.96256L20.6198 2.51749C20.7238 2.14157 20.6622 1.73919 20.4495 1.41297C20.2369 1.08675 19.8951 0.869084 19.5121 0.816153C19.0959 0.758902 18.6717 0.729736 18.2512 0.729736C11.4823 0.729736 4.77879 7.85373 1.95007 18.0542C0.28958 24.0386 -0.197318 33.0356 3.89284 38.6987C6.18163 41.8675 9.52082 43.5596 13.8177 43.7287C13.8354 43.7292 13.8525 43.7297 13.8702 43.7297C19.172 43.7297 23.8733 40.1294 25.3035 34.9752C26.1578 31.8939 25.7716 28.6624 24.2151 25.8738C22.6751 23.1166 20.1388 21.1069 17.0728 20.2173Z" fill="#D9E8BD"/>
<path d="M50.0149 25.8741C48.4749 23.1163 45.9386 21.1066 42.8726 20.2171C41.6149 19.8519 40.3572 19.6667 39.1343 19.6667C37.2451 19.6667 35.6681 20.102 34.4458 20.6351C35.6242 16.2851 38.4551 8.77938 44.0949 7.93412C44.6172 7.85581 45.0446 7.47504 45.1877 6.96248L46.4202 2.51746C46.5241 2.14156 46.4625 1.73918 46.2499 1.41296C46.0377 1.08674 45.696 0.869082 45.3125 0.816152C44.8968 0.758902 44.4726 0.729736 44.0516 0.729736C37.2826 0.729736 30.5789 7.85365 27.7496 18.054C26.0897 24.0383 25.6028 33.0352 29.6935 38.6993C31.9818 41.8675 35.3216 43.5601 39.618 43.7287C39.6357 43.7292 39.6528 43.7297 39.671 43.7297C44.9723 43.7297 49.6742 40.1294 51.1044 34.9753C51.9577 31.894 51.571 28.662 50.0149 25.8741Z" fill="#D9E8BD"/>
</svg>
Our Team</Typography>
<Typography sx={{marginTop:'50px'}} variant="h4"><svg width="45" height="41" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.06283" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.5623" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="30.7297" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
</svg>

</Typography>

      </div>
      <hr />
        <Typography sx={{marginTop:'60px',color:'#373737'}} variant="h6">
        Our team is composed of experienced professionals who are passionate about property management and real estate. Each team member brings a wealth of knowledge and expertise, allowing us to provide the highest level of service. We are dedicated to staying current with industry trends and regulations to offer the best solutions to our clients.
        </Typography>
      </Grid>
    </Grid>
  </div>
   );
   break;
   case 'Why Choose Us?':
  content = (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={image3} width={300} height={530} alt="Why Choose Us" />
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ marginTop: '50px' }} variant="h4">
              <svg width="42" height="34" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0728 20.2173C15.8151 19.8522 14.5575 19.6669 13.334 19.6669C11.4448 19.6669 9.86845 20.1023 8.64612 20.6353C9.82453 16.2853 12.6554 8.77948 18.2946 7.93421C18.8169 7.8559 19.2448 7.47512 19.3873 6.96256L20.6198 2.51749C20.7238 2.14157 20.6622 1.73919 20.4495 1.41297C20.2369 1.08675 19.8951 0.869084 19.5121 0.816153C19.0959 0.758902 18.6717 0.729736 18.2512 0.729736C11.4823 0.729736 4.77879 7.85373 1.95007 18.0542C0.28958 24.0386 -0.197318 33.0356 3.89284 38.6987C6.18163 41.8675 9.52082 43.5596 13.8177 43.7287C13.8354 43.7292 13.8525 43.7297 13.8702 43.7297C19.172 43.7297 23.8733 40.1294 25.3035 34.9752C26.1578 31.8939 25.7716 28.6624 24.2151 25.8738C22.6751 23.1166 20.1388 21.1069 17.0728 20.2173Z" fill="#D9E8BD"/>
                <path d="M50.0149 25.8741C48.4749 23.1163 45.9386 21.1066 42.8726 20.2171C41.6149 19.8519 40.3572 19.6667 39.1343 19.6667C37.2451 19.6667 35.6681 20.102 34.4458 20.6351C35.6242 16.2851 38.4551 8.77938 44.0949 7.93412C44.6172 7.85581 45.0446 7.47504 45.1877 6.96248L46.4202 2.51746C46.5241 2.14156 46.4625 1.73918 46.2499 1.41296C46.0377 1.08674 45.696 0.869082 45.3125 0.816152C44.8968 0.758902 44.4726 0.729736 44.0516 0.729736C37.2826 0.729736 30.5789 7.85365 27.7496 18.054C26.0897 24.0383 25.6028 33.0352 29.6935 38.6993C31.9818 41.8675 35.3216 43.5601 39.618 43.7287C39.6357 43.7292 39.6528 43.7297 39.671 43.7297C44.9723 43.7297 49.6742 40.1294 51.1044 34.9753C51.9577 31.894 51.571 28.662 50.0149 25.8741Z" fill="#D9E8BD"/>
              </svg>
              Why Choose Us?
            </Typography>
            <Typography sx={{ marginTop: '50px' }} variant="h4">
              <svg width="45" height="41" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4.06283" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
                <circle cx="18.2298" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
                <circle cx="32.3966" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
                <circle cx="46.5623" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
                <circle cx="60.7293" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
                <circle cx="4.06283" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
                <circle cx="18.3966" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
                <circle cx="32.3966" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
                <circle cx="46.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
                <circle cx="60.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
                <circle cx="4.06283" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
                <circle cx="18.2298" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
                <circle cx="32.3966" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
                <circle cx="46.5623" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
                <circle cx="60.7293" cy="30.7297" r="3.33333" fill="#D2D2D2"/>
                <circle cx="4.06283" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
                <circle cx="18.2298" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
                <circle cx="32.3966" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
                <circle cx="46.5623" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
                <circle cx="60.7293" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
                <circle cx="4.06283" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
                <circle cx="18.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
                <circle cx="32.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
                <circle cx="46.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
                <circle cx="60.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
              </svg>
            </Typography>
          </div>
          <hr />
          <Typography sx={{ marginTop: '60px', color: '#373737' }} variant="h6">
            <ul>
              <li><b>Expertise and Experience</b>: With years of industry experience, we have the knowledge and skills to manage properties effectively and navigate real estate transactions successfully.</li>
              <li><b>Personalized Service</b>: We understand that every property and owner is unique, and we tailor our services to meet your specific needs.</li>
              <li><b>Commitment to Excellence</b>: We are committed to providing exceptional service and achieving the best outcomes for our clients.</li>
              <li><b>Innovative Solutions</b>: We leverage the latest technology and best practices to streamline our operations and enhance service delivery.</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
  break;
    case 'Our Values':
      content = (
        <div style={{ flexGrow: 1, padding: 16 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src={image} width={300} height={630}/>
      </Grid>
      <Grid item xs={8}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        
    <Typography sx={{marginTop:'50px'}} variant="h4"><svg width="42" height="34" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0728 20.2173C15.8151 19.8522 14.5575 19.6669 13.334 19.6669C11.4448 19.6669 9.86845 20.1023 8.64612 20.6353C9.82453 16.2853 12.6554 8.77948 18.2946 7.93421C18.8169 7.8559 19.2448 7.47512 19.3873 6.96256L20.6198 2.51749C20.7238 2.14157 20.6622 1.73919 20.4495 1.41297C20.2369 1.08675 19.8951 0.869084 19.5121 0.816153C19.0959 0.758902 18.6717 0.729736 18.2512 0.729736C11.4823 0.729736 4.77879 7.85373 1.95007 18.0542C0.28958 24.0386 -0.197318 33.0356 3.89284 38.6987C6.18163 41.8675 9.52082 43.5596 13.8177 43.7287C13.8354 43.7292 13.8525 43.7297 13.8702 43.7297C19.172 43.7297 23.8733 40.1294 25.3035 34.9752C26.1578 31.8939 25.7716 28.6624 24.2151 25.8738C22.6751 23.1166 20.1388 21.1069 17.0728 20.2173Z" fill="#D9E8BD"/>
<path d="M50.0149 25.8741C48.4749 23.1163 45.9386 21.1066 42.8726 20.2171C41.6149 19.8519 40.3572 19.6667 39.1343 19.6667C37.2451 19.6667 35.6681 20.102 34.4458 20.6351C35.6242 16.2851 38.4551 8.77938 44.0949 7.93412C44.6172 7.85581 45.0446 7.47504 45.1877 6.96248L46.4202 2.51746C46.5241 2.14156 46.4625 1.73918 46.2499 1.41296C46.0377 1.08674 45.696 0.869082 45.3125 0.816152C44.8968 0.758902 44.4726 0.729736 44.0516 0.729736C37.2826 0.729736 30.5789 7.85365 27.7496 18.054C26.0897 24.0383 25.6028 33.0352 29.6935 38.6993C31.9818 41.8675 35.3216 43.5601 39.618 43.7287C39.6357 43.7292 39.6528 43.7297 39.671 43.7297C44.9723 43.7297 49.6742 40.1294 51.1044 34.9753C51.9577 31.894 51.571 28.662 50.0149 25.8741Z" fill="#D9E8BD"/>
</svg>
Values</Typography>
<Typography sx={{marginTop:'50px'}} variant="h4"><svg width="45" height="41" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.06283" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="44.0631" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.5623" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="44.0631" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="57.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="46.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="57.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="30.7297" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="30.7297" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.2298" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="17.3964" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.5623" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="60.7293" cy="17.3964" r="3.33333" fill="#D2D2D2"/>
<circle cx="4.06283" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="18.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="32.3966" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="46.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
<circle cx="60.7293" cy="4.06307" r="3.33333" fill="#C7AC6D"/>
</svg>

</Typography>

      </div>
      <hr />
        <Typography sx={{marginTop:'60px',color:'#373737'}} variant="h6">
        <ul>
          <li><b>Integrity</b>: We conduct our business with the highest ethical standards, ensuring honesty and fairness in all our dealings.</li>
          <li><b>Customer Focus</b>: Our clients are at the heart of everything we do. We strive to exceed their expectations with every interaction.</li>
          <li><b>Accountability</b>: We take responsibility for our actions and are committed to delivering on our promises.</li>
          <li><b>Innovation</b>: We embrace change and continuously seek new and better ways to serve our clients.</li>
          <h5>Thank you for considering [Your Company Name] for your property management and real estate needs. We look forward to partnering with you to achieve your property goals.
         <br/> For more information or to schedule a consultation, please contact us at [Your Contact Information].</h5>
      </ul>
        </Typography>
      </Grid>
    </Grid>
        </div>
      );
      break;
    default:
      content = <About />;
      break;
  }

  return (
    <div style={{ display: 'flex' }}>
      <AboutDrawer section={section} setSection={setSection} />
      {content}
    </div>
  );
};

export default App;

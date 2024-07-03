import React, { useState } from 'react';
import '../css/Contact.css';
import { Grid, Typography, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ name, email, subject, message });
    
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const iconStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '50%',
    marginRight: '10px'
  };

  return (
    <Grid container spacing={2} className="contact-form-container">
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" sx={{ margin: 2, fontWeight: 'bold' }}>Get in Touch</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                id="outlined-name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                id="outlined-email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-subject"
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-message"
                label="Message"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className='bg-img'>
          <Typography variant="h4" sx={{ margin: 2, padding: '20px 0', fontWeight: 'bold' }}>Contact us</Typography>
          <div>
            <Typography variant="h6" sx={{ margin: 2, padding: '20px 0', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={iconStyle} />
              Address: 198 West 21th Street, Suite 721 New York NY 10016
            </Typography>
            <Typography variant="h6" sx={{ margin: 2, padding: '20px 0', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <PhoneInTalkIcon sx={iconStyle} />
              Phone:
            </Typography>
            <Typography variant="h6" sx={{ margin: 2, padding: '20px 0', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={iconStyle} />
              Email:
            </Typography>
            <Typography variant="h6" sx={{ margin: 2, padding: '20px 0', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <LanguageIcon sx={iconStyle} />
              Website:
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactForm;

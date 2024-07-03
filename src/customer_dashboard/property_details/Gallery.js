import React, { useState, useRef } from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import StickyBotton from './sticky_botton';
import Axios from '../../AxiosInstance';
import { useNavigate } from 'react-router-dom';
import Own from '../Own';
import Swal from 'sweetalert2';
import Title from '../../components/formTitile';
export default function Gallery({ handleMove = () => { console.log("props_not_geting") }, handleback = () => { } }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFiles([...selectedFiles, ...files]); // Store selected files
      const base64Promises = Array.from(files).map((file) => getBase64(file));
      const base64Results = await Promise.all(base64Promises);
      setUploadedFiles([...uploadedFiles, ...base64Results]); // Append base64 strings to uploadedFiles
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async () => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You are about to submit the property!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Convert selected files to base64 and upload them
          const base64Promises = selectedFiles.map((file) => getBase64(file));
          const base64Results = await Promise.all(base64Promises);

          // Upload base64 data to the backend
          await uploadToBackend(base64Results);

          // Optional: You can clear the selected files after upload
          setSelectedFiles([]);
        }
      });
    } catch (error) {
      console.error('Error occurred during upload:', error);
    }
  };

  const uploadToBackend = async (base64DataArray) => {
    const formDataList = base64DataArray.map((base64Data, index) => ({
      id: index + 1,
      base64Data: base64Data,
    }));

    const payload = {
      upload_images: formDataList.map((item) => item.base64Data),
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
      },
    };
    const propertyId = localStorage.getItem('property_id');

    try {
      const response = await Axios.post(`property/upload_photo?property_id=${propertyId}`,
        JSON.stringify(payload),
        config
      );
      console.log('Upload response:', response.data);
      console.log('Response status:', response.status);

      if (response.status === 200) {
        Swal.fire(
          'Success!',
          'Property uploaded successfully.',
          'success'
        ).then(() => {
          localStorage.removeItem('property_id');
          // navigate('inde');
        });
      } else {
        console.error('Upload response does not contain valid URLs');
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <Grid container>
    <Grid item xs={12}>
      <Title title={"Provide Amenities Details about your Property "} />
   </Grid>
        <Grid xs={6}><Typography>Upload Photos & Videos</Typography></Grid>
        <Grid xs={6}>
          <Button
            style={{ backgroundColor: '#085c06', color: 'white' }}
            onClick={handleUploadClick}
          >
            <DriveFolderUploadIcon style={{ color: 'white' }} />
            Choose Image(s)
          </Button>
          <input
            type="file"
            accept="image/*,video/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
            multiple
          />
        </Grid>

      <Grid item padding={5}>
        <Box style={{ backgroundColor: '#e8eaed', border: '#7c7d80 1px' }}>
          {uploadedFiles.map((base64Data, index) => (
            <img
              key={index}
              src={base64Data}
              alt={`Uploaded File ${index}`}
              style={{ marginRight: 10, marginBottom: 10 }}
              height={250}
              width={250}
            />
          ))}
        </Box>
        <StickyBotton backText="Back" saveText={"Submit"} fun_save={handleSubmit} fun_back={handleback} />
      </Grid>
    </Grid>
  );
}

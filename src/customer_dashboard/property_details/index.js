import React, { useState } from "react";
import { Grid } from "@mui/material";
import { formNames } from "../../constant/appConstant";
import GroupOrientation from "./property_detail";
import Locality from "./Locality_detail";
import Rental from "./Rental_detail";
import Facilitics from './Facilitics';
import Gallery from './Gallery';

const Property = () => {
    const [activeForm, setActiveForm] = useState(formNames.Property_Details);
    const [property, setProperty] = useState("");
    const [loca, setLoca] = useState("");
    const [amenities, setAmenities] = useState("");
    const [gallery, setGallery] = useState("");

    const handleMove = () => {
        let currentIndex = forms.findIndex((form) => form.label === activeForm);
        if (currentIndex !== -1 && currentIndex !== forms.length - 1) {
            setActiveForm(forms[currentIndex + 1].label);
        }
    };

    const forms = [
        { label: formNames.Property_Details, component: <GroupOrientation handleMove={handleSave} handleback={handleback} /> },
        { label: formNames.Locality_Details, component: <Locality handleMove={handleSave} handleback={handleback} /> },
        { label: formNames.Rental_Details, component: <Rental handleMove={handleSave} handleback={handleback} /> },
        { label: formNames.Amenities, component: <Facilitics handleMove={handleSave} handleback={handleback} /> },
        { label: formNames.Gallery, component: <Gallery handleMove={handleSave} handleback={handleback} /> }
    ];

    async function handleSave(object, formName) {
        let data = object;
        switch (formName) {
            case formNames.Property_Details:
                setProperty(data);
                break;
            case formNames.Locality_Details:
                setLoca(data);
                break;
            case formNames.Rental_Details:
                // Save rental details
                break;
            case formNames.Amenities:
                setAmenities(data);
                break;
            case formNames.Gallery:
                setGallery(data);
                break;
            default:
                break;
        }
        handleMove(); // Move to the next form
    }

    async function handleback() {
        let currentIndex = forms.findIndex((form) => form.label === activeForm);
        if (currentIndex !== -1 && currentIndex !== 0) {
            setActiveForm(forms[currentIndex - 1].label);
        }
    }

    return (
        <Grid container>
            <Grid item xs={12} sx={{ padding: '1px' }}>
                <div className="over_flow_style position_relative">
                    {forms.map(({ label, component }) => (
                        <div key={label} className={activeForm === label ? "d-block" : "d-none"}>
                            {component}
                        </div>
                    ))}
                </div>
            </Grid>
        </Grid>
    );
};

export default Property;

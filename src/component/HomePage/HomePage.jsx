import ClinicSlide from "./ClinicSlide";
import DoctorSlide from "./DoctorSlide";
import ImageSlide from "./ImageSlide";
import Specialties from "./Specialties";
import img4 from "../../assets/images/4.jpeg";
import { useEffect, useState } from "react";
import { getSpecialtiesPagination } from '../../services/specialtiesService';
import { getAllDoctor } from '../../services/doctorService';
import { getAllClinic } from "../../services/clinicService";
import { Button, Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { Phone } from '@mui/icons-material';


const HomePage = (props) => {
    return (
        <div>
            HomePage
        </div>
    )
}



export default HomePage;

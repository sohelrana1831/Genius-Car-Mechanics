import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { servicesId } = useParams();
  const [service, setService] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/services/${servicesId}`)
      .then((res) => res.json())
      .then((service) => setService(service));
  }, []);
  return (
    <div>
      <h1>Booking from: {service?.name}</h1>
      <h1>Booking items: {servicesId}</h1>
    </div>
  );
};

export default Booking;

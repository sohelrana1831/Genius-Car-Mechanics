import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";
const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Services added successfully");
        reset();
      }
    });
  };

  return (
    <div className="add-services">
      <h1>Please add a service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="img url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddServices;

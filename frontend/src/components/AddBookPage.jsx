import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addBook } from "../services/api";

const AddBookPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await addBook(data);
      alert("Book added successfully");
      navigate("/admin");
    } catch (error) {
      console.error("Add book failed", error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="type">Type</label>
          <select
            id="type"
            {...register("type", { required: "Type is required" })}
          >
            <option value="Book">Book</option>
            <option value="Movie">Movie</option>
          </select>
          {errors.type && <p>{errors.type.message}</p>}
        </div>
        <div>
          <label htmlFor="name">Book/Movie Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="procurementDate">Date of Procurement</label>
          <input
            type="date"
            id="procurementDate"
            {...register("procurementDate", {
              required: "Date of Procurement is required",
            })}
          />
          {errors.procurementDate && <p>{errors.procurementDate.message}</p>}
        </div>
        <div>
          <label htmlFor="quantity">Quantity/Copies</label>
          <input
            type="number"
            id="quantity"
            defaultValue={1}
            {...register("quantity", { required: "Quantity is required" })}
          />
          {errors.quantity && <p>{errors.quantity.message}</p>}
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;

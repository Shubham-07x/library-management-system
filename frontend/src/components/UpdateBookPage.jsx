import React from "react";
import { useForm } from "react-hook-form";
import { updateBook } from "../services/api";

const UpdateBookPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await updateBook(data.bookId, data);
      alert("Book updated successfully");
    } catch (error) {
      console.error("Update book failed", error);
    }
  };

  return (
    <div>
      <h2>Update Book</h2>
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
          <label htmlFor="bookName">Book/Movie Name</label>
          <input
            type="text"
            id="bookName"
            {...register("bookName", {
              required: "Book/Movie Name is required",
            })}
          />
          {errors.bookName && <p>{errors.bookName.message}</p>}
        </div>
        <div>
          <label htmlFor="serialNo">Serial No</label>
          <input
            type="text"
            id="serialNo"
            {...register("serialNo", { required: "Serial No is required" })}
          />
          {errors.serialNo && <p>{errors.serialNo.message}</p>}
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            {...register("status", { required: "Status is required" })}
          >
            <option value="Available">Available</option>
            <option value="Issued">Issued</option>
          </select>
          {errors.status && <p>{errors.status.message}</p>}
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBookPage;

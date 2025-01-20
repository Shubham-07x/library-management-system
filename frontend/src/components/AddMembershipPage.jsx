import React from "react";
import { useForm } from "react-hook-form";
import { addMembership } from "../services/api";

const AddMembershipPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addMembership(data);
      alert("Membership added successfully");
    } catch (error) {
      console.error("Add membership failed", error);
    }
  };

  return (
    <div>
      <h2>Add Membership</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            {...register("contactNumber", {
              required: "Contact Number is required",
            })}
          />
          {errors.contactNumber && <p>{errors.contactNumber.message}</p>}
        </div>
        <div>
          <label htmlFor="contactAddress">Contact Address</label>
          <input
            type="text"
            id="contactAddress"
            {...register("contactAddress", {
              required: "Contact Address is required",
            })}
          />
          {errors.contactAddress && <p>{errors.contactAddress.message}</p>}
        </div>
        <div>
          <label htmlFor="aadharCardNo">Aadhar Card No</label>
          <input
            type="text"
            id="aadharCardNo"
            {...register("aadharCardNo", {
              required: "Aadhar Card No is required",
            })}
          />
          {errors.aadharCardNo && <p>{errors.aadharCardNo.message}</p>}
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            {...register("startDate", { required: "Start Date is required" })}
          />
          {errors.startDate && <p>{errors.startDate.message}</p>}
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            {...register("endDate", { required: "End Date is required" })}
          />
          {errors.endDate && <p>{errors.endDate.message}</p>}
        </div>
        <div>
          <label>Membership Duration</label>
          <div>
            <input
              type="radio"
              id="sixMonths"
              value="Six Months"
              {...register("membershipDuration", {
                required: "Membership Duration is required",
              })}
              defaultChecked
            />
            <label htmlFor="sixMonths">Six Months</label>
          </div>
          <div>
            <input
              type="radio"
              id="oneYear"
              value="One Year"
              {...register("membershipDuration", {
                required: "Membership Duration is required",
              })}
            />
            <label htmlFor="oneYear">One Year</label>
          </div>
          <div>
            <input
              type="radio"
              id="twoYears"
              value="Two Years"
              {...register("membershipDuration", {
                required: "Membership Duration is required",
              })}
            />
            <label htmlFor="twoYears">Two Years</label>
          </div>
          {errors.membershipDuration && (
            <p>{errors.membershipDuration.message}</p>
          )}
        </div>
        <button type="submit">Add Membership</button>
      </form>
    </div>
  );
};

export default AddMembershipPage;

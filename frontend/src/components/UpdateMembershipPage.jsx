import React from "react";
import { useForm } from "react-hook-form";
import { updateMembership } from "../services/api";

const UpdateMembershipPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await updateMembership(data.membershipId, data);
      alert("Membership updated successfully");
    } catch (error) {
      console.error("Update membership failed", error);
    }
  };

  return (
    <div>
      <h2>Update Membership</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="membershipId">Membership Number</label>
          <input
            type="text"
            id="membershipId"
            {...register("membershipId", {
              required: "Membership Number is required",
            })}
          />
          {errors.membershipId && <p>{errors.membershipId.message}</p>}
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
          <label>Membership Extension</label>
          <div>
            <input
              type="radio"
              id="sixMonths"
              value="Six Months"
              {...register("membershipExtension", {
                required: "Membership Extension is required",
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
              {...register("membershipExtension", {
                required: "Membership Extension is required",
              })}
            />
            <label htmlFor="oneYear">One Year</label>
          </div>
          <div>
            <input
              type="radio"
              id="twoYears"
              value="Two Years"
              {...register("membershipExtension", {
                required: "Membership Extension is required",
              })}
            />
            <label htmlFor="twoYears">Two Years</label>
          </div>
          {errors.membershipExtension && (
            <p>{errors.membershipExtension.message}</p>
          )}
        </div>
        <div>
          <input
            type="radio"
            id="membershipRemoval"
            value="Remove"
            {...register("membershipExtension")}
          />
          <label htmlFor="membershipRemoval">Membership Removal</label>
        </div>
        <button type="submit">Update Membership</button>
      </form>
    </div>
  );
};

export default UpdateMembershipPage;

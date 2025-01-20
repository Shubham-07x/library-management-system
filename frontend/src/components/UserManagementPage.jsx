import React from "react";
import { useForm } from "react-hook-form";
import { addUser, updateUser } from "../services/api";

const UserManagementPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (data.userType === "New User") {
        await addUser(data);
        alert("User added successfully");
      } else {
        await updateUser(data.userId, data);
        alert("User updated successfully");
      }
    } catch (error) {
      console.error("User management failed", error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>User Type</label>
          <div>
            <input
              type="radio"
              id="newUser"
              value="New User"
              {...register("userType", { required: "User Type is required" })}
            />
            <label htmlFor="newUser">New User</label>
          </div>
          <div>
            <input
              type="radio"
              id="existingUser"
              value="Existing User"
              {...register("userType", { required: "User Type is required" })}
            />
            <label htmlFor="existingUser">Existing User</label>
          </div>
          {errors.userType && <p>{errors.userType.message}</p>}
        </div>
        <div>
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            {...register("userId", { required: "User ID is required" })}
          />
          {errors.userId && <p>{errors.userId.message}</p>}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input type="checkbox" id="status" {...register("status")} />
        </div>
        <div>
          <label htmlFor="adminPrivileges">Admin Privileges</label>
          <input
            type="checkbox"
            id="adminPrivileges"
            {...register("adminPrivileges")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserManagementPage;

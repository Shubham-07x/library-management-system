import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { issueBook, returnBook, payFine } from "../services/api";

const TransactionsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("issue");

  const onSubmitIssue = async (data) => {
    try {
      await issueBook(data);
      alert("Book issued successfully");
      navigate("/transaction-completed");
    } catch (error) {
      console.error("Issue book failed", error);
    }
  };

  const onSubmitReturn = async (data) => {
    try {
      await returnBook(data);
      alert("Book returned successfully");
      navigate("/transaction-completed");
    } catch (error) {
      console.error("Return book failed", error);
    }
  };

  const onSubmitFine = async (data) => {
    try {
      await payFine(data);
      alert("Fine paid successfully");
      navigate("/transaction-completed");
    } catch (error) {
      console.error("Pay fine failed", error);
    }
  };

  return (
    <div>
      <h2>Transactions</h2>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("issue")}
          className={activeTab === "issue" ? "active" : ""}
        >
          Issue Book
        </button>
        <button
          onClick={() => setActiveTab("return")}
          className={activeTab === "return" ? "active" : ""}
        >
          Return Book
        </button>
        <button
          onClick={() => setActiveTab("fine")}
          className={activeTab === "fine" ? "active" : ""}
        >
          Pay Fine
        </button>
      </div>
      {activeTab === "issue" && (
        <form onSubmit={handleSubmit(onSubmitIssue)}>
          <h3>Issue Book</h3>
          <div>
            <label htmlFor="book_id">Book ID</label>
            <input
              type="number"
              id="book_id"
              {...register("book_id", { required: "Book ID is required" })}
            />
            {errors.book_id && (
              <p className="error-message">{errors.book_id.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="membership_id">Membership ID</label>
            <input
              type="number"
              id="membership_id"
              {...register("membership_id", {
                required: "Membership ID is required",
              })}
            />
            {errors.membership_id && (
              <p className="error-message">{errors.membership_id.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="issue_date">Issue Date</label>
            <input
              type="date"
              id="issue_date"
              {...register("issue_date", {
                required: "Issue Date is required",
              })}
            />
            {errors.issue_date && (
              <p className="error-message">{errors.issue_date.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="return_date">Return Date</label>
            <input
              type="date"
              id="return_date"
              {...register("return_date", {
                required: "Return Date is required",
              })}
            />
            {errors.return_date && (
              <p className="error-message">{errors.return_date.message}</p>
            )}
          </div>
          <button type="submit">Issue Book</button>
        </form>
      )}
      {activeTab === "return" && (
        <form onSubmit={handleSubmit(onSubmitReturn)}>
          <h3>Return Book</h3>
          <div>
            <label htmlFor="transaction_id">Transaction ID</label>
            <input
              type="number"
              id="transaction_id"
              {...register("transaction_id", {
                required: "Transaction ID is required",
              })}
            />
            {errors.transaction_id && (
              <p className="error-message">{errors.transaction_id.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="actual_return_date">Actual Return Date</label>
            <input
              type="date"
              id="actual_return_date"
              {...register("actual_return_date", {
                required: "Actual Return Date is required",
              })}
            />
            {errors.actual_return_date && (
              <p className="error-message">
                {errors.actual_return_date.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="fine_calculated">Fine Calculated</label>
            <input
              type="number"
              id="fine_calculated"
              {...register("fine_calculated", {
                required: "Fine Calculated is required",
              })}
            />
            {errors.fine_calculated && (
              <p className="error-message">{errors.fine_calculated.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="fine_paid">Fine Paid</label>
            <input type="checkbox" id="fine_paid" {...register("fine_paid")} />
          </div>
          <button type="submit">Return Book</button>
        </form>
      )}
      {activeTab === "fine" && (
        <form onSubmit={handleSubmit(onSubmitFine)}>
          <h3>Pay Fine</h3>
          <div>
            <label htmlFor="transaction_id">Transaction ID</label>
            <input
              type="number"
              id="transaction_id"
              {...register("transaction_id", {
                required: "Transaction ID is required",
              })}
            />
            {errors.transaction_id && (
              <p className="error-message">{errors.transaction_id.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="fine_paid">Fine Paid</label>
            <input type="checkbox" id="fine_paid" {...register("fine_paid")} />
          </div>
          <button type="submit">Pay Fine</button>
        </form>
      )}
    </div>
  );
};

export default TransactionsPage;

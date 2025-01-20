import React, { useEffect, useState } from "react";
import { getMasterListOfBooks } from "../services/api";

const MasterListOfBooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getMasterListOfBooks();
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Master List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name of Book</th>
            <th>Author Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Cost</th>
            <th>Procurement Date</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.serialNo}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.status}</td>
              <td>{book.cost}</td>
              <td>{book.procurementDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterListOfBooksPage;

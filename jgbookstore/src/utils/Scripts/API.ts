// API.tsx

import { Book } from '../Interfaces/Book';

// Base URL of the API
const baseURL: string = 'http://localhost:4730';

// Function to request all books
export const reqAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${baseURL}/books?_limit=10`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Function to request one book by ISBN
export const reqBookByISBN = async (isbn: string): Promise<Book> => {
  try {
    const response = await fetch(`${baseURL}/books/${isbn}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
};

// Function to post a new book
export const postNewBook = async (book: Book): Promise<Book> => {
  try {
    const response = await fetch(`${baseURL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting book:', error);
    throw error;
  }
};

// Function to update an existing book
export const updateExistingBook = async (book: Book, isbn: string): Promise<Book> => {
  try {
    const response = await fetch(`${baseURL}/books/${isbn}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

// Function to delete a book
export const deleteABook = async (isbn: string): Promise<string> => {
  try {
    const response = await fetch(`${baseURL}/books/${isbn}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return "Book deleted successfully";
    } else {
      throw new Error('Failed to delete book');
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};


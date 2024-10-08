// API.tsx

import { Book } from '../Interfaces/Book';

import { User } from '../Interfaces/User';

// Base URL of the API
const baseURL: string = 'http://localhost:4730';

///////////////////////////////////////// LOGIN FUNCTION ////////////////////////////////////////////////

interface LoginResponse {
  accessToken: string;
  user: User;
};

// Function to perform login
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};


/////////////////////////////////////////// BOOK FUNCTION ////////////////////////////////////////////


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

// Function to request one book by ID
export const reqBookByID = async (id: string): Promise<Book> => {
  try {
    const response = await fetch(`${baseURL}/books/${id}`);
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
export const updateExistingBook = async (book: Book, id: string): Promise<Book> => {
  try {
    const response = await fetch(`${baseURL}/books/${id}`, {
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
export const deleteABook = async (id: string): Promise<string> => {
  try {
    const response = await fetch(`${baseURL}/books/${id}`, {
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


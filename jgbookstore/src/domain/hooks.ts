import { useState, useEffect, useCallback } from 'react';
import { Book } from '../utils/interfaces/Book';
import UseBooksReturn from '../utils/interfaces/UseBooksReturn';

type FetchState = "initial" | "loading" | "success" | "error";

// Base URL of the API
const baseURL: string = 'http://localhost:4730';


const parseLinkHeader = (header: string | null) => {
  if (!header) return {};
  const links: { [key: string]: string } = {};
  const parts = header.split(',');
  parts.forEach(part => {
    const section = part.split(';');
    if (section.length === 2) {
      const url = section[0].replace(/<(.*)>/, '$1').trim();
      const name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    }
  });
  return links;
};


export const useBooks = (page: number): UseBooksReturn => {
  const [books, setBooks] = useState<any[]>([]);
  const [state, setState] = useState<FetchState>('initial');
  const [error, setError] = useState<Error | null>(null);

  const [links, setLinks] = useState<{ [key: string]: string }>({});


  const fetchBooks = async (): Promise<any[]> => {
    const response = await fetch(`${baseURL}/books?_page=${page}&_limit=24`);


    const linkHeader = response.headers.get('Link');
    const parsedLinks = parseLinkHeader(linkHeader);
    setLinks(parsedLinks);


    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    return response.json();
  };


  const fetchAndSetBooks = useCallback(async () => {
    setState('loading');
    setError(null);
    try {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
      setState('success');
    } catch (err) {
      setError(err as Error);
      setState('error');
    }
  }, [page]);


  useEffect(() => {
    fetchAndSetBooks();
    const intervalId = setInterval(fetchAndSetBooks, 60000); // Refreshs every 60 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [fetchAndSetBooks]);

  return { books, state, error, refresh: fetchAndSetBooks, links};
};
import { useState, useEffect, useCallback } from 'react';
import { Book } from './Book';

type FetchState = "initial" | "loading" | "success" | "error";

interface UseBooksReturn {
    books: Book[];
    state: FetchState;
    error: Error | null;
    refresh: () => void;
    links: { [key: string]:string };
  }

  export default UseBooksReturn;
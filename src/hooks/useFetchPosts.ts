"use client";

import { useEffect, useState } from "react";

interface Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
}

const [posts, setPosts] = useState<Post[]>([]); // Określamy typ stanu
const [isRefreshing, setIsRefreshing] = useState(false); // Stan do zarządzania odświeżaniem

async function fetchData() {
  try {
    setIsRefreshing(true); // Ustawia stan odświeżania na true
    const res = await fetch("https://wordpressapi.eu/wp-json/wp/v2/posts/");
    const myResponse: Post[] = await res.json(); // Użyj interfejsu Post
    setPosts(myResponse); // Przypisz odpowiedź do stanu
  } catch (e) {
    console.log("Error!", e);
  } finally {
    setIsRefreshing(false); // Ustawia stan odświeżania na false, niezależnie od wyniku
  }
}

useEffect(() => {
  fetchData();
}, []);

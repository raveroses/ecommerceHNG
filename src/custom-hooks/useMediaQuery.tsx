"use client";
import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Update matches state
    const updateMatches = () => {
      setMatches(media.matches);
    };

    // Set initial value
    updateMatches();

    // Listen for changes
    const listener = () => updateMatches();
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]); // Remove 'matches' from dependency array

  return matches;
}

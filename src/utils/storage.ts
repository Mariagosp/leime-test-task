import { Meme } from "@/types/Meme";

const STORAGE_KEY = "memes";

export const getStoredMemes = (): Meme[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to parse memes from localStorage", e);
    return [];
  }
};

export const saveMemes = (memes: Meme[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memes));
};

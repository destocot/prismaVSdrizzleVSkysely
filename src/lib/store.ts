import { create } from "zustand";

type MdStoreState = {
  markdown: string;
  setMarkdown: (markdown: string) => void;
};

export const useMdStore = create<MdStoreState>((set) => ({
  markdown: "",
  setMarkdown: (markdown: string) => set({ markdown }),
}));

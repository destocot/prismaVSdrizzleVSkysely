import { create } from "zustand";

type MdStoreState = {
  markdown: string;
  setMarkdown: (markdown: string) => void;
  pending: boolean;
  isPending: (pending: boolean) => void;
};

export const useMdStore = create<MdStoreState>((set) => ({
  markdown: "",
  pending: false,
  setMarkdown: (markdown: string) => set({ markdown }),
  isPending: (pending: boolean) => set({ pending }),
}));

import { createContext } from "react";
import { ContextType } from "@/_types/types";
export const MyContext = createContext<null | ContextType>(null);

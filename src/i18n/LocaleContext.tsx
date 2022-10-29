import { createContext } from "react";
import LocaleService from "./LocaleService";
import { Messages } from "./messages";

export const LocaleContext = createContext<(messageId: keyof typeof Messages) => string>(LocaleService('eng'));
import { Messages } from "./messages";
import { translations } from "./translation";

const LocaleService = (locale: string = 'eng') => (messageId: keyof typeof Messages) => {
   return translations[messageId][locale];
}

export default LocaleService;


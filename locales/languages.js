import br from "./br.json";
import en from "./en.json";
import fr from "./fr.json";

const languages = {
  en: {
    translation: {
      ...en,
    },
  },
  br: {
    translation: {
      ...br,
    },
  },
  fr: {
    translation: {
      ...fr,
    },
  },
};

export default languages;

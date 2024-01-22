import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko"; // 한국어 설정
import "dayjs/locale/ja"; // 일본어 설정

const userLanguage = navigator.language.split("-")[0] || "en";

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.locale(userLanguage);

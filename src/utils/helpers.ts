export const cn = (...cNames: any): string =>
  cNames.filter(Boolean, String).join(' ');

export const createWrapperAndAppendToBody = (
  wrapperId: string,
  cn?: string
): HTMLDivElement => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  cn ? (wrapperElement.className = cn) : null;
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export const formatErrors = (error: { _errors: string[] }) =>
  error._errors.join(', ');

export const formatStrToId = (string: string) => string.split(' ').join('-');

export function getRandom<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export function getMapKey(map: Map<string, string>, searchKey: string) {
  for (const [key, value] of map.entries()) {
    if (value === searchKey) return key;
  }
  return undefined;
}

export const areSetsEqual = (a: Set<any>, b: Set<any>) =>
  a.size === b.size && [...a].every((value) => b.has(value));

// export function setFirstLinkAsNav({
//   category,
//   categoryLinks,
// }: SetFirstLinkAsNavProps) {
//   const navLink = navLinks.get().find(({ slug }) => slug === category);
//   navLink?.href && (navLink.href = categoryLinks.at(0)?.href || navLink.href);
// }

// export function getLinkDetail(category: string) {
//   return (
//     navLinks.get().find(({ slug }) => slug === category)?.href || `/${category}`
//   );
// }

// export function findDataByLang<T>(
//   data: T[],
//   lang: "ru" | "en",
//   key: "id" | "slug",
// ) {
//   return data.filter((item) => item?[key].split("/").at(0) === lang);
// }

const romanNumerals = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' },
];

export function toRoman(num: number) {
  let romanNumeral = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      romanNumeral += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return romanNumeral;
}

export function getAndroidLink(id: string) {
  return `market://details?id=${id}`;
}

export function getIOSLink(id: string) {
  return `itms-apps://itunes.apple.com/app/id${id}`;
}

export const makeAbsoluteURL = (url: string) => {
  // Регулярное выражение для проверки наличия протокола в начале строки
  const regex = /^(?:\w+:)?\/\/([^\/?#]+)/i;

  // Если ссылка не содержит протокол, добавляем "https://"
  if (!regex.test(url)) {
    url = `https://${url}`;
  }

  return url;
};

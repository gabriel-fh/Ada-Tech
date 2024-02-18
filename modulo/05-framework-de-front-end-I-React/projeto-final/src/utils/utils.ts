import unorm from "unorm";

export const getSlug = (text: string): string => {
  const noAccents = unorm.nfd(text).replace(/[\u0300-\u036f]/g, "");
  return noAccents.toLowerCase().split(" ").join("-");
};

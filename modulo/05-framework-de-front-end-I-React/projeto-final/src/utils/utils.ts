import unorm from "unorm";

export const getSlug = (text: string): string  => {
  const noAccents = unorm.nfd(text).replace(/[\u0300-\u036f]/g, "");
  return noAccents.toLowerCase().split(" ").join("-");
};

export const formatPrepTime = (prepTime: string): string => {
  const splitedPrepTime: string[] = prepTime.split(" ");
  let hour: number = 0;
  let min: number = 0;

  for (let i = 0; i < splitedPrepTime.length; i++) {
    let value: number = 0;
    !isNaN(parseInt(splitedPrepTime[i], 10)) &&
      (value = parseInt(splitedPrepTime[i], 10));
    const part: string = splitedPrepTime[i + 1];

    if (part && part.includes("hora")) {
      hour += value;
    } else if (part && part.includes("min")) {
      min += value;
    }
  }

  let formatedPrepTime: string = "";

  if (hour > 0) {
    formatedPrepTime += `${hour}h`;
  }

  if (min > 0) {
    formatedPrepTime += `${formatedPrepTime.length > 0 ? " e " : ""}${min}min`;
  }

  return formatedPrepTime;
};

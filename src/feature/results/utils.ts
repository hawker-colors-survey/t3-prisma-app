// export function filterByAge({ year }: FieldsStructure, selected: string) {
//   // split age range via -
//   const ages = selected.split("-");

//   if (ages.length === 1) {
//     const age: string = ages[0] || "";
//     return age === "any" || convertYearToAge(year) >= parseInt(age);
//   }

//   // if 2 elements, then its a range
//   const lowerBound = parseInt(ages[0] || "");
//   const upperBound = parseInt(ages[1] || "");
//   const age = convertYearToAge(year);
//   return age >= lowerBound && age <= upperBound;
// }

// export function filterByArea({ location }: FieldsStructure, selected: string) {
//   return selected === "any" || location === selected;
// }

// export function filterByFrequency(
//   { frequency }: FieldsStructure,
//   selected: string
// ) {
//   return selected === "any" || frequency === parseInt(selected);
// }

// export function filterByFood(
//   foodObject: FieldsStructure,
//   selectedFood: string
// ) {
//   return Object.keys(foodObject).find((key) => key === selectedFood);
// }

function convertYearToAge(year: string) {
  const currentYear = new Date().getFullYear();
  return currentYear - parseInt(year);
}

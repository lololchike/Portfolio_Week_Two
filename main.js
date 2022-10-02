const daysOfTheWeek = [
  "sunday",//0
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",//6
];
const maleDaysOfTheWeek = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Kaw",
  "Kofi",
  "Kwame",
];
const femaleDaysOfTheWeek = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
];

document.getElementById("btn").addEventListener("click", () => {
 const DOB=document.getElementById("dateOfBirth").value// 2022-10-02
const day = new Date(DOB).getDay();
  const gender = document.getElementById("gender").value;
  const DOB_Birth_Day = daysOfTheWeek[day];
  let name;
  if (gender === "1") {
    name = maleDaysOfTheWeek[day];
  } else if (gender === "2") {
    name = femaleDaysOfTheWeek[day];
  }
  
    
  document.getElementById(
    "output"
  ).innerHTML = ` Hello your Akan name is ${name} and birth date of the week is ${DOB_Birth_Day}`;
});



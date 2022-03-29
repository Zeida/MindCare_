const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// const data = {
//   labels: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
//   data: [[60, 60, 60, 30], [30, 30, 60, 30], [], [], [], [], []],
//   barColors: ["#F2989A", "#F27C38", "#74C4AB", "#BEDEFF"],
//   legend: ["C. emocional", "Gratitud", "Bien. físico", "Meditación"],
// };

const daydata = [
  {
    name: "Emocional",
    minutes: 5,
    color: "#F2989A",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "Personal",
    minutes: 5,
    color: "#74C4AB",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "Social",
    minutes: 10,
    color: "#90D0CF",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
];

const weekdata = [
  {
    name: "Emocional",
    minutes: 20,
    color: "#F2989A",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "Personal",
    minutes: 35,
    color: "#74C4AB",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "Social",
    minutes: 40,
    color: "#90D0CF",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
];

export {daydata, weekdata};
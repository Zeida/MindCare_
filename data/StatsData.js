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
    name: "h C. Emocional",
    minutes: 30,
    color: "#F2989A",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "h C. físico",
    minutes: 20,
    color: "#F27C38",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "h Meditando",
    minutes: 15,
    color: "#74C4AB",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "h Descansando",
    minutes: 10,
    color: "#90D0CF",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
];

const weekdata = [
  {
    name: "h C. Emocional",
    minutes: 100,
    color: "#F2989A",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "h C. físico",
    minutes: 50,
    color: "#F27C38",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "h Meditando",
    minutes: 65,
    color: "#74C4AB",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
  {
    name: "h Descansando",
    minutes: 90,
    color: "#90D0CF",
    legendFontColor: "#000000",
    legendFontSize: 10,
  },
];

export {daydata, weekdata};
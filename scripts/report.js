document.getElementById("cut").addEventListener("click",function(){
  deleteItem()
})
function deleteItem(){

window.location.href="report.html"

}
document.getElementById("sidebar")




const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
let data=JSON.parse(localStorage.getItem("userdata"))
console.log(data)

// graph part
const displayChart = (array,chartType)=>{
    
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: chartType,
      data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
          datasets: [{
              label: 'Number of minutes',
              data: array,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 109, 29, 0.6)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(150, 15, 41, 2)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          title: {
              display: true,
              text: 'Total time spent in a week'
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      } 
      
  });

}  

function pieChart(){
  showAllData(`pie`)
}   
function radarChart(){
  showAllData(`radar`)
}   

function lineChart(){
  showAllData(`line`)
}   

function barChart(){
  showAllData(`bar`)
}   

function doughnutChart(){
  showAllData(`doughnut`)
}   
// show data
const showAllData =(gg)=>{
  typeOfGraph = gg;
  
  document.getElementById("dashboard__container__graph").innerHTML = `
  <div class="dashboard__container__graph__controls">
      <button onclick="barChart()">Bar</button>
      <button onclick="pieChart()">Pie</button>
      <button onclick="lineChart()">Line</button>
      <button onclick="radarChart()">Radar</button>
      <button onclick="doughnutChart()">Doughnut</button>
  </div>
  <canvas id="myChart"></canvas>`

  const array = JSON.parse(localStorage.getItem("local"))
 
  //for total time per day in a week;
  
      let colSum = 0;
      let [rowMon,rowTue,rowWed,rowThu,rowFri,rowSat,rowSun] = [ 0, 0, 0, 0, 0, 0, 0] ;
      let html = "";
      array.map((item) => {
          colSum = Number(item.monday.time) + Number(item.tuesday.time) + Number(item.wednesday.time) + Number(item.thursday.time) + Number(item.friday.time) + Number(item.saturday.time) + + Number(item.sunday.time);
          rowMon = rowMon + Number(item.monday.time)
          rowTue = rowTue + Number(item.tuesday.time)
          rowWed = rowWed + Number(item.wednesday.time)
          rowThu = rowThu + Number(item.thursday.time)
          rowFri = rowFri + Number(item.friday.time)
          rowSat = rowSat + Number(item.saturday.time)
          rowSun = rowSun + Number(item.sunday.time)
      }) 
      const sumTotal = rowMon + rowTue + rowWed + rowThu + rowFri + rowSat + rowSun;
      const minutesPerWeek = [rowMon,rowTue,rowWed,rowThu,rowFri,rowSat,rowSun]  
      // document.getElementById("dashboard__stats__total__time").innerHTML = sumTotal+` Minutes`
      // document.getElementById("dashboard__stats__average__time").innerHTML = Math.floor(sumTotal/7) +` Minutes`;
      const weeklyDataReport = [["Monday",rowMon],["Tuesday",rowTue],["Wednesday",rowWed],["Thursday",rowThu],["Firday",rowFri],["Saturday",rowSat],["Sunday",rowSun]] 
      
      weeklyDataReport.sort((a,b) => a[1] - b[1])
      console.log(weeklyDataReport)
                  
          let minDay = weeklyDataReport[0][0]
          let minTime = weeklyDataReport[0][1]
           
          
          let maxDay = weeklyDataReport[6][0]
          let maxTime = weeklyDataReport[6][1]
        



      displayChart(minutesPerWeek,typeOfGraph)

      document.getElementById("dashboard__stats__unique").innerHTML = `
      <div>   
          <span>Total Time</span>
          <h2 id="dashboard__stats__total__time">${sumTotal} Min</h2>
      </div>
      <div>
          <span>Average Time</span>
          <h2 id="dashboard__stats__average__time">${Math.floor(sumTotal/7) +` Min`}</h2>
      </div>
    
      `
          
      const dashboardReport = document.getElementById("dashboard__stats__details");
      dashboardReport.innerHTML = `
      <div>
      <ul>
          <h3>Most</h3>
          <li>You have spent the most of your time on <b>${maxDay}</b></li>
          <li>The time spent is <b>${maxTime} Minutes</b> </li>
      </ul>
      </div>
      <div>
      <ul>
          <h3>Least</h3>
          <li>You have spent the least of your time on <b>${minDay}</b></li>
          <li>The time spent is <b>${minTime} Minutes </b> </li>
      </ul>
      </div>
      `

}
showAllData("bar");
import { Component, OnInit } from '@angular/core';
// import * as Chartist from 'chartist';
import * as Chart from 'chart.js';

// declare var $:any;
declare const google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  constructor() { }

  ngOnInit() {

    let map;
    let marker;
    const ISB = {lat: 33.738045, lng: 73.084488};
    map = new google.maps.Map(document.getElementById('map'), {
      center: ISB,
      zoom: 15
  });

    //https://www.iconsdb.com/icons/preview/red/bus-xxl.png
    var markerIcon = {
      url: 'https://www.freeiconspng.com/uploads/school-bus-icon-22.png',
      scaledSize: new google.maps.Size(80, 80),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(32,65),
      labelOrigin: new google.maps.Point(40,33)
    };
    marker = new google.maps.Marker({
      position: ISB,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: markerIcon,

    });

  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, {
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, {
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'App Users In differnt Regions Of World.'
      }
    }
  });

  //    var dataSales = {
  //   labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
  //   series: [
  //      [287, 385, 490, 562, 594, 626, 698, 895, 952],
  //     [67, 152, 193, 240, 387, 435, 535, 642, 744],
  //     [23, 113, 67, 108, 190, 239, 307, 410, 410]
  //   ]
  // };

  // var optionsSales = {
  //   low: 0,
  //   high: 1000,
  //   showArea: true,
  //   height: "245px",
  //   axisX: {
  //     showGrid: false,
  //   },
  //   lineSmooth: Chartist.Interpolation.simple({
  //     divisor: 3
  //   }),
  //   showLine: true,
  //   showPoint: false,
  // };

  // var responsiveSales: any[] = [
  //   ['screen and (max-width: 640px)', {
  //     axisX: {
  //       labelInterpolationFnc: function (value) {
  //         return value[0];
  //       }
  //     }
  //   }]
  // ];

  // new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


  // var data = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   series: [
  //     [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
  //     [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
  //   ]
  // };

  // var options = {
  //     seriesBarDistance: 10,
  //     axisX: {
  //         showGrid: false
  //     },
  //     height: "245px"
  // };

  // var responsiveOptions: any[] = [
  //   ['screen and (max-width: 640px)', {
  //     seriesBarDistance: 5,
  //     axisX: {
  //       labelInterpolationFnc: function (value) {
  //         return value[0];
  //       }
  //     }
  //   }]
  // ];

  // new Chartist.Line('#chartActivity', data, options, responsiveOptions);

  // var dataPreferences = {
  //     series: [
  //         [25, 30, 20, 25]
  //     ]
  // };

  // var optionsPreferences = {
  //     donut: true,
  //     donutWidth: 40,
  //     startAngle: 0,
  //     total: 100,
  //     showLabel: false,
  //     axisX: {
  //         showGrid: false
  //     }
  // };

  // new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

  // new Chartist.Pie('#chartPreferences', {
  //   labels: ['62%','32%','6%'],
  //   series: [62, 32, 6]
  // });


  }

}

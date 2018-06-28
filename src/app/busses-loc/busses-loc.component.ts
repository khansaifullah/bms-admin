import { Component, OnInit } from '@angular/core';
import { DriversService } from '../drivers/drivers.service';
import { Driver } from '../Models/Driver';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

declare const google: any;
@Component({
  selector: 'app-busses-loc',
  templateUrl: './busses-loc.component.html',
  styleUrls: ['./busses-loc.component.scss'],
  providers: [DriversService]
})
export class BussesLocComponent implements OnInit {
  sub: Subscription;
  drivers: Driver[] = [];
  driversLength: Number = 0;
  constructor(private driversService: DriversService) {
     this.sub = Observable.interval(30000)
    .subscribe((val) => {
      console.log('Update!');
      this.ngOnInit();
  });
  }
  ngOnInit() {
    let mapToUpdate;
    let marker;
    const ISB = {lat: 33.738045, lng: 73.084488};

    // https://www.iconsdb.com/icons/preview/red/bus-xxl.png
  const markerIcon = {
    url: 'https://www.freeiconspng.com/uploads/school-bus-icon-22.png',
    scaledSize: new google.maps.Size(80, 80),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(32, 65),
    labelOrigin: new google.maps.Point(40, 33)
  };
    this.driversService
    .getDrivers()
    .subscribe(
    u => {
      this.drivers = u;
      console.log ('drivers :' + u);
      this.driversLength = this.drivers.length;

  // Creating Marker For Buss/Driver
      if (this.driversLength > 0) {
        const tempPosMap = {
          lat: this.drivers[0].loc[1],
          lng: this.drivers[0].loc[0]
          };
          mapToUpdate = new google.maps.Map(document.getElementById('mapToUpdate'), {
          center: tempPosMap,
          zoom: 15
      });
        for (let d = 0; d < this.driversLength; d++) {
          if (this.drivers[d].loc) {
            console.log ('driver Lat : ' + d + this.drivers[d].loc[0]);
            console.log ('driver Long : ' + d + this.drivers[d].loc[1]);
            const tempPos = {lat: this.drivers[d].loc[1],
              lng: this.drivers[d].loc[0] };
            const driverName = this.drivers[d].name;
            console.log(this.drivers[d]._id + ' : ' + this.drivers[d].panic);
            if (this.drivers[d].panic === true) {
              console.log(this.drivers[d]._id + 'Is in Panic');
              const markerIconPanic = {
                url: 'https://www.iconsdb.com/icons/preview/red/bus-2-xxl.png',
                scaledSize: new google.maps.Size(80, 80),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(32, 65),
                labelOrigin: new google.maps.Point(40, 33)
              };
              marker = new google.maps.Marker({
                position: tempPos,
                map: mapToUpdate,
                title: driverName,
                // animation: google.maps.Animation.DROP,
                label:  {text: driverName, fontWeight: 'bold', color: 'black',  fontSize: '16px'},
                icon: markerIconPanic,
              });
            }else {
              marker = new google.maps.Marker({
                position: tempPos,
                map: mapToUpdate,
                title: driverName,
                // animation: google.maps.Animation.DROP,
                label:  {text: driverName, fontWeight: 'bold', color: 'black',  fontSize: '16px'},
                icon: markerIcon,
               //  labelOrigin: new google.maps.Point(11, 50),
               //  icon: {
               //   labelOrigin: new google.maps.Point(11, 50),
               //   url: 'default_marker.png',
               //   size: new google.maps.Size(22, 40),
               //   origin: new google.maps.Point(0, 0),
               //   anchor: new google.maps.Point(11, 40),
               // },
               //  icon: image
               //  labelClass: 'labels', // the CSS class for the label
               //  labelStyle: {opacity: 0.75}
              });

            }
          }
        }

      }
      }
  );

  }
}

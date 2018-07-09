import { FilterPipe } from './filter.pipe';
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

  searchText: string;
  selectedDriver: string;
  constructor(private driversService: DriversService) {
     this.sub = Observable.interval(90000)
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
    url: 'https://image.flaticon.com/icons/svg/0/622.svg',
    scaledSize: new google.maps.Size(80, 80),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(32, 65),
    labelOrigin: new google.maps.Point(40, 33)
  };
  let tempPosMap;
    this.driversService
    .getDrivers()
    .subscribe(
    u => {
      this.drivers = u;
      console.log ('drivers :' + u);
      this.driversLength = this.drivers.length;

  // Creating Marker For Buss/Driver
      if (this.driversLength > 0) {

        for (let t = 0; t < this.driversLength; t++) {

          if (this.drivers[t].loc) {
            tempPosMap = {
              lat: this.drivers[t].loc[0],
              lng: this.drivers[t].loc[1]
              };
              break;
          }
        }

          mapToUpdate = new google.maps.Map(document.getElementById('mapToUpdate'), {
          center: tempPosMap,
          zoom: 10
      });
        for (let d = 0; d < this.driversLength; d++) {
          if (this.drivers[d].loc) {
            console.log ('driver Lat : ' + d + this.drivers[d].loc[0]);
            console.log ('driver Long : ' + d + this.drivers[d].loc[1]);
            const tempPos = {lat: this.drivers[d].loc[0],
              lng: this.drivers[d].loc[1] };
            const driverName = this.drivers[d].name;
            console.log(this.drivers[d]._id + ' : ' + this.drivers[d].panic);
            if (this.drivers[d].panic === true) {
              console.log(this.drivers[d]._id + 'Is in Panic');
              const markerIconPanic = {
               //  url: 'https://www.iconsdb.com/icons/preview/red/bus-2-xxl.png',
                url: 'http://carpng.com/wp-content/uploads/full/red-bus-icon-2853-0.png',
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
                label:  {text: driverName, fontWeight: 'bold', color: 'green',  fontSize: '16px'},
                icon: markerIconPanic,
              });
            }else {
              marker = new google.maps.Marker({
                position: tempPos,
                map: mapToUpdate,
                title: driverName,
                // animation: google.maps.Animation.DROP,
                label:  {text: driverName, fontWeight: 'bold', color: 'green',  fontSize: '16px'},
                icon: markerIcon,
              });

            }
          }
        }

      }
      }
  );
  }

  chkDriverName() {
    console.log('Selected Driver: ' + this.selectedDriver);
    let driverPosToZoom = null;
    let mapToZoom;
    let selectedDriverMarker;
    let selectedDriverName;
    let urlIcon;

    for (let t = 0; t < this.driversLength; t++) {

      if (this.drivers[t]._id === this.selectedDriver) {
        if ( this.drivers[t].panic === true) {
          urlIcon =  'http://carpng.com/wp-content/uploads/full/red-bus-icon-2853-0.png';
        }else {
          urlIcon = 'https://image.flaticon.com/icons/svg/0/622.svg';
        }
        selectedDriverName = this.drivers[t].name;
        if (this.drivers[t].loc) {
          console.log('Selected Driver Lat ' +  this.drivers[t].loc[0]);
          console.log('Selected Driver Long ' +  this.drivers[t].loc[1]);
          driverPosToZoom = {
            lat: this.drivers[t].loc[0],
            lng: this.drivers[t].loc[1]
            };
             break;
        }
      }
    }
  if (driverPosToZoom !== null) {
    mapToZoom = new google.maps.Map(document.getElementById('mapToUpdate'), {
      center: driverPosToZoom,
      zoom: 17
  });
  const markerIcon = {
    url: urlIcon,
    scaledSize: new google.maps.Size(80, 80),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(32, 65),
    labelOrigin: new google.maps.Point(40, 33)
  };
  selectedDriverMarker = new google.maps.Marker({
    position: driverPosToZoom,
    map: mapToZoom,
    title: selectedDriverName,
    // animation: google.maps.Animation.DROP,
    label:  {text: selectedDriverName, fontWeight: 'bold', color: 'green',  fontSize: '16px'},
    icon: markerIcon,
  });
  }

  }
}

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapProvider {

  camera;
  markers: any[];
  userPosition;
  private markersId;

  constructor(public http: HttpClient) {
    this.markers = [];
    this.camera = {
      target: {
        lat: 1.178720,
        lng: -77.313249
      },
      zoom: 5,
      tilt: 0,
      bearing: 0
    };
    this.markersId = [];
    this.userPosition = null;
  }

  setCamera(camera){
    this.camera = camera;
  }

  setMarkers(newMarkers){
    newMarkers.forEach(value =>{
      if (this.markersId.indexOf(value.id) == -1){
        this.markers.push(value);
        this.markersId.push(value.id)
      }
    })
  }
}

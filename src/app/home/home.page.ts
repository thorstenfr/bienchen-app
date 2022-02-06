import { Component } from '@angular/core';
import { DataService, Message, Course } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  person = { name: '', country: ''};
  name: string;
  storageName: string;
  country: string;

  constructor(private data: DataService) {}
 
  /* Einen neuen Kurs hinzufügen */
  addCourse() {
    this.data.addCourse(this.name);
    this.saveCourses();
  }
  saveCourses() {
    /* Speichere alle Kursdaten */
    this.data.setObject('courses', this.getCourses());
  }
  setStorage() {
    /* Speichere alle Kursdaten */  
    this.data.setObject('setStorage', this.getMessages());
  }

  getStorage() {
    this.data.getString('name').then((data: any) => {
      if (data.value) {
        this.storageName = data.value;
    
    }
    });
    this.data.getObject('courses').then((data: any) => {
      this.person = data;
    });
  }



  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getCourses(): Course[] {
    return this.data.getCourses();
  }

}

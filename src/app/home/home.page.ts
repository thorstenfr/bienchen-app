import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { StorageService } from '../services/storage.service';

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

  constructor(private data: DataService,  private storage: StorageService) {}

  setStorage() {
    this.storage.setString('name', this.name);
    this.storage.setObject('person', {
      name: this.name,
      country: this.country
    });
    this.storage.setObject('person', this.getMessages());
  }


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}

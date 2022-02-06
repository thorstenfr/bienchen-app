import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

interface Comment {
  comment_text: string;
  comment_date: string;
}

interface GoodRating {
  rating_date: string;  
}

interface BadRating {
  rating_date: string;
} 

interface Pupil {
  pupilName : string;
  goodRatings : GoodRating[];
  badRatings: BadRating[]; 
  comments: Comment[];
  
}
export interface Course {
  title: string;
  creationDate: string;
  pupils: Pupil[];
}


@Injectable({
  providedIn: 'root'
})

export class DataService {
  public courses: Course[] = [
    {
      title: '2BFW2',
      creationDate: '6. Feb. 2022',
      pupils: []
    },
    {
      title: 'WGW11',
      creationDate: '2. Feb. 2022',
      pupils: []
    } 
  ];

  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor() { }


async setString(key: string, value: string) {
  await Storage.set({ key, value });
}

async getString(key: string): Promise<{ value: any }> {
  return (await Storage.get({ key }));
}


async setObject(key: string, value: any) {
  await Storage.set({ key, value: JSON.stringify(value) });
}

async getObject(key: string): Promise<{ value: any }> {
  const ret = await Storage.get({ key });
  return JSON.parse(ret.value);
}


async removeItem(key: string) {
  await Storage.remove({ key });
}

async clear() {
  await Storage.clear();
}

  public getMessages(): Message[] {
   // this.getObject('courses');
   
    return this.messages;
  }

  public getCourses(): Course[] {
    return this.courses;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
} 





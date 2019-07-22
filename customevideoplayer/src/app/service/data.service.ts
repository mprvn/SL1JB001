import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let playlist = [
            { 'id': 1, 'title': 'Sadhguru and Physics', 'url': 'https://www.youtube.com/watch?v=pAluQXDTM9g', 'status': 'added', 'approved': 1, 'likes': 22, 'unlike': 4, 'currentStatus': 'playing', 'exitplayprogress': 30 },
            { 'id': 2, 'title': 'Angular 6 Tutorial', 'url': 'https://www.youtube.com/watch?v=BoxuTR4ruUs', 'status': 'added', 'approved': 0, 'likes': 0, 'unlike': 0, 'currentStatus': 'paused', 'exitplayprogress': 0 },
            { 'id': 3, 'title': 'Nikon P900 83X Zoom', 'url': 'https://www.youtube.com/watch?v=m7kdx9b_Jvk', 'status': 'added', 'approved': 1, 'likes': 10, 'unlike': 1, 'currentStatus': 'paused', 'exitplayprogress': 80 },
            { 'id': 3, 'title': 'Understanding Javascript', 'url': 'https://www.youtube.com/watch?v=Bv_5Zv5c-Ts', 'status': 'edited', 'approved': 0, 'likes': 25, 'unlike': 5, 'currentStatus': 'stopped', 'exitplayprogress': 80 }
        ];

        return { playlist };
    }
}

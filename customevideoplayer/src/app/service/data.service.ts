import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let playlist = [
            { 'id': 0, 'title': 'Sadhguru and Physics', 'url': 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', 'status': 'added', 'approved': 1, 'likes': 22, 'unlike': 4, 'currentStatus': 'playing', 'exitplayprogress': 30 },
            { 'id': 1, 'title': 'Angular 6 Tutorial', 'url': 'https://www.w3schools.com/tags/movie.mp4', 'status': 'added', 'approved': 0, 'likes': 0, 'unlike': 0, 'currentStatus': 'paused', 'exitplayprogress': 0 },
            { 'id': 2, 'title': 'Nikon P900 83X Zoom', 'url': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', 'status': 'added', 'approved': 1, 'likes': 10, 'unlike': 1, 'currentStatus': 'paused', 'exitplayprogress': 80 },
            { 'id': 3, 'title': 'Understanding Javascript', 'url': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 'status': 'edited', 'approved': 0, 'likes': 25, 'unlike': 5, 'currentStatus': 'stopped', 'exitplayprogress': 80 }
        ];

        return { playlist };
    }
}

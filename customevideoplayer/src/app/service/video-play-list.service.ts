import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayListService {
  SERVER_URL = 'http://localhost:4200/api/';
  constructor(private httpClient: HttpClient) { }

  public getPlaylist() {
       return this.httpClient.get(this.SERVER_URL + 'playlist');
  }

  public getvideo(videoId: number) {
       return this.httpClient.get(`${this.SERVER_URL + 'playlist'}/${videoId}`);
  }
  public createVideo(video: {id: number,
                                title: string,
                                url: string,
                                status: string,
                                approved: number,
                                likes: number,
                                unlike: number,
                                currentStatus: string,
                                exitplayprogress: number }) {
      return this.httpClient.post(`${this.SERVER_URL + 'playlist'}`, video)
  }

  public deleteVideo(videoId: number) {
      return this.httpClient.delete(`${this.SERVER_URL + 'playlist'}/${videoId}`)
  }
  public updateVideo(video: {id: number,
                                title: string,
                                url: string,
                                status: string,
                                approved: number,
                                likes: number,
                                unlike: number,
                                currentStatus: string,
                                exitplayprogress: number }) {
      return this.httpClient.put(`${this.SERVER_URL + 'playlist'}/${video.id}`, video)
  }
}

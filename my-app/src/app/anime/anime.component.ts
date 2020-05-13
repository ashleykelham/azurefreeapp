import { Component, OnInit, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  anime: Anime[];
  private http: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient) {
     this.http = http;
     this.baseUrl = environment.baseUrl;
     console.info(this.baseUrl);
     this.http.get<Anime[]>(this.baseUrl + "api/HttpTriggerAnime").subscribe(result => {
       this.anime = result;
       console.log("retrieved: " + this.anime);
     }, error => console.error(error));
  }

  ngOnInit() {

  }
}

interface Anime {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  description: string;
}

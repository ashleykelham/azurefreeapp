import { Component, OnInit, Inject  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  anime: Anime[];
  filteredAnime: Anime[];
  _animeQuery: string;
  private http: HttpClient;
  private url: string;
  private httpOptions: HttpHeaders;

  constructor(http: HttpClient) {
     this.http = http;
     this.url = environment.apiUrl;
     this.httpOptions = new HttpHeaders({
        'Ocp-Apim-Subscription-Key': `${environment.apiKey}`
      });
  }

  ngOnInit() {
    this.http.get<Anime[]>(this.url, { headers: this.httpOptions }).subscribe(
      result => {
        this.anime = result;
        this.filteredAnime = this.filterAnime(this._animeQuery);
        console.log("retrieved: " + this.anime);
      }, 
      error => console.error(error));
  }

  get animeQuery(): string {
    return this._animeQuery;
  }
  set animeQuery(value: string) {
    this._animeQuery = value;
    this.filteredAnime = this.filterAnime(value);
  }

  filterAnime(filter: string): Anime[]{
    var output = this.anime.sort((a, b) => a.name.localeCompare(b.name));
    if(!filter)
      return output;
      
    filter = filter.toLowerCase();
    return output.filter(a => a.name.toLowerCase().indexOf(filter) !== -1);
  }
}

interface Anime {
  id: number;
  name: string;
  link: string;
  imageUrl: string;
  description: string;
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl: string = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  // Método para buscar músicas
  searchTracks(query: string) {
    const url = `${this.apiUrl}/search?q=${query}&type=track`;
    return this.http.get(url);
  }
}

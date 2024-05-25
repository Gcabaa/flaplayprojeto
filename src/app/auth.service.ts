import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private clientId: string = 'SEU_CLIENT_ID';
  private redirectUri: string = 'SUA_URI_DE_REDIRECIONAMENTO'; // Por exemplo, 'http://localhost:8100/callback'
  private spotifyAuthUrl: string = 'https://accounts.spotify.com/authorize';

  constructor(private http: HttpClient) { }

  login() {
    const authUrl = `${this.spotifyAuthUrl}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&scope=user-read-private%20user-read-email`;
    window.location.href = authUrl;
  }

  exchangeCodeForToken(code: string) {
    const tokenUrl = 'https://accounts.spotify.com/api/token';

    // Constrói o corpo da solicitação usando HttpParams
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId);

    // Realiza a solicitação POST para trocar o código de autorização por um token de acesso
    return this.http.post(tokenUrl, body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }
}

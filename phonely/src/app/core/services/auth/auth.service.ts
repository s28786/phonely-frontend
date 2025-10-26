import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import {LoginDto, RegisterDto} from './dtos/auth.post.dto';
import {StrapiUser} from './dtos/strapi-user.get.dto';
import {AuthResponseDto} from './dtos/auth.get.dto';
import {environment} from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {}

  login(dto: LoginDto): Observable<StrapiUser> {
    return this.http.post<AuthResponseDto>(`${environment.strapiUrl}/api/auth/local`, dto).pipe(
      tap(res => {
        this.tokenService.setToken(res.jwt);
        this.tokenService.setUser(res.user);
      }),
      map(res => res.user)
    );
  }

  register(dto: RegisterDto): Observable<StrapiUser> {
    return this.http.post<AuthResponseDto>(`${environment.strapiUrl}/api/auth/local/register`, dto).pipe(
      tap(res => {
        this.tokenService.setToken(res.jwt);
        this.tokenService.setUser(res.user);
      }),
      map(res => res.user)
    );
  }

  logout(): void {
    this.tokenService.clear();
    // Optionally call server logout endpoints if configured
  }

  getCurrentUser(): StrapiUser | null {
    return this.tokenService.getUser();
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }
}

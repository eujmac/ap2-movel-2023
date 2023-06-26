import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CharactersService {
    constructor(public http: HttpClient) { }

    public getAllCharacters(page = 1,) {
        let endpoint = `https://rickandmortyapi.com/api/character/?page=${page}`;
        return this.http.get(endpoint);
    }
}

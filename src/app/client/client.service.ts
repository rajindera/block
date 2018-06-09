import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';


@Injectable()
export class ClientServie {
    API_BASE = 'https://www.mocky.io/v2/5b14d3ee3200006f00b89f96';

    constructor(private http: Http) { }

    loadClients() {
        return this.http.get(`${this.API_BASE}`)
        .pipe(
            map(data => data.json())),
            catchError(this.errorHandler)
    }

    errorHandler(error) {
        console.error('Error Occurred in Client Service');
        return Observable.throw(error);
    }
}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Agendamento } from './agendamento.model';

@Injectable()
export class AgendamentoService {
    url = 'api/agendamento';
    constructor(private http: Http) { }
    listarAgendamentos(): Observable<Agendamento[]> {
        return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
    }
    adicioarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, agendamento, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    }
    listarAgendamentoComPromise(): Promise<Agendamento[]> {
        return this.http.get(this.url).toPromise().then(this.extractData).catch(this.handleErrorPromise);
    }
    adicioarAgendamentoComPromise(agendamento: Agendamento): Promise<Agendamento> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, agendamento, options).toPromise()
                    .then(this.extractData)
                    .catch(this.handleErrorPromise);
    }
    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}

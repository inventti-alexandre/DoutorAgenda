import 'rxjs/add/operator/map';
import { DataService } from '../services/dataService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MedicoService {
    constructor(
        private _dataService: DataService) {

    }
    public listarMedicos() {
        return this._dataService.getAll<Observable<any[]>>();
    }
    public listarColunasMedico(): string[] {
        return ['Nome', 'CRM', 'Especialidade'];
    }
}

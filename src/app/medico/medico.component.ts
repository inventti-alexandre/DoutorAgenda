import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-medico-component',
    templateUrl: './medico.component.html'
})

export class MedicoComponent implements OnInit {

    public message: string;
    public medicos: Observable<any[]>;
    public colunas: string[];
    constructor(
        private _medicoService: MedicoService) {
        this.message = 'Selecione o médico';
    }

    ngOnInit() {
        this._medicoService
            .listarMedicos()
            .subscribe((data: any) => this.medicos = data);

            this.colunas = this._medicoService
                            .listarColunasMedico();
    }
}

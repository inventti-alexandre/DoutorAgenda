import { Agendamento } from '../agendamento/agendamento.model';

export interface Paciente {
    Id: number;
    Nome: string;
    Cpf: string;
    Agendamentos: Agendamento[];
}

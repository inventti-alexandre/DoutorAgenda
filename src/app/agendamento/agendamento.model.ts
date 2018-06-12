import { Medico } from '../medico/medico.model';
import { Paciente } from '../paciente/paciente.model';

export interface Agendamento {
    Id: number;
    Medico: Medico;
    DataHoraConsulta: string ;
    Paciente: Paciente;
}

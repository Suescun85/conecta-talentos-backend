import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';

@Injectable()
export class EstudiantesService {
    private estudiantes: Estudiante[] = [];
    
    obtenerTodosEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    registrarEstudiante(estudiante:Estudiante): void {
        const existe: Estudiante = this.estudiantes.find(est => est.email == estudiante.email );
        if(existe){
            console.log('El estudiante ya ha sido registrado');
        }else {
            estudiante.id = this.estudiantes.length + 1;
            this.estudiantes.push(estudiante);
        }

    }

    obtenerEstudianteId(id:number): Estudiante {
        
        for(let i: number = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == id){
                return this.estudiantes[i];
            }
        }
        return null;
    }

    borrarEstudiantePorId(id:number): void{
        for(let i: number = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].id == id){
                this.estudiantes.splice(i,1);
            }
        }
    }

}

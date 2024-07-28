import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
    constructor(private readonly servicio:EstudiantesService){}

    @Post()
    registrarEstudiante(@Body() estudiante:Estudiante): void {
         this.servicio.registrarEstudiante(estudiante); 
    }

    @Get(':id')
    obtenerEstudianteId(@Param('id') id: number): Estudiante {
         return this.servicio.obtenerEstudianteId(id);
    } 

    @Get()
    obtenerTodosEstudiantes(): Estudiante[] {
        return this.servicio.obtenerTodosEstudiantes();
    }

    @Delete(':id')
    borrarEstudiantePorId(@Param('id') id: number) {
        this.servicio.borrarEstudiantePorId(id);
    }





}

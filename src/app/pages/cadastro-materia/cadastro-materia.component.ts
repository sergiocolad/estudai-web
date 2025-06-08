import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-cadastro-materia',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule,],
  templateUrl: './cadastro-materia.component.html',
  styleUrl: './cadastro-materia.component.scss'
})

export class CadastroMateriaComponent {
  materiaForm: FormGroup;
  materias: string[] = [];

  constructor(private fb: FormBuilder) {
    this.materiaForm = this.fb.group({
      nome: ['', Validators.required],
    });
    this.carregarMateriasDeLocalStorage();
  }

  adicionarMateria() {
    if (this.materiaForm.valid) {
      const nomeMateria = this.materiaForm.value.nome.trim();

      if (nomeMateria && !this.materias.includes(nomeMateria)) {
        this.materias.push(nomeMateria);
        this.salvarMateriasEmLocalStorage();
        this.materiaForm.reset();
      } else {
        alert('Matéria já cadastrada ou inválida.');
      }
    }
  }

  salvarMateriasEmLocalStorage() {
    localStorage.setItem('materias', JSON.stringify(this.materias));
  }

  carregarMateriasDeLocalStorage() {
    const materiasSalvas = localStorage.getItem('materias');
    if (materiasSalvas) {
      this.materias = JSON.parse(materiasSalvas);
    } else {
      this.materias = [];
    }
  }

  removerMateria(index: number) {
    this.materias.splice(index, 1);
    this.salvarMateriasEmLocalStorage();
  }
}

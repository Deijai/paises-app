import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();

  public debounce: Subject<string> = new Subject();
  public pesquisa: string = '';
  @Input() placeholder: string  = '';

  public formPesquisa: FormGroup = this.fb.group({
    pesquisa: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  public pesquisarEmitter() {
    console.log(this.formPesquisa.value instanceof Object);

    this.pesquisa = this.formPesquisa.value as string;
    this.onEnter.emit(this.pesquisa);
  }

  public pressTecla(event: any) {
    const valor = event.target.value;
    this.debounce.next(valor);
  }
}

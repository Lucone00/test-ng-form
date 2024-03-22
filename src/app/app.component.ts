import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-ng-form';

  form!: FormGroup;
  languageControl: FormControl = new FormControl('italiano');

  constructor(private fb: FormBuilder, private translateService: TranslateService) {}

  ngOnInit(): void {
    this.createForm();
    this.subscribeToFormChanges();
  }

  createForm(): void {
    this.form = this.fb.group({
      currency: ['', Validators.required],
      choice: ['', Validators.required],
      date: ['', Validators.required],
      tool: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      total: ['', Validators.required],
    });
  }

  subscribeToFormChanges(): void {
    this.form.get('quantity')?.valueChanges.subscribe(() => {
      this.updateTotal();
    });

    this.form.get('price')?.valueChanges.subscribe(() => {
      this.updateTotal();
    });
  }

  updateTotal(): void {
    const quantity = this.form.get('quantity')?.value || 0;
    const price = this.form.get('price')?.value || 0;
    const total = quantity * price;
    this.form.patchValue({ total });
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.languageControl.value);
  }

  translate(key: string): string {
    return this.translateService.translate(key, this.languageControl.value);
  }
  
}

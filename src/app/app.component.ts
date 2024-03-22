import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-ng-form';

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      currency: ['', Validators.required],
      choice: ['', Validators.required],
      date: ['', Validators.required],
      tool: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  calculateTotal(): number {
    const quantity = this.form.get('quantity')?.value ?? 0;
    const price = this.form.get('price')?.value ?? 0;
    return quantity * price;
  }

  onSubmit() {
    console.log('Form submitted');
    console.log(this.form.value);
  }
}

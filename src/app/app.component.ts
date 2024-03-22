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
    console.log('Form submitted');
    console.log(this.form.value);
  }
}

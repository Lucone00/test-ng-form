import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from './services/translate.service';
import { FormSubmitService } from './services/form-submit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-ng-form';

  form!: FormGroup;
  languageControl: FormControl = new FormControl('italiano');
  private formSubmitSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private formSubmitService: FormSubmitService
  ) {}

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
      quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      price: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,4})?$/)],
      ],
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
    if (this.form.invalid) {
      return;
    }

    const formData = this.form.value;
    this.formSubmitSubscription = this.formSubmitService
      .submitFormData(formData)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.form.reset();
        },
        error: (error) => {
          console.error("Errore durante l'invio dei dati:", error);
        },
      });
  }

  translate(key: string): string {
    return this.translateService.translate(key, this.languageControl.value);
  }

  ngOnDestroy(): void {
    if (this.formSubmitSubscription) {
      this.formSubmitSubscription.unsubscribe();
    }
  }
}

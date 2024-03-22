import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  public translation: { [key: string]: any } = {
    italiano: {
      language: 'Lingua',
      italian: 'Italiano',
      english: 'Inglese',
      currencyLabel: 'Valuta del portafoglio',
      choiceLabel: 'Tipo causale',
      dateLabel: 'Data operazione',
      toolLabel: 'Strumento',
      quantityLabel: 'Quantità',
      priceLabel: 'Prezzo',
      totalLabel: 'Importo',
      submitButton: 'Inserisci',
      currencyPlaceholder: 'Seleziona una valuta',
      choicePlaceholder: 'Scegli tipo causale',
      purchase: 'Acquisto',
      sale: 'Vendita',
      requiredField: 'Il campo è obbligatorio',
      numericDecimalError: 'Puoi inserire un massimo di 4 decimali',
      numericIntegerError: 'Puoi inserire soltanto numeri interi',
    },
    inglese: {
      language: 'Language',
      italian: 'Italian',
      english: 'English',
      currencyLabel: 'Currency',
      choiceLabel: 'Cause Type',
      dateLabel: 'Operation Date',
      toolLabel: 'Tool',
      quantityLabel: 'Quantity',
      priceLabel: 'Price',
      totalLabel: 'Amount',
      submitButton: 'Submit',
      currencyPlaceholder: 'Select a currency',
      choicePlaceholder: 'Choose cause type',
      purchase: 'Purchase',
      sale: 'Sale',
      requiredField: 'Required field',
      numericDecimalError: 'You can enter a maximum of 4 decimals',
      numericIntegerError: 'You can only insert integers',
    },
  };

  constructor() {}

  translate(key: string, language: string): string {
    return this.translation[language][key];
  }
}

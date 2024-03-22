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
      acquisto: 'Acquisto',
      vendita: 'Vendita',
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
      acquisto: 'Purchase',
      vendita: 'Sale',
    },
  };

  constructor() {}

  translate(key: string, language: string): string {
    return this.translation[language][key];
  }
}

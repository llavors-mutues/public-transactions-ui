import { html } from 'lit-html';
import { Card } from 'scoped-material-components/mwc-card';
import { TransactionList } from './transaction-list';
import { BaseElement, connect } from './utils/base-element';
import { sharedStyles } from './utils/sharedStyles';

export abstract class MyBalance extends BaseElement {
  render() {
    return html`
      <div class="column center-content" style="flex: 1;">
        <span style="font-size: 24px;">
          ${this.transactorStore.myBalance} credits
        </span>
        <mwc-card style="width: auto; flex: 1;">
          <transaction-list></transaction-list>
        </mwc-card>
      </div>
    `;
  }

  static get styles() {
    return sharedStyles;
  }

  getScopedElements() {
    return {
      'transaction-list': connect(TransactionList, this.transactorStore),
      'mwc-card': Card,
    };
  }
}
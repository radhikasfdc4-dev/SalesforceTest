import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountListController.getAccounts';

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Type', fieldName: 'Type', type: 'text' },
    { label: 'City', fieldName: 'BillingCity', type: 'text' }
];

export default class AccountListView extends LightningElement {
    columns = COLUMNS;
    accounts;
    error;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }
}

import { LightningElement , wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
const COLUMNS = [
    { label: 'Contact First Name', fieldName: FirstName.fieldApiName, type: 'text' },
    { label: 'Contact Last Name', fieldName: LastName.fieldApiName, type: 'text' },
    { label: 'Contact Email', fieldName: Email.fieldApiName, type: 'email' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
}
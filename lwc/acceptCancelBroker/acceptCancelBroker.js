import { LightningElement, api, track } from 'lwc';

export default class AcceptCancelBroker extends LightningElement {
    
    @track showModal = false;
    
    @api show() {
        console.log('show');
        this.showModal = true;
    }

    @api hide() {
        console.log('hide');
        this.showModal = false;
    }

    handleAccept(){
        console.log('handleAccept');
        this.hide();
    }

    handleCancel() {
        //var selectedRowsIds = [];
        console.log('handleCancel');
        this.hide();
        const selectEvent = new CustomEvent('unselectbroker');
        this.dispatchEvent(selectEvent);
        //this.template.querySelector('lightning-datatable').selectedRows = selectedRowsIds;
    }
}
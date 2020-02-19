import { Component, Input, EventEmitter, Output } from '@angular/core';


@ Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent{
    @ Input() message: string;
    @ Output() Close = new EventEmitter< void>();

    onClose(){
        this.Close.emit();
    }
}

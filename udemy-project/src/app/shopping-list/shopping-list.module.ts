import { LoggingService } from './../logging.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShoppingListComponent} from './shopping-list.component';
import { SharedModule } from './../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';



@ NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],

    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent }
        ]),
        SharedModule
    ],
    // providers: [LoggingService]
})
export class ShoppingListModule {

}
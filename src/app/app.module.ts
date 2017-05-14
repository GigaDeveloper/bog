import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdDialogModule, MdInputModule, MdSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CalendarModule } from 'primeng/primeng';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { ProductsComponent } from './components/products/products.component';
import { MainService } from './services/main.service';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { SearchComponent } from './components/search/search.component';
import { FilterByIdNumberPipe } from './pipe/filter-by-id-number.pipe';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    PageNotFoundComponent,
    ContactsComponent,
    AddressesComponent,
    ProductsComponent,
    ConfirmComponent,
    SearchComponent,
    FilterByIdNumberPipe,
    CustomerDetailsComponent
  ],
  entryComponents: [
    ConfirmComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdDialogModule,
    CalendarModule,
    FlashMessagesModule,
    Ng2OrderModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

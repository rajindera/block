import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Client } from '../../models';
import { AppState } from '../../models/appState';
import * as clientAcitons from "./../../actions/client.actions";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Observable<Client[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadCompanies();
    this.clients = this.store.select(state => state.clients.clients);
  }
  
  loadCompanies() {
    this.store.dispatch(new clientAcitons.LoadClientsAction());
  }
  }




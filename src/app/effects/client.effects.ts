import { Injectable } from "@angular/core";
import { Actions, Effect  } from "@ngrx/effects";
import { Action, Store  } from "@ngrx/store";
import {map, switchMap, catchError} from 'rxjs/operators';
import {observable, of} from 'rxjs';

import { ClientServie } from "../client/client.service";
import * as clientActions from "./../actions/client.actions";
import { Client } from "../models/client";

@Injectable()
export class ClientEffects {
    constructor(private action: Actions, private clientService: ClientServie) {
    }

    // @Effect()
    //     loadClients = this.action
    //     .ofType(clientActions.LOAD_CLIENTS)
    //     .pipe(
    //         switchMap(() => 
    //         this.clientService.loadClients())
      
    //         )
}
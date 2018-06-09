import { Action } from "@ngrx/store";
import { Client } from "../models";

export const LOAD_CLIENTS = 'LOAD_CLIENTS';
export const LOAD_CLIENTS_SUCCESS = 'LOAD_CLIENTS_SUCCESS';

export class LoadClientsAction implements Action {
    readonly type = LOAD_CLIENTS;

    constructor() { }
}

export class LoadClientsSuccessAction implements Action {
    readonly type = LOAD_CLIENTS_SUCCESS;

    constructor(public payload: Client[]) { }
}

export type ClientActions
    = LoadClientsAction
    | LoadClientsSuccessAction

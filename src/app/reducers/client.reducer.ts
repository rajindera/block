import { Client } from "../models";
import * as fromClients from "./../actions/client.actions";

export interface State {
    clients: Client[];
};

const initialState: State = {
    clients: []
};

export function clientReducer(state = initialState, action: fromClients.ClientActions): State {
    switch (action.type) {
        case fromClients.LOAD_CLIENTS_SUCCESS: {
            return state = {
                clients: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
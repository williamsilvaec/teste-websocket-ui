import {environment} from "../environments/environment";

/*var SockJs = require('sockjs-client');
var Stomp = require("stompjs");*/

// @ts-ignore
import * as SockJS from 'sockjs-client';
// @ts-ignore
import * as Stomp from 'stompjs';
import {Injectable} from "@angular/core";

@Injectable()
export class WebSocketService {

  public conectar() {
    let socket = new SockJS(`${environment.api}/socket`);
    let stompClient = Stomp.over(socket);
    return stompClient;
  }

}

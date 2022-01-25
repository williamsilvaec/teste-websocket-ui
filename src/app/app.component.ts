import {Component} from '@angular/core';
import {WebSocketService} from "./web-socket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-websocket-ui';
  notificacoes = 0;

  constructor(private webSocketService: WebSocketService) {
    let stompClient = this.webSocketService.conectar();

    stompClient.connect({}, (frame: any) => {
      stompClient.subscribe('/topic/notificacao', (notificacao: any) => {
        this.notificacoes = JSON.parse(notificacao.body).contador;
      });

    });

  }
}

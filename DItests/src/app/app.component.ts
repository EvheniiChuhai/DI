import {Component, OnInit}                 from '@angular/core';
import {WithoutInjectableDecoratorService} from "./without-injectable-decorator.service";
import {WithInjectableDecoratorService}    from "./with-injectable-decorator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WithoutInjectableDecoratorService, WithInjectableDecoratorService],
})
export class AppComponent  {
  title = 'DItests';
  constructor(private withInjectableDecoratorService: WithInjectableDecoratorService,) {

  }
}

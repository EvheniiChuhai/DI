import { Injectable }                      from '@angular/core';
import {WithoutInjectableDecoratorService} from "./without-injectable-decorator.service";

@Injectable(
)
export class WithInjectableDecoratorService {

  constructor(private withOutDecoratorService: WithoutInjectableDecoratorService) {
    this.withOutDecoratorService.sayHello();
  }
}

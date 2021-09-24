import { TestBed } from '@angular/core/testing';

import { AppPedidosService } from './app-pedidos.service';

describe('AppPedidosService', () => {
  let service: AppPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

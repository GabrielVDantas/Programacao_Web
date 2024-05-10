import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioModuloComponent } from './usuario-modulo.component';

describe('UsuarioModuloComponent', () => {
  let component: UsuarioModuloComponent;
  let fixture: ComponentFixture<UsuarioModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioModuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

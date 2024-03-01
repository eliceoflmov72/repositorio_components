import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// Es importante que este componente HTTP sea importado en la configuración
// El servicio podrá consultar el tipo de rutas con el protocolo http
// Cunado se van a invocar apis y servicios siempre se tiene que exportar este componente
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient()]
};

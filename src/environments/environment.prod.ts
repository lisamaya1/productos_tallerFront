const apiUrl = import.meta.env['NG_APP_API_URL'] ?? 'http://localhost:8080/api/productos';

export const environment = {
  production: true,
  apiUrl
};


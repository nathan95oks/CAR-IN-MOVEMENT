import ejecutarComandos from './simulador.js'; 

describe('Simulador de Autitos', () => {
  test('Debe devolver la posición final correcta para el ejemplo 1', () => {
    expect(ejecutarComandos('5,5/1,2N/IAIAIAIAA')).toBe('1,3N');
  });
});

test('Debe devolver la posición final correcta para el ejemplo 2', () => {
  expect(ejecutarComandos('5,5/3,3E/AADAADADDA')).toBe('5,1E');
});
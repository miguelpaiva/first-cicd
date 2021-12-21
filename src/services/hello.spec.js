const { sayHello } = require('./hello');

describe('Say hello tests', () => {
  it('Should say Hello CI/CD', () => {
    const response = sayHello();
    expect(response).toBe('Hello CI/CD!');
  });

  it('Should say Hello Miguel', () => {
    const response = sayHello('Miguel');
    expect(response).toBe('Hello Miguel');
  });
});

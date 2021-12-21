function sayHello(name = '') {
  return `Hello ${name ? name : 'CI/CD!'}`;
}

module.exports = { sayHello };

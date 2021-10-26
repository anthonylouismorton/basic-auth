'use strict'

const {db} = require('../lib/model');
const supertest = require('supertest');
const app = require('../lib/server.js');
const request = supertest(app.app);

beforeAll(async () => {
  await db.sync();
})

afterAll(async () => {
  await db.drop();
})

describe('Does the middleware function (send it a basic header)', async() => {
  it('should send ')
})
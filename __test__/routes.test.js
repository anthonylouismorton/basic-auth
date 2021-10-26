'use strict'

const {db} = require('../lib/model');
const supertest = require('supertest');
const app = require('../lib/server.js');
const { response } = require('express');
const request = supertest(app.app);

beforeAll(async () => {
  await db.sync();
})

afterAll(async () => {
  await db.drop();
})

describe('POST to /signup to create a new user', () => {
  it('Should create a new user to the dataBase', async () => {
    const response = await request.post('/signup').send({
      username: 'Anthony',
      password: 'password'
    })
    expect(response.status).toBe(201);
    expect(response.body.username).toEqual('Anthony')
  });

})

describe('POST to /signin to login as a user (use basic auth)', () => {
  it('Should signin a user', async () => {
  
    const response = await request.post('/signin').send('john foo')
    expect(response.status).toBe(200);
  });
})
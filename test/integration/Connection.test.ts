import { PrismaClient } from '@prisma/client'
import PrismaPromiseAdapter from '../../source/infra/database/PrismaPromiseAdapter';

test("Must be connection database prisma", async function () {
  const prisma = new PrismaClient()
  const connection = prisma.$connect;
  expect(connection).toBeTruthy();
});

test("Must be return data in item", async function () {
  const  data = new PrismaPromiseAdapter();
  expect(data.findAll()).toBeTruthy();
});


import { PrismaClient } from '@prisma/client'

test("Must be connection database prisma", async function () {
  const prisma = new PrismaClient()
  const itemsData = await prisma.item.findMany()
  expect(itemsData).toBeTruthy();
});
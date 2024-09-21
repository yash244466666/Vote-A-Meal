import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  // Create Admin User
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    throw new Error('Admin credentials are not set in the environment variables');
  }

  const hashedPassword = bcrypt.hashSync(adminPassword, 10);
  const admin = await prisma.admin.create({
    data: {
      username: adminUsername,
      password: hashedPassword,
    },
  });
  
  // Create Restaurants
  const restaurant1 = await prisma.restaurant.create({
    data: {
      id: 'fe1992e8-1489-4533-b2b5-f33b2657ce4a',
      name: 'Restaurant Name1',
    },
  });

  const restaurant2 = await prisma.restaurant.create({
    data: {
      id: '54f9e407-d9b4-4537-b0cb-6f44ca4c3614',
      name: 'Restaurant Name2',
    },
  });

  const restaurant3 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      name: 'Restaurant Name3',
    },
  });

  // Create Food Packs
  const foodPack1 = await prisma.foodPack.create({
    data: {
      id: 'dddb634b-a62f-42dc-a7b3-d99796d985f6',
      name: 'Food Pack 1',
      price: 10.99,
      restaurantId: restaurant1.id,
    },
  });

  const foodPack2 = await prisma.foodPack.create({
    data: {
      id: '5e2e0c89-ccd4-4e55-ab89-652fa35a6cf3',
      name: 'Food Pack 2',
      price: 12.99,
      restaurantId: restaurant2.id,
    },
  });

  const foodPack3 = await prisma.foodPack.create({
    data: {
      id: '6f7e8d9a-bcde-4f12-3456-7890abcdef12',
      name: 'Food Pack 3',
      price: 15.99,
      restaurantId: restaurant3.id,
    },
  });

  const foodPack4 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuvwx123',
      name: 'Food Pack 4',
      price: 8.99,
      restaurantId: restaurant1.id,
    },
  });

  // Create Employees
  const employee1 = await prisma.employee.create({
    data: {
      id: '3a218741-690d-4fbf-b8d4-1f33e3c4a4b6',
      userId: 'example-user-id-1',
      employeeId: 'employee-id-1',
    },
  });

  const employee2 = await prisma.employee.create({
    data: {
      id: '4b218741-690d-4fbf-b8d4-1f33e3c4a4b7',
      userId: 'example-user-id-2',
      employeeId: 'employee-id-2',
    },
  });

  const employee3 = await prisma.employee.create({
    data: {
      id: '5c218741-690d-4fbf-b8d4-1f33e3c4a4b8',
      userId: 'example-user-id-3',
      employeeId: 'employee-id-3',
    },
  });

  const employee4 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c4a4b9',
      userId: 'example-user-id-4',
      employeeId: 'employee-id-4',
    },
  });

  // Create Votes
  await prisma.vote.create({
    data: {
      id: 'vote-id-1',
      userId: 'example-user-id-1',
      value: 5,
      employeeId: employee1.id,
      foodPackId: foodPack1.id,
      restaurantId: restaurant1.id,
    },
  });

  await prisma.vote.create({
    data: {
      id: 'vote-id-2',
      userId: 'example-user-id-2',
      value: 4,
      employeeId: employee2.id,
      foodPackId: foodPack2.id,
      restaurantId: restaurant2.id,
    },
  });

  await prisma.vote.create({
    data: {
      id: 'vote-id-3',
      userId: 'example-user-id-3',
      value: 3,
      employeeId: employee3.id,
      foodPackId: foodPack3.id,
      restaurantId: restaurant3.id,
    },
  });

  await prisma.vote.create({
    data: {
      id: 'vote-id-4',
      userId: 'example-user-id-4',
      value: 2,
      employeeId: employee4.id,
      foodPackId: foodPack4.id,
      restaurantId: restaurant1.id,
    },
  });

  await prisma.vote.create({
    data: {
      id: 'vote-id-5',
      userId: 'example-user-id-1',
      value: 5,
      employeeId: employee1.id,
      foodPackId: foodPack2.id,
      restaurantId: restaurant2.id,
    },
  });

  await prisma.vote.create({
    data: {
      id: 'vote-id-6',
      userId: 'example-user-id-2',
      value: 4,
      employeeId: employee2.id,
      foodPackId: foodPack3.id,
      restaurantId: restaurant3.id,
    },
  });

  await prisma.vote.create({
    data: {
      id: 'vote-id-7',
      userId: 'example-user-id-3',
      value: 3,
      employeeId: employee3.id,
      foodPackId: foodPack4.id,
      restaurantId: restaurant1.id,
    },
  });

  await prisma.vote.create({
    data: {
      id: 'vote-id-8',
      userId: 'example-user-id-4',
      value: 2,
      employeeId: employee4.id,
      foodPackId: foodPack1.id,
      restaurantId: restaurant1.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
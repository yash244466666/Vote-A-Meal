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

  const restaurant51 = await prisma.restaurant.create({
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
  const restaurant4 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512345',
      name: 'Restaurant Name4',
    },
  });
  const restaurant5 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512346',
      name: 'Restaurant Name5',
    },
  });
  const restaurant6 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512347',
      name: 'Restaurant Name6',
    },
  });
  const restaurant7 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512348',
      name: 'Restaurant Name7',
    },
  });
  const restaurant8 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512349',
      name: 'Restaurant Name8',
    },
  });
  const restaurant9 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512350',
      name: 'Restaurant Name9',
    },
  });
  const restaurant10 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512351',
      name: 'Restaurant Name10',
    },
  });
  const restaurant11 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512352',
      name: 'Restaurant Name11',
    },
  });
  const restaurant12 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512353',
      name: 'Restaurant Name12',
    },
  });
  const restaurant13 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512354',
      name: 'Restaurant Name13',
    },
  });
  const restaurant14 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512355',
      name: 'Restaurant Name14',
    },
  });
  const restaurant15 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512356',
      name: 'Restaurant Name15',
    },
  });
  const restaurant16 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512357',
      name: 'Restaurant Name16',
    },
  });
  const restaurant17 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512358',
      name: 'Restaurant Name17',
    },
  });
  const restaurant18 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512359',
      name: 'Restaurant Name18',
    },
  });
  const restaurant19 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512360',
      name: 'Restaurant Name19',
    },
  });
  const restaurant20 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512361',
      name: 'Restaurant Name20',
    },
  });
  const restaurant21 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512362',
      name: 'Restaurant Name21',
    },
  });
  const restaurant22 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512363',
      name: 'Restaurant Name22',
    },
  });
  const restaurant23 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512364',
      name: 'Restaurant Name23',
    },
  });
  const restaurant24 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512365',
      name: 'Restaurant Name24',
    },
  });
  const restaurant25 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512366',
      name: 'Restaurant Name25',
    },
  });
  const restaurant26 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512367',
      name: 'Restaurant Name26',
    },
  });
  const restaurant27 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512368',
      name: 'Restaurant Name27',
    },
  });
  const restaurant28 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512369',
      name: 'Restaurant Name28',
    },
  });
  const restaurant29 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512370',
      name: 'Restaurant Name29',
    },
  });
  const restaurant30 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512371',
      name: 'Restaurant Name30',
    },
  });
  const restaurant31 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512372',
      name: 'Restaurant Name31',
    },
  });
  const restaurant32 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512373',
      name: 'Restaurant Name32',
    },
  });
  const restaurant33 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512374',
      name: 'Restaurant Name33',
    },
  });
  const restaurant34 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512375',
      name: 'Restaurant Name34',
    },
  });
  const restaurant35 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512376',
      name: 'Restaurant Name35',
    },
  });
  const restaurant36 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512377',
      name: 'Restaurant Name36',
    },
  });
  const restaurant37 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512378',
      name: 'Restaurant Name37',
    },
  });
  const restaurant38 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512379',
      name: 'Restaurant Name38',
    },
  });
  const restaurant39 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512380',
      name: 'Restaurant Name39',
    },
  });
  const restaurant40 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512381',
      name: 'Restaurant Name40',
    },
  });
  const restaurant41 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512382',
      name: 'Restaurant Name41',
    },
  });
  const restaurant42 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512383',
      name: 'Restaurant Name42',
    },
  });
  const restaurant43 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512384',
      name: 'Restaurant Name43',
    },
  });
  const restaurant44 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512385',
      name: 'Restaurant Name44',
    },
  });
  const restaurant45 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512386',
      name: 'Restaurant Name45',
    },
  });
  const restaurant46 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512387',
      name: 'Restaurant Name46',
    },
  });
  const restaurant47 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512388',
      name: 'Restaurant Name47',
    },
  });
  const restaurant48 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512389',
      name: 'Restaurant Name48',
    },
  });
  const restaurant49 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512390',
      name: 'Restaurant Name49',
    },
  });
  const restaurant50 = await prisma.restaurant.create({
    data: {
      id: 'a1b2c3d4-e5f6-7890-abcd-ef1234512391',
      name: 'Restaurant Name50',
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
      restaurantId: restaurant1.id,
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
      restaurantId: restaurant4.id,
    },
  });
  const foodPack5 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12345',
      name: 'Food Pack 5',
      price: 8.99,
      restaurantId: restaurant5.id,
    },
  });
  const foodPack6 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12346',
      name: 'Food Pack 6',
      price: 8.99,
      restaurantId: restaurant6.id,
    },
  });
  const foodPack7 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12347',
      name: 'Food Pack 7',
      price: 8.99,
      restaurantId: restaurant7.id,
    },
  });
  const foodPack8 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12348',
      name: 'Food Pack 8',
      price: 8.99,
      restaurantId: restaurant8.id,
    },
  });
  const foodPack9 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12349',
      name: 'Food Pack 9',
      price: 8.99,
      restaurantId: restaurant9.id,
    },
  });
  const foodPack10 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12350',
      name: 'Food Pack 10',
      price: 8.99,
      restaurantId: restaurant10.id,
    },
  });
  const foodPack11 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12351',
      name: 'Food Pack 11',
      price: 8.99,
      restaurantId: restaurant11.id,
    },
  });
  const foodPack12 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12352',
      name: 'Food Pack 12',
      price: 8.99,
      restaurantId: restaurant12.id,
    },
  });
  const foodPack13 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12353',
      name: 'Food Pack 13',
      price: 8.99,
      restaurantId: restaurant13.id,
    },
  });
  const foodPack14 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12354',
      name: 'Food Pack 14',
      price: 8.99,
      restaurantId: restaurant14.id,
    },
  });
  const foodPack15 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12355',
      name: 'Food Pack 15',
      price: 8.99,
      restaurantId: restaurant15.id,
    },
  });
  const foodPack16 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12356',
      name: 'Food Pack 16',
      price: 8.99,
      restaurantId: restaurant16.id,
    },
  });
  const foodPack17 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12357',
      name: 'Food Pack 17',
      price: 8.99,
      restaurantId: restaurant17.id,
    },
  });
  const foodPack18 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12358',
      name: 'Food Pack 18',
      price: 8.99,
      restaurantId: restaurant18.id,
    },
  });
  const foodPack19 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12359',
      name: 'Food Pack 19',
      price: 8.99,
      restaurantId: restaurant19.id,
    },
  });
  const foodPack20 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12360',
      name: 'Food Pack 20',
      price: 8.99,
      restaurantId: restaurant20.id,
    },
  });
  const foodPack21 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12361',
      name: 'Food Pack 21',
      price: 8.99,
      restaurantId: restaurant21.id,
    },
  });
  const foodPack22 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12362',
      name: 'Food Pack 22',
      price: 8.99,
      restaurantId: restaurant22.id,
    },
  });
  const foodPack23 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12363',
      name: 'Food Pack 23',
      price: 8.99,
      restaurantId: restaurant23.id,
    },
  });
  const foodPack24 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12364',
      name: 'Food Pack 24',
      price: 8.99,
      restaurantId: restaurant24.id,
    },
  });
  const foodPack25 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12365',
      name: 'Food Pack 25',
      price: 8.99,
      restaurantId: restaurant25.id,
    },
  });
  const foodPack26 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12366',
      name: 'Food Pack 26',
      price: 8.99,
      restaurantId: restaurant26.id,
    },
  });
  const foodPack27 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12367',
      name: 'Food Pack 27',
      price: 8.99,
      restaurantId: restaurant27.id,
    },
  });
  const foodPack28 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12368',
      name: 'Food Pack 28',
      price: 8.99,
      restaurantId: restaurant28.id,
    },
  });
  const foodPack29 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12369',
      name: 'Food Pack 29',
      price: 8.99,
      restaurantId: restaurant29.id,
    },
  });
  const foodPack30 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12370',
      name: 'Food Pack 30',
      price: 8.99,
      restaurantId: restaurant30.id,
    },
  });
  const foodPack31 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12371',
      name: 'Food Pack 31',
      price: 8.99,
      restaurantId: restaurant31.id,
    },
  });
  const foodPack32 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12372',
      name: 'Food Pack 32',
      price: 8.99,
      restaurantId: restaurant32.id,
    },
  });
  const foodPack33 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12373',
      name: 'Food Pack 33',
      price: 8.99,
      restaurantId: restaurant33.id,
    },
  });
  const foodPack34 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12374',
      name: 'Food Pack 34',
      price: 8.99,
      restaurantId: restaurant34.id,
    },
  });
  const foodPack35 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12375',
      name: 'Food Pack 35',
      price: 8.99,
      restaurantId: restaurant35.id,
    },
  });
  const foodPack36 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12376',
      name: 'Food Pack 36',
      price: 8.99,
      restaurantId: restaurant36.id,
    },
  });
  const foodPack37 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12377',
      name: 'Food Pack 37',
      price: 8.99,
      restaurantId: restaurant37.id,
    },
  });
  const foodPack38 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12378',
      name: 'Food Pack 38',
      price: 8.99,
      restaurantId: restaurant38.id,
    },
  });
  const foodPack39 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12379',
      name: 'Food Pack 39',
      price: 8.99,
      restaurantId: restaurant39.id,
    },
  });
  const foodPack40 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12380',
      name: 'Food Pack 40',
      price: 8.99,
      restaurantId: restaurant40.id,
    },
  });
  const foodPack41 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12381',
      name: 'Food Pack 41',
      price: 8.99,
      restaurantId: restaurant41.id,
    },
  });
  const foodPack42 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12382',
      name: 'Food Pack 42',
      price: 8.99,
      restaurantId: restaurant42.id,
    },
  });
  const foodPack43 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12383',
      name: 'Food Pack 43',
      price: 8.99,
      restaurantId: restaurant43.id,
    },
  });
  const foodPack44 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12384',
      name: 'Food Pack 44',
      price: 8.99,
      restaurantId: restaurant44.id,
    },
  });
  const foodPack45 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12385',
      name: 'Food Pack 45',
      price: 8.99,
      restaurantId: restaurant45.id,
    },
  });
  const foodPack46 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12386',
      name: 'Food Pack 46',
      price: 8.99,
      restaurantId: restaurant46.id,
    },
  });
  const foodPack47 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12387',
      name: 'Food Pack 47',
      price: 8.99,
      restaurantId: restaurant47.id,
    },
  });
  const foodPack48 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12388',
      name: 'Food Pack 48',
      price: 8.99,
      restaurantId: restaurant48.id,
    },
  });
  const foodPack49 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12389',
      name: 'Food Pack 49',
      price: 8.99,
      restaurantId: restaurant49.id,
    },
  });
  const foodPack50 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12390',
      name: 'Food Pack 50',
      price: 8.99,
      restaurantId: restaurant50.id,
    },
  });
  const foodPack51 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstu012390',
      name: 'Food Pack 50',
      price: 8.99,
      restaurantId: restaurant1.id,
    },
  });
  const foodPack52 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12391',
      name: 'Food Pack 51',
      price: 8.99,
      restaurantId: restaurant3.id,
    },
  });
  const foodPack53 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12392',
      name: 'Food Pack 52',
      price: 8.99,
      restaurantId: restaurant4.id,
    },
  });
  const foodPack54 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12393',
      name: 'Food Pack 53',
      price: 8.99,
      restaurantId: restaurant5.id,
    },
  });
  const foodPack55 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12394',
      name: 'Food Pack 54',
      price: 8.99,
      restaurantId: restaurant6.id,
    },
  });
  const foodPack56 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12395',
      name: 'Food Pack 55',
      price: 8.99,
      restaurantId: restaurant7.id,
    },
  });
  const foodPack57 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12396',
      name: 'Food Pack 56',
      price: 8.99,
      restaurantId: restaurant8.id,
    },
  });
  const foodPack58 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12397',
      name: 'Food Pack 57',
      price: 8.99,
      restaurantId: restaurant9.id,
    },
  });
  const foodPack59 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12398',
      name: 'Food Pack 58',
      price: 8.99,
      restaurantId: restaurant10.id,
    },
  });
  const foodPack60 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12399',
      name: 'Food Pack 59',
      price: 8.99,
      restaurantId: restaurant11.id,
    },
  });
  const foodPack61 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12400',
      name: 'Food Pack 60',
      price: 8.99,
      restaurantId: restaurant12.id,
    },
  });
  const foodPack62 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12401',
      name: 'Food Pack 61',
      price: 8.99,
      restaurantId: restaurant13.id,
    },
  });
  const foodPack63 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12402',
      name: 'Food Pack 62',
      price: 8.99,
      restaurantId: restaurant14.id,
    },
  });
  const foodPack64 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12403',
      name: 'Food Pack 63',
      price: 8.99,
      restaurantId: restaurant15.id,
    },
  });
  const foodPack65 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12404',
      name: 'Food Pack 64',
      price: 8.99,
      restaurantId: restaurant16.id,
    },
  });
  const foodPack66 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12405',
      name: 'Food Pack 65',
      price: 8.99,
      restaurantId: restaurant17.id,
    },
  });
  const foodPack67 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12406',
      name: 'Food Pack 66',
      price: 8.99,
      restaurantId: restaurant18.id,
    },
  });

  const foodPack68 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12407',
      name: 'Food Pack 67',
      price: 8.99,
      restaurantId: restaurant19.id,
    },
  });
  const foodPack69 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12408',
      name: 'Food Pack 68',
      price: 8.99,
      restaurantId: restaurant20.id,
    },
  });
  const foodPack70 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12409',
      name: 'Food Pack 69',
      price: 8.99,
      restaurantId: restaurant21.id,
    },
  });
  const foodPack71 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12410',
      name: 'Food Pack 70',
      price: 8.99,
      restaurantId: restaurant22.id,
    },
  });
  const foodPack72 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12411',
      name: 'Food Pack 71',
      price: 8.99,
      restaurantId: restaurant23.id,
    },
  });
  const foodPack73 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12412',
      name: 'Food Pack 72',
      price: 8.99,
      restaurantId: restaurant24.id,
    },
  });
  const foodPack74 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12413',
      name: 'Food Pack 73',
      price: 8.99,
      restaurantId: restaurant25.id,
    },
  });
  const foodPack75 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12414',
      name: 'Food Pack 74',
      price: 8.99,
      restaurantId: restaurant26.id,
    },
  });
  const foodPack76 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12415',
      name: 'Food Pack 75',
      price: 8.99,
      restaurantId: restaurant27.id,
    },
  });
  const foodPack77 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12416',
      name: 'Food Pack 76',
      price: 8.99,
      restaurantId: restaurant28.id,
    },
  });
  const foodPack78 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12417',
      name: 'Food Pack 77',
      price: 8.99,
      restaurantId: restaurant29.id,
    },
  });
  const foodPack79 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12418',
      name: 'Food Pack 78',
      price: 8.99,
      restaurantId: restaurant30.id,
    },
  });
  const foodPack80 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12419',
      name: 'Food Pack 79',
      price: 8.99,
      restaurantId: restaurant31.id,
    },
  });
  const foodPack81 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12420',
      name: 'Food Pack 80',
      price: 8.99,
      restaurantId: restaurant32.id,
    },
  });
  const foodPack82 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12421',
      name: 'Food Pack 81',
      price: 8.99,
      restaurantId: restaurant20.id,
    },
  });
  const foodPack83 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12422',
      name: 'Food Pack 82',
      price: 8.99,
      restaurantId: restaurant21.id,
    },
  });
  const foodPack84 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12423',
      name: 'Food Pack 83',
      price: 8.99,
      restaurantId: restaurant22.id,
    },
  });
  const foodPack85 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12424',
      name: 'Food Pack 84',
      price: 8.99,
      restaurantId: restaurant23.id,
    },
  });
  const foodPack86 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12425',
      name: 'Food Pack 85',
      price: 8.99,
      restaurantId: restaurant24.id,
    },
  });
  const foodPack87 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12426',
      name: 'Food Pack 86',
      price: 8.99,
      restaurantId: restaurant25.id,
    },
  });
  const foodPack88 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12427',
      name: 'Food Pack 87',
      price: 8.99,
      restaurantId: restaurant26.id,
    },
  });
  const foodPack89 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12428',
      name: 'Food Pack 88',
      price: 8.99,
      restaurantId: restaurant27.id,
    },
  });
  const foodPack90 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12429',
      name: 'Food Pack 89',
      price: 8.99,
      restaurantId: restaurant28.id,
    },
  });
  const foodPack91 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12430',
      name: 'Food Pack 90',
      price: 8.99,
      restaurantId: restaurant29.id,
    },
  });
  const foodPack92 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12431',
      name: 'Food Pack 91',
      price: 8.99,
      restaurantId: restaurant20.id,
    },
  });
  const foodPack93 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12432',
      name: 'Food Pack 92',
      price: 8.99,
      restaurantId: restaurant21.id,
    },
  });
  const foodPack94 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12433',
      name: 'Food Pack 93',
      price: 8.99,
      restaurantId: restaurant22.id,
    },
  });
  const foodPack95 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12434',
      name: 'Food Pack 94',
      price: 8.99,
      restaurantId: restaurant23.id,
    },
  });
  const foodPack96 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12435',
      name: 'Food Pack 95',
      price: 8.99,
      restaurantId: restaurant24.id,
    },
  });
  const foodPack97 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12436',
      name: 'Food Pack 96',
      price: 8.99,
      restaurantId: restaurant25.id,
    },
  });
  const foodPack98 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12437',
      name: 'Food Pack 97',
      price: 8.99,
      restaurantId: restaurant26.id,
    },
  });
  const foodPack99 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12438',
      name: 'Food Pack 98',
      price: 8.99,
      restaurantId: restaurant27.id,
    },
  });
  const foodPack100 = await prisma.foodPack.create({
    data: {
      id: '7g8h9i0j-klmn-4o56-7890-pqrstuv12439',
      name: 'Food Pack 99',
      price: 8.99,
      restaurantId: restaurant28.id,
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
  const employee5 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12345',
      userId: 'example-user-id-5',
      employeeId: 'employee-id-5',
    },
  });
  const employee6 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12346',
      userId: 'example-user-id-6',
      employeeId: 'employee-id-6',
    },
  });
  const employee7 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12347',
      userId: 'example-user-id-7',
      employeeId: 'employee-id-7',
    },
  });
  const employee8 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12348',
      userId: 'example-user-id-8',
      employeeId: 'employee-id-8',
    },
  });
  const employee9 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12349',
      userId: 'example-user-id-9',
      employeeId: 'employee-id-9',
    },
  });
  const employee10 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12350',
      userId: 'example-user-id-10',
      employeeId: 'employee-id-10',
    },
  });
  const employee11 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12351',
      userId: 'example-user-id-11',
      employeeId: 'employee-id-11',
    },
  });
  const employee12 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12352',
      userId: 'example-user-id-12',
      employeeId: 'employee-id-12',
    },
  });
  const employee13 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12353',
      userId: 'example-user-id-13',
      employeeId: 'employee-id-13',
    },
  });
  const employee14 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12354',
      userId: 'example-user-id-14',
      employeeId: 'employee-id-14',
    },
  });
  const employee15 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12355',
      userId: 'example-user-id-15',
      employeeId: 'employee-id-15',
    },
  });
  const employee16 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12356',
      userId: 'example-user-id-16',
      employeeId: 'employee-id-16',
    },
  });
  const employee17 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12357',
      userId: 'example-user-id-17',
      employeeId: 'employee-id-17',
    },
  });
  const employee18 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12358',
      userId: 'example-user-id-18',
      employeeId: 'employee-id-18',
    },
  });
  const employee19 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12359',
      userId: 'example-user-id-19',
      employeeId: 'employee-id-19',
    },
  });
  const employee20 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12360',
      userId: 'example-user-id-20',
      employeeId: 'employee-id-20',
    },
  });
  const employee21 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12361',
      userId: 'example-user-id-21',
      employeeId: 'employee-id-21',
    },
  });
  const employee22 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12362',
      userId: 'example-user-id-22',
      employeeId: 'employee-id-22',
    },
  });
  const employee23 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12363',
      userId: 'example-user-id-23',
      employeeId: 'employee-id-23',
    },
  });
  const employee24 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12364',
      userId: 'example-user-id-24',
      employeeId: 'employee-id-24',
    },
  });
  const employee25 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12365',
      userId: 'example-user-id-25',
      employeeId: 'employee-id-25',
    },
  });
  const employee26 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12366',
      userId: 'example-user-id-26',
      employeeId: 'employee-id-26',
    },
  });
  const employee27 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12367',
      userId: 'example-user-id-27',
      employeeId: 'employee-id-27',
    },
  });
  const employee28 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12368',
      userId: 'example-user-id-28',
      employeeId: 'employee-id-28',
    },
  });
  const employee29 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12369',
      userId: 'example-user-id-29',
      employeeId: 'employee-id-29',
    },
  });
  const employee30 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12370',
      userId: 'example-user-id-30',
      employeeId: 'employee-id-30',
    },
  });
  const employee31 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12371',
      userId: 'example-user-id-31',
      employeeId: 'employee-id-31',
    },
  });
  const employee32 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12372',
      userId: 'example-user-id-32',
      employeeId: 'employee-id-32',
    },
  });
  const employee33 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12373',
      userId: 'example-user-id-33',
      employeeId: 'employee-id-33',
    },
  });
  const employee34 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12374',
      userId: 'example-user-id-34',
      employeeId: 'employee-id-34',
    },
  });
  const employee35 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12375',
      userId: 'example-user-id-35',
      employeeId: 'employee-id-35',
    },
  });
  const employee36 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12376',
      userId: 'example-user-id-36',
      employeeId: 'employee-id-36',
    },
  });
  const employee37 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12377',
      userId: 'example-user-id-37',
      employeeId: 'employee-id-37',
    },
  });
  const employee38 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12378',
      userId: 'example-user-id-38',
      employeeId: 'employee-id-38',
    },
  });
  const employee39 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12379',
      userId: 'example-user-id-39',
      employeeId: 'employee-id-39',
    },
  });
  const employee40 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12380',
      userId: 'example-user-id-40',
      employeeId: 'employee-id-40',
    },
  });
  const employee41 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12381',
      userId: 'example-user-id-41',
      employeeId: 'employee-id-41',
    },
  });
  const employee42 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12382',
      userId: 'example-user-id-42',
      employeeId: 'employee-id-42',
    },
  });
  const employee43 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12383',
      userId: 'example-user-id-43',
      employeeId: 'employee-id-43',
    },
  });
  const employee44 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12384',
      userId: 'example-user-id-44',
      employeeId: 'employee-id-44',
    },
  });
  const employee45 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12385',
      userId: 'example-user-id-45',
      employeeId: 'employee-id-45',
    },
  });
  const employee46 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12386',
      userId: 'example-user-id-46',
      employeeId: 'employee-id-46',
    },
  });
  const employee47 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12387',
      userId: 'example-user-id-47',
      employeeId: 'employee-id-47',
    },
  });
  const employee48 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12388',
      userId: 'example-user-id-48',
      employeeId: 'employee-id-48',
    },
  });
  const employee49 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12389',
      userId: 'example-user-id-49',
      employeeId: 'employee-id-49',
    },
  });
  const employee50 = await prisma.employee.create({
    data: {
      id: '6d218741-690d-4fbf-b8d4-1f33e3c12390',
      userId: 'example-user-id-50',
      employeeId: 'employee-id-50',
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

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
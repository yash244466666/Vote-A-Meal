-- DropForeignKey
ALTER TABLE "FoodPack" DROP CONSTRAINT "FoodPack_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_foodPackId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_restaurantId_fkey";

-- AlterTable
ALTER TABLE "FoodPack" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "restaurantId" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vote" ALTER COLUMN "employeeId" DROP NOT NULL,
ALTER COLUMN "foodPackId" DROP NOT NULL,
ALTER COLUMN "restaurantId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "value" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodPack" ADD CONSTRAINT "FoodPack_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_foodPackId_fkey" FOREIGN KEY ("foodPackId") REFERENCES "FoodPack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `price` to the `FoodPack` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Made the column `restaurantId` on table `Vote` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_restaurantId_fkey";

-- AlterTable
ALTER TABLE "FoodPack" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "value" INTEGER NOT NULL,
ALTER COLUMN "restaurantId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

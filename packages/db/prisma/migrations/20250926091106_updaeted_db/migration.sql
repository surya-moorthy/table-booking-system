/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `guests` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `specialRequest` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `venueId` on the `Booking` table. All the data in the column will be lost.
  - The `status` column on the `Booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `isAvailable` on the `Table` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Table` table. All the data in the column will be lost.
  - You are about to drop the column `venueId` on the `Table` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Venue` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tableNo]` on the table `Table` will be added. If there are existing duplicate values, this will fail.
  - Made the column `tableId` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `tableNo` to the `Table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TableStatus" AS ENUM ('PROGRESS', 'RESERVED', 'FREE');

-- CreateEnum
CREATE TYPE "public"."BookingStatus" AS ENUM ('SUCCESS', 'FAILED', 'PROGRESS');

-- CreateEnum
CREATE TYPE "public"."PaymentMethod" AS ENUM ('CASH', 'CARD', 'UPI');

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_tableId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_venueId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Table" DROP CONSTRAINT "Table_venueId_fkey";

-- AlterTable
ALTER TABLE "public"."Booking" DROP COLUMN "createdAt",
DROP COLUMN "endTime",
DROP COLUMN "guests",
DROP COLUMN "specialRequest",
DROP COLUMN "startTime",
DROP COLUMN "updatedAt",
DROP COLUMN "venueId",
ADD COLUMN     "bookedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "tableId" SET NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "public"."BookingStatus" NOT NULL DEFAULT 'PROGRESS';

-- AlterTable
ALTER TABLE "public"."Table" DROP COLUMN "isAvailable",
DROP COLUMN "number",
DROP COLUMN "venueId",
ADD COLUMN     "status" "public"."TableStatus" NOT NULL DEFAULT 'FREE',
ADD COLUMN     "tableNo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "passwordHash",
DROP COLUMN "role",
ADD COLUMN     "password" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Venue";

-- CreateIndex
CREATE UNIQUE INDEX "Table_tableNo_key" ON "public"."Table"("tableNo");

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "public"."Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

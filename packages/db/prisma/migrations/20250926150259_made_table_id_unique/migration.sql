/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Table` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Table_id_key" ON "public"."Table"("id");

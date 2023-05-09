/*
  Warnings:

  - You are about to drop the column `name` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Member` table. All the data in the column will be lost.
  - Added the required column `full_name` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Artist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL
);
INSERT INTO "new_Artist" ("id") SELECT "id" FROM "Artist";
DROP TABLE "Artist";
ALTER TABLE "new_Artist" RENAME TO "Artist";
CREATE TABLE "new_Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "full_name" TEXT NOT NULL
);
INSERT INTO "new_Member" ("email", "id") SELECT "email", "id" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

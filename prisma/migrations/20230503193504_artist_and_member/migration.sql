-- CreateTable
CREATE TABLE "Artist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ArtistOnMember" (
    "memberId" INTEGER NOT NULL,
    "artisId" INTEGER NOT NULL,

    PRIMARY KEY ("artisId", "memberId"),
    CONSTRAINT "ArtistOnMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ArtistOnMember_artisId_fkey" FOREIGN KEY ("artisId") REFERENCES "Artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

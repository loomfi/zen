-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "salt1" TEXT NOT NULL,
    "salt2" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user'
);

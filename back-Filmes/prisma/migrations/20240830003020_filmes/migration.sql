-- CreateTable
CREATE TABLE "Filme" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "describe" TEXT NOT NULL,
    "time_minutes" INTEGER NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

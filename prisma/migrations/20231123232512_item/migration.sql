-- CreateTable
CREATE TABLE "Item" (
    "id_item" BIGINT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "width" INTEGER NOT NULL,
    "heigth" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "weigth" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_item_key" ON "Item"("id_item");

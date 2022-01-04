import { ICategory } from "..";
import { CATEGORY, getProduct } from "./productMock";

export function getCategories(): Array<ICategory> {
    const result: Array<ICategory> = [];

    let startIndex = 42;

    const phoneCategory = getCategory(CATEGORY.PHONE, startIndex);
    result.push(phoneCategory);

    startIndex += phoneCategory.products.length;

    const laptopCategory = getCategory(CATEGORY.LAPTOP, startIndex);
    result.push(laptopCategory);

    startIndex += phoneCategory.products.length;

    const monitorCategory = getCategory(CATEGORY.MONITOR, startIndex);
    result.push(monitorCategory);

    return result;
}


function getCategory(category: CATEGORY, startIndex: number): ICategory {
    const result: ICategory = {
        title: getCategoryTitle(category),
        id: category,
        products: []
    };

    const numberOfProducts = 10 + Math.trunc((Math.random() * 100));

    for (let index = 1; index <= numberOfProducts; index++) {
        const sku = 10000 + index + startIndex + '';
        const product = getProduct(category, sku);

        result.products.push(product);
    }

    return result;
}

function getCategoryTitle(category: CATEGORY): string {
    switch (category) {
        case CATEGORY.PHONE: {
            return 'Телефоны';
        };
        case CATEGORY.LAPTOP: {
            return 'Ноутбуки';
        };
        case CATEGORY.MONITOR: {
            return 'Мониторы';
        };
    }
}
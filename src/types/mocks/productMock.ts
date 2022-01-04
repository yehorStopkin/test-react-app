import { IPrice, IProduct, ISpecification, ISpecificationGroup } from "..";
import { LAPTOP_BRANDS, LAPTOP_CODES, LAPTOP_COLORS, LAPTOP_IMAGES, LAPTOP_SPECIFICATIONS } from "./laptopMock";
import { MONITOR_BRANDS, MONITOR_CODES, MONITOR_IMAGES, MONITOR_SPECIFICATIONS } from "./monitorMock";
import { PHONE_BRANDS, PHONE_COLORS, PHONE_IMAGES, PHONE_RAMS, PHONE_SIZES_OF_MEMORY, PHONE_SPECIFICATIONS } from "./phoneMock";

export enum CATEGORY {
    PHONE,
    MONITOR,
    LAPTOP,
}

export function getProduct(category: CATEGORY, sku: string): IProduct {
    const result: IProduct = {
        sku,
        images: getImages(category),
        title: getTitle(category),
        description: getDescription(category),
        onHand: Math.trunc(Math.random() * 5),
        price: getPrice(),
        specificationGroups: getSpecificationGroups(category)
    };

    return result;
}

function getPrice(minPrice = 50, maxPrice = 50000, sale = 0.2): IPrice {
    const currentPrice = (minPrice * 100 + Math.trunc(Math.random() * (maxPrice - minPrice) * 100)) / 100;
    const oldPrice = Math.trunc(currentPrice * (1 - sale));

    return {
        currentPrice,
        oldPrice
    };
}

function getSpecificationGroups(category: CATEGORY): Array<ISpecificationGroup> {
    const result: Array<ISpecificationGroup> = [];

    const specificationGroupsMock = getSpecificationGroupsMock(category);

    for (const specificationGroupMock of specificationGroupsMock) {
        const specificationGroup: ISpecificationGroup = {
            title: specificationGroupMock.title,
            specifications: []
        };

        for (const specificationMock of specificationGroupMock.specifications) {
            const specification: ISpecification = {
                title: specificationMock.title,
                values: getRandomSpecification(specificationMock.values)
            };

            specificationGroup.specifications.push(specification);
        }

        result.push(specificationGroup)
    }
    
    return result;
}

function getSpecificationGroupsMock(category: CATEGORY): any {
    switch (category) {
        case CATEGORY.PHONE: {
            return PHONE_SPECIFICATIONS;
        };
        case CATEGORY.LAPTOP: {
            return LAPTOP_SPECIFICATIONS;
        };
        case CATEGORY.MONITOR: {
            return MONITOR_SPECIFICATIONS;
        }
    }
}

function getRandomSpecification(values: Array<string | Array<string>>): Array<string> {
    const result: Array<string> = [];

    const numberOfValues = values.length;

    const index = Math.trunc(Math.random() * numberOfValues);

    const specification = values[index];

    if (Array.isArray(specification)) {
        for (const value of specification) {
            result.push(value);
        }
    } else {
        result.push(specification);
    }

    return result;
}

function getImages(category: CATEGORY): Array<string> {
    const result: Array<string> = [];

    const images = getImagesMock(category);

    const image = getRandomElement(images);

    result.push(image);

    return result;
}

function getImagesMock(category: CATEGORY): Array<string> {
    switch (category) {
        case CATEGORY.PHONE: {
            return PHONE_IMAGES;
        };
        case CATEGORY.LAPTOP: {
            return LAPTOP_IMAGES;
        };
        case CATEGORY.MONITOR: {
            return MONITOR_IMAGES;
        }
    }
}

function getTitle(category: CATEGORY): string {
    switch (category) {
        case CATEGORY.PHONE: {
            return getPhoneTitle();
        };
        case CATEGORY.LAPTOP: {
            return getLaptopTitle();
        };
        case CATEGORY.MONITOR: {
            return getMonitorTitle();
        }
    }

}

function getDescription(category: CATEGORY): string {
    switch (category) {
        case CATEGORY.PHONE: {
            return getPhoneDescription();
        };
        case CATEGORY.LAPTOP: {
            return getLaptopDescription();
        };
        case CATEGORY.MONITOR: {
            return getMonitorDescription();
        }
    }
}

function getPhoneTitle(): string {
    const brand = getRandomElement(PHONE_BRANDS)
    const color = getRandomElement(PHONE_COLORS);
    const ram = getRandomElement(PHONE_RAMS);
    const memory = getRandomElement(PHONE_SIZES_OF_MEMORY);

    return `Смартфон ${brand} ${ram}/${memory}Gb ${color}`;
}

function getPhoneDescription(): string {
    const brand = getRandomElement(PHONE_BRANDS)
    const color = getRandomElement(PHONE_COLORS);
    const ram = getRandomElement(PHONE_RAMS);
    const memory = getRandomElement(PHONE_SIZES_OF_MEMORY);

    return `Мега-круой смартфон от фирмы ${brand}! Оперативка аж ${ram}Gb, а встроенная память — ${memory}Gb. Стильного цвета: ${color}!`;
}

function getLaptopTitle(): string {
    const brand = getRandomElement(LAPTOP_BRANDS)
    const color = getRandomElement(LAPTOP_COLORS);
    const code = getRandomElement(LAPTOP_CODES);

    return `Ноутбук игровой ${brand} (${code}) ${color}`;
}

function getLaptopDescription(): string {
    const brand = getRandomElement(LAPTOP_BRANDS)
    const color = getRandomElement(LAPTOP_COLORS);
    const code = getRandomElement(LAPTOP_CODES);

    return `Игровой ноутбук от фирмы ${brand}. Цвета такого: ${color}. Какой-то непонятный код: ${code}`;
}

function getMonitorTitle(): string {
    const brand = getRandomElement(MONITOR_BRANDS)
    const code = getRandomElement(MONITOR_CODES);

    return `Игровой монитор ${brand} (${code})`;
}

function getMonitorDescription(): string {
    const brand = getRandomElement(MONITOR_BRANDS)
    const code = getRandomElement(MONITOR_CODES);

    return `Крутой игровой монитор ${brand}! Есть ещё какой-то непонятный код, по которому этот монитор можно найти: ${code}`;
}

function getRandomElement(values: Array<string>): string {
    const numberOfValues = values.length;
    const index = Math.trunc(Math.random() * numberOfValues);
    const value = values[index];

    return value;
}

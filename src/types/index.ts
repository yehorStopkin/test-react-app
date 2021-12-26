export interface IProduct {
    sku: string; // id
    images: Array<string>; // Массив ссылок на картинки
    title: string; // Название товара
    description: string; // Описание товара
    onHand: number; // Количество товара на остатках
    price: IPrice;

    characteristicGroups: Array<ICharacteristicGroup>; // Массив групп характеристик
}

export interface IPrice {
    oldPrice: number;
    currentPrice: number;
}

export interface ICharacteristicGroup {
    title: string; // Название группы характеристик
    characteristics: Array<ICharacteristic>; // Массив характеристик в этой группе
}

export interface ICharacteristic {
    title: string; // Название характеристики
    values: Array<string>; // Массив значений характеристик
    icon?: string; // Пока хз
}

export function getProduct(): IProduct {
    return {
        sku: "1831615",
        images: ["https://cdn.comfy.ua/media/catalog/product/cache/4/image/600x/9df78eab33525d08d6e5fb8d27136e95/s/m/sm_a125_galaxy_a12_black_back___1_1__1_.jpg"],
        title: "Смартфон Samsung Galaxy A12 3/32Gb Black (SM-A127FZKUSEK)",
        description: "Неплохой телефончик для бла-бла-бла",
        onHand: 3,
        price: {
            oldPrice: 3999,
            currentPrice: 3599
        },
        characteristicGroups: [{
            title: "Экран",
            characteristics: [{
                title: "Диагональ дисплея",
                values: ["6,5''"]
            }, {
                title: "Разрешение экрана",
                values: ["	1600x720 HD+"]
            }, {
                title: "Тип экрана",
                values: ["PLS"]
            }, {
                title: "Частота обновления экрана",
                values: ["60 Гц"]
            }]
        }, {
            title: "Связь",
            characteristics: [{
                title: "Стандарты связи",
                values: ["2G GSM", "2G CDMA", "3G UMTS", "3G CDMA"]
            }, {
                title: "Количество SIM-карт",
                values: ["2 SIM"]
            }, {
                title: "Размер SIM-карты",
                values: ["Nano-SIM"]
            }, ]
        }, {
            title: "ОС",
            characteristics: [{
                title: "Операционная система",
                values: ["Android 10.0"]
            }]
        }]
    }
}

// benefits icons
import BENEFIT1 from "../assets/icons/benefit1.png";
import BENEFIT2 from "../assets/icons/benefit2.png"
import BENEFIT3 from "../assets/icons/benefit3.png"
import BENEFIT4 from "../assets/icons/benefit4.png"
import BENEFIT5 from "../assets/icons/benefit5.png";
import BENEFIT6 from "../assets/icons/benefit6.png";

// services icon
import SERVICE1 from "../assets/icons/service1.png";
import SERVICE2 from "../assets/icons/service2.png";
import SERVICE3 from "../assets/icons/service3.png";
import SERVICE4 from "../assets/icons/service5.png";
import SERVICE5 from "../assets/icons/service5.png";
import SERVICE6 from "../assets/icons/service6.png";
import SERVICE7 from "../assets/icons/service7.png";
import SERVICE8 from "../assets/icons/service8.png";
// client img 
import CLIENT1 from "../assets/img/client1.png"
import CLIENT2 from "../assets/img/client2.png"
import CLIENT3 from "../assets/img/client3.png"
import CLIENT4 from "../assets/img/client4.png"
import CLIENT5 from "../assets/img/client5.png"
import CLIENT6 from "../assets/img/client6.png"
// team img
import TEAM1 from "../assets/img/team1.jpg";
import TEAM2 from "../assets/img/team2.jpg";
import TEAM3 from "../assets/img/team3.jpg";
import TEAM4 from "../assets/img/team4.jpg";
import TEAM5 from "../assets/img/team5.jpg";
import TEAM6 from "../assets/img/team6.jpg";

export const benefits: Array<{ id: number, name: string, des: string, icon: string }> = [
    {
        id: 1,
        name: "Опыт",
        des: "Опыт сотрудников нашей компании от разработки веб сайтов и мобильных приложений до внедрения CRM систем и IP телефонии позволит сделать Ваш бизнес заметным в интернете и привлечь ещё больше клиентов, которым будет удобно и приятно с Вами взаимодействовать.",
        icon: BENEFIT1
    },
    {
        id: 2,
        name: "Инициативность",
        des: "Благодаря собственному отделу аналитики, наши специалисты постоянно мониторят новые возможности и тренды для развития и продвижения сайтов, а разработчики готовы внедрять новейшие виджеты для лучшей результативности Вашего бизнеса в интернете.",
        icon: BENEFIT2
    },
    {
        id: 3,
        name: "Доведение до результата",
        des: "Грамотное брифование позволит лучше понять задачи Вашего бизнеса, которые можно решить с помощью сайта, а внимательность и ответственность наших специалистов гарантирует 100% результат и доведение всех работ до успешного финала.",
        icon: BENEFIT3
    },
    {
        id: 4,
        name: "Прозрачность работы",
        des: "Все задачи по каждому проекту мы добавляем в личный кабинет, к которому у Вас всегда будет доступ. Таким образом, Вы сможете наблюдать за этапами работ и сроками в реальном времени.",
        icon: BENEFIT4
    },
    {
        id: 5,
        name: "Справедливая цена",
        des: "Стоимость рассчитывается персонально для каждого проекта и максимально прозрачна с учётом всех целей Вашего сайта.",
        icon: BENEFIT5
    },
    {
        id: 6,
        name: "Личный менеджер",
        des: "Со стартом работы за Вами будет закреплён персональный менеджер. Благодаря нашей системе мотивации, он будет на связи 24/7 и заинтересован в скорейшем запуске сайта.",
        icon: BENEFIT6
    }
]

export const services: Array<{ id: number, icon: string, name: string, des: Array<{ id: number, bulletPoint: string }>, price: number }> = [
    {
        id: 1,
        icon: SERVICE1,
        name: "Внедрение AMOCRM систем",
        des: [
            {

                id: 1,
                bulletPoint: 'Для достижения максимальных результатов, чтобы сэкономить рабочее время Ваших сотрудников и обеспечить бесперебойное обслуживание клиентов мы поможем внедрить CRM систему, а также обеспечим полное сопровождение.'
            }
        ],
        price: 1000000
    },
    {
        id: 2,
        icon: SERVICE2,
        name: "Разработка мобильных приложений",
        des: [
            {

                id: 1,
                bulletPoint: 'Если основная часть Ваших клиентов активно пользуется мобильными гаджетами, а Вы хотите упростить бизнес- процессы – рекомендуем разработку мобильного приложения для Вашего бизнеса.Современный дизайн, понятный интерфейс и удобный функционал создадут наши разработчики'
            }
        ],
        price: 1000000
    },
    {
        id: 3,
        icon: SERVICE3,
        name: "IP телефония",
        des: [
            {

                id: 1,
                bulletPoint: 'Чтобы всегда быть на связи со своими клиентами и не упустить ни одного важного звонка, наши специалисты подключат для Вас IP телефонию. Это современное и удобное решение для кол-центров отделов продаж и других предприятий.'
            }
        ],
        price: 1000000
    },
    {
        id: 4,
        icon: SERVICE4,
        name: "Корпоративный сайт",
        des: [
            {

                id: 1,
                bulletPoint: 'Разработка продающих страниц и внедрение CRM систем'
            },
            {

                id: 2,
                bulletPoint: 'Многостраничный сайт, адаптированный под все виды устройств'
            },
            {

                id: 3,
                bulletPoint: 'Разработка продающих страниц и внедрение CRM систем'
            },
            {

                id: 4,
                bulletPoint: 'Создание каталогов, галереи и других нужных виджетов и компонентов'
            }
        ],
        price: 1000000
    },
    {
        id: 5,
        icon: SERVICE5,
        name: "Интернет-магазин",
        des: [
            {

                id: 1,
                bulletPoint: 'Разработка уникального современного дизайна'
            },
            {

                id: 2,
                bulletPoint: 'Удобная навигация'
            },
            {

                id: 3,
                bulletPoint: 'Инструменты для онлайн-покупок, включая IP телефонию'
            },
            {

                id: 4,
                bulletPoint: 'Заполнение каталога и галереи товаров'
            }
        ],
        price: 1000000
    },
    {
        id: 6,
        icon: SERVICE6,
        name: "Сайт-визитка (Landing Page)",
        des: [
            {

                id: 1,
                bulletPoint: 'Современный адаптивный дизайн'
            },
            {

                id: 2,
                bulletPoint: 'Разработка продающего текста'
            },
            {

                id: 3,
                bulletPoint: 'Создание удобной структуры и инфографики'
            },
            {

                id: 4,
                bulletPoint: 'Внедрение формы обратной связи и других виджетов'
            }
        ],
        price: 1000000
    },
    {
        id: 8,
        icon: SERVICE7,
        name: "Telegram",
        des: [
            {

                id: 1,
                bulletPoint: 'Telegram бот для реализации заказа с магазинов и возможности оформления доставки'
            },
            {

                id: 2,
                bulletPoint: 'Внедрение Telegram бота в ваш бизнес'
            },
            {

                id: 3,
                bulletPoint: 'Создание Telegram бота для любой сферы бизнеса '
            },
            {

                id: 4,
                bulletPoint: 'Создание рекламного Telegram бота'
            }
        ],
        price: 1000000
    },
    {
        id: 9,
        icon: SERVICE8,
        name: "Имидж сайт",
        des: [
            {

                id: 1,
                bulletPoint: 'Уникальный решения по дизайну'
            },
            {

                id: 2,
                bulletPoint: 'Необычные элементы, подчеркивающие индивидуальность'
            },
            {

                id: 3,
                bulletPoint: 'Оригинальные запоминающиеся элементы вёрстки'
            },
            {

                id: 4,
                bulletPoint: 'Тщательная проработка ассоциаций с Вашим брендом'
            }
        ],
        price: 1000000
    },
]

export const team: Array<{ id: number, name: string, img: string, profession: string }> = [
    {
        id: 1,
        img: TEAM1,
        name: "Алишер",
        profession: "Коммерческий Директор"
    },
    {
        id: 2,
        img: TEAM2,
        name: "Магомед",
        profession: "Web Designer"
    },
    {
        id: 3,
        img: TEAM3,
        name: "Евгений",
        profession: "Senior Backend Developer"
    },
    {
        id: 4,
        img: TEAM4,
        name: "Наталия",
        profession: "CEO"
    }, 
    {
        id: 5,
        img: TEAM5,
        name: "Амалия",
        profession: "Офис Менеджер"
    }, 
    {
        id: 6,
        img: TEAM6,
        name: "Абдурауф",
        profession: "Менеджер По Продажам"
    },
]

export const offers: Array<{ id: number, name: string }> = [
    {
        id: 1,
        name: "Продвижение сайта"
    },
    {
        id: 2,
        name: "Поддержка сайта"
    },
    {
        id: 3,
        name: "Создание сайта"
    },
    {
        id: 4,
        name: "Мобильная разработка"
    },
    {
        id: 5,
        name: "IP телефония"
    },
    {
        id: 6,
        name: "Внедрение CRM"
    },
    {
        id: 7,
        name: "Другое"
    },
]

export const footerData: Array<{ id: number, name: string, list: Array<{ id: number, name: string }> }> = [
    {
        id: 1,
        name: "Стандарты обслуживания",
        list: [
            {
                id: 1,
                name: "Основные стандарты"
            },
            {
                id: 2,
                name: "Оценка времени"
            },
            {
                id: 3,
                name: "Создание сайтов с нуля"
            }
        ]
    },
    {
        id: 2,
        name: "Тарифы",
        list: [
            {
                id: 1,
                name: "Абонемент"
            },
            {
                id: 2,
                name: "Депозитный"
            },
            {
                id: 3,
                name: "Абонемент +"
            }
        ]
    },
    {
        id: 3,
        name: "Наши услуги",
        list: [
            {
                id: 1,
                name: "Список услуг"
            },
            {
                id: 2,
                name: "Форма заполнения"
            }
        ]
    },
    {
        id: 4,
        name: "О компании",
        list: [
            {
                id: 1,
                name: "Компания IT Key"
            },
            {
                id: 2,
                name: "Миссия компании"
            },
            {
                id: 3,
                name: "Новости"
            }
        ]
    }
]

export const clients: Array<{ id: number, img: string }> = [
    {
        id: 1,
        img: CLIENT1
    },
    {
        id: 2,
        img: CLIENT2
    },
    {
        id: 3,
        img: CLIENT3
    },
    {
        id: 4,
        img: CLIENT4
    },
    {
        id: 5,
        img: CLIENT5
    },
    {
        id: 6,
        img: CLIENT6
    },
]
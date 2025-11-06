
import { LightningElement } from 'lwc';

export default class CompanyDatatable extends LightningElement {
    columns = [
        {
            label: 'Company Name',
            fieldName: 'name',
            type: 'text'
        },
        {
            label: 'Revenue',
            fieldName: 'revenue',
            type: 'currency',
            typeAttributes: {
                currencyCode: 'USD',
                currencyDisplayAs: 'symbol'
            }
        },
        {
            label: 'Growth YOY',
            fieldName: 'growth',
            type: 'percent',
            cellAttributes: {
                alignment: 'left'
            }
        },
        {
            label: 'CEO Image',
            fieldName: 'ceoImage',
            type: 'image',
            typeAttributes: {
                alt: 'CEO portrait',
                height: 50,
                width: 50,
                variant: 'circle'
            }
        }
    ];

    companies = [
        {
            id: '1',
            name: 'Amazon',
            revenue: 386064000000,
            growth: 0.09,
            ceoImage: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Andy_Jassy.jpg'
             },
        {
            id: '2',
            name: 'Apple',
            revenue: 383285000000,
            growth: 0.028,
            ceoImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvUrviSRfScXniMLzVJGDm6Ldwkb8JvHVcg&s'
        },
        {
            id: '3',
            name: 'Tesla',
            revenue: 81462000000,
            growth: 0.19,
            ceoImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEE0e1Je82q1OnfPf63TSoOZ9PmOhsyHzBg&s'
        },
        {
            id: '4',
            name: 'Microsoft',
            revenue: 198270000000,
            growth: 0.075,
            ceoImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEE0e1Je82q1OnfPf63TSoOZ9PmOhsyHzBg&s'
        },
        {
            id: '5',
            name: 'Google',
            revenue: 279800000000,
            growth: 0.10,
            ceoImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg'
        },
        {
            id: '6',
            name: 'Meta',
            revenue: 116609000000,
            growth: 0.016,
            ceoImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwIU8rKQaZKZ9mmTucashfg0ldpSH3ut44w&s'
        },
        {
            id: '7',
            name: 'Netflix',
            revenue: 31697000000,
            growth: 0.065,
            ceoImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Gregory_K._Peters_%28cropped%29.jpg'
        },
        {
            id: '8',
            name: 'Adobe',
            revenue: 17681000000,
            growth: 0.10,
            ceoImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Shantanu_Narayen_-_the_CEO_of_Adobe_Inc.jpg/330px-Shantanu_Narayen_-_the_CEO_of_Adobe_Inc.jpg'
        },
        {
            id: '9',
            name: 'Intel',
            revenue: 54228e6,
            growth: -0.14,
            ceoImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pat_Gelsinger.jpg/330px-Pat_Gelsinger.jpg'
        },
        {
            id: '10',
            name: 'IBM',
            revenue: 60530e6,
            growth: 0.022,
            ceoImage: 'https://media.licdn.com/dms/image/v2/C5603AQGpaP3caYAF3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1654722663210?e=1747872000&v=beta&t=8xaKaf18Wiho63a2cIv7ql8535Z3pGVWiMIGqjFWjnA'
        }
    ];
}
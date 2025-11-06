import { LightningElement, track } from 'lwc';

export default class CompanyRevenueDashboard extends LightningElement {
    @track companies = [
        { id: 1, name: 'Amazon', revenue: 469.8, growth: 9.4, ceoImage: 'https://example.com/amazon_ceo.jpg' },
        { id: 2, name: 'Apple', revenue: 365.8, growth: 8.5, ceoImage: 'https://example.com/apple_ceo.jpg' },
        { id: 3, name: 'Tesla', revenue: 53.8, growth: 87.0, ceoImage: 'https://example.com/tesla_ceo.jpg' },
        { id: 4, name: 'Microsoft', revenue: 198.3, growth: 17.5, ceoImage: 'https://example.com/microsoft_ceo.jpg' },
        { id: 5, name: 'Google', revenue: 282.8, growth: 41.0, ceoImage: 'https://example.com/google_ceo.jpg' },
        { id: 6, name: 'Meta', revenue: 117.9, growth: 21.0, ceoImage: 'https://example.com/meta_ceo.jpg' },
        { id: 7, name: 'Netflix', revenue: 29.7, growth: 19.0, ceoImage: 'https://example.com/netflix_ceo.jpg' },
        { id: 8, name: 'Adobe', revenue: 17.6, growth: 22.0, ceoImage: 'https://example.com/adobe_ceo.jpg' },
        { id: 9, name: 'Intel', revenue: 79.0, growth: 5.0, ceoImage: 'https://example.com/intel_ceo.jpg' },
        { id: 10, name: 'IBM', revenue: 57.4, growth: 3.0, ceoImage: 'https://example.com/ibm_ceo.jpg' }
    ];

    columns = [
        { label: 'Name', fieldName: 'name', type: 'text' },
        { label: 'Revenue', fieldName: 'revenue', type: 'currency' },
        { label: 'Growth YOY', fieldName: 'growth', type: 'percent' },
        { label: 'CEO Image', fieldName: 'ceoImage', type: 'image', typeAttributes: { alt: 'CEO Image', height: 50, width: 50 } }
    ];
}
export type Product = {
    id: string; //sku
    category_id: string; //spozywka mototryzacja budownictwo
    type_id: string; //smar spray klej silikon
    provider_id: string; //molykote krytox cx80 rocol
    name: string;
    image_url: string;
    price: number;
    amount: number;
    date: string; //20-08-2000 10:33
    status:'on'|'off';
};

export type LatestProduct = Pick<Product, 'id'|'name'|'image_url'>

export type AmountOfProducts = Omit<Product, 'amount'> & {
    amount: number;
};

export type ProductTable = {
    id: string;
    name: string; 
    price: number;
    image_url: string;
    date: string;
    amount: number;
    status:'on'|'off';
}

type Customer = {
    email: string;
    name: string;
}

type CustomerList = {
    name: IDBCursor;
    value: Customer;
}

type TrackingItems = {
    customer_id: ID;
    customer: Customer;
    items: Item[];
}

type Item = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
}

type Order = {
    carrier: string;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    trackingItems: TrackingItems;
    Lat: number;
    Lng: number;
    Address: string;
    City: string;
}

type OrderResponse = {
    value: Order;
}
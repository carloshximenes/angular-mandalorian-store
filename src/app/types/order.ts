type OrderItemType = {
  productId: string;
  quantity: number;
};

export type OrderType = {
  name: string;
  deliveryAddress: string;
  items: OrderItemType[];
};

import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { GET_ORDERS } from "../graphql/queries";

function useCostumerOrders(userId: string) {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  /**
   * Si cambia la data o el userId, se vuelve a ejecutar este código
   */
  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingItems: value.trackingItems,
      Lat: value.Lat,
      Lng: value.Lng,
      Address: value.Address,
      City: value.City,
    }));

    const customerOrders = orders.filter(
      (order) => order.trackingItems.customer_id === userId
    );
    setOrders(customerOrders);
  }, [data, userId]);

  return {loading, error, orders};
}

export default useCostumerOrders;

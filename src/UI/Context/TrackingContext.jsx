import React, { createContext, useContext, useState } from 'react';

const TrackingContext = createContext();

export const useTracking = () => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }
  return context;
};

export const TrackingProvider = ({ children }) => {
  const [orders, setOrders] = useState({
    GGV12345: {
      id: 'GGV12345',
      product: 'Luxury Cotton Fabric',
      image: '/src/assets/Fabric1.jpg',
      status: 'processing',
      orderDate: '2024-01-15',
      estimatedDelivery: '2024-01-22',
      progress: 25,
      timeline: [
        { step: 'Order Placed', completed: true, date: '2024-01-15' },
        { step: 'Processing', completed: true, date: '2024-01-16' },
        { step: 'Shipped', completed: false, date: null },
        { step: 'Delivered', completed: false, date: null }
      ]
    },
    GGV67890: {
      id: 'GGV67890',
      product: 'Silky Ankara Print',
      image: '/src/assets/Fabric2.jpg',
      status: 'shipped',
      orderDate: '2024-01-10',
      estimatedDelivery: '2024-01-18',
      progress: 75,
      timeline: [
        { step: 'Order Placed', completed: true, date: '2024-01-10' },
        { step: 'Processing', completed: true, date: '2024-01-11' },
        { step: 'Shipped', completed: true, date: '2024-01-14' },
        { step: 'Delivered', completed: false, date: null }
      ]
    },
    GGV54321: {
      id: 'GGV54321',
      product: 'Classic Wool Blend',
      image: '/src/assets/Fabric3.webp',
      status: 'delivered',
      orderDate: '2024-01-05',
      estimatedDelivery: '2024-01-12',
      progress: 100,
      timeline: [
        { step: 'Order Placed', completed: true, date: '2024-01-05' },
        { step: 'Processing', completed: true, date: '2024-01-06' },
        { step: 'Shipped', completed: true, date: '2024-01-09' },
        { step: 'Delivered', completed: true, date: '2024-01-12' }
      ]
    },
    GGV98765: {
      id: 'GGV98765',
      product: 'Elegant Satin Fabric',
      image: '/src/assets/Fabric4.jpg',
      status: 'pending',
      orderDate: '2024-01-20',
      estimatedDelivery: '2024-01-27',
      progress: 0,
      timeline: [
        { step: 'Order Placed', completed: true, date: '2024-01-20' },
        { step: 'Processing', completed: false, date: null },
        { step: 'Shipped', completed: false, date: null },
        { step: 'Delivered', completed: false, date: null }
      ]
    }
  });

  const getOrder = (trackingId) => {
    return orders[trackingId?.toUpperCase()];
  };

  const createOrder = (orderData) => {
    const trackingId = `GGV${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    const newOrder = {
      id: trackingId,
      ...orderData,
      status: 'pending',
      orderDate: new Date().toISOString().split('T')[0],
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      progress: 0,
      timeline: [
        { step: 'Order Placed', completed: true, date: new Date().toISOString().split('T')[0] },
        { step: 'Processing', completed: false, date: null },
        { step: 'Shipped', completed: false, date: null },
        { step: 'Delivered', completed: false, date: null }
      ]
    };

    setOrders(prev => ({
      ...prev,
      [trackingId]: newOrder
    }));

    return trackingId;
  };

  const updateOrderStatus = (trackingId, status) => {
    setOrders(prev => {
      const order = prev[trackingId];
      if (!order) return prev;

      const statusMap = {
        'pending': { progress: 0, timelineIndex: 0 },
        'processing': { progress: 25, timelineIndex: 1 },
        'shipped': { progress: 75, timelineIndex: 2 },
        'delivered': { progress: 100, timelineIndex: 3 }
      };

      const { progress, timelineIndex } = statusMap[status] || { progress: 0, timelineIndex: 0 };
      
      const updatedTimeline = order.timeline.map((item, index) => ({
        ...item,
        completed: index <= timelineIndex,
        date: index <= timelineIndex && !item.date ? new Date().toISOString().split('T')[0] : item.date
      }));

      return {
        ...prev,
        [trackingId]: {
          ...order,
          status,
          progress,
          timeline: updatedTimeline
        }
      };
    });
  };

  const getStatusMessage = (status) => {
    const messages = {
      'pending': 'Pending – Awaiting confirmation.',
      'processing': 'Processing – Your order is being prepared.',
      'shipped': 'Shipped – Your order is on its way!',
      'delivered': 'Delivered – Your order has arrived.'
    };
    return messages[status] || 'Unknown status';
  };

  return (
    <TrackingContext.Provider value={{
      orders,
      getOrder,
      createOrder,
      updateOrderStatus,
      getStatusMessage
    }}>
      {children}
    </TrackingContext.Provider>
  );
};
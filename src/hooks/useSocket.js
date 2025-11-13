'use client';

import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

/**
 * useSocket Hook - Manage Socket.io connection
 * Provides real-time event handling for activity updates
 */
export default function useSocket(employeeId) {
  const [connected, setConnected] = useState(false);
  const [lastActivity, setLastActivity] = useState(null);
  const [onlineEmployees, setOnlineEmployees] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize Socket.io connection
    const socketURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    
    socketRef.current = io(socketURL, {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });

    const socket = socketRef.current;

    // Connection events
    socket.on('connect', () => {
      console.log('✅ Socket.io connected');
      setConnected(true);
      
      // Notify server that employee is online
      if (employeeId) {
        socket.emit('employee_online', employeeId);
      }
    });

    socket.on('disconnect', () => {
      console.log('❌ Socket.io disconnected');
      setConnected(false);
    });

    socket.on('connect_error', (error) => {
      console.error('Socket.io connection error:', error);
      setConnected(false);
    });

    // Activity update events
    socket.on('activity_update', (data) => {
      console.log('📊 Activity update received:', data);
      setLastActivity(data);
    });

    // Employee status change events
    socket.on('employee_status_change', (data) => {
      console.log('👤 Employee status changed:', data);
      
      // Update online employees list
      setOnlineEmployees((prev) => {
        if (data.status === 'online') {
          // Add employee if not already in list
          if (!prev.some((emp) => emp.employeeId === data.employeeId)) {
            return [...prev, { employeeId: data.employeeId, timestamp: data.timestamp }];
          }
        } else {
          // Remove employee from list
          return prev.filter((emp) => emp.employeeId !== data.employeeId);
        }
        return prev;
      });
    });

    // Cleanup on unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [employeeId]);

  // Method to emit activity log event
  const emitActivityLog = (activityData) => {
    if (socketRef.current && connected) {
      socketRef.current.emit('activity_logged', activityData);
    }
  };

  return {
    connected,
    lastActivity,
    onlineEmployees,
    emitActivityLog,
    socket: socketRef.current,
  };
}

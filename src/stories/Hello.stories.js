import React from 'react';
import Hello, { IsLoading } from '../compoenents/Hello';

export default {
  title: 'Hello Story',
  // component: Hello,
  // title: 'Loading Story',
  // component: IsLoading,
};

export function HelloShaarif() {
  return <Hello name='Shaarif' />;
}

export function TestUser() {
  return <Hello name='Test User' />;
}

export function NotLoading() {
  return <IsLoading condition={false} />;
}

export function Loading() {
  return <IsLoading condition={true} />;
}

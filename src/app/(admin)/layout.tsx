import React from 'react';
import Header from '../components/Header';

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Header */}
      <Header />
      <div>{/* Sidebar*/}</div>
      <div>{children}</div>
    </div>
  );
}

export default AdminLayout;

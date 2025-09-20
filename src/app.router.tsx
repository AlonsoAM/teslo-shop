import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { lazy } from "react";

const AuthLayoutLazy = lazy(() => import('./auth/layouts/AuthLayout'));
const AdminLayoutLazy = lazy(() => import('./admin/layouts/AdminLayout'));


export const appRouter = createBrowserRouter([
  // Main routes
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'product/:isSlug',
        element: <ProductPage />
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />
      }
    ],
  },
  // Auth routes
  {
    path: '/auth',
    element: <AuthLayoutLazy />,
    children: [
      {
        index: true,
        element: <Navigate to='/auth/login' replace />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },
  // Admin routes
  {
    path: '/admin',
    element: <AdminLayoutLazy />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: 'products',
        element: <AdminProductsPage />
      },
      {
        path: 'products/:id',
        element: <AdminProductPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  }
])
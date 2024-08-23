/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsIndexImport } from './routes/products/index'
import { Route as ProductsProductIdImport } from './routes/products/$productId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
  path: '/products/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsProductIdRoute = ProductsProductIdImport.update({
  path: '/products/$productId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId': {
      id: '/products/$productId'
      path: '/products/$productId'
      fullPath: '/products/$productId'
      preLoaderRoute: typeof ProductsProductIdImport
      parentRoute: typeof rootRoute
    }
    '/products/': {
      id: '/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ProductsProductIdRoute,
  ProductsIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/products/$productId",
        "/products/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/products/$productId": {
      "filePath": "products/$productId.tsx"
    },
    "/products/": {
      "filePath": "products/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

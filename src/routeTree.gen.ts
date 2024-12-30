/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as LoginRouteImport } from './routes/loginRoute'
import { Route as JoinRouteImport } from './routes/joinRoute'
import { Route as HomeImport } from './routes/home'
import { Route as DiscussionRouteImport } from './routes/discussionRoute'
import { Route as AboutImport } from './routes/about'
import { Route as PostsPostIdImport } from './routes/posts.$postId'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const LoginRouteRoute = LoginRouteImport.update({
  id: '/loginRoute',
  path: '/loginRoute',
  getParentRoute: () => rootRoute,
} as any)

const JoinRouteRoute = JoinRouteImport.update({
  id: '/joinRoute',
  path: '/joinRoute',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const DiscussionRouteRoute = DiscussionRouteImport.update({
  id: '/discussionRoute',
  path: '/discussionRoute',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  id: '/posts/$postId',
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/discussionRoute': {
      id: '/discussionRoute'
      path: '/discussionRoute'
      fullPath: '/discussionRoute'
      preLoaderRoute: typeof DiscussionRouteImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/joinRoute': {
      id: '/joinRoute'
      path: '/joinRoute'
      fullPath: '/joinRoute'
      preLoaderRoute: typeof JoinRouteImport
      parentRoute: typeof rootRoute
    }
    '/loginRoute': {
      id: '/loginRoute'
      path: '/loginRoute'
      fullPath: '/loginRoute'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/posts/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/about': typeof AboutRoute
  '/discussionRoute': typeof DiscussionRouteRoute
  '/home': typeof HomeRoute
  '/joinRoute': typeof JoinRouteRoute
  '/loginRoute': typeof LoginRouteRoute
  '/search': typeof SearchRoute
  '/posts/$postId': typeof PostsPostIdRoute
}

export interface FileRoutesByTo {
  '/about': typeof AboutRoute
  '/discussionRoute': typeof DiscussionRouteRoute
  '/home': typeof HomeRoute
  '/joinRoute': typeof JoinRouteRoute
  '/loginRoute': typeof LoginRouteRoute
  '/search': typeof SearchRoute
  '/posts/$postId': typeof PostsPostIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/about': typeof AboutRoute
  '/discussionRoute': typeof DiscussionRouteRoute
  '/home': typeof HomeRoute
  '/joinRoute': typeof JoinRouteRoute
  '/loginRoute': typeof LoginRouteRoute
  '/search': typeof SearchRoute
  '/posts/$postId': typeof PostsPostIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/about'
    | '/discussionRoute'
    | '/home'
    | '/joinRoute'
    | '/loginRoute'
    | '/search'
    | '/posts/$postId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/about'
    | '/discussionRoute'
    | '/home'
    | '/joinRoute'
    | '/loginRoute'
    | '/search'
    | '/posts/$postId'
  id:
    | '__root__'
    | '/about'
    | '/discussionRoute'
    | '/home'
    | '/joinRoute'
    | '/loginRoute'
    | '/search'
    | '/posts/$postId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AboutRoute: typeof AboutRoute
  DiscussionRouteRoute: typeof DiscussionRouteRoute
  HomeRoute: typeof HomeRoute
  JoinRouteRoute: typeof JoinRouteRoute
  LoginRouteRoute: typeof LoginRouteRoute
  SearchRoute: typeof SearchRoute
  PostsPostIdRoute: typeof PostsPostIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  AboutRoute: AboutRoute,
  DiscussionRouteRoute: DiscussionRouteRoute,
  HomeRoute: HomeRoute,
  JoinRouteRoute: JoinRouteRoute,
  LoginRouteRoute: LoginRouteRoute,
  SearchRoute: SearchRoute,
  PostsPostIdRoute: PostsPostIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/about",
        "/discussionRoute",
        "/home",
        "/joinRoute",
        "/loginRoute",
        "/search",
        "/posts/$postId"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/discussionRoute": {
      "filePath": "discussionRoute.tsx"
    },
    "/home": {
      "filePath": "home.tsx"
    },
    "/joinRoute": {
      "filePath": "joinRoute.tsx"
    },
    "/loginRoute": {
      "filePath": "loginRoute.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
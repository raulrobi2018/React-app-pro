import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName1 */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName2 */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName3 */'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: "/lazy-1",
        path: 'lazy1',
        component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: "/lazy-2",
        path: 'lazy2',
        component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: "/lazy-3",
        path: 'lazy3',
        component: Lazy3,
        name: 'Lazy-3'
    }
]
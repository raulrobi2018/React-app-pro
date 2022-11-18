import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/components/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: "/lazyload/*",
        path: '/lazyload/lazy1',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: "/no-lazy",
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No-lazy'
    },
]
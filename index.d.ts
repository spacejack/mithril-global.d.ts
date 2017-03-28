// Type definitions for Mithril 1.1 (Global)
// Project: http://lhorie.github.io/mithril/
// Definitions by: Leo Horie <https://github.com/lhorie>, Chris Bowdon <https://github.com/cbowdon>, Mike Linkovich <https://github.com/spacejack>, András Parditka <https://github.com/andraaspar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Global Mithril types

import * as mithril from 'mithril';
import * as stream from 'mithril/stream';

declare namespace MithrilGlobal {
	export type Lifecycle<A,S> = mithril.Lifecycle<A,S>;
	export type Hyperscript = mithril.Hyperscript;
	export type RouteResolver<S,P> = mithril.RouteResolver<S,P>;
	export type RouteDefs = mithril.RouteDefs;
	export type RouteOptions = mithril.RouteOptions;
	export type Route = mithril.Route;
	export type Mount = mithril.Mount;
	export type WithAttr = mithril.WithAttr;
	export type ParseQueryString = mithril.ParseQueryString;
	export type BuildQueryString = mithril.BuildQueryString;
	export type RequestOptions<T> = mithril.RequestOptions<T>;
	export type RequestOptionsAll<T> = mithril.RequestOptionsAll<T>;
	export type Request = mithril.Request;
	export type JsonpOptions = mithril.JsonpOptions;
	export type JsonpOptionsAll = mithril.JsonpOptionsAll;
	export type Jsonp = mithril.Jsonp;
	export type RequestService = mithril.RequestService;
	export type Render = mithril.Render;
	export type RenderService = mithril.RenderService;
	export type Redraw = mithril.Redraw;
	export type RedrawService = mithril.RedrawService;
	export type Child = mithril.Child;
	export type ChildArray = mithril.ChildArray;
	export type Children = mithril.Children;
	export type ChildArrayOrPrimitive = mithril.ChildArrayOrPrimitive;
	export type Vnode<A,S> = mithril.Vnode<A,S>;
	export type VnodeDOM<A,S> = mithril.VnodeDOM<A,S>;
	export type CVnode<A> = mithril.CVnode<A>;
	export type CVnodeDOM<A> = mithril.CVnodeDOM<A>;
	export type Component<A,S> = mithril.Component<A,S>;
	export type Comp<A,S> = mithril.Comp<A,S>
	export type ClassComponent<A> = mithril.ClassComponent<A>;
	export type FactoryComponent<A> = mithril.FactoryComponent<A>;
	export type Attributes = mithril.Attributes;
	export type Stream<T> = stream.Stream<T>;
	export type Static = mithril.Static & {stream: stream.Static};
}

declare const MithrilGlobal: MithrilGlobal.Static;
export = MithrilGlobal;
export as namespace m;

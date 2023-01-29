/*!
    @e53e04ac/ipp5-adlibitum-client/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Axios } from 'axios';
import { Request as ExpressRequest } from 'express';
import { Response as ExpressResponse } from 'express';
import { NextFunction as ExpressNextFunction } from 'express';

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Ipp5AdlibitumClient {

    type EventSpecs = Record<never, never>;

    type HttpRequestData = {
        readonly method: string;
        readonly url: string;
        readonly headers: Record<string, undefined | string>;
        readonly body: Buffer;
    };

    type HttpResponseData = {
        readonly status: number;
        readonly statusText: string;
        readonly headers: Record<string, undefined | string>;
        readonly body: Buffer;
    };

    type Script<X, U> = {
        (params: {
            readonly req: ExpressRequest<unknown, unknown, { readonly x: X; }, unknown, Record<string, unknown>>;
            readonly res: ExpressResponse<unknown, Record<string, unknown>>;
            readonly next: ExpressNextFunction;
            readonly script: Script<X, U>;
            readonly x: X;
            readonly u: U;
        }): Promise<void>;
    };

    type ScriptConstructor<X, U> = {
        (params: {
            readonly req: ExpressRequest<unknown, unknown, { readonly x: X; }, unknown, Record<string, unknown>>;
            readonly res: ExpressResponse<unknown, Record<string, unknown>>;
            readonly next: ExpressNextFunction;
            readonly scriptConstructor: ScriptConstructor<X, U>;
            readonly x: X;
            readonly u: U;
        }): Promise<Script<X, U>>;
    };

    type Options<U> = {
        readonly uri: ValueOrGet<string>;
        readonly clientUrn: ValueOrGet<string>;
        readonly serverUrn: ValueOrGet<string>;
        readonly clientPrivateKey: ValueOrGet<string>;
        readonly tenantId: ValueOrGet<string>;
        readonly clientId: ValueOrGet<string>;
        readonly __GnericTypes__?: {
            readonly U: U;
        };
    };

    type _Self<U> = {
        readonly options: Get<Options<U>>;
        readonly _options: Get<unknown>;
        readonly axios: Get<Axios>;
        readonly createRequestHash: {
            (request: HttpRequestData): Promise<string>;
        };
        readonly createToken: {
            (params: {
                readonly tenantId: string;
                readonly clientId: string;
                readonly requestHash: string;
            }): Promise<string>;
        };
        readonly request: {
            (request: HttpRequestData): Promise<HttpResponseData>;
        };
    };

    type Self<U> = EventEmitter<EventSpecs> & {
        readonly _Ipp5AdlibitumClient: Get<_Self<U>>;
        readonly request: {
            (request: HttpRequestData): Promise<HttpResponseData>;
        };
        readonly patch: {
            <X>(x: X, f: ScriptConstructor<X, U>): Promise<HttpResponseData>;
        };
        readonly run: {
            <X, Y>(x: X, f: {
                (x: X, u: U): Promise<Y>;
            }): Promise<Y>;
        };
        readonly echo: {
            <X>(x: X): Promise<X>;
        };
        readonly ping: {
            (): Promise<{
                readonly c0: number;
                readonly s1: number;
                readonly c2: number;
                readonly c2c0: number;
                readonly c1: number;
                readonly c1s1: number;
                readonly s1c1: number;
                readonly s0: number;
                readonly s2: number;
            }>;
        };
    };

    type Constructor = {
        <U>(options: Options<U>): Self<U>;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5AdlibitumClient<U> = Ipp5AdlibitumClient.Self<U>;

export declare const Ipp5AdlibitumClient: Ipp5AdlibitumClient.ConstructorWithCompanion;

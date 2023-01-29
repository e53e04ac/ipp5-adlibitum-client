/*!
    @e53e04ac/ipp5-adlibitum-client/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { createHash as cryptoCreateHash } from 'node:crypto';
import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { Axios } from 'axios';
import { default as jsonwebtoken } from 'jsonwebtoken';

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';
import { unwrap } from 'hold';

const { sign: jsonwebtokenSign } = jsonwebtoken;

/** @type {import('.').Ipp5AdlibitumClient.Constructor} */
const constructor = ((options) => {

    /** @typedef {Required<typeof options>['__GnericTypes__']} GenericTypes */
    /** @typedef {GenericTypes['U']} U */

    const _options = ({
        uri: hold(() => {
            return unwrap(options.uri).replace(/\/$/, '');
        }),
        clientUrn: hold(() => {
            return unwrap(options.clientUrn);
        }),
        serverUrn: hold(() => {
            return unwrap(options.serverUrn);
        }),
        clientPrivateKey: hold(() => {
            return unwrap(options.clientPrivateKey);
        }),
        tenantId: hold(() => {
            return unwrap(options.tenantId);
        }),
        clientId: hold(() => {
            return unwrap(options.clientId);
        }),
    });

    /** @type {import('.').Ipp5AdlibitumClient._Self<U>} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        axios: hold(() => {
            const it = new Axios({});
            return it;
        }),
        request: (async (httpRequestData) => {
            const response = await _self.axios().request({
                method: httpRequestData.method,
                url: httpRequestData.url,
                headers: httpRequestData.headers,
                data: httpRequestData.body,
                responseType: 'arraybuffer',
            });
            const httpResponseData = {
                status: response.status,
                statusText: response.statusText,
                headers: Object.fromEntries(Object.entries(response.headers)),
                body: response.data,
            };
            return httpResponseData;
        }),
        createRequestHash: (async (httpRequestData) => {
            return cryptoCreateHash('sha512').
                update(Buffer.from(httpRequestData.method, 'utf8')).
                update(Buffer.from([0])).
                update(Buffer.from(httpRequestData.url, 'utf8')).
                update(Buffer.from([0])).
                update(httpRequestData.body).
                digest().
                toString('base64url');
        }),
        createToken: (async ({ tenantId, clientId, requestHash }) => {
            return await new Promise((resolve, reject) => {
                jsonwebtokenSign({
                    tenantId,
                    clientId,
                    requestHash,
                }, _options.clientPrivateKey(), {
                    algorithm: 'ES512',
                    issuer: _options.clientUrn(),
                    audience: _options.serverUrn(),
                    expiresIn: 30,
                    notBefore: -30,
                    jwtid: cryptoRandomUUID({ disableEntropyCache: true }),
                }, (error, encoded) => {
                    if (error != null || encoded == null) {
                        reject(error);
                        return;
                    }
                    resolve(encoded);
                });
            });
        }),
    });

    /** @type {import('.').Ipp5AdlibitumClient.Self<U>} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5AdlibitumClient: (() => {
            return _self;
        }),
        request: (async (httpRequestData) => {
            const method = httpRequestData.method;
            const url = `${_options.uri()}${httpRequestData.url}`;
            const headers = httpRequestData.headers;
            const body = httpRequestData.body;
            const requestHash = await _self.createRequestHash({ method, url, headers, body });
            const tenantId = _options.tenantId();
            const clientId = _options.clientId();
            const token = await _self.createToken({ tenantId, clientId, requestHash });
            return await _self.request({ method, url, headers: { ...headers, 'token': token }, body });
        }),
        patch: (async (x, f) => {
            return await self.request({
                method: 'PATCH',
                url: '/',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: Buffer.from(JSON.stringify({
                    x,
                    f: f.toString(),
                }), 'utf8'),
            });
        }),
        run: (async (x, f) => {
            return await self.patch({
                x,
                f: f.toString(),
            }, async ({ x: { x, f }, u }) => {
                const y = await eval(f)(x, u);
                return (async ({ res }) => {
                    res.status(200).type('application/json').end(JSON.stringify(y));
                });
            }).then(({ status, statusText, headers, body }) => {
                if (status === 200) {
                    return JSON.parse(body.toString('utf8'));
                }
                console.error({ status, statusText, headers, body: body.toString() });
                throw new Error(`status: ${status}`);
            });
        }),
        echo: (async (x) => {
            return await self.run(x, async (x) => {
                return x;
            });
        }),
        ping: (async () => {
            return await self.run(Date.now(), async (c0) => {
                return { c0, s1: Date.now() };
            }).then(({ c0, s1 }) => {
                const c2 = Date.now();
                const c2c0 = c2 - c0;
                const c1 = c0 + c2c0;
                const c1s1 = c1 - s1;
                const s1c1 = s1 - c1;
                const s0 = c0 + c1s1;
                const s2 = c2 + c1s1;
                return { c0, s1, c2, c2c0, c1, c1s1, s1c1, s0, s2 };
            });
        }),
    });

    return self;

});

/** @type {import('.').Ipp5AdlibitumClient.Companion} */
const companion = ({});

/** @type {import('.').Ipp5AdlibitumClient.Companion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5AdlibitumClient };

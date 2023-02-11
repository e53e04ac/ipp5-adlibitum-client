# ipp5-adlibitum-client

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-client
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumClient } from 'e53e04ac/ipp5-adlibitum-client';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["axios"]);
    B_1(["e53e04ac/event-emitter"]);
    B_2(["e53e04ac/hold"]);
    B_3(["jsonwebtoken"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/express"]);
    B_5(["@types/jsonwebtoken"]);
    B_6(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  click B_0 "https://www.npmjs.org/package/axios/v/1.3.2";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_2 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_3 "https://www.npmjs.org/package/jsonwebtoken/v/9.0.0";
  click B_4 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_5 "https://www.npmjs.org/package/@types/jsonwebtoken/v/9.0.1";
  click B_6 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "node:crypto";
    B_0_0(["createHash"]);
    B_0_1(["randomUUID"]);
  end;
  subgraph "axios";
    B_1_0(["Axios"]);
  end;
  subgraph "jsonwebtoken";
    B_2_0(["default"]);
  end;
  subgraph "event-emitter";
    B_3_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
    B_4_1(["unwrap"]);
  end;
  B_0_0 ----> A;
  B_0_1 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_4_0 ----> A;
  B_4_1 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "axios";
    B_0_0(["Axios"]);
  end;
  subgraph "express";
    B_1_0(["Request"]);
    B_1_1(["Response"]);
    B_1_2(["NextFunction"]);
  end;
  subgraph "event-emitter";
    B_2_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_3_0(["Get"]);
    B_3_1(["ValueOrGet"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
  B_1_2 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
  B_3_1 ----> A;
~~~~~

# ipp5-adlibitum-client

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-client
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumClient<U> } from 'e53e04ac/ipp5-adlibitum-client';
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
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/684f3b21090807e48917ae6591611f4eb2b1e661";
  click B_2 "https://github.com/e53e04ac/hold/tree/67e5b60f9bb3221f8b200107c13e89a604a93631";
  click B_3 "https://www.npmjs.org/package/jsonwebtoken/v/9.0.0";
  click B_4 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_5 "https://www.npmjs.org/package/@types/jsonwebtoken/v/9.0.1";
  click B_6 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-client";
    E_0(["Ipp5AdlibitumClient"]);
  end;
  M(["index.mjs"])
  subgraph "node:crypto";
    I_0_0(["createHash"]);
    I_0_1(["randomUUID"]);
  end;
  subgraph "axios";
    I_1_0(["Axios"]);
  end;
  subgraph "jsonwebtoken";
    I_2_0(["default"]);
  end;
  subgraph "event-emitter";
    I_3_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
    I_4_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_4_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-client";
    E_0(["Ipp5AdlibitumClient<U>"]);
    E_1(["Ipp5AdlibitumClient"]);
  end;
  M(["index.d.ts"])
  subgraph "axios";
    I_0_0(["Axios"]);
  end;
  subgraph "express";
    I_1_0(["Request"]);
    I_1_1(["Response"]);
    I_1_2(["NextFunction"]);
  end;
  subgraph "event-emitter";
    I_2_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
    I_3_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_1_2;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~

# ipp5-adlibitum-client

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-client
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumClient } from 'e53e04ac/ipp5-adlibitum-client';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["axios"]);
    B_1(["event-emitter"]);
    B_2(["hold"]);
    B_3(["jsonwebtoken"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/express"]);
    B_5(["@types/jsonwebtoken"]);
    B_6(["@types/node"]);
  end;
  subgraph "github";
    C_1(["e53e04ac/event-emitter\n98fd492f5a6e31cd646d4b79e70035061165871f"]);
    C_2(["e53e04ac/hold\n6845a848f97733b8cd8a34bfc03c3bf040818aa8"]);
  end;
  subgraph "npmjs";
    C_0(["axios\n1.3.4"]);
    C_3(["jsonwebtoken\n9.0.0"]);
    C_4(["@types/express\n4.17.17"]);
    C_5(["@types/jsonwebtoken\n9.0.1"]);
    C_6(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  click C_0 "https://www.npmjs.com/package/axios/v/1.3.4";
  click C_1 "https://github.com/e53e04ac/event-emitter/tree/98fd492f5a6e31cd646d4b79e70035061165871f";
  click C_2 "https://github.com/e53e04ac/hold/tree/6845a848f97733b8cd8a34bfc03c3bf040818aa8";
  click C_3 "https://www.npmjs.com/package/jsonwebtoken/v/9.0.0";
  click C_4 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click C_5 "https://www.npmjs.com/package/@types/jsonwebtoken/v/9.0.1";
  click C_6 "https://www.npmjs.com/package/@types/node/v/18.14.1";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-client";
    E_0(["Ipp5AdlibitumClient"]);
  end;
  M["index.mjs"]
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
    E_0(["namespace Ipp5AdlibitumClient"]);
    E_1(["type Ipp5AdlibitumClient<U>"]);
    E_2(["const Ipp5AdlibitumClient"]);
  end;
  M["index.d.ts"]
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
  E_2 ----> M;
~~~~~

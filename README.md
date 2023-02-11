# ipp5-adlibitum-client

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-client
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumClient } from 'e53e04ac/ipp5-adlibitum-client';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-adlibitum-client"]);
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
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  A --reference--> B_6;
  click B_0 "https://www.npmjs.org/package/axios/v/1.3.2";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_2 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_3 "https://www.npmjs.org/package/jsonwebtoken/v/9.0.0";
  click B_4 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_5 "https://www.npmjs.org/package/@types/jsonwebtoken/v/9.0.1";
  click B_6 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-adlibitum-client"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:crypto"
    D0(["createHash"]);
    D1(["randomUUID"]);
  end;
  subgraph "axios"
    D2(["Axios"]);
  end;
  subgraph "jsonwebtoken"
    D3(["default"]);
  end;
  subgraph "event-emitter"
    D4(["EventEmitter"]);
  end;
  subgraph "hold"
    D5(["hold"]);
    D6(["unwrap"]);
    D10(["Get"]);
    D11(["ValueOrGet"]);
  end;
  subgraph "express"
    D7(["Request"]);
    D8(["Response"]);
    D9(["NextFunction"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D2 --import--> C1;
  D7 --import--> C1;
  D8 --import--> C1;
  D9 --import--> C1;
  D4 --import--> C1;
  D10 --import--> C1;
  D11 --import--> C1;
~~~~~

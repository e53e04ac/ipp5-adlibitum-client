# ipp5-adlibitum-client

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-client
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumClient } from 'e53e04ac/ipp5-adlibitum-client';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-adlibitum-client"]);
  B0(["axios"]);
  B1(["e53e04ac/event-emitter"]);
  B2(["e53e04ac/hold"]);
  B3(["jsonwebtoken"]);
  C0(["@types/express"]);
  C1(["@types/jsonwebtoken"]);
  C2(["@types/node"]);
  click B1 href "https://github.com/e53e04ac/event-emitter";
  click B2 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/ipp5-adlibitum-client";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
    C2 --import--> A;
  end;
~~~~~

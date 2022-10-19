import { Pirsch } from "pirsch-sdk";
import { PirschApiError } from "pirsch-sdk/common";

const client = new Pirsch({
    hostname: "example.com",
    clientId: "2wtB4v29U8Iu2IfZZaUGjONRzVnHKt1N",
    clientSecret: "9C0zKJjwYiBZBZeWY3E2eyPCELTUz8T4TCXN45n8tFTCsFSR8hpNF9uyfq0RkIUm"
});

client.domain().then(domain => {
    console.log(domain);

    if (domain instanceof PirschApiError) {
        console.error(domain.message);
        return;
    }

    const { id } = domain;

    client.activeVisitors({
        id,
        from: new Date("2022-09-01"),
        to: new Date("2022-09-27"),
        start: 0,
        scale: "day"
    }).then(stats => {
        console.dir(stats, { depth: Infinity });
    });

    client.visitors({
        id,
        from: new Date("2022-09-01"),
        to: new Date("2022-09-27"),
        start: 0,
        scale: "day"
    }).then(stats => {
        console.dir(stats, { depth: Infinity });
    });
});

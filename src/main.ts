import { Pirsch, PirschDomain } from "pirsch-sdk";

const client = new Pirsch({
    hostname: "example.com",
    clientId: "2wtB4v29U8Iu2IfZZaUGjONRzVnHKt1N",
    clientSecret: "9C0zKJjwYiBZBZeWY3E2eyPCELTUz8T4TCXN45n8tFTCsFSR8hpNF9uyfq0RkIUm"
});

client.domain().then(domain => {
    console.log(domain);

    client.activeVisitors({
        id: (domain as PirschDomain).id,
        from: new Date("2022-09-01"),
        to: new Date("2022-09-27"),
        start: 0,
        scale: "day"
    }).then(stats => {
        console.log(stats);
    });

    client.visitors({
        id: (domain as PirschDomain).id,
        from: new Date("2022-09-01"),
        to: new Date("2022-09-27"),
        start: 0,
        scale: "day"
    }).then(stats => {
        console.log(stats);
    });
});

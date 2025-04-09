import utils from '@eventCatalog/sdk';

const {writeDomain, writeServiceToDomain, writeEventToService, addServiceToDomain, addEventToService} = utils('/');

await writeDomain({
    id: "ExampleDomain",
    name: "ExampleDomain",
    version: '0.0.1',
    owners: '',
    badges: '',
    markdown: '',},
    {override: true}) 

await writeServiceToDomain({
     id: "ExampleService",
     name: "ExampleService",
     version: '0.0.1',
     owners: '',
     badges: '',
     markdown: '',},
     {id: "ExampleDomain"},
     {override: true}) 

await addServiceToDomain("ExampleDomain", {service: "ExampleService", version: '0.0.1}'});

await writeEventToService({
    id: "ExampleEvent",
    name: "ExampleEvent",
    version: '0.0.1',
    owners: '',
    badges: '',
    markdown: '',},
    {id: "ExampleService"})

await addEventToService("ExampleService", "receives", {event: "ExampleEvent", version: '0.0.1'});
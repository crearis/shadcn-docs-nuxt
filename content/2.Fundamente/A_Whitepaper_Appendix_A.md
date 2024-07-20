---
cssclasses:
  - paper
title: "1. Whitepaper: Overview"
---
> [!example] Whitepaper - Appendix A
> #       🔶 Theaterpedia 2024
> ###    Terminology, Mindset and Software Architecture

## Terminology

### Start with a set of fixed terms that describe the static structure

> [!cite] a basic problem (Brown 2023, p. 22)
> "I’ve witnessed groups of people having design discussions using terms like “component”
where they are clearly not talking about the same thing. 


> [!cite] and a basic solution  (Brown 2023, p. 22)
> "Each group needs to agree upon the vocabulary, terminology and
abstractions they are going to use. The notation can then evolve.
[...] my approach to tackling this problem is to introduce a shared vocabulary that we can use to describe our software. The primary aspect I’m interested in is the static structure. And I’m interested in the static structure from different levels of abstraction. Once this static structure is understood and in use, it’s easy to supplement it with other information to illustrate runtime/behavioural characteristics, infrastructure, deployment models, etc."


![[../X_Assets/Pasted image 20240608133350.png]]

#### Level 1: Software systems
"A software system is the highest level of abstraction, representing something that delivers
value to its users, whether they are human or not." (Brown 2023, p. 25)

##### Level 2: Containers (“runtime context”, “execution environment” or “deployable unit”)
Put simply, a container represents something that hosts code or data, like an application or a data store. A container is something that needs to be running in order for the overall software system to work. In real terms, a container is something like:
• Server-side web application: Odoo-Model-Instance + added Odoo GraphQL, Nitro-Pruvious-Server-Instance, useMemos-Server-Instance with Api
• Client-side web application: the Nuxt-Pruvious-Client-Instance, Odoo-Website, Odoo-Web-App, useMemos-Web-App
• Client-side desktop application: Obsidian Editor
• Mobile app: ??
• Microservice: Redis, Image-Server, Streaming-Service, Microsoft-Office365-API, (Obsidian Vault as API)
• Serverless function: ??
• Database: a single PostgreSQL-Database
• Blob or content store: Cloudflare + Akamai Blob
• File system: Obsidian Vault
• Shell script: ?? (A single shell script written in Bash, etc.)
• etc
A container is NOT a 'docker container' or something similar (even if it sometimes may be implemented using containerised technology). A container is
"essentially a context or boundary inside which some code is executed or some data is stored. The name “container” was chosen because I wanted a name that didn’t imply anything about the physical nature of how that container is executed. For example, some web servers run multiple threads inside a single process, whereas others run single threads across multiple processes. When I’m thinking about the static structure of a software system, I don’t want to concern myself with the details of whether a web application is using one operating system process or many when it’s servicing requests. It’s an important detail, but we can get into that later.

Containers are separately deployable
It’s also worth noting that each container should be a separately deployable thing. The
physical deployment is another important detail that we will look at later, but, in theory
anyway, every container can be deployed onto or run on a separate piece of infrastructure;
whether that infrastructure is physical, virtual or containerised. The implication here is
that communication between containers is likely to require an out-of-process or remote
procedure call across the process and/or network boundary.

To give an example, let’s imagine you’re building a website that is comprised of two different web applications (e.g. a desktop version and a mobile version, or an end-user version serving HTML and an API endpoint serving JSON). There are a number of scenarios to consider:
1. Each web application is packaged up into separately deployable units (e.g. two Java
WAR files, two ASP.NET web applications, etc). This is two containers, regardless of
whether both deployable units are actually deployed into the same physical web server
(a deployment optimisation).
2. Although you think about the two web applications as being logically separate, they
are actually inseparable because they are packaged as a single deployment unit (e.g. a
single Java WAR file or ASP.NET web application). This is a single container.
The same is true with relational database schemas. I would treat two separate schemas as
two separate containers, irrespective of whether they are deployed into the same database
server or not.
As a final note, put simply, a container refers to an execution context and it’s a really runtime construct. This means that libraries or modules (e.g. JAR files, DLL files, .NET assemblies, etc) should not be considered as containers unless they are runnable on their own, like a Java or Spring Boot application that is packaged into an executable JAR file, for example.

Level 3: Components
"think of a component as being a grouping of related functionality encapsulated behind a well-defined interface. With the C4 model, components are not separately deployable units. Instead, it’s the container that’s the deployable unit. In other words, all of the
components inside a container typically execute in the same process space.
Aspects such as how those components are packaged (e.g. one component vs many components per JAR file, DLL, shared library, etc) is an orthogonal concern and, from my
perspective, doesn’t affect how we think about components.

#### Offene Tasks in diesem Dokument
- [ ] Terminologie vereinheitlichen

## 🔶 Überblick und Grundbegriffe

## 🔶 References
Brown 2023: The C4 model for visualising software architecture, Simon Brown, Leanpub 2023, LINK


<br />
<br />
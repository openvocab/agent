# vf:Agent

Vocabulary to describe networks of people and groups.

## Vocabulary

![agentpic](https://github.com/valueflows/agent/tree/master/assets/agent.png)

Notes: 
* This vocabulary is very much in process, as is this documentation. 
* Many of the terms will in the future be drawn from an existing vocabulary.
* All examples open in [JSON-LD Playground](http://json-ld.org/playground)
and use context and example files from master branch of this repository.

### Agent Type

#### Notes

We are using a class hierarchy of Agent Types: Agent, Person, Organization, Group.  We will use existing vocabularies for the top levels.  We suggest that people add other types of agents as subclasses of this hierarchy if others are useful.

### Relationship Type

#### Notes

A Relationship Type is a generic defined relationship that can be had between 2 Agents (or subclasses of). Although it usually is, the relationship does not have to be agreed to from both sides, for example "follow".   A Relationship Type can be a direct relationship, like "steward" or "like", or more like a role.  Role type Relationship Types are often used for a person's role in an organization or group, for example "grower" or "harvester" for a food network.

The Relationship Type is implemented as a rdf:Property.  There are a number of useful properties in existing vocabularies that can be used.  Or people can create their own as needed.

#### Properties

These properties are grouped with the rdf:Property that names the relationship type.

* label (rdfs:label)
* inverse label (owl:inverseOf rdfs:label)
* (need to add the source, target, context types.....)

#### Examples

### Agent

#### Notes

An Agent is an entity that has agency in the economic realm.  This could be a person, organization, group, network, etc.  

#### Properties

* id
* type
* displayName
* url
* image
* (will be others)

#### Examples

##### Person

* [elf Pavlik](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Felf-pavlik.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Felf-pavlik.jsonld)

##### Group

* [hackers4peace](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fhackers4peace.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Fhackers4peace.jsonld)
* [Taabir](http://json-ld.org/playground/#startTab=tab-compacted&json-ld=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Ftaabir.jsonld&context=https%3A%2F%2Frawgit.com%2Fvalueflows%2Fagent%2Fmaster%2Fexamples%2Ftaabir.jsonld)

### Relationship

#### Notes

A Relationship in this vocabulary denotes a relationship between 2 Agents of any type.  The relationship can be in the context of an Agent that is a context type agent, which would not be a Person.  For example, Jane is a mentor of John in the context of the group Enspiral.

#### Properties

* subject (reference to an agent)
* relationship (reference to the relationship type)
* object (reference to an agent)
* context (reference to an agent, optional)

#### Examples

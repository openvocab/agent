module.exports = {
  id: 'Agent',
  prefixes: require('./prefixes'),
  description: 'An actor with agency.',
  context: 'foaf:Agent',
  properties: {
    id: {
      context: '@id',
      description: 'The identifier of the agent.',
      type: 'string',
      format: 'uri',
      required: true
    },
    type: {
      context: '@type',
      description: 'The type of agent.',
      not: [{
        type: 'array',
        items: {
          not: {
            $ref: 'AgentType'
          }
        }
      }, {
        $ref: 'AgentType'
      }],
      required: true
    },
    name: {
      context: 'schema:name',
      description: 'The primary name of the agent.',
      type: 'string'
    },
    image: {
      context: 'schema:image',
      description: 'An avatar of the agent.',
      type: 'string',
      format: 'uri'
    }
  }
}

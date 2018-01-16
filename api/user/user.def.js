module.exports = {
    definitions: {
        User: {
            properties: {
                id: {
                    type: 'string',
                    id: true,
                    required: true
                },
                name: {
                    type: 'string'
                },
                age: {
                    type: 'number'
                },
                createdAt: {
                    type: 'date'
                }
            }
        },
        'User List': {
            properties: {
                count: {
                    type: 'number'
                },
                items: {
                    type: 'object',
                    $ref: '#/definitions/User'
                }
            }
        }
    },
    paths: {
        '/': {
            get: {
                summary: 'List Users',
                description: 'Fetch all users',
                operationId: 'list',
                responses: {
                    200: {
                        description: 'List all users',
                        schema: {
                            $ref: '#/definitions/User List'
                        }
                    }
                }
            },
            post: {
                summary: 'Create User',
                description: 'This endpoint allows to create a user.',
                operationId: 'create',
                parameters: [
                    {
                        name: 'data',
                        in: 'body',
                        description: 'The user configuration',
                        required: true,
                        type: 'object',
                        format: 'JSON'
                    }
                ],
                responses: {
                    200: {
                        description: 'List of Users',
                        schema: {
                            $ref: '#/definitions/User List'
                        }
                    }
                }
            },
        },
        '/{id}': {
            get: {
                summary: 'Get User',
                description: 'Get user by id',
                operationId: 'getById',
                parameters: [{
                    name: 'id',
                    in: 'path',
                    description: 'The ID of the user',
                    required: true,
                    type: 'string',
                    format: 'JSON'
                }],
                responses: {
                    200: {
                        description: 'Returns a response with a user object',
                        schema: {
                            $ref: '#/definitions/User'
                        }
                    }
                }
            },
            put: {
                summary: 'Update User',
                operationId: 'update',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'The user id.',
                        required: true,
                        type: 'string',
                        format: 'JSON'
                    },
                    {
                        name: 'data',
                        in: 'body',
                        description: 'The user data.',
                        required: true,
                        type: 'string',
                        format: 'JSON'
                    }
                ],
                responses: {
                    200: {
                        schema: {
                            $ref: '#/definitions/User List'
                        }
                    }
                }
            },
            delete: {
                summary: 'Delete User',
                description: 'Delete user',
                operationId: 'remove',
                parameters: [{
                    name: 'id',
                    in: 'path',
                    description: 'The ID of the user',
                    required: true,
                    type: 'string',
                    format: 'JSON'
                }],
                responses: {}
            }
        }
    }
};
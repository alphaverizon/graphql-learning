const graphql = require('graphql');
const ForestFire = require('../models/forestfire');
const _=require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const ForestType = new GraphQLObjectType({
    name: 'Forest',
    fields: ( ) => ({
        X : { type: GraphQLInt}, 
        Y : { type: GraphQLInt}, 
        month : { type: GraphQLString }, 
        day : { type: GraphQLString }, 
        FFMC : { type: GraphQLFloat}, 
        DMC : { type: GraphQLFloat}, 
        DC : { type: GraphQLFloat}, 
        ISI : { type: GraphQLFloat}, 
        temp : { type: GraphQLFloat}, 
        RH : { type: GraphQLInt}, 
        wind : { type: GraphQLFloat}, 
        rain : { type: GraphQLFloat}, 
        area : { type: GraphQLFloat}
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        forest: {
            type: new GraphQLList(ForestType),
            resolve(parent, args){
                return ForestFire.find({});
            }
        },
        forestbymonth:{
            type: new GraphQLList(ForestType),
            args:{month :{ type: GraphQLString }},
            resolve(parent,args){
                return ForestFire.find({month:args.month});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

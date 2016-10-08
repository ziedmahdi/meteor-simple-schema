/* global SimpleSchema*/

SimpleSchema.placeholderFormat = 'Enter [schemaLabel]...';

var simpleSchemaSettings = Meteor.settings.public ? Meteor.settings.public.simpleSchema : null;

if (simpleSchemaSettings) {
    if (simpleSchemaSettings.debug) {
        SimpleSchema.debug = true;
    }
    
    if (simpleSchemaSettings.addPlaceholder) {
        SimpleSchema.addPlaceholder = true;
        SimpleSchema.placeholderFormat = simpleSchemaSettings.placeholderFormat || SimpleSchema.placeholderFormat;
    }
}

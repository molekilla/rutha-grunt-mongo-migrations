var MONGO_MIGRATE_PATH = '/node_modules/mongo-migrate';

module.exports = {

  'migrateCreate': {
    command: function(name) {
      return 'node ' + '<%= cwd %>' + MONGO_MIGRATE_PATH +
      ' -runmm' +
      ' -cfg <%= cwd %>/<%= (migrations || {}).config || "migrationOptions.json" %>' +
      ' -dbn mongo' +
      ' create ' + name;
    }
  },
  'migrateUp': {
    command: function(rev) {
      return 'node ' + '<%= cwd %>' + MONGO_MIGRATE_PATH +
      ' -runmm' +
      ' -cfg <%= (migrations || {}).config || "migrationOptions.json" %>' +
      ' -dbn mongo' +
      ' up ' + rev;
    }
  },
  'migrateDown': {
    command: function(rev) {
      return 'node ' + '<%= cwd %>' + MONGO_MIGRATE_PATH +
      ' -runmm' +
      ' -cfg <%= (migrations || {}).config || "migrationOptions.json" %>' +
      ' -dbn mongo' +
      ' down ' + rev;
    }
  }
};
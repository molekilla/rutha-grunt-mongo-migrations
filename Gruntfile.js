var Help =  {
  migrateCreate: 'Creates a migration task. Args: --name: migration name (optional)',
  migrateUp: 'Migrates up. Args: --revision: revision name (optional)',
  migrateDown: 'Migrates down. Args: --revision: revision name (optional)'
};

var tasks = function(grunt) {

  grunt.registerTask('migrate:create', Help.migrateCreate, function() {
      grunt.task.run('shell:migrateCreate:' + (grunt.option('name') || ''));
  });
  grunt.registerTask('migrate:up', Help.migrateUp, function() {
      grunt.task.run('shell:migrateUp:' + (grunt.option('revision') || ''));
  });
  grunt.registerTask('migrate:down', Help.migrateDown, function() {
      grunt.task.run('shell:migrateDown:' + (grunt.option('revision') || ''));
  });

};

function Loader(grunt) {
    return {
        help: Help,
        registerTasks: function() {
            return tasks(grunt);
        }
    };
}


module.exports = Loader;
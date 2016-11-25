module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);


    // Project configuration.
    grunt.initConfig(
        require('load-grunt-configs')(
            grunt,
            {
                config: {
                    src: "grunt/*.js"
                }
            }
        )
    );
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Default task(s).
    grunt.registerTask('build_bootstrap', ['copy:bootstrap']);
    grunt.registerTask('build_sass', ['clean:sass_before', 'sass']);

    grunt.registerTask('default', [ 'build_bootstrap', 'build_sass']);

};
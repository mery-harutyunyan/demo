/**
 * Created by dev on 11/8/2016.
 */

"use strict";

module.exports = {
    bootstrap: {
        files: [
            {
                expand: true,
                src: 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
                dest: 'assets/js/',
                rename: function(dest, src){
                    return dest + src.replace('node_modules/bootstrap-sass/assets/javascripts', '');
                }
            },
        ]
    },
};
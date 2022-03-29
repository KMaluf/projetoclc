import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary: '#9c27b0',
            },
            dark:{

                primary: '#9c27b0',
                anchor: '#ffc107'
            }
        }
    }
});

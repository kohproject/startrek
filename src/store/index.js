import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.store({
    state:{

       "Captains":[
            {name:'kirk', votes:0,gender:'male', ship:'enterprise',isMovie:true},
            {name:'pickard',  votes:0,gender:'male', ship:'enterprise2',isMovie:true},
            {name:'janeway',  votes:0,gender:'female', ship:'voyager',isMovie:false},
            {name:'sisko',  votes:0,gender:'male', ship:'deepspace9',isMovie:false}
        ],

       count:0
    },
    mutations:{
        setCurrentState(state,payload) =>{
            state.itemState = payload;
            state.allitemArr.push(payload);
        }
    },
    actions:{},
    modules:{},
    state:{},
    getters:{
        myfirstGetter: (state) =>{
            return "hello"
        }
    }

})
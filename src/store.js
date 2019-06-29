import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import contacts from './data/list.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: [],
        currentContact: '',
        newContact: {},
        contactToUpdate: {}
    },
    mutations: {
        CREATE_NEW_CONTACT(state, contact) {
            state.newContact = contact
        },
        CLEAR_ALL_CONTACTS(state) {
            // console.log('clearing all contacts')
            state.contacts = {}
        },
        ADD_NEW_CONTACT (state) {
            state.contacts.push(state.newContact)
        }
    },
    actions: {
        LOAD_CONTACT_DATA() {
            // console.log('loading contacts...')
            axios.get(process.env.VUE_APP_API_URL + '/contacts').then((res) => {
                // console.log(JSON.stringify(res.data))
                this.state.contacts = [];
                this.state.contacts = res.data.contacts
            })
        },
        SAVE_NEW_CONTACT({commit}) {
            axios.post(process.env.VUE_APP_API_URL + '/contact', this.state.newContact).then((res) => {
                // console.log('contact saved')
                this.state.newContact = res.data
                commit('ADD_NEW_CONTACT')
                
            })
        },
        UPDATE_CONTACT({dispatch}, contact) {
            const id = contact._id;
            console.log('updating from store ' + id);
            // commit('EDIT_CONTACT', contact);
            axios.put(process.env.VUE_APP_API_URL + '/contact/' + id, contact).then(() => {
                // console.log(res.data);
                dispatch('LOAD_CONTACT_DATA')
            })
        }
    }
})

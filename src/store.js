import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import contacts from './data/list.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: [],
        contactsCopy: [],
        currentContact: '',
        newContact: {}, // for adding a new contact
        contactToUpdate: {},
        viewContact: true,
        editContact: false,
        newContactModal: false,
        newContactSaved: false
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
                this.state.contactsCopy = [];
                this.state.contacts = res.data.contacts;
                this.state.contactsCopy = JSON.parse(JSON.stringify(this.state.contacts));
            })
        },
        SAVE_NEW_CONTACT({dispatch}) {
            axios.post(process.env.VUE_APP_API_URL + '/contact', this.state.newContact).then(() => {

                // this.state.newContact = res.data; // changing this to reload contact data from API
                // commit('ADD_NEW_CONTACT') // same here
                dispatch('LOAD_CONTACT_DATA');
                this.state.newContactSaved = true;
            })
        },
        UPDATE_CONTACT({dispatch}, contact) {
            const id = contact._id;
            console.log('updating from store ' + id);
            // commit('EDIT_CONTACT', contact);
            axios.put(process.env.VUE_APP_API_URL + '/contact/' + id, contact).then(() => {
                // console.log(res.data);
                dispatch('LOAD_CONTACT_DATA');
            })
        }
    }
})

/*
{
    "connections": [],
    "_id": "5bf5d961afee830b4f6fa07b",
    "firstName": "Egwene Edit",
    "lastName": "Al'Vere",
    "email": "egwene@gmail.com",
    "phone": "111-222-3333",
    "address1": "123 Two Rivers Lane",
    "address2": "",
    "city": "Two Rivers",
    "state": "Manetheren",
    "zip": "90210",
    "spouseName": "Gawyn",
    "children": "Perrin, 12",
    "birthday": "01/01/1980",
    "spouseBirthday": "01/01/1970",
    "howWeMet": "Here are some notes on how we met....",
    "notes": "Here are some notes on some other items...",
    "customerStatus": "Prospect",
    "purchaseHistory": "An in-depth purchase history of items she's bought along with dates and purchase prices...",
    "__v": 0
}
*/

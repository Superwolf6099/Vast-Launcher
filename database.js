// database.js - The Client Repository
let clients = {
    "van18": { 
        name: "Vanilla 1.8.8", 
        cat: "Vanilla", 
        desc: "Standard build.", 
        launches: [{label: "WASM", path: "./Vanilla/1.8 WASM.html"}] 
    },
    "astra18": { 
        name: "Astra 1.8", 
        cat: "Astra", 
        desc: "High performance.", 
        launches: [{label: "Astra 1.8", path: "./Astra/1.6.1 B5/astra 1.8.html"}] 
    }
    // Your merged Base64 strings will be appended to this object in LocalStorage
};

// Function to sync with local storage so merged files persist
function getUpdatedDatabase() {
    const saved = localStorage.getItem('eagler_merged_db');
    if (saved) {
        return JSON.parse(saved);
    }
    return clients;
}
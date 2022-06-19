const fs = require("fs");

class Database {
    constructor(filename) {
        this.filename = filename;
        this.readData();
    }

    readData() {
        try {
            const json = JSON.parse(fs.readFileSync(filename, "utf8"));
            this.data = json;
        } catch (e) {
            this.data = {};
        }
    }

    commit() {
        fs.writeFileSync(this.filename, JSON.stringify(this.data));
        return this;
    }

    get(key) {
        return this.data[key];
    }

    set(key, value, autoCommit = false) {
        this.data[key] = value;

        if (autoCommit) {
            this.commit();
        }

        return this;
    }
}

module.exports = Database;

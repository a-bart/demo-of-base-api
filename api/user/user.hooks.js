module.exports = User => {
    User.addHook('before', 'create', (hook) => {
        if (hook.data.datastore) {
            hook.data.datastore.createdAt = new Date().toISOString();
        } else {
            hook.data.createdAt = new Date().toISOString();
        }
    });
    User.addHook('before', 'update', (hook) => {
        if (hook.data.datastore) {
            hook.data.datastore.updatedAt = new Date().toISOString();
        } else {
            hook.data.updatedAt = new Date().toISOString();
        }
    });
    User.addHook('before', 'patch', (hook) => {
        if (hook.data.datastore) {
            hook.data.datastore.updatedAt = new Date().toISOString();
        } else {
            hook.data.updatedAt = new Date().toISOString();
        }
    });
};
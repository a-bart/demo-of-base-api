const hooks = (User: any) => {
    User.addHook('before', 'create', (hook: any) => {
        console.log('before create hook');
        if (hook.data.datastore) {
            hook.data.datastore.createdAt = new Date().toISOString();
        } else {
            hook.data.createdAt = new Date().toISOString();
        }
    });
    User.addHook('before', 'update', (hook: any) => {
        console.log('before update hook');
        if (hook.data.datastore) {
            hook.data.datastore.updatedAt = new Date().toISOString();
        } else {
            hook.data.updatedAt = new Date().toISOString();
        }
    });
    User.addHook('before', 'patch', (hook: any) => {
        console.log('before patch hook');
        if (hook.data.datastore) {
            hook.data.datastore.updatedAt = new Date().toISOString();
        } else {
            hook.data.updatedAt = new Date().toISOString();
        }
    });
};

export default hooks;

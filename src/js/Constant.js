let UserStore = {
    isAuthed: false,
    user: {
        name: '',
        nick: '',
        pid: '',
    },
    updateUser: (u) => {
        UserStore.user.name = u.name;
        UserStore.user.nick = u.nick;
        UserStore.user.pid = u.pid;
    }
};

export {UserStore}

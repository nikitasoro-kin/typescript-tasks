function task4() {
    type UserRole = "guest" | "admin" | "user";

    interface RegisteredUser {
        id: number,
        name: string,
        email: string,
        role: UserRole,
    }

    interface GuestUser {
        name: string,
        role: UserRole,
    }

    type CurrentUser = RegisteredUser | GuestUser | undefined;

    const users: CurrentUser[] = [
        undefined,

        {
            id: 1,
            name: 'user1',
            email: 'blah@mail.ru',
            role: "user",
        },

        {
            name: 'guest1',
            role: "guest",
        }
    ] 

    const getRoleDescription = (role: UserRole): string => {
        if (role === "guest") return "Гость";
        if (role === "admin") return "Администратор";
        return "Пользователь";
    }

    const getUserInfo = (user: CurrentUser): string => {
        if (user === undefined) return "Пользователь не найден";
        if ('id' in user) return `${user.name} - ${user.email}`;
        return `${user.name} не зарегистрирован`;
    }

    const isRegisteredUser = (user: CurrentUser): user is RegisteredUser => {
        return user !== undefined && 'id' in user;
    }

    for (let i = 0; i < users.length; i++) {
        console.log(getUserInfo(users[i]));
    }

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (isRegisteredUser(user)) {
            console.log(`${user.email}`);
        } else {
            console.log('Не зарегистрирован');
        }
    }

};

export default task4;
export interface Me {

    name: string;
    aboutMe: {
        portrait: string;
        about: string[];
    };
    skills: {
        skillsList: string[];
        socialLinks: {
            title: string;
            link: string;
        }[];
    };
    experience: {
        title: string;
        description: string[];
        picture: string;
    }[];
}

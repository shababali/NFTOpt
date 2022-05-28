type Social = {
    name: string;
    url: string;
};

export type Person = {
    name: string;
    social: Social[];
    image: string;
};

export const team: Person[] = [
    {
        name: "Your name here",
        social: [{name: "Your social ref here", url: "Your social url here"}],
        image: "LW-433-400x422.jpg",
    },
];

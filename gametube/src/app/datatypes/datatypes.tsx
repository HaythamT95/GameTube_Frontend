
export type Game = {
    _id: string;
    gameName: string;
    categories: Array<string>;
    img: string;
    description: string;
};

export type CategoryMap = {
    [category: string]: Game[];
};
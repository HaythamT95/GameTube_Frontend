
export type Game = {
    _id: string;
    gameName: string;
    categories: Array<string>;
    img: string
};

export type CategoryMap = {
    [category: string]: Game[];
};
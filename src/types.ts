export interface CinnamonData {
    word: string;
    synonym: string | null;
    antonym: string | null;
}

export interface CinnamonSquare extends CinnamonData {
    hidden: boolean;
}

export type SelectionResult = "synonyms" | "antonyms" | "error" | null;
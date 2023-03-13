type Course = {
    acronym: string;
    credits: string;
    name: string;
    id: string;
    academicTerm: string;
    period: number[];
};
type Degree = {
    id: string;
    name: string;
    acronym: string;
    academicTerm: string;
    courses: Course[];
};

export type { Degree, Course };

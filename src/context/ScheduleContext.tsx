import React, {
    useContext,
    createContext,
    useState,
    PropsWithChildren
} from "react";
import data from "@/data/degrees";
import colors from "@data/colors";
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

type CourseInSchedule = Course & {
    specialization: string;
    color: string;
};

type ScheduleContextType = {
    degrees: Degree[];
    courses: CourseInSchedule[];
    setDegrees: React.Dispatch<React.SetStateAction<Degree[]>>;
};

const ScheduleContext = createContext<ScheduleContextType | null>(null);

export function useSechudle() {
    return useContext(ScheduleContext) as ScheduleContextType;
}

type ScheduleProviderProps = {};

export function ScheduleProvider({
    children
}: PropsWithChildren<ScheduleProviderProps>) {
    const [degrees, setDegrees] = useState<Degree[]>(
        data.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
    );

    const [courses, setCourses] = useState<CourseInSchedule[]>(dummyCourses);

    return (
        <ScheduleContext.Provider value={{ degrees, setDegrees, courses }}>
            {children}
        </ScheduleContext.Provider>
    );
}

const dummyCourses = [
    {
        acronym: "CCEIC2",
        credits: "3.0",
        name: "Competências Comunicacionais em Engenharia Informática e de Computadores II",
        id: "846035542881858",
        academicTerm: "2º semestre 2022/2023",
        period: [3]
    },
    {
        acronym: "GTI",
        credits: "6.0",
        name: "Análise e Integração de Dados",
        id: "564560566181864",
        academicTerm: "1º semestre 2022/2023",
        period: [1]
    },
    {
        acronym: "CPD2",
        credits: "6.0",
        name: "Computação Paralela e Distribuída",
        id: "846035542881613",
        academicTerm: "2º semestre 2022/2023",
        period: [3]
    },
    {
        acronym: "CDadosi2",
        credits: "6.0",
        name: "Ciência de Dados",
        id: "564560566181924",
        academicTerm: "1º semestre 2022/2023",
        period: [2]
    },
    {
        acronym: "PADI",
        credits: "6.0",
        name: "Desenvolvimento de Aplicações Distribuídas",
        id: "564560566181946",
        academicTerm: "1º semestre 2022/2023",
        period: [1]
    },
    {
        acronym: "PF",
        credits: "6.0",
        name: "Processamento da Fala",
        id: "564560566181742",
        academicTerm: "2º semestre 2022/2023",
        period: [4]
    },
    {
        acronym: "CCEIC-I",
        credits: "3.0",
        name: "Competências Comunicacionais em Engenharia Informática e de Computadores I",
        id: "564560566181883",
        academicTerm: "1º semestre 2022/2023",
        period: [1]
    },
    {
        acronym: "SIRS",
        credits: "6.0",
        name: "Segurança Informática em Redes e Sistemas",
        id: "564560566181922",
        academicTerm: "1º semestre 2022/2023",
        period: [2]
    },
    {
        acronym: "CPS",
        credits: "6.0",
        name: "Criptografia e Protocolos de Segurança",
        id: "846035542881815",
        academicTerm: "2º semestre 2022/2023",
        period: [3, 4]
    },
    {
        acronym: "CMov2",
        credits: "6.0",
        name: "Computação Móvel e Ubíqua",
        id: "846035542881573",
        academicTerm: "2º semestre 2022/2023",
        period: [4],
        specialization: "Sistemas Distribuidos",
        color: "#efefef"
    }
];

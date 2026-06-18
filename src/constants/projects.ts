export type Project = {
    title: string;
    description: string;
    href: string;
    src: string;
}

export const PROJECTS : Array<Project> = [
    {title: 'Введение в React', description: 'Необходимо сделать страницу резюме о себе', href: '/projects/resume', src: '/images/BayanSap.png'},
    {title: 'JSX и функциональные компоненты', description: 'Необходимо сверстать макет, разбив страницу на компоненты', href: '/projects/whirl', src: '/images/Vector.png'}
]
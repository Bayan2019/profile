export type Project = {
    title: string;
    description: string;
    href: string;
    src: string;
}

export const PROJECTS : Array<Project> = [
    {title: 'Введение в React', description: 'Необходимо сделать страницу резюме о себе', href: '/projects/resume', src: '/images/BayanSap.png'},
    {title: 'JSX и функциональные компоненты', description: 'Необходимо сверстать макет, разбив страницу на компоненты', href: '/projects/whirl', src: '/images/Vector.png'},
    {title:'Customer Churn', description:'Customer churn in banking is when a customer closes their account and switches to another bank. Over their customer lifetime, customers generate fees on transactions, banking fees, credit cards, home loans, and personal loans. Churn is a problem, because the bank loses revenue, and it costs more to acquire a new customer than retaining an existing one.', href:'https://bayan2019.github.io/02_customer_churn_html/index.html', src:'https://raw.githubusercontent.com/Bayan2019/02_customer_churn_html/refs/heads/main/pictures/customer_churn.png'},
    {title:'fedex', description:'Managers at Fedex have to evaluate a lot of factors before taking a decision of delivery. The objective of this project is to optimize the process of planning delivery.', href:'https://bayan2019.github.io/03_fedex_html/index.html', src:'https://raw.githubusercontent.com/Bayan2019/03_fedex_html/refs/heads/main/figures/boxplot_numerical.png'},
]
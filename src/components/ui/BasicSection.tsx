import { ReactNode } from "react";

interface BasicSectionProps {
    id: string;
    number: string;
    title: string;
    children: ReactNode;
    layout?: "sidebar" | "stacked";
}

export default function BasicSection({
    id,
    number,
    title,
    children,
    layout = "sidebar"
}: BasicSectionProps) {
    return (
        <section
            id={id}
            className="section border-b border-hairline py-20"
        >
            <div className="page-container">

                <div
                    className={
                        layout === "sidebar"
                            ? "grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-10 md:gap-16"
                            : "flex flex-col gap-10"
                    }
                >
                    <div>
                        <span>{number}</span>
                        <h2>{title}</h2>
                    </div>

                    <div>
                        {children}
                    </div>

                </div>
            </div>
        </section>
    );
}

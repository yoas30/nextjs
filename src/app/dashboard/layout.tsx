import { ReactNode } from "react";

export default function DashboardLayout({
    children,
    analytics,
    social,
    users,
    login,
}:{
    children    :ReactNode;
    analytics   :ReactNode;
    social      :ReactNode;
    users       :ReactNode;
    login       :ReactNode;
}) {
    const isLogin = true;
    return (
    <div>
        <div>{children}</div>
        {isLogin ?  
            <div className="flex gap-2">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{social}</div>
                </div>
                <div className="flex flex-1">
                    {analytics}
                </div>
            </div> 
            : 
            <div>{login}</div>
        }
    </div>
    )
} 
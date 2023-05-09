import { FC, ReactNode } from "react"
import SideNavBar from "./sidenavbar";


interface Props {
    children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <SideNavBar />
            <main className="p-4 sm:ml-64 bg-gray-700">{children}</main>
        </>
    )
}

export default Layout;
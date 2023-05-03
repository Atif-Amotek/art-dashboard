import { FC, ReactNode } from "react"
import SideNavBar from "./sidenavbar";


interface Props {
    children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <SideNavBar />
            <main>{children}</main>
        </>
    )
}

export default Layout;
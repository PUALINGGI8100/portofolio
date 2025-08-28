import { Outlet } from "react-router"

export default function Layout(){
    return (
        <div className='p-1 sm:p-3 body-container'>
            <Outlet />
        </div>
    )
}
import { Outlet } from "react-router"

export default function Layout(){
    return (
        <div className='sm:p-3 body-container'>
            <Outlet />
        </div>
    )
}
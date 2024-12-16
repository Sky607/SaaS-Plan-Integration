const user=JSON.parse(localStorage.getItem('user'))
export default function Dashboard(){
    return <h1 className='text-xl bg-blue-500 p-4'>Welcome {user.role} Dashboard </h1>
}
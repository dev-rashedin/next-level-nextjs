import Sidebar from "@/components/Sidebar";


export default function DashboardLayout({
  children
}) {
  return (
    <section>
      <div className='flex border-2 min-h-screen -mt-8'>
        <div className='w-40 border border-green-600'>
         <Sidebar/>
        </div>
        <div className='w-full border border-yellow-600'>{children}</div>
      </div>
    </section>
  );
}

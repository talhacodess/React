import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
    <h1 className='bg-slate-700 text-yellow-400 p-5 text-6xl'>Props Practice</h1>
    <div className='flex'>
     
     <Card  courseName ="Web Development" courseDes = "Web development include html,css,js"/>
     <Card  courseName ="SEO" courseDes = "SEO Stand For Search Engine Optimization"/>
     <Card  courseName ="Wordpress" courseDes = "Wordpress is a CMS for creating top notch Websites"/>
     <Card  courseName ="Graphic Designer" courseDes = "Graphic designing Include Logo,Brochures"/>
     </div>
    </>
  )
}

export default App

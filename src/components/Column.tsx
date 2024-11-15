 import sedansIcon from '../assets/icon-sedans.svg'
 import suvsIcon from '../assets/icon-suvs.svg'
 import luxuryIcon from '../assets/icon-luxury.svg'
import Button from './Button'


 type  ColumnProps = {
    id : number,
    title : string,
    description : string
 }

function Column({id, title, description} : ColumnProps) {
  return (
    <article className={
        `${
            id === 1 ? 'bg-orange' :
            id === 2 ? 'bg-cyan' : 
            id === 3 ? 'bg-darkCyan' : 
            ''
        } flex flex-col gap-7 p-10 max-w-2xl mx-auto`
    }>
       <div> <img src={
            id === 1 ? sedansIcon :
            id === 2 ? suvsIcon : 
            id === 3 ? luxuryIcon : 
            ''
        } alt="" / ></div>
        <h1 className='text-4xl  tracking-[-5px] font-normal  uppercase font-Lexend_Deca text-white'>{title}</h1>
        <p className='text-lightGray font-medium text-sm mb-14 leading-6'>{description}</p>
        <Button title='Learn more' id={id}/ >
    </article>
  )
}

export default Column
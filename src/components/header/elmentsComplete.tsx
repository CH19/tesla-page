import ListElement from "./listElement"
interface Props{
    cositas: string[]
}
export default function ElementesComplete(props: Props) {
    const {cositas} = props;
    return(<>
        <ul className='flex text-sm [&>li>a]:inline-block [&>li>a]:px-1 [&>li>a]:py-3 '>
            {cositas.map(element => <ListElement text={element} />)}
        </ul>
    </>)
}
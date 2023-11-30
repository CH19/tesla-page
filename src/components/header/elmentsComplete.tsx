import ListElement from "./listElement"
interface Props{
    cositas: string[]
}
export default function ElementesComplete(props: Props) {
    const {cositas} = props;
    return(<>
        <ul id="landingHeader" className='flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-300 [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-1 [&>li>a]:py-3 '>
            {cositas.map(element => <ListElement text={element} />)}
        </ul>
    </>)
}
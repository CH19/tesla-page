interface Props{
    text: string;
    link?: string;
}
export default function ListElement(porps: Props) {
    const {text, link} = porps;

    return (<>
        <li ><a className=" hover:bg-gray-200 rounded-sm text-sm py-4 px-1" href={link ? link : '#'}>{text}</a></li>
    
    </>)
}
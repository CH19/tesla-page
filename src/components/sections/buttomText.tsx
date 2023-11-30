interface Props {
    content: string,
    mode?: boolean;
}
export default function ButtonText(props: Props) {
    const {content, mode} = props;
    return (<>
    <a href="" className={`odd:col-start-2 even:col-sapn-3 text-xs px-4 py-2 opacity-90 ${mode ? 'bg-white text-dark hover:bg-slate-400' : 'bg-dark text-white hover:bg-dark'} font-bold rounded-xl transition-colors duration-300 `}><span>{content}</span></a>
    </>)
}
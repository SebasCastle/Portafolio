interface Props{
    title: string;
    description: string;
}

export const CustomHeader = ({title, description}: Props ) =>{
    return(
        <div className="content-center">
            <h1 className="text-4xl text-shadow-amber-300 py-2 font-bold">{title}</h1>
            {description && <p className=" pb-4">{description}</p>}
        </div>
    )
}
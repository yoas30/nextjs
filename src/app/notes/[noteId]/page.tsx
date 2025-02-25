import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: { noteId: string };
    searchParams: Record<string, string | string[] | undefined>;
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Note Detail ${params.noteId}`,
    };
};

export default function Note({ params, searchParams} : Props) 
    {
    console.log (searchParams);

    if(parseInt(params.noteId)>100)
    { 
        notFound() 
    }
    return (
        <div>
            <h3>Note Detail {params.noteId}</h3>
            {/* <p>Search Params: {JSON.stringify(searchParams)}</p> */}
        </div>
    );
}

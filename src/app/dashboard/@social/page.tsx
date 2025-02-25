import Card from "@/components/Card";
import Link from "next/link";

export default function Social (){
    return (
    <Card>
        <div className="flex flex-col gap-3">
            <h2>Social slot</h2>
            <Link href={'/dashboard/instagram'}>Go to Instagram</Link>
        </div>
    </Card>)
}
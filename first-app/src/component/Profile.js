import Avatar from "./Avator";
import Card from "./Card";

export default function Profile(){

    return (
        <>
        <Card>
            <Avatar
            props={{
                img:'https://i.imgur.com/7vQD0fPs.jpg',
                name:'Lin Lanying',
                imageId:'1bX5QH6',
                size:100
            }}

           
            />
            </Card>
        </>
    );
}
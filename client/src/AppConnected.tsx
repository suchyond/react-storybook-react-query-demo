import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
    useQuery,
} from "@tanstack/react-query";
import { Item } from "../../shared/types/item";
import { ListItem } from "./components/ListItem";



export const AppConnected: React.FC = () => {
    const { isPending, data } = useQuery({
        queryKey: ["items"],
        queryFn: async (): Promise<Item[]> => {
            // TODO: URL in production would be different, at least put URLs
            // to single place
            const response = await fetch('http://localhost:3000/items');
            return await response.json();
        }
    });

    return (<>
        <Header handleAddItem={() => console.warn("unimplemented")}>To Do app</Header>
        <List>
            {isPending ? (
                <div>Loading...</div>
            ) : (
                data?.map((item) => (
                    <ListItem
                        key={item.id}
                        label={item.title}
                        handleEdit={() => { /* FIXME */}}
                        handleRemoval={() => { /* FIXME */}}
                    />
                ))
            )}
        </List>
        <Footer />
        
    </>);
};

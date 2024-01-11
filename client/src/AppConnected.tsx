import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { ItemResponse } from "../../shared/types/item";
import { QueryKeys } from "./api/QueryKeys";
import { baseUrl } from "./api/url";
import { useCreateMutation } from "./api/listItemMutations";
import { ListItemConnected } from "./components/ListItemConnected";
import { useCallback } from "react";



export const AppConnected: React.FC = () => {
    const queryClient = useQueryClient();
    const { isPending, data } = useQuery({
        queryKey: [QueryKeys.LIST_ITEMS],
        queryFn: async (): Promise<ItemResponse[]> => {
            const response = await fetch(baseUrl + "/items");
            return await response.json();
        }
    });

    const createMutation = useCreateMutation(baseUrl + "/items", () => {
        queryClient.invalidateQueries({queryKey: [QueryKeys.LIST_ITEMS]});
    });
    const submitTodo = useCallback((title: string) => {
        createMutation.mutate({title, done: false});
    }, [createMutation.mutate]);

    return (<>
        <Header handleAddItem={submitTodo}>To Do app</Header>
        <List>
            {isPending ? (
                <div>Loading...</div>
            ) : (
                data?.map((item) => (
                    <ListItemConnected
                        key={item.id}
                        itemId={item.id}
                        label={item.title}
                    />
                ))
            )}
        </List>
        <Footer />
        
    </>);
};

import { useMutation } from "@tanstack/react-query";
import { ItemRequest } from "../../../shared/types/item";

const getUseListItemMutation= <T extends object | void>(method: string) => (
    url: string, onSuccess: () => void,
) => useMutation({
        mutationFn: (item: T) => {
            return fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: item ? JSON.stringify(item) : undefined,
            });
        },
        onSuccess, 
});

export const useCreateMutation = getUseListItemMutation<ItemRequest>("POST");
export const useModifyMutation = getUseListItemMutation<ItemRequest>("PUT");
export const useDeleteMutation = getUseListItemMutation<void>("DELETE");

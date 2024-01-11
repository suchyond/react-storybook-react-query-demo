import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "../Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppConnected } from "../../AppConnected";
import { QueryKeys } from "../../api/QueryKeys";


const queryClient = new QueryClient();

const mockTodos = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
    },
    {
        id: 2,
        title: "Nullam Adipiscing Ridiculus Fusce",
    },
    {
        id: 3,
        title: "Checked Mattis Tristique Parturient",
        done: true,
        createdAt: 1666874866086,
    },
];

queryClient.setQueryData([QueryKeys.LIST_ITEMS], () => mockTodos);

const LayoutDecorator = (Layout: React.FunctionComponent) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout/>
        </QueryClientProvider>
    );
};

const meta = {
    title: "Layout",
    component: Layout,
    decorators: [LayoutDecorator],
} as Meta<typeof Layout>;
export default meta;

type Story = StoryObj<typeof Layout>;

export const WithItems: Story = {
    args: {
        children: [<AppConnected/>],
    },
};


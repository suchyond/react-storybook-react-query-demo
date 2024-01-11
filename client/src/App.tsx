import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

import { AppConnected } from "./AppConnected";

const queryClient = new QueryClient();

export const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Container>
                <QueryClientProvider client={queryClient}>
                    <Layout>
                        <AppConnected/>
                    </Layout>
                </QueryClientProvider>
            </Container>
        </ThemeProvider>
    );
};

/**
 * Hook to process injectedClassNames props, that is used for Storybook
 */
export const getUseInjectedClassNames = (classNameOrNames?: string | string[]) => {
    let className: string; 
    if (Array.isArray(classNameOrNames)) {
        classNameOrNames.join(" ")
    } else {
        className = classNameOrNames || "";
    }

    return (injectClassNames?: string[]) => {
        if (injectClassNames) {
            if (className) {
                className += " " + injectClassNames.join(" ");
            } else {
                className = injectClassNames.join(" ");
            }
        }
        return className;
    };
};

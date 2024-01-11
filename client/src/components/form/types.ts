export type FormProps = {
    handleSubmit: (data: string) => void;
    // I know we should not change props names if not necessary, but in this case
    // I would really strongly suggest changing handleCancel to hideEditForm.
    // As it is used for hiding Edit/Add Form in general
    handleCancel: () => void;
    initialValue: string;
};

export type InputProps = Pick<FormProps, "initialValue"> & {
    handleInputChange: (value: string) => void;
};

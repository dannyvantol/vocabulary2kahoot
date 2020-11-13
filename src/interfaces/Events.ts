export interface OnInput<T>
{
    (event: React.FormEvent<T>): void;
}

export interface OnKeyPress<T>
{
    (event: React.KeyboardEvent<T>): void;
}